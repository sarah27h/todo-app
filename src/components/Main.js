import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class Main extends Component {
  render() {
    return (
      <div>
        <Todos />
        <AddTodo />
      </div>
    );
  }
}

export default Main;
