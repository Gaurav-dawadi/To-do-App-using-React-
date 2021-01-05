import React from 'react'
import TodoBox from './todoBox'
import './App.css'

class App extends React.Component{
    render(){
        return(
            <div className='container main-wrapper'>
                <div className='title-wrapper'>
                    <h1>ToDo List</h1>
                </div>
                <div className='component-wrapper'>
                    <TodoBox/>
                </div>
            </div>
        )
    }
}

export default App