import React from 'react'
import { Link } from 'react-router-dom'

const RightNav = props =>{
  console.log(props)
  return (
    <div className="right-nav">
      <ul>
        <li>
          <Link to="/show">
            <h1 className={props.page ==='show'?'':'right-nav__title--white'}>TO-DO LIST</h1>
          </Link>
        </li>
        <li>
          <Link to="/analytics">
            <h1 className={props.page ==='show'?'right-nav__title--white':''}>ANALYTICS</h1>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default RightNav