import React from 'react'
import './todo-list.css'

class TodoList extends React.Component{

    state = {
        newInput: '',
        editText: false
    }

    handleUpdate(){
        this.setState({
            newInput: this.props.text,
            editText: true
        })
    }

    handleDelete(){
        this.props.whenDelete()
    }

    handleChange(event){
        this.setState({
            newInput: event.target.value
        })
    }

    handleChangeSave(){
        this.props.whenUpdate(this.state.newInput)
        this.setState({
            newInput: '',
            editText: false
        })
    }

    render(){
        if (this.state.editText === true){
            return(
                <div>
                    <form>
                        <input value={this.state.newInput} onChange={this.handleChange.bind(this)}/>
                        <button onClick={this.handleChangeSave.bind(this)}>Change</button>
                    </form>
                </div>
            )
        }
        else{
            return(
                <div className='container todo-wrapper'>
                    {this.props.text}
                    <button onClick={this.handleUpdate.bind(this)}>Update</button>
                    <button onClick={this.handleDelete.bind(this)}>Delete</button>
                </div>
            )
        }

    }
}

export default TodoList