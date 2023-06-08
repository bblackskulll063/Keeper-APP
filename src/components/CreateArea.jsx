import React, { useState } from "react";
import Add from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isexpanded,setexpanded] = useState(false);
  const [newnote, setnewnote] = useState({
    title: "",
    content: "",
  });

  function handlechange(event) {
    const { name, value } = event.target;
    setnewnote((prevnote) => {
      return {
        ...prevnote,
        [name]: value,
      };
    });
  }

  function onsubmit(event) {
    props.onadd(newnote);
    setnewnote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand(){
    setexpanded(true);
  }
  function compress(){
    setexpanded(false);
  }

  return (
    <div>
      <form className="create-note">
    
        <input
          onChange={handlechange}
          onClick={expand}
          name="title"
          placeholder="Title"
          value={newnote.title}
        />
        {isexpanded && <textarea
          onChange={handlechange}
          name="content"
          placeholder="Take a note..."
          rows={isexpanded?4:1}
          value={newnote.content}
        />}
        
        <Zoom in={isexpanded}>
          <Fab onClick={onsubmit}>
            <Add onClick={compress}/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
