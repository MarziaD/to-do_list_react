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
        completed : true
      },
      {
        id:3,
        title : 'Gym workout',
        completed : false
      },
    ]
  }

  markComplete = (id) => {
    console.log(id)
  }

  render () {
    return (
      <div className="App">
      <Todos todos = {this.state.todos} markComplete = {this.markComplete} />
      </div>
    );
  }
}

export default App;
