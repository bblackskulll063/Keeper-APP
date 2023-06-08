import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([]);

  function addingnote(newsmallnote) {
    setnotes((prevnote) => {
      return [...prevnote, newsmallnote];
    });
  }

  function deletenote(id){
    setnotes(prevnote =>{
      return prevnote.filter((smallnote,index) =>{
        return index !==id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onadd={addingnote} />
      {notes.map((smallnote,index) => {
        return <Note key={index} id={index} title={smallnote.title} content={smallnote.content} 
        ondelete={deletenote} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
