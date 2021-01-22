import React from 'react'
import TodoForm from './todoForm'
import TodoList from './todoList'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    console.log("The state is", state.allReducer)
    return{
        newState: state.allReducer,  
    }
}

class App extends React.Component{
    render(){
        const list = this.props.newState.todoList.map((data) => {
            return(
                <TodoList key={data} text={data}/>
            )
        })

        return(
            <div className='container mt-5'>
                <h1>To-Do</h1>
                <TodoForm />
                {list}
            </div>
        )
    }
}

export default connect(mapStateToProps,null)(App)
