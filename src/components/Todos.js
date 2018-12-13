import React, { Component } from 'react'
import {Collection, CollectionItem} from 'react-materialize'
import '../styles/Todos.css'

const Todos = ({todos, deleteTodo}) => {
        
    //check todos state length todos.length > 0 ?
    //if true display todos list
    //if false display a message 'There are no todos!'
    const TodoList = todos.length > 0 ?
            ( 
            todos.map(todo => {
                return(
                    //pass id of clicked back to parent component as action
                    <CollectionItem className="todo-item" key={todo.id} onClick={() => deleteTodo(todo.id)}>
                        {todo.task}
                    </CollectionItem>
                )
                
            })
            
        ) : (
            <div>There are no todos!</div>
        )
    
    return(
        <div>
            <h3>Todo's List</h3>
            <Collection className="todo-collection">
                {TodoList}
            </Collection>
        </div>
    )
    
}

export default Todos;