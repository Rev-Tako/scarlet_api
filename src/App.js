import React, { Component } from "react"
import logo from './logo.svg';
import './App.css';

class SCARLET_API extends Component {

  constructor(props) {
    super(props);
    this.state = {}

  }
  //functions go here
    async io_backend() {

    }

  render() {
    return(
        <div>
          Script calls go here?
        </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        This should be blank
      </header>
    < SCARLET_API />
    </div>
  );
}

export default App;
