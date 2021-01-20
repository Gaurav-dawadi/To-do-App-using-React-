import React from 'react'
import uuid from 'react-uuid';
import './todo-form.css'


class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input: '',
            id: ''
        }
    }
    handleSubmit(e){
        e.preventDefault();
    }
    handleChange(event){
        this.setState({
            input: event.target.value,
            id: uuid(),
        })
    }
    handleClick(){
        this.props.whenSubmit(this.state.input)
        this.setState({
            input: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input value={this.state.input} onChange={this.handleChange.bind(this)}/>
                    <button className='btn btn-warning btn-md' onClick={this.handleClick.bind(this)}>Add</button>
                </form>
            </div>
        )
    }
}

export default TodoForm