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
        document.getElementById(`audio-${loop.id}`).play()
      }
    })
}
handleKeyUp = (e) => {
  let pads = [...this.state.pads]
  pads.forEach((loop, i) => {
    if (loop.key === e.key) {
      pads[i]['playing'] = false
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
        />
        
      </div>
    );

  }
}

export default App;
