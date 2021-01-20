import { ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/actionTypes'

const initialState = {
    todoList: [],
    input: '',
    id: ''
} 

const addReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_TASK:
            // return [...state.todoList, action.data]
            return {}
        case EDIT_TASK:  
            return {}
        case DELETE_TASK:
            return {}    
        default:
            return state  
    }
}

export default addReducer