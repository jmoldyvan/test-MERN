const express = require("express");
const mongoose = require("mongoose")
const app = express();
const cors = require("cors");
// get driver connection
const connectDB = require('./config/database')
const PORT = process.env.PORT || 5000;

require("dotenv").config({ path: "./config/.env" });

connectDB()

// app.set('view engine', 'react')
app.use(cors());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
// app.use(require("./routes/record"));
 
app.listen(PORT, () => console.log("YOU HAVE PORTED"))