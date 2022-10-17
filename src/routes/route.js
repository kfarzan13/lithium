const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})






// Problem No - 1

router.get('/movies' , function(req , res) {
    let movies = ["Rang de Basanti" , "The Shining" , "Lord of the Rings" , "Batman begins"]
    console.log("Result :" , movies)
    res.send(movies)
})

// Problem No - 2

// router.get('/movies/:indexNumber' , function(req , res) {
//     let movies = ["Rang de Basanti" , "The Shining" , "Lord of the Rings" , "Batman begins"]
//     const index = req.params.indexNumber
//     console.log(`Movie at index ${index} is :` , movies[index])
//     res.send(movies[index])
// })

// Problem No - 3

router.get('/movies/:indexNumber' , function(req , res) {
    function check(){
    let movies = ["Rang de Basanti" , "The Shining" , "Lord of the Rings" , "Batman begins"]
    const index = req.params.indexNumber
    if (index < movies.length) {
        return movies[index]
    } else { 
        return `This index is not valid, Pls enter a valid index number.`
    }
    }
    console.log("Result :", check())
    res.send(check())
})

// Problem No - 4

router.get('/films' , function(req , res) {
    let films = [ {
        "id": 1,
        "name": "The Shining"
        }, { "id": 2,
        "name": "Conjuring-2"
        }, {
        "id": 3,
        "name": "Rang de Basanti"
        }, {
        "id": 4,
        "name": "Finding Nemo"
        }] 
    console.log("Result :" , films)
    res.send(films)
})

// Problem No - 5

router.get('/films/:filmId' , function(req , res) {
    function check(){

        let films = [ 
            {"id": 1,
            "name": "The Shining"
            }, { "id": 2,
            "name": "Conjuring-2"
            }, {
            "id": 3,
            "name": "Rang de Basanti"
            }, {
            "id": 4,
            "name": "Finding Nemo"
            } ] 


    const id = req.params.filmId
        for(let i=0 ; i < films.length ; i++){
            let film = films[i]
            if(film.id == id){
                return film
            } 
        }
        return "No film available with this Id."
    }
    console.log("Result :", check())
    res.send(check())
})










// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

module.exports = router;