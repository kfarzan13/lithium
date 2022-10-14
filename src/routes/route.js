const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const logger = require('../logger/logger')
const helper = require('../util/helper')
const formatter = require('../validator/formatter')
//importing external package
const underscore = require('underscore');
const { usingTrim } = require('../validator/formatter');
const lodash = require('lodash');

router.get('/test-me', function (req, res) {
    // //Calling the components of a different custom module
    // console.log("Calling my function ",xyz.myFunction())
    // console.log("The value of the constant is ",xyz.myUrl)
    // //Trying to use an external package called underscore
    // let myArray = ['Akash', 'Pritesh', 'Sabiha']
    // let result = underscore.first(myArray)
    // console.log("The result of underscores examples api is : ", result)

    console.log(`
    Assignment Module - 1
    `)

    console.log(logger.welcome())

    console.log(`
    Assignment Module - 2
    `)

    console.log("Today's date is :",helper.printDate)
    console.log("Current Month is :",helper.printMonth)
    console.log("Batch info :",helper.getBatchInfo())

    console.log(`
    Assignment Module - 3
    `)

    console.log(formatter.usingTrim())
    console.log(formatter.callToUpperCase())
    console.log(formatter.callToLowerCase())

    console.log(`
    Assignment Module - 4
    `)

    let monthArray = ['January','February','March','April','May','June','July','August','September','October','November','December']
    let newMonthArray = lodash.chunk(monthArray, 4)
    console.log("Result : ",newMonthArray)

    let oddNumberArray = [1,3,5,7,9,11,13,15,17,19]
    let newOddNumberArray = lodash.tail(oddNumberArray)
    console.log("Result : ",newOddNumberArray)

    let dupNumberArray = [1,2,3]
    let dupNumberArray1 = [4,5,1]
    let dupNumberArray2 = [6,2,7]
    let dupNumberArray3 = [8,7,6]
    let dupNumberArray4 = [1,2,9]
    let newDupNumberArray = lodash.union(dupNumberArray,dupNumberArray1,dupNumberArray2,dupNumberArray3,dupNumberArray4)
    console.log("Result : ",newDupNumberArray)

    let keyValuePairArray = [["HorrorMovie","Conjuring-2"],["LoveStoryMovie","Titanic"],["ThrillerMovie","War"],["FantasyMovie","Harry Potter"]]
    let keyValuePairObject = lodash.fromPairs(keyValuePairArray)
    console.log("Result : ",keyValuePairObject)

    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    // res.send('My second api!')
    // res.send('My first ever api!')
});

module.exports = router;

