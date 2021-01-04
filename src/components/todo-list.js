import React from 'react'
import './todo-list.css'

class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='todo-wrapper'>
                {
                    this.props.list.map((text, idx) => {
                        return (
                            <h3 key={idx}>{text}</h3> 
                        )
                    })
                }
            </div>
        )
    }
}

export default TodoList