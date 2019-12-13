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
    if (bigButton){
      return(
      <div className="count-down">
        {/* <div className="process-mask right">
          {
            isPause ? <div class="process-bar right rightcircle"></div> : ''
          }
        </div>
        <div className="process-mask left">
          {
            isPause ? <div class="process-bar left leftcircle lp"></div> : ''
          }
        </div> */}
        <div className="play-button circle">
          <button className={`list-item__btn list-item__btn--${bigButton?'big':'small'}`} onClick={this.play}>{isPause ? '||':'▶︎'}</button>
        </div>
      </div>
      )
    }else{
      return(
        <div className="play-button">
          <button className={`list-item__btn list-item__btn--${bigButton?'big':'small'}`} onClick={this.play}>{isPause ? '||':'▶︎'}</button>
        </div>
      )
    }
    
  }
}

export default PlayButton