var index = require("./index")
const questionService = require("./gameService");

console.log(questionService.nextQuestion());


const event = 	{
    session: {
        sessionId: 'SessionId.435d6f54-1ef9-4525-982c-6b91989aa20c',
        application: {
            applicationId: 'amzn1.ask.skill.c852936c-a624-4c73-86ab-0c55d7d7effc'
        },
        attributes: {
            gamesPlayed: 0,
            STATE: '_GUESSMODE',
            endedSessionCount: 0
        },
        user: {
            userId: 'amzn1.ask.account.AEYCLPRP4NOHSAN7YEWUEDYAKMD4AIW67L7TQR2PY6HH4CTDI3W3ALLVTME3PGELVOBRXV5ACLCF2UVOK5OQKWSB2D4NERP2CVYOCJ66S4HBVT47HRGDARV7PD7ZPDGQKO2NGXLDFHD6QUZFINBJOU32BRWHJFC3M3M5FWPTC26UINWVD25CBXRDGB5VVMVL6YEHJRRTCGLLTGQ',
            accessToken: null
        },
        new: false
    },
    request: {
        intent: {
            name: 'stateIntent',
            slots: [Object]
        },
        requestId: 'EdwRequestId.14b0c39d-e93f-4157-b367-ecb68f806409',
        type: 'IntentRequest',
        locale: 'en-US',
        timestamp: '2018-01-07T12:28:30Z'
    },
    context: {
        AudioPlayer: {
            playerActivity: 'IDLE'
        },
        System: {
            application: [Object],
            user: [Object],
            device: [Object]
        }
    },
    version: '1.0'
}

const context = {};


index.handler(event, context);