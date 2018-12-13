import React, { Component } from 'react';

class AddTodo extends Component {

    // task state to hold
    state={
        task: ''
    }
    render() {
        return (
        <div>
            <p>Add New Todo</p>
            <form>
                <label>Add New Todo</label>
                <input 
                    type="text" 
                    placeholder="Start typing here"
                    value={this.state.task}
                    />
            </form>
        </div>
        );
    }
}

export default AddTodo;
