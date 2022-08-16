const express = require("express");
const userRouter = express.Router();
const user = require("../controller/joinController");

userRouter.get("/", user.Join_in)
userRouter.post("/Sign_up", user.Join_us)


module.exports = userRouter; 