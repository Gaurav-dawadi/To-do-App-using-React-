import React from 'react'
import TodoForm from './todo-form'
import TodoList from './todo-list'
import './todoBox.css'

class TodoBox extends React.Component{
    state={
        todolist: []
    }

    handleTodoList(text){
        this.setState({
            todolist: [...this.state.todolist, text]
        })
    }

    render(){
        return(
            <div>
                <div className='form-wrapper'>
                    <TodoForm whenSubmit={this.handleTodoList.bind(this)}/>
                </div>
                <TodoList list={this.state.todolist}/>
            </div>
        )
    }
}

export default TodoBox