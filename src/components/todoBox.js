import React from 'react'
import TodoForm from './todo-form'
import TodoList from './todo-list'

class TodoBox extends React.Component{
    constructor(){
        super();
        this.state={
            todolist: []
        }
    }

    handleTodoList(text){
        this.setState({
            todolist: [...this.state.todolist, text]
        })
    }

    render(){
        return(
            <div>
                <TodoForm whenSubmit={this.handleTodoList.bind(this)}/>
                <TodoList list={this.state.todolist}/>
            </div>
        )
    }
}

export default TodoBox