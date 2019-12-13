import React, {Component} from 'react'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'
import PlayButton from './PlayButton'


class HomeTodo extends Component {
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
    this.handlePlay = this.handlePlay.bind(this)
    this.handleEnterKey = this.handleEnterKey.bind(this)
    this.stopCountDown = this.stopCountDown.bind(this)
  }

  componentDidMount(){
      //初始化
      //console.log(this.props.url)
      
      if (localStorage.getItem('data')) {
          this.setState({
              todos: (JSON.parse(localStorage.getItem('data'))).todos
          })
      } else {
          const xhr = new XMLHttpRequest();
          xhr.open('get', './todos', true);
          xhr.onload = () => {
              const data = JSON.parse(xhr.responseText);
              this.setState({ todos: data });
          };
          xhr.send();
      }
      
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

  //處理播放
  // 要新增五分鐘休息功能
  handlePlay(nowTodo,bigButton){
    this.stopCountDown() //先強制停掉所有計時器
    const {todos} = this.state
    let todoSelect = todos.find(item=>{ //找出目前是哪個 todo，抓裡面的倒數時間
      return item.id === nowTodo
    }) || this.state.todos[0] //一開始這個按鈕按下去綁在第一筆
    todoSelect.isPause = !todoSelect.isPause //現在圖是否顯示暫停（顯示暫停表示現在在跑）
    todoSelect.isActivated = bigButton ? todoSelect.isActivated : !todoSelect.isActivated
    let maxTime = todoSelect.min * 60 + todoSelect.sec //把目前抓到的todo的時間換算成秒數

    const countDown = setInterval(() => {
      maxTime--
      const newTodos = todos.map(item => { 
        if (item !== todoSelect) {
          return {
            ...item,
            isActivated: false, //其他的觸發都關掉
            isPause: false//其他的強制變暫停
          }
        }
        if (maxTime==0) { //歸零之後
          if(todoSelect.amounts % 5 == 4){ //第五顆的前一顆
            item.breakStatus = '1'
          } else if (todoSelect.amounts % 20 == 19) {
            item.breakStatus = '2'
          } else {
            item.breakStatus = ''
          }
            return {
              ...item,
              isPause: !item.isPause, //變回播放鍵
              amounts: todoSelect.amounts + 1,
              min: 25,
              sec: 0
            }
          
          
        }else{
          return {
            ...item,
            isActivated: todoSelect.isActivated,
            isPause: todoSelect.isPause,
            min: parseInt(maxTime / 60),
            sec: maxTime % 60
          }
        }
        
      })
      this.setState({
        todos: newTodos,
        nowTask: todoSelect //沒更新到時間，因為是抓按下去的那一刻的內容
      })
      maxTime == 0 && clearInterval(countDown) 
      maxTime == 0 && this.setState({
        nowTask: this.state.todos.find(item => item.id === todoSelect.id) //真正更新到時間
      })
    }, 1000)
    
    if (!todoSelect.isPause){
      this.stopCountDown() //停掉， state 已經在最新
      this.setState({
        todos: todos,
        nowTask: todoSelect
      })
    }
  }

  handleEnterKey(e){
    if (e.nativeEvent.keyCode === 13) { //e.nativeEvent获取原生的事件对像
      this.handleSubmit()
    }
  }

  //強制結束所有計時器
  stopCountDown(){
    const highestIntervalId = setInterval(";");
    for (var i = 0; i < highestIntervalId; i++) {
      clearInterval(i);
    }
  }

  render(){
    const {todos, todoText, nowTask, uncompletedTask} = this.state
    return (
      <div>
        <div className="col-6">
          <div className="task">
            <CreateTodo value={todoText} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleEnterKey={this.handleEnterKey} />
            <TodoList todos={todos} handleDelete={this.handleDelete} handlePlay={this.handlePlay} />
          </div>
        </div>
        <div className="col-6">
          <PlayButton todo={nowTask}  handlePlay={this.handlePlay} bigButton={true}/>
        </div>
      </div>
    )
  }
}

export default HomeTodo