import React from 'react'
import uuid from 'react-uuid'
import { connect } from 'react-redux'
import { ADD_TODO } from '../redux/actions/actionCreators'


class TodoForm extends React.Component{

    state = {
        todo: {id: '', input: ''}
    }

    handleChange(event){
        this.setState({
            todo: {id: uuid(), input: event.target.value}
        })
    }
    handleSubmit(event){
        event.preventDefault()
        this.props.whenSubmit(this.state.todo)
        this.setState({
            todo: {input: ''}
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input value={this.state.todo.input} onChange={this.handleChange.bind(this)}/>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        whenSubmit: (data) => {dispatch(ADD_TODO(data))}
    }
}

export default connect(null, mapDispatchToProps)(TodoForm)
