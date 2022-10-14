const usingTrim = function(){
    let a = "        'Farzan Khan'        "
console.log(`Before using trim() :${a}`)
b = a.trim()
return `After using trim() :${b}`
}

const callToUpperCase = function() {
    let a = "farzan khan"
console.log(`Before using callToUpperCase() : ${a}`)
b = a.toUpperCase()
return `After using callToUpperCase() : ${b}`
}

const callToLowerCase = function() {
    let a = "FARZAN KHAN"
console.log(`Before using callToLowerCase() : ${a}`)
b = a.toLowerCase()
return `After using callToLowerCase() : ${b}`
}

module.exports.usingTrim = usingTrim
module.exports.callToUpperCase = callToUpperCase
module.exports.callToLowerCase = callToLowerCase

