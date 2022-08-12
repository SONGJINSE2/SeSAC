const express = require("express");
const user = require("../controller/UserController");
const router = express.Router();

router.get("/", user.index);
router.get("/signup", user.signup);
router.post("/signup", user.post_signup);

module.exports = router;