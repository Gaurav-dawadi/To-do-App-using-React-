import React from 'react'
import uuid from 'react-uuid';
import './todo-form.css'


class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todo: { id: '', input: ''}
        }  
    }
    handleSubmit(e){
        e.preventDefault();
    }
    handleChange(event){
        this.setState({
            todo: {id: uuid(), input: event.target.value},
        })
    }
    handleClick(){
        this.props.whenSubmit(this.state.todo)
        this.setState({
            todo: { input: ''} 
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input value={this.state.todo.input} onChange={this.handleChange.bind(this)}/>
                    <button className='btn btn-warning btn-md'
                     onClick={this.handleClick.bind(this)}>Add</button>
                </form>
            </div>
        )
    }
}

export default TodoForm