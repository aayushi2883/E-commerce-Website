const express = require("express");
var router = express.Router();
const {check, validationResult } = require("express-validator");
const {signout, signup} = require("../controllers/auth")

router.post("/signup" , [
    check("name" , "name should be of atleast 3 characters").isLength({ min: 3}),
    check("email" , "email is a required field").isEmail(),
    check("password" , "password should be atleast of 5 characters").isLength({ min:5 })
] ,  signup);
router.get("/signout" ,signout );

module.exports = router;