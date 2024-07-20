const router = require('express').Router();
const notes = require('../Models/note')




// Route to see the all notes

router.get('/allnotes' , async(req,res)=>{
    try{
        let allnotes = await notes.find({});
        res.status(200).json(allnotes);   // send the data back to client side 

    }
    catch(e){
   res.status(400).json({msg:"Some error occured"})
    }
})

// Route to create the note
router.post("/addnote",async (req,res)=>{
   let {author,text} = req.body;
   await notes.create({author,text});
   res.status(201).json({msg:'The note has been added successfully!'})
})
 
router.get('/notes/:id'  , async(req,res)=>{
    let {id}  = req.params;
    const note = await notes.findById(id)
    res.status(200).json(note);

})

router.delete('/deletenotes/:id' , async (req,res)=>{
    
        try{
        let {id} = req.params;
        
        await notes.findByIdAndDelete(id);
           res.status(200);
    }
    catch(err){
        console.log(err);
    }
    
   
})

module.exports=router;