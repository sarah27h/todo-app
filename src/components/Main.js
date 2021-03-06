//add core.js to support map array method for old browsers
// https://reactjs.org/docs/javascript-environment-requirements.html
import 'core-js/library/es6/map';
import 'core-js/es6/set';

import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
import '../styles/Main.css'


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


    //handle user click to mark todo as done
    //using classList.toggle to add a line if done or remove line if not done
    markDoneTodo = (target) => {
        target.classList.toggle("line-through");
    }

    //add new todo to state
    //generate a unique id for new todo
    //capitalize first letter of new todo enterd by user
    //make copy ot todos state to use it to modify state indirectly
    //update todos state
    addTodo = (todo) => {
        todo.id = new Date().getTime();
        todo.task = todo.task.charAt(0).toUpperCase() + todo.task.slice(1);
        let todos = [...this.state.todos, todo];
        this.setState({todos})
    }

    render() {
        return (
        <div className="todos-container">
            <Todos
                todos={this.state.todos}
                deleteTodo={this.deleteTodo}
                markDoneTodo={this.markDoneTodo}
            />
            <AddTodo
                addTodo={this.addTodo}
            />
            
        </div>
        );
    }
}

export default Main;
