import { ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/actionTypes'

const initialState = {
    todoList: JSON.parse(localStorage.getItem("ToDoRedux")) || []
}

// CRUD Operation Performed From Here
const addReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_TASK:
            const newList = [...state.todoList, action.payload];
            console.log("New Task POSTED")
            localStorage.setItem("ToDoRedux", JSON.stringify(newList));
            return {
                todoList: newList
            };
        case EDIT_TASK:
            console.log(`Id of ${action.payload} in reducer is ${action.id}`)
            const editedList = state.todoList.map((data) => {
                console.log("Id is",data)
                if(action.id === data){
                    data = action.payload  
                }
                return data 
            })
            console.log("Fifth step --> OLD Task UPDATED")
            localStorage.setItem("ToDoRedux", JSON.stringify(editedList));
            return {
                todoList: editedList
            }
        case DELETE_TASK:
            const afterDeleteList = state.todoList.filter(data => data !== action.id)
            console.log("AFter delete", afterDeleteList)
            localStorage.setItem("ToDoRedux", JSON.stringify(afterDeleteList));
            return {
                todoList: afterDeleteList
            }
        default:
            console.log("All Task GET")
            return state  
    }
}

export default addReducer