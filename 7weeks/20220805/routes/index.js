const { Router } = require("express");
const express = require("express");
const userRouter = express.Router();
const user = require("../controller/VisitorController");
const visitor = require("../controller/VisitorController");

userRouter.get("/", user.visitor);
userRouter.post("/write", user.post_comment);
userRouter.get("/get", visitor.get_visitor);
userRouter.patch("/edit", visitor.patch_comment);
userRouter.delete("/delete", visitor.delete_comment);

module.exports = userRouter; 