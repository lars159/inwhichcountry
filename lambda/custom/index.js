'use strict';//1    
const Alexa = require("alexa-sdk");
const appId = '';
const questionService = require("./gameService");


exports.handler = function(event, context, callback) {
    console.log("--Start ");
    console.log(event);
    console.log(context);
    const alexa = Alexa.handler(event, context);
    alexa.appId = appId; 
    alexa.dynamoDBTableName = 'inwhichcountry';
    alexa.registerHandlers(newSessionHandlers, guessModeHandlers, startGameHandlers);
    alexa.execute();
};

const states = {
    GUESSMODE: '_GUESSMODE', // User is trying to guess the number.
    STARTMODE: '_STARTMODE'  // Prompt the user to start or restart the game.
};

const newSessionHandlers = {
    'NewSession': function() {
        if(Object.keys(this.attributes).length === 0) {
            this.attributes['endedSessionCount'] = 0;
            this.attributes['gamesPlayed'] = 0;
            this.attributes['win'] = 0;
        }
        this.handler.state = states.STARTMODE;
        this.response.speak('Welcome to the game "in which country", you will be getting a question in which country a city or a monument is placed. '
            + ' would you like to play?')
            .listen('Say yes to start the game or no to quit.');
        this.emit(':responseReady');
    },
    "AMAZON.StopIntent": function() {
      this.response.speak("Goodbye!");
      this.emit(':responseReady');
    },
    "AMAZON.CancelIntent": function() {
        this.response.speak("Goodbye!");
        this.emit(':responseReady');
    }, 
    'SessionEndedRequest': function () {
        console.log('session ended!');
        this.attributes['endedSessionCount'] += 1;
        this.response.speak("Goodbye!");
        this.emit(':responseReady');
    }
};

const startGameHandlers = Alexa.CreateStateHandler(states.STARTMODE, {
    'NewSession': function () {
        this.emit('NewSession'); // Uses the handler in newSessionHandlers
    },
    'AMAZON.HelpIntent': function() {
        const message = 'Welcome to the game in which country you will be getting a question about where a city or a monument is placed. Do you want to start the game?';
        this.response.speak(message).listen(message);
        this.emit(':responseReady');
    },
    'AMAZON.YesIntent': function() { 
        this.handler.state = states.GUESSMODE; 
        const qa = questionService.nextQuestion(this.attributes['win']);
        this.attributes['guessCountry'] = qa.answer;
        this.attributes['guessCountry_question'] = qa.question;
        this.response.speak( qa.question ).listen("Say the name of the country?");
        this.emit(':responseReady');
    },
   
    "AMAZON.StopIntent": function() {
      console.log("STOPINTENT");
      this.response.speak("Goodbye!");
      this.emit(':responseReady');
    },
    "AMAZON.CancelIntent": function() {
      console.log("CANCELINTENT");
      this.response.speak("Goodbye!");
      this.emit(':responseReady');
    },
    "CustomNoIntent": function() {
        console.log("CANCELINTENT");
        this.response.speak("Ok, see you next time!");
        this.emit(':responseReady');
      },
    'SessionEndedRequest': function () {
        console.log("SESSIONENDEDREQUEST");
        //this.attributes['endedSessionCount'] += 1;
        this.response.speak("Goodbye!");
        this.emit(':responseReady');
    },
    'Unhandled': function() {
        console.log("UNHANDLED");
        const message = 'Say yes to continue, or no to end the game.';
        this.response.speak(message).listen(message);
        this.emit(':responseReady');
    }
});

const guessModeHandlers = Alexa.CreateStateHandler(states.GUESSMODE, {
    'NewSession': function () {
        this.handler.state = '';
        this.emitWithState('NewSession'); // Equivalent to the Start Mode NewSession handler
    },
    'CountryGuessIntent': function() {
        console.log(this.event.request.intent.slots +" " +this.attributes["guessCountry"]);
        const guessCountry = this.event.request.intent.slots.country.value;
        const failed = this.attributes["failed"];
        const targetCountry = this.attributes["guessCountry"];
        console.log('user guessed: ' + guessCountry);


        if(guessCountry == "United States of America"){
            guessCountry ="USA";
        }
        if(guessCountry.toUpperCase() === targetCountry.toUpperCase()){
            const qa = questionService.nextQuestion(this.attributes['win']);
            this.attributes['guessCountry'] = qa.answer;
            this.attributes['guessCountry_question'] = qa.question;
            this.attributes['failed'] = false;
            this.attributes['win'] += 1;

            
            if(this.attributes['win'] == 5) {
                this.response.cardRenderer("Silver medal", "Five correct answers gives you a silver medal", {
                    smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/cronit/silverSmall.png',
                    largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/cronit/silverBig.png'
                }); 
            }
 
            if(this.attributes['win'] == 10) {
                this.response.cardRenderer("Gold medal", "Ten correct answers gives you a gold medal", {
                    smallImageUrl: 'https://s3-eu-west-1.amazonaws.com/cronit/goldSmall.png',
                    largeImageUrl: 'https://s3-eu-west-1.amazonaws.com/cronit/goldBig.png'
                }); 
            }

            this.response.speak("Your answer is correct, " 
            + qa.question).listen("Say the name of the country?") ;
            this.emit(':responseReady');
        } else if ( failed == true) {
            const qa = questionService.nextQuestion(this.attributes['win']);
            this.attributes['guessCountry'] = qa.answer;
            this.attributes['guessCountry_question'] = qa.question;
            this.attributes['failed'] = false;
            this.response.speak("Your answer is wrong the correct answer is " +targetCountry 
            +". Next question, " + qa.question).listen("Say the name of the country?");
            this.emit(':responseReady'); 
        } else {  
            this.attributes['failed'] = true;
            this.response.speak("Your answer is wrong, try one more time. " 
            + this.attributes['guessCountry_question']).listen("Say the name of the country?");
            this.emit(':responseReady'); 
         
        }
    },
    'AMAZON.HelpIntent': function() {
        this.response.speak('Welcome to the game, "in which country" you will be getting a question about where a city or a monument is placed.')
            .listen('Try saying a country.');
        this.emit(':responseReady');
    },
    "AMAZON.StopIntent": function() {
        console.log("STOPINTENT");
      this.response.speak("Goodbye!");
      this.emit(':responseReady');
    },
    "AMAZON.CancelIntent": function() {
        console.log("CANCELINTENT");
        this.response.speak("Goodbye!");
        this.emit(':responseReady');
    },
    "CustomNoIntent": function() {
        console.log("CANCELINTENT");
        this.response.speak("Ok, see you next time!");
        this.emit(':responseReady');
      },
    'SessionEndedRequest': function () {
        console.log("SESSIONENDEDREQUEST");
        this.attributes['endedSessionCount'] += 1;
        this.response.speak("Goodbye!");
        this.emit(':responseReady');
    },
    'Unhandled': function() {
        console.log("UNHANDLED");
        this.response.speak('Sorry, I didn\'t get that. Try saying a country.')
        .listen('Try saying a country.');
        this.emit(':responseReady');
    }
});
 