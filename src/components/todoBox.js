import React from 'react'
import TodoForm from './todo-form'
import TodoList from './todo-list'
import './todoBox.css'

class TodoBox extends React.Component{
    state={
        todolist: JSON.parse(localStorage.getItem('ToDo')) || []
    }

    handleTodoList(list){
        const newList = [...this.state.todolist, list]
        this.setState({
            todolist: newList
        },
        localStorage.setItem('ToDo', JSON.stringify(newList))
        )
    }

    handleUpdate(idx, task){
        const newTodoList = this.state.todolist.map((data, id) => {
            if(id === idx){
                data = task
            }
            return data
        })
        this.setState({
            todolist: newTodoList
        },
        localStorage.setItem('ToDo', JSON.stringify(newTodoList))
        )
    }

    handleDelete(idx){
        const newTodoList = this.state.todolist.filter((data) => data.id !== idx)

        this.setState({
            todolist: newTodoList 
        },
        localStorage.setItem('ToDo', JSON.stringify(newTodoList))
        )
    }
    
    render(){
        const list = this.state.todolist.map((data) => {
            return(<TodoList key={data.id} text={data.input}
                    whenUpdate={this.handleUpdate.bind(this, data.id)}
                    whenDelete={this.handleDelete.bind(this, data.id)}/>
                )
        })

        return(
            <div>
                <div className='form-wrapper'>
                    <TodoForm whenSubmit={this.handleTodoList.bind(this)}/>
                </div>
                {list}
            </div>
        )
    }
}

export default TodoBox