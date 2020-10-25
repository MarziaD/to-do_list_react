import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import {v4 as uuid} from "uuid";

import './App.css';

class App extends Component { 
  state = {
    todos : [
      {
        id: uuid(),
        title : 'Clean the living room',
        completed : false
      },
      {
        id: uuid(),
        title : 'Meal prepping',
        completed : true
      },
      {
        id: uuid(),
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
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add Todo Item
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed:false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render () {
    return (
      <div className="App">
        <div className = "container">
        <Header />
        <AddTodo addTodo = {this.addTodo} />
        <Todos todos = {this.state.todos} markComplete = {this.markComplete} 
        delTodo = {this.delTodo}/>

        </div>
      </div>
    );
  }
}

export default App;
