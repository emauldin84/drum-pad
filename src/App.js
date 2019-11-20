import React, { Component } from 'react';
import './App.css';
import { loops } from './loops/loops'
import DrumPad from './components/DrumPad'

class App extends Component {
  state = {
    pads: [...loops]
  }

handleKeyDown = (e) => {
    let pads = [...this.state.pads]
    pads.forEach((loop, i) => {
      if (loop.key === e.key) {
        pads[i].playing = true
        this.setState ({
          pads
        })
        document.getElementById(`audio-${loop.id}`).currentTime = 0;
        document.getElementById(`audio-${loop.id}`).play()
      }
    })
}
handleKeyUp = (e) => {
  let pads = [...this.state.pads]
  pads.forEach((loop, i) => {
    if (loop.key === e.key) {
      pads[i].playing = false
      this.setState ({
        pads
      })
    }
  })
}
handleMouseDown = (e) => {
  console.log(e)
  let pads = [...this.state.pads]
  pads.forEach((loop, i) => {
    if (loop.id == e) {
      console.log(loop)
      pads[i].playing = true
      this.setState ({
        pads
      })
      document.getElementById(`audio-${loop.id}`).currentTime = 0;
      document.getElementById(`audio-${loop.id}`).play()
    }
  })
}

handleMouseUp = (e) => {
  console.log(e)
  let pads = [...this.state.pads]
  pads.forEach((loop, i) => {
    if (loop.id == e) {
      console.log(loop)
      pads[i].playing = false
      this.setState ({
        pads
      })
    }
  })
}

render() {
  window.addEventListener('keydown', this.handleKeyDown);
  window.addEventListener('keyup', this.handleKeyUp);
  console.log(this.state.pads)

    return (
      <div className="App">
        <DrumPad 
          pads={this.state.pads}
          mouseDown={this.handleMouseDown}
          mouseUp={this.handleMouseUp}
        />
        
      </div>
    );

  }
}

export default App;
