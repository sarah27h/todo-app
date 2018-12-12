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

    //handle user click to delete a todo
    //get todo id to remove from list
    //update state with new todos after user click
    deleteTodo = (id) => {
        let todos = this.state.todos.filter(todo => {
            return todo.id !== id;
        });

        this.setState({todos});
    }

    render() {
        return (
        <div>
            <Todos
                todos={this.state.todos}
                deleteTodo={this.deleteTodo}
            />
            <AddTodo />
        </div>
        );
    }
}

export default Main;
