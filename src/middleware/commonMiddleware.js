const jwt = require("jsonwebtoken");

const tokenValidation = function(req , res , next){
    let token = req.headers["x-auth-token"];

if (!token) return res.send({ status: false, msg: "token must be present" });

    jwt.verify(token, "my-secret-key", function (err , decodedToken) {
        if (err) return res.send({ status: false, msg: "token is invalid" });
        console.log(decodedToken);
        req.loggedInUser = decodedToken.userId;
        next();
    });
}

const authorise = function(req , res , next){
    let userId = req.params.userId;
    if(userId !== req.loggedInUser){
        return res.send({status: false, msg: "Not Authorized !!!"});
    } 
    next();
}

module.exports.tokenValidation = tokenValidation;
module.exports.authorise = authorise;