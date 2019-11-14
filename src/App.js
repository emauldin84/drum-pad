import React, { Component } from 'react';
import './App.css';
import { loops } from './loops/loops'
import DrumPad from './components/DrumPad'

class App extends Component {
  state = {
    pads: [...loops]
  }

  render() {
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
