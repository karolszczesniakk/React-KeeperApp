import React, { useState } from "react";

function CreateArea(props) {
  const [note, updateNote] = useState({})

  function handleChange(event){
    const {name,value} = event.target;
    updateNote(prevValue=>{
      return {
        ...prevValue,
        [name]: value
      }
    })
    console.log(note);
  }

  function handleSubmit(event){
    props.onSubmit(note);
    event.preventDefault();
    event.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;