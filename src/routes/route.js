const express = require('express');
const router = express.Router();


let players = [ 
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [ "swimming" ]
    },

    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [ "soccer" ],
    },

    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [ "soccer" ],
    }
]


router.post('/players', function (req, res) {

//LOGIC WILL COME HERE

let name = req.body.name
let dob = req.body.dob
let gender = req.body.gender
let city = req.body.city
let sports = new Array(req.body.sports)

for (let i = 0 ; i < players.length ; i++) {
if (name == players[i].name) {
    return res.send("Player name already exist")
}
}
players.push({name , dob , gender , city , sports})
res.send(  { data: players , status: true }  )
})

module.exports = router;