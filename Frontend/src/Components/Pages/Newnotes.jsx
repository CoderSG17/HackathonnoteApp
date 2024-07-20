import React, { useRef } from 'react'
import styles from './Newnotes.module.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Newnotes() {
  let usernameinpref = useRef();
  let noteinpref = useRef();
 let navigate =  useNavigate();

async function addnotehandler(e){
  e.preventDefault();
  const author = usernameinpref.current.value;
  const text = noteinpref.current.value;
 try{
  let res = await axios.post("http://localhost:8080/addnote" , {author : author , text : text});
  console.log(res);
  navigate('/');
 }
 catch{
  console.log("Error occured");
 }

}

  return (
    <form onSubmit={addnotehandler} className={styles['new-note']}>
      <div>
        <label htmlFor="author">Author:</label>
        <input type="text"id="author" ref={usernameinpref} placeholder='Authors name'/>
      </div>
      <div>
        <label htmlFor="note">note:</label>
       <textarea name="" id="note" cols={15} rows={4} ref={noteinpref} placeholder='Write your note here..'></textarea>
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Newnotes;