import React from 'react'
import { connect } from 'react-redux'
import { EDIT_TODO, DELETE_TODO } from '../redux/actions/actionCreators'


class TodoList extends React.Component{

    state = {
        isEdit: false,
        instance: ''
    }

    handleEdit(){
        this.setState({
            isEdit: !this.state.isEdit,
            instance: this.props.obj.input
        })  
    }

    handleDelete(){
        this.props.whenDelete(this.props.obj.id)
    }

    handleChange(event){
        this.setState({
            instance: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.whenSubmit(this.state.instance, this.props.obj.id)
        this.setState({
            isEdit: false,
            instance: ''
        })

    }

    render(){
        if(this.state.isEdit === true){
            return(
                <div>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input value={this.state.instance} onChange={this.handleChange.bind(this)}/>
                    </form>
                </div>
            )
        }
        else{
            return(
                <div>
                    {this.props.obj.input}
                    <button onClick={this.handleEdit.bind(this)} className='btn btn-info btn-md m-3'>Edit</button>
                    <button onClick={this.handleDelete.bind(this)} className='btn btn-danger btn-md'>Delete</button>
                </div>
            )
        }    
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        whenSubmit: (text, id) => {
            dispatch(EDIT_TODO(text, id))
        },
        whenDelete: (id) => {
            dispatch(DELETE_TODO(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoList)
