import React from 'react'
import uuid from 'react-uuid'
import { connect } from 'react-redux'
import { ADD_TODO } from '../redux/actions/actionCreators'


class TodoForm extends React.Component{

    state = {
        input: '',
        id: ''
    }

    handleChange(event){
        this.setState({
            input: event.target.value,
            id: uuid()
        })
    }
    handleSubmit(event){
        event.preventDefault()
        this.props.whenSubmit(this.state.input)
        this.setState({
            input: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input value={this.state.input} onChange={this.handleChange.bind(this)}/>
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
