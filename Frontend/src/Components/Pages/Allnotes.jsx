
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Note from '../Note/Note';
import styles from './Allnotes.module.css'

function Allnotes() {
 let [notes , setnotes] = useState();
  useEffect(()=>{
   getnotes();
  },[])
 async function getnotes(){
  let res =  await axios.get('http://localhost:8080/allnotes');
  console.log(res.data);
  setnotes(res.data);
  }
console.log(notes)
  return (
    <div className={styles.container}>
      <h1>All notes</h1>
      <h2></h2>
      <ul>
       
       {notes?.map((note , index)=>{
        return <note
        key={index}
       text={note.text}
       author ={note.author}
       id={note._id}
        />
       })}
      </ul>
    </div>
  )
}

export default Allnotes