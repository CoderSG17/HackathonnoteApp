import React, { useState } from 'react'
import '../Pages/Feedback.css'
import { toast } from 'react-toastify';

const Feedback = () => {
    const [feedback , setFeedback] = useState({
        name:"",
        email:"",
        rating:"",
        message:""
    })

    const handleInput = (e) => {
        const {value,name} = e.target;
        setFeedback({
            ...feedback,
            [name]:value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:8080/sendFeedback',{
                method:"POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(feedback)
            })

            const data  = await response.json()
            console.log(data)

           toast.success(data.message)
           setFeedback({
            name:"",
        email:"",
        rating:"",
        message:""
           })
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='feedback'>
        <div className="wrapper"> 
  <div className="title">Rate your experience</div>
  <br />
  <div className="content">We highly value your feedback! Kindly take a moment to rate your experience and provide us with your valuable feedback.</div>
  
<div style={{border:"1px solid red" , width:"80vw" , height:"200px"}}>
    <h5 style={{fontSize:"20px"}}>Name</h5>
    <input type="text" style={{fontSize:"30px",boxShadow:" rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset" ,marginBottom:"20px",borderRadius:"5px"}} onChange={handleInput} name='name' value={feedback.name}/>
    
    <h5 style={{fontSize:"20px"}}>Email</h5>
    <input type="text" style={{fontSize:"30px",boxShadow:" rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",borderRadius:"5px"}} onChange={handleInput} name='email' value={feedback.email}/>
</div>
  <div className="rate-box">
    <input type="radio" name="rating" id="star0" onChange={handleInput} value="5"/>
    <label className="rating" for="star0"></label>
    <input type="radio" name="rating" id="star1" onChange={handleInput} value="4"/>
    <label className="rating" for="star1"></label>
    <input type="radio" name="rating" id="star2" onChange={handleInput} value="3"/>
    <label className="rating" for="star2"></label>
    <input type="radio" name="rating" id="star3" onChange={handleInput} value="2"/>
    <label className="rating" for="star3"></label>
    <input type="radio" name="rating" id="star4" onChange={handleInput} value="1"/>
    <label className="rating" for="star4"></label>
  </div>
  <textarea cols="30" rows="6" placeholder="Tell us about your experience!" onChange={handleInput} name='message' value={feedback.message}></textarea>
  <div className="submit-btn" onClick={handleSubmit}>Send</div>
</div>
    </div>
  )
}

export default Feedback