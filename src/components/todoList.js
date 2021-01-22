import React from 'react'


class TodoList extends React.Component{
    render(){
        return(
            <div>
                {this.props.text}
                <button className='btn btn-info btn-md m-3'>Edit</button>
                <button className='btn btn-danger btn-md'>Delete</button>
            </div>
        )
    }
}

export default TodoList
