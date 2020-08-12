const mongoose = require('mongoose');
require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors =  require("cors");
const { body } = require('express-validator');

const authRoutes = require("./routes/auth");


//DB connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true 
}).then(()=>{
    console.log("DB CONNECTED");
});


//My Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//My Routes
app.use("/api", authRoutes);



//PORT
const PORT =  process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log("App is running...")
})