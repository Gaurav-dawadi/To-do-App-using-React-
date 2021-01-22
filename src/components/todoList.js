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
            instance: this.props.text
        }) 
        console.log("Is edit changed")  
    }

    handleDelete(){
        console.log("First step ---> Signal for Delete Action")
        this.props.whenDelete(this.props.text)
    }

    handleChange(event){
        this.setState({
            instance: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        console.log("First step ---> Signal To Patch TASK")
        this.props.whenSubmit(this.state.instance, this.props.text)
        console.log("Last step ---> TASK UPDATED")
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
                    {this.props.text}
                    {this.props.key}

                    <button onClick={this.handleEdit.bind(this)} className='btn btn-info btn-md m-3'>Edit</button>
                    <button onClick={this.handleDelete.bind(this)} className='btn btn-danger btn-md'>Delete</button>
                </div>
            )
        }    
    }
}

// const mapStateToProps = state => {
//     const list = state.allReducer.todoList.map((data, id) => {
//         return(
//             <div key={id} text={data}/>
//         )
//         // return {
//         //     id: {id},
//         //     text: {data}
//         // }
//     })
//     return {
//         id: list.key,
//         text: list.text
//     }

// }

const mapDispatchToProps = (dispatch) => {
    return{
        whenSubmit: (data, id) => {
            console.log(`Second step ---> Dispatch Action to PATCH Task ${data} of Id ${id}`)
            dispatch(EDIT_TODO(data, id))
        },
        whenDelete: (id) => {
            console.log(`Second step ---> Dispatch Action to Delete Task of Id ${id}`)
            dispatch(DELETE_TODO(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoList)
