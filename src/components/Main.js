import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class Main extends Component {
    state={
        todos: [
            {id: '1', task: 'Buy bread'},
            {id: '2', task: 'Cleans rooms'},
        ]
           
    }
  render() {
    return (
      <div>
        <Todos todos={this.state.todos}/>
        <AddTodo />
      </div>
    );
  }
}

export default Main;
