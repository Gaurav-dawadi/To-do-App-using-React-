import React from 'react'
import TodoForm from './todoForm'
import TodoList from './todoList'
import {connect} from 'react-redux'

class App extends React.Component{
    render(){
        const list = this.props.newState.todoList.map((data, id) => {
            return(
                <TodoList key={id} text={data}/>
            )
        })

        return(
            <div>
                <h1>To-Do</h1>
                <TodoForm />
                {list}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("The state is", state.allReducer)
    return{
        newState: state.allReducer,  
    }
}

export default connect(mapStateToProps,null)(App)
