import React from "react";
import Delete from '@material-ui/icons/Delete';

function Note(props) {

  function handleclick(){
  props.ondelete(props.id);
  }
  
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleclick}><Delete/></button>
    </div>
  );
}

export default Note;
