import React from 'react'
import NavBar from './NavBar'

const Layout = props =>{
  return (
    <div className="container">
      <div className="col-8">
        {props.children}
      </div><div className="col-4">
        <NavBar />
      </div>
    </div>
  )
}

export default Layout