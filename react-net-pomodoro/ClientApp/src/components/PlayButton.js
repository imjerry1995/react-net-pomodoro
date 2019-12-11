import React, {Component} from 'react'

class PlayButton extends Component{
  constructor(props){
    super(props)

    this.play = this.play.bind(this)
  }

  play(){
    //bigButton 如果是最大的那個按鈕就會接到這個值
    const {todo, handlePlay, bigButton} = this.props
    handlePlay(todo.id, bigButton)
  }

  render(){
    const {isPause} = this.props.todo
    const {bigButton} = this.props
    return(
      <button className={`list-item__btn--${bigButton?'big':'small'}`} onClick={this.play}>{isPause ? '||':'>'}</button>
    )
  }
}

export default PlayButton