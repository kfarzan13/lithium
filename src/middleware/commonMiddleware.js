const jwt = require("jsonwebtoken");

const tokenValidation = function(req , res , next){
    try {
        
    let token = req.headers["x-auth-token"];

    if (!token) return res.status(400).send({ status: false, msg: "token must be present" });

    jwt.verify(token, "my-secret-key", function (err , decodedToken) {
        if (err) return res.status(401).send({ status: false, msg: "token is invalid" });
        console.log(decodedToken);
        req.loggedInUser = decodedToken.userId;
        next();
    });

    } catch (error) {
        res.status(500).send(error.message)
    }
}

const authorise = function(req , res , next){
    try {
        
        let userId = req.params.userId;
    if(userId !== req.loggedInUser){
        return res.status(403).send({status: false, msg: "Not Authorized !!!"});
    } 
    next();

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports.tokenValidation = tokenValidation;
module.exports.authorise = authorise;

