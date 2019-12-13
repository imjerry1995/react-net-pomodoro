import React, {Component} from 'react'
import { Route } from 'react-router'
import HomeTodo from './components/HomeTodo'
import ShowTodo from './components/ShowTodo'
import Layout from './components/Layout'
import './stylesheets/style.scss'



class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Layout>
        <Route exact path="/" url="/todos" component={HomeTodo}/>
        <Route exact path="/show" component={ShowTodo}/>
      </Layout>
    )
  }
}

export default App