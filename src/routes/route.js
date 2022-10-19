const express = require('express');
const router = express.Router();

// Problem - 1

router.get("/sol1", function (req, res) {
    let arr= [1, 2, 3, 5, 6, 7]
    let missingNumber
    
    ///LOGIC WILL GO HERE

    let n = arr.length + 1
    let actualSumOf_n_Numbers = (n * (n+1))/2 // (7 * 8)/2 = 28
    let sumOfArr = arr.reduce( (sum , i) => sum + i ) // 24
    
    missingNumber = actualSumOf_n_Numbers - sumOfArr  // 28 - 24 = 4

    res.send( { data: missingNumber } );
});


// Problem - 2

router.get("/sol2", function (req, res) {
    let arr= [33, 34, 35, 37, 38]
    let missingNumber

    ///LOGIC WILL GO HERE

    let n = arr.length + 1
    let firstElement = arr[0]
    let lastElement = arr[arr.length - 1]

    let actualSumOf_n_Numbers = (n * (firstElement + lastElement))/2 // (6 * 71)/2 = 213
    let sumOfArr = arr.reduce( (sum , i) => sum + i ) // 177

    missingNumber = actualSumOf_n_Numbers - sumOfArr // 213 -177 = 36

    res.send( { data: missingNumber } );
    });


module.exports = router;