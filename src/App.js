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

  // Toggle Complete Items
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed

      }
      return todo;
    })})
  }

  // Delete Item
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  render () {
    return (
      <div className="App">
      <Todos todos = {this.state.todos} markComplete = {this.markComplete} 
      delTodo = {this.delTodo}/>
      </div>
    );
  }
}

export default App;
