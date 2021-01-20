import React from 'react'
import TodoForm from './todo-form'
import TodoList from './todo-list'
import './todoBox.css'

class TodoBox extends React.Component{
    state={
        todolist: JSON.parse(localStorage.getItem('ToDo')) || []
    }

    handleTodoList(text){
        const newList = [...this.state.todolist, text]
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
        // console.log(newTodoList)
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
        console.log("Deleted")
    }
    
    render(){

        const list = this.state.todolist.map((data, idx) => {
            return(<TodoList key={idx} text={data} whenUpdate={this.handleUpdate.bind(this, idx)}
                    whenDelete={this.handleDelete.bind(this, idx)}/>)
      
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