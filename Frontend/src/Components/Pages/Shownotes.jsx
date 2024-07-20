import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import styles from './Shownotes.module.css'

 function Shownotes() {
    let params = useParams();
    let [note, setnote] = useState(
        {author:'' , text:""}
    );

async function fetchnote(){
    let res = await axios.get(`http://localhost:8080/notes/${params.id}`)
    ;
    console.log(res);
    let {author ,text} = res.data;
    console.log(author);
    console.log(text);
    setnote({author ,text})
    console.log(note);

}

useEffect(()=>{
    fetchnote()
} , [])

  return (
    <div className={styles.shownote}>
        <h3>{note.text}</h3>
        <h2>{note.author}</h2>
    </div>
  )
}

export default Shownotes