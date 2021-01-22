import { ADD_TASK, EDIT_TASK, DELETE_TASK } from './actionTypes'


export const ADD_TODO = (data) => {
    console.log(`New Task ${data} Added`)
    return{
        type: ADD_TASK,
        payload: data,
    }
}

export const EDIT_TODO = (data, id) => {
    console.log(`Task ${data} EDITED`)
    return{
        type: EDIT_TASK,
        payload: data,
        id
    }
}

export const DELETE_TODO = (id) => {
    console.log(`Task with ID ${id} DELETED`)
    return{
        type: DELETE_TASK,
        id
    }
}
