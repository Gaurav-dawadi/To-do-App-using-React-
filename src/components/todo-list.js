import React from 'react'
import './todo-list.css'

class TodoList extends React.Component{
    render(){
        return(
            <div className='container todo-wrapper'>
                {
                    this.props.list.map((text, idx) => {
                        return(
                            <div className='todoitem-wrapper'>
                                <div className='item-wrapper'>
                                    <h4 key={idx}>{text}</h4>
                                </div>
                                <div className='button-wrapper'>
                                    <button className='btn btn-warning btn-md'>Edit</button>
                                    <button className='btn btn-danger btn-md'>Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default TodoList