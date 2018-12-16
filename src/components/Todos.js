import React, { Component } from 'react'
import {Collection, CollectionItem, Button, Icon} from 'react-materialize'
import '../styles/Todos.css'

const Todos = ({todos, deleteTodo, markDoneTodo}) => {
        
    //check todos state length todos.length > 0 ?
    //if true display todos list
    //if false display a message 'There are no todos!'
    const TodoList = todos.length > 0 ?
            ( 
            todos.map(todo => {
                return(
                    //pass id of clicked back to parent component as action
                    <CollectionItem 
                        className="todo-item valign-wrapper" 
                        key={todo.id} 
                        onClick={(e) => markDoneTodo(e.target)}>

                        {todo.task} 

                        <Button 
                            className="btn-floating transparent remove-btn small" 
                            aria-label={`remove ${todo.task}`} 
                            icon="remove" 
                            onClick={() => deleteTodo(todo.id)} 
                        />

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