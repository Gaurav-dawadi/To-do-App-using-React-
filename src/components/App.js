import React from 'react'
import TodoForm from './todoForm'
import TodoList from './todoList'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return{
        newState: state.allReducer,  
    }
}

class App extends React.Component{
    render(){
        const list = this.props.newState.todoList.map((data) => {
            return(
                // Passing only text didn't work.
                // Pass whole object as props
                <TodoList key={data.id} obj={data}/>
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
