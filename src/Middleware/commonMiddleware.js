const jwt = require("jsonwebtoken")

const tokenValidation = function(req , res , next){
    let token = req.headers["x-auth-token"];

  if (!token) return res.send({ status: false, msg: "token must be present" });

//   let decodedToken = jwt.verify(token, "my-secret-key");
//   console.log(decodedToken)
//   if (!decodedToken)
//     return res.send({ status: false, msg: "token is invalid" });

    jwt.verify(token, "my-secret-key", function (err) {
        if (err) return res.send({ status: false, msg: "token is invalid" });
        next();
    });
}

module.exports.tokenValidation = tokenValidation