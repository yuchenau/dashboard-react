import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }
  
  render() { 
    return ( 
      <div>
        {this.props.children}
      </div>
    );
  }
}
 
export default App;