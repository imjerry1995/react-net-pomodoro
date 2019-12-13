import React, {Component} from 'react'
import Todo from './Todo'

const TodoList = (props) =>{
  const {todos, handleDelete, handlePlay, show} = props
  if(show){
    return (
    <div className="list__wrapper">
      <div>
        <h2 className="list__title">TO-DO</h2>
        <ul className="list list--blue">
          {
            todos.filter(item => !item.isChecked).map((item, index) => {
              return <Todo key={index} count={index} todo={item} handleDelete={handleDelete} handlePlay={handlePlay} show={true}/>
            })
          }
        </ul>
      </div>
      <div>
        <h2 className="list__title">DONE</h2>
        < ul className = "list list--blue">
          {
            todos.filter(item => item.isChecked).map((item, index) => {
              return <Todo key={index} count={index} todo={item} handleDelete={handleDelete} handlePlay={handlePlay} show={true} tomo={true}/>
            })
          }
        </ul>
      </div>
    </div>
    )
  }
  return (
    <ul className="list">
      {
        todos.filter(item => !item.isChecked).map((item, index) => {
          return <Todo key={index} count={index} todo={item} handleDelete={handleDelete} handlePlay={handlePlay}/>
        })
      }
    </ul>
  )
}

export default TodoList