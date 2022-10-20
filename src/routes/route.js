const express = require('express');
const router = express.Router();

// // take marks in req.query in a variable named "marks" and send "pass" if marks>40 else send "fail"
// router.get( "/get-query-2", function (req, res){
//     let marks= req.query.marks
//     let result = marks >40 ? "pass" : "fail"
//     //ternary operator
//     res.send( {data: result , status: true})
// })

// //query params ( as well as path params ) can be sent in post request as well
// router.post( "/post-query-1", function (req, res){
//     let data= req.query
//     console.log( data)
//     res.send( {data: data , status: true})
// })

// //filter out all the numbers that are greater than "input" ( input is received from query params)
// let myArr = [23, 45, 67, 281394, 32424, 423, 24, 42323, 4, 234, 12, 34]

// router.post( "/post-query-2", function (req, res){
//     let input= req.query.input

//     // let finArr= myArr.filter ( ele => ele>input )
//     let finalArr= []
//     for( i=0 ; i<myArr.length ; i++){
//         if ( myArr[i] > input )     finalArr.push( myArr[i])
//     }
//     res.send( {data: finalArr , status: true})
// })


let persons= [
{
    name: "PK",
    age: 10,
    votingStatus: false
},
{
    name: "SK",
    age: 20,
    votingStatus: false
},
{
    name: "AA",
    age: 70,
    votingStatus: false
},
{
    name: "SC",
    age: 5,
    votingStatus: false
},
{
    name: "HO",
    age: 40,
    votingStatus: false
}
]

router.post('/person' , function(req , res) {

    let age = Number(req.query.votingAge)

    // Method - 1

    // for( i=0 ; i < persons.length ; i++) {
    //     if ( persons[i].age >= age ) {
    //         persons[i].votingStatus = true
    //     }
    // }

    // persons.forEach(function(person){
    //     if (person.age >= age) {
    //         person.votingStatus = true;
    //     }
    // })

    // Method - 2

    let eligiblePersons = []

    persons.forEach(function(person){
            if (person.age > age) {
                person.votingStatus = true
                eligiblePersons.push(person)
            }
        })

    console.log("Result : " , eligiblePersons)

    res.send({ data : eligiblePersons , ageLimit : age })

})


module.exports = router;