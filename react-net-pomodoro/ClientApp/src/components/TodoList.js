import React, {Component} from 'react'
import Todo from './Todo'

const TodoList = (props) =>{
  const {todos, handleDelete, handlePlay} = props
  return (
    <div>
      {
        todos.filter(item => !item.isChecked).map((item, index) => {
          return <Todo key={index} count={index} todo={item} handleDelete={handleDelete} handlePlay={handlePlay}/>
        })
      }
    
    </div>
  )
}

export default TodoList