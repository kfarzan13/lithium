const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {
  let data = req.body
  let savedData = await userModel.create(data)
  res.send({ msg: savedData })
}

const loginUser = async function (req, res) {
  let userName = req.body.emailId
  let password = req.body.password

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or password is incorrect",
    });

  let token = jwt.sign(
    {
        userId: user._id.toString(),
        batch: "lithium",
    },
    "my-secret-key"
  );
  res.setHeader("x-auth-token", token);
  console.log(req.headers)
  res.send({ status: true, token: token });
};

const getUserData = async function (req, res) {

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedData = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: true, data: updatedData });
};

const deleteUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  
  if (!user) {
    return res.send("No such user exists");
  }

  let deletedUser = await userModel.findByIdAndUpdate({_id : userId},{$set: {isDeleted : true}});
  res.send({ status: true, data: deletedUser });
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
