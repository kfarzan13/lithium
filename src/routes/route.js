const express = require('express');
const router = express.Router();

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