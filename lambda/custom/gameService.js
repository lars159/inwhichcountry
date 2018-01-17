
module.exports = {
    nextQuestion:function(text) {
        const qaList = 
        
        [
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Paris",
              "answer": "France",
              "level": 1
            },
            {
              "category": "Monument",
              "form": "In which country lies",
              "subject": "the Eiffel Tower",
              "answer": "France",
              "level": 1
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "London",
              "answer": "United Kingdom",
              "level": 1
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Wellington",
              "answer": "New Zealand",
              "level": 2
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Amsterdam",
              "answer": "Netherlands",
              "level": 1
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Oslo",
              "answer": "Norway",
              "level": 2
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Berlin",
              "answer": "Germany",
              "level": 1
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Lisbon",
              "answer": "Portugal",
              "level": 1
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "San francisco",
              "answer": "USA",
              "level": 1
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Vancouver",
              "answer": "Canada",
              "level": 2
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "New york",
              "answer": "USA",
              "level": 1
            },
            
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Melbourne",
              "answer": "australia",
              "level": 1
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Bangalore",
              "answer": "India",
              "level": 3
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Tokyo",
              "answer": "Japan",
              "level": 1
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Santiago",
              "answer": "Chile",
              "level": 1
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Johannesburg",
              "answer": "South Africa",
              "level": 1
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Madrid",
              "answer": "Spain",
              "level": 1
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Bucharest",
              "answer": "Romania",
              "level": 1
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Kyoto",
              "answer": "Japan",
              "level": 1
            },
            {
              "category": "Monument",
              "form": "In which country lies",
              "subject": "Statue of Liberty",
              "answer": "USA",
              "level": 2
            },
            {
              "category": "Monument",
              "form": "In which country lies",
              "subject": "Taj Mahal",
              "answer": "India",
              "level": 2
            },
            {
              "category": "Monument",
              "form": "In which country lies",
              "subject": "Cathedral of Santiago de Compostela",
              "answer": "Spain",
              "level": 3
            },
            {
              "category": "Monument",
              "form": "In which country lies",
              "subject": "Cristo Redentor",
              "answer": "Brazil",
              "level": 2
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Rio de Janeiro",
              "answer": "Brazil",
              "level": 1
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Istanbul",
              "answer": "Turkey",
              "level": 1
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Florence",
              "answer": "Italy",
              "level": 2
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Saint Petersburg",
              "answer": "Russia",
              "level": 1
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Havana",
              "answer": "Cuba",
              "level": 3
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Salzburg",
              "answer": "Austria",
              "level": 2
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Budapest",
              "answer": "Hungary",
              "level": 2
            },
            {
              "category": "City",
              "form": "In which country lies the city",
              "subject": "Lucerne",
              "answer": "Switzerland",
              "level": 2
            }
          ]

        var r = qaList[qaList.length * Math.random() << 0];

        return {question :"In which country is the "+ r.category +" " + r.subject +" placed?", answer : r.answer};
    } 
}