import React, {Component} from 'react'

const CreateTodo = (props) =>{
  return (
    <div className="add-todo">
      <input className="add-todo__input"
      type="text" 
      placeholder="ADD A NEW MISSION..."
      value={props.value}
      onKeyPress={props.handleEnterKey}
      onChange={props.handleChange}/>
      <button className="add-todo__btn" onClick={props.handleSubmit}>+</button>
    </div>
  )
}

export default CreateTodo