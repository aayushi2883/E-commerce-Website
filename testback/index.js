const express = require("express");

const app = express();


app.get("/", (req, res) => {
    return res.send("heloooo");
});

app.get("/login", (req,res) => {
    return res.send("you are in the login page!");
});

app.get("/signup", (req,res) => {
    return res.send("you are in the signup page!");
});

app.listen(3000, () => {
    console.log("server is up and running!!!");
});