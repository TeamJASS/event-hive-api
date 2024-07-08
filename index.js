import express from "express";
import mongoose from "mongoose"

// String for Database connection
await mongoose.connect(process.env.MONGO_URI);

//Use express
const app = express();




// Server set up
app.listen (4040,() => {
    console.log ("Live on 4040")
})