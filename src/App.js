import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component { 
  state = {
    todos : [
      {
        id:1,
        title : 'Clean the living room',
        completed : false
      },
      {
        id:2,
        title : 'Meal prepping',
        completed : false
      },
      {
        id:3,
        title : 'Gym workout',
        completed : false
      },
    ]
  }

  render () {
    return (
      <div className="App">
      <Todos todos = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
