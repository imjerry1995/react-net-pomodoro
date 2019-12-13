import React, {Component} from 'react'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'
import RightNav from './RightNav'
import BottomCount from './BottomCount'

class ShowTodo extends Component {
constructor(props){
  super(props)
  this.state = {
    todos: [],
    todoText: '', //input 綁定
    nowTask: '' //記錄目前正在倒數的任務
  }
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleChange = this.handleChange.bind(this)
  this.handleDelete = this.handleDelete.bind(this)
  this.handleEnterKey = this.handleEnterKey.bind(this)
  this.stopCountDown = this.stopCountDown.bind(this)
}

  componentDidMount(){
    let data = JSON.parse(localStorage.getItem('data'))
    this.setState({
      todos: data.todos,
      nowTask: data.nowTask
    })
    console.log('...1',data.nowTask)
  }

  componentDidUpdate(prevProps, prepState){
    localStorage.setItem('data', JSON.stringify(this.state))
  }

  handleChange(e) {
    this.setState({
      todoText: e.target.value
    })
  }

  handleSubmit(){
    this.stopCountDown()
    const {todos, todoText, nowTask} = this.state
    const newTodo = {
      id: todos.length+1,
      text: todoText,
      isChecked: false,
      isActivated: false,
      isPause: false,
      amounts: 0,
      min: 25,
      sec: 0
    }
    this.setState({
      todos: [...todos, newTodo],
      todoText: '',
    })
  }

  handleDelete(nowTodo){
    this.stopCountDown()
    const {todos, todoText} = this.state
    todos.map(item =>{
      if(item.id !== nowTodo) return item
      return item.isChecked = true
    })
    this.setState({
      todos: todos
    })
    
  }  

  handleEnterKey(e){
    if (e.nativeEvent.keyCode === 13) { //e.nativeEvent获取原生的事件对像
      this.handleSubmit()
    }
  }

  stopCountDown() {
    const highestIntervalId = setInterval(";");
    for (var i = 0; i < highestIntervalId; i++) {
      clearInterval(i);
    }
  }

  render(){
    const {todos, todoText, nowTask} = this.state
    //console.log('ren',nowTask)
    return (
      <div className="show-wrapper">
        <div className="col-6">
          <RightNav page={'show'}/>
          <div className="show-wrapper__btn">
            <BottomCount todo={nowTask}/>
          </div>
        </div>
        <div className="col-6">
          <div className="task task--blue">
            <CreateTodo value={todoText} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleEnterKey={this.handleEnterKey} />
            <TodoList todos={todos} handleDelete={this.handleDelete} handlePlay={this.handlePlay} show={true}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowTodo