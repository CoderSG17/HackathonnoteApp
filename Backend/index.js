const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT =  8080;
const seedDB = require( './seed');
const cors = require('cors');
const notesRoute = require('./Api/notesRoute')
const userRoutes = require('../Backend/Api/userRoutes')
const feedbackRoute = require('../Backend/Api/feedbackRoute')













app.use(express.json());// to use json data
app.use(userRoutes);


app.use(cors({
    origin:'http://localhost:5400'
}))
app.use(express.urlencoded({ extended: true })); // middleware for handling form submissions

app.use(notesRoute);
app.use(feedbackRoute)

mongoose.connect("mongodb://127.0.0.1:27017/notes").then(()=>{ 
    console.log("Connected To Database")
})
.catch((err)=>{
    console.log(err);
})

seedDB();

app.get('/hello' , (req,res)=>{
    res.status(200).json( {message : "Hello World!"} )
})

app.listen(PORT, () => {
    console.log(`Server is running on'${PORT}'`)
});