import React from 'react'
import { Link } from 'react-router-dom'

const BottomCount = props =>{
  const {todo} = props
  return (
    <div className="btn-count">
      <div className="btn-count__btn-wrapper">
        <Link to="/">
          <div className="btn-count__btn">▶︎</div>
        </Link>
      </div>
      < div className = "btn-count__text-wrapper" >
        {!todo && <div></div> 
        || todo && <div className="btn-count__text">{todo.min<10 ? '0'+todo.min:todo.min}:{todo.sec<10 ? '0'+todo.sec:todo.sec}</div>}
        {!todo && <h3>趕緊開始吃番茄吧！</h3> 
        || todo && <h3>{todo.text}</h3>}
      </div>
    </div>
  )
}

export default BottomCount