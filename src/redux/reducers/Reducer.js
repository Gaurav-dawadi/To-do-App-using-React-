import { ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/actionTypes'

const initialState = {
    todoList: JSON.parse(localStorage.getItem("ToDoRedux")) || []
}

// CRUD Operation Performed From Here
const addReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_TASK:
            const newList = [...state.todoList, action.payload];
            localStorage.setItem("ToDoRedux", JSON.stringify(newList));
            return {
                todoList: newList
            };
        case EDIT_TASK:
            const editedList = state.todoList.map((data) => {
                if(action.id === data.id){
                    data.input = action.payload  
                }
                return data 
            })
            localStorage.setItem("ToDoRedux", JSON.stringify(editedList));
            return {
                todoList: editedList
            }
        case DELETE_TASK:
            const afterDeleteList = state.todoList.filter(data => data.id !== action.id)
            localStorage.setItem("ToDoRedux", JSON.stringify(afterDeleteList));
            return {
                todoList: afterDeleteList
            }
        default:
            return state  
    }
}

export default addReducer