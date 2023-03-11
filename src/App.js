import React from 'react';
import Title from './Title'


export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
     displayText: ''
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

 handleKeyDown = event => {
    let key = event.key.toUpperCase()
    let pad = document.querySelector('#' + key)
    if (pad) {
        pad.play()
    }
    if (key === 'Q') this.setState({displayText: 'Heater1'})
    if (key === 'W') this.setState({displayText: 'Heater2'})
    if (key === 'E') this.setState({displayText: 'Heater3'})
    if (key === 'A') this.setState({displayText: 'Heater4'})
    if (key === 'S') this.setState({displayText: 'Clap'})
    if (key === 'D') this.setState({displayText: 'Open-HH'})
    if (key === 'Z') this.setState({displayText: 'Kick-n-Hat'})
    if (key === 'X') this.setState({displayText: 'Kick'})
    if (key === 'C') this.setState({displayText: 'Closed-HH'})
}


handleClick = event => {
    let pad = document.querySelector('.' + event.target.id)
    pad.play()
    this.setState({displayText: event.target.id})
    }






  render(){
      return (
        <div id="drum-machine" className="App">
          <Title />
          <div className="kit">
            <div className="display" id="display" dangerouslySetInnerHTML={{ __html: this.state.displayText}}>

            </div>
            <div className="buttons">
              <div id="Heater1" className="drum-pad" onClick={this.handleClick}>Q<audio id="Q" className="clip Heater1" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio></div>
              <div id="Heater2" className="drum-pad" onClick={this.handleClick}>W<audio id="W" className="clip Heater2" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio></div>
              <div id="Heater3" className="drum-pad" onClick={this.handleClick}>E<audio id="E" className="clip Heater3" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio></div>
              <div id="Heater4" className="drum-pad" onClick={this.handleClick}>A<audio id="A" className="clip Heater4" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio></div>
              <div id="Clap" className="drum-pad" onClick={this.handleClick}>S<audio id="S" className="clip Clap" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio></div>
              <div id="Open-HH" className="drum-pad" onClick={this.handleClick}>D<audio id="D" className="clip Open-HH" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio></div>
              <div id="Kick-n-Hat" className="drum-pad" onClick={this.handleClick}>Z<audio id="Z" className="clip Kick-n-Hat" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio></div>
              <div id="Kick" className="drum-pad" onClick={this.handleClick}>X<audio id="X" className="clip Kick" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio></div>
              <div id="Closed-HH" className="drum-pad" onClick={this.handleClick}>C<audio id="C" className="clip Closed-HH" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio></div>
            </div>
          </div>
        </div>
      ) 
  }
}
