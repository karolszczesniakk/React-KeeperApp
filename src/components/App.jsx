import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea";


function App(){
  const [notes, updateNotes] = useState([]);
  

  function addNote(note){
    console.log("addnote");
    updateNotes(prevItems => {
      return [...prevItems, note]
    })
  }

  function deleteNote(id){
    updateNotes(prevNotes => {
      return prevNotes.filter((note, index)=>{
        return id !== index
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onSubmit={addNote}
      />
      {notes.map((note, index) => 
      (
        <Note 
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
        ))}
      <Footer />
    </div>
        
  )
};

export default App;