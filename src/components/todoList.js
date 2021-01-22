import React from 'react'


class TodoList extends React.Component{
    render(){
        return(
            <div>
                {this.props.text}
            </div>
        )
    }
}

export default TodoList
