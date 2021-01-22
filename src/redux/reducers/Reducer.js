import { ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/actionTypes'

const initialState = {
    todoList: JSON.parse(localStorage.getItem('ToDo')) || []
}

const addReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_TASK:
            const newList = [...state.todoList, action.payload];
            localStorage.setItem('Todo', JSON.stringify(newList));
            return {
                todoList: newList
            };
        case EDIT_TASK:  
            return {}
        case DELETE_TASK:
            return {}    
        default:
            return state  
    }
}

export default addReducer