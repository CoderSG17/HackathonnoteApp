const mongoose = require('mongoose');



const noteSchema = new mongoose.Schema({
   author:{
    type:String,
    required:true,
    trim: true
   },
   text:{
    type:String,
    required:true,
    trim: true

   }

})

const notes = mongoose.model('notes' ,noteSchema);
module.exports=notes; 