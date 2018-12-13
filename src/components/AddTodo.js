import React, { Component } from 'react';

class AddTodo extends Component {

    // task state to hold
    state={
        task: ''
    }

    // handle input change
    handleChange = (e) => {
        this.setState({ task : e.target.value})
    }

    // handle form submit by user click enter
    handleSubmit = (e) => {
        e.preventDefault();

        // pass new todo back as action to parent component <Main />
        // only if user enter data and task state not empty
        if(this.state.task) {
            this.props.addTodo(this.state);
        }
        
        // clear input after user submit
        this.setState({task: ''});
    }

    render() {
        return (
        <div>
            <p>Add New Todo</p>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">Add New Todo</label>
                <input 
                    type="text" 
                    id="task"
                    placeholder="Start typing here"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
            </form>
        </div>
        );
    }
}

export default AddTodo;
