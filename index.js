import express from "express";
import mongoose from "mongoose"
import eventRouter from "./routes/events.js";

// String for Database connection
await mongoose.connect(process.env.MONGO_URI);

//Use express
const app = express();

//middleware
app.use(eventRouter);
app.use(express.json());


// Server set up
app.listen (4040,() => {
    console.log ("Live on 4040")
})