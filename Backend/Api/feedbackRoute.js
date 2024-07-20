const router = require('express').Router();
const feedback = require('../Models/feedback')

router.post('/sendFeedback',async(req,res)=>{
    try {
            const data  = req.body 
            await feedback.create(data)
            res.status(200).json({message:"Feedback sent",data: data})

    } catch (error) {
        console.log(error)
        res.status(404).json({message:"Error in sending Feedback"})

    }
})

router.get('/getFeedback',async(req,res)=>{
    try {
        const data = await feedback.find()
        console.log(data)
        res.status(200).json({message:"Feedback found",data: data})

    } catch (error) {
        console.log(error)
        res.status(404).json({message:"Error in getting Feedback"})

    }
})

module.exports=router; 