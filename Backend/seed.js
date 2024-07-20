const mongoose = require('mongoose')
const notes = require('./Models/note');


let dummynotes =[
    {
        author:"Ashutosh Singh",
        text:"Hey how are you?"
    },
    {
        author:"Rahul",
        text:"Syntax over semantics"
    },
    {
        author:"Jetha Lal",
        text:"Gada Electronic"
    },
    {
        author:"Tarak Mehta",
        text:"Tarak mehta ka ulta Chashma"
    }
]

async function  seedDB(){
    notes.insertMany(dummynotes);
    console.log("DB seeded Successfully");

}


module.exports = seedDB;