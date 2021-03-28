import React from 'react';

class TaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    
    
    addTask = () => {
        
        if(this.state.input) {
            this.props.addTask(this.state.input);
            this.setState({
                input:""
            })
        }

    }

    inputChange = event => {
        this.setState({
            input:event.target.value
        })
    }

    handleEnter = event =>{
        if(event.key === 'Enter') {
            this.addTask();
        }
    }

    render() {
        return(
            <div className="task-input">
                <input onKeyPress={this.handleEnter} value={this.state.input} onChange={this.inputChange}></input>
                <button onClick ={this.addTask}>ADD</button>
            </div>
        )
    }
}

export default TaskInput