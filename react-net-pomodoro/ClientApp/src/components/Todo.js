import React, {Component} from 'react'
import PlayButton from './PlayButton'
import { Link } from 'react-router-dom'

class Todo extends Component{
  constructor(props){
    super(props)

    this.delete = this.delete.bind(this)
  }

  delete(){
    const {todo, handleDelete} = this.props
    handleDelete(todo.id)
  }

  render(){
    {/**這裡的 show 是判斷是不是第二頁傳進來的 */}
    const {id, text, isChecked, isActivated, isPause, amounts, min, sec} = this.props.todo
    const {count, todo, handlePlay, show, tomo} = this.props
    let list = []
    for(let i=0;i<amounts;i++){
      list.push(``)
    }
    return (
      <li data-id={count+1} className={`list-item ${show ? '':(isActivated ? 'list-item--ative':'')}`}>
        <button className={`list-item__checked ${show ? '':(isActivated ? 'list-item__checked--active':'')}`} onClick={this.delete}></button>
        <div className="list-item__infos">
          <h3 className="list-item__text">{text}</h3>
          {show ||(isActivated && <ul className="list-item__amount-list">
            {list.map((item, index)=>{
              return <li key={index}>{item}</li>
            })}
          </ul>)}
        </div>
        {show || (isActivated && <div className="list-item__time">{min<10 ? '0'+min:min}:{sec<10 ? '0'+sec:sec}</div>)}
        {show ||(!isActivated && <PlayButton todo={todo} handlePlay={handlePlay}/>)}
        
        {/*底下是第二頁的內容*/}
        {show && 
        
          <div className="play-button">
            < Link to = "/" >
            <button className="list-item__btn list-item__btn--small">▶︎</button>
            </Link>
          </div>
        
        }

        {tomo &&
          < ul className = "list-item__amount-list list-item__amount-list--done" >
            {list.map((item, index)=>{
              return <li key={index}>{item}</li>
            })}
          </ul>
        }
      </li>
    )
  }
}

export default Todo