import React, { useEffect } from 'react'
import styles from './Note.module.css'
import {useNavigate} from 'react-router-dom';
import axios  from 'axios';
import Share from '../Pages/Share';

function note(props) {
  let navigate = useNavigate();

   async function deletenote(id){
     await axios.delete(`http://localhost:8080/deletenotes/${id}`)
    
    console.log("note deleted successfully");
    navigate('/');
  }
 
  function shownotehandler(id){
  navigate(`/notes/${id}`);
  }

  return (
    <div>
      <ul className={styles.notes} >
        <span>
        <p>{props.text}</p>
       <h3> {props.author}</h3> 
        </span>
      <button onClick={()=>deletenote(props.id)}>Delete</button>
       <button onClick={()=>shownotehandler(props.id)} >View full </button>
       <Share></Share>
      </ul>
      
    </div>
  )
}

export default note