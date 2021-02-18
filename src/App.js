import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form/Form';
import TodoList from './Todos/TodoList';

class App extends Component {

  state = {
    tasks: [
      {name: "task1", active: true, completed: false},
      {name: "task2", active: true, completed: false},
      {name: "task3", active: true, completed: false},
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to our Todo Application</h1>
        </header>
        <Form onFormSubmit={this.onSubmitButton} />
        <TodoList tasks={this.state.tasks} ></TodoList>
      </div>
    );
  }
}

const onSubmitButton = task => {
  this.setState({tasks: [...this.state.tasks, task]});
}

export default App;
