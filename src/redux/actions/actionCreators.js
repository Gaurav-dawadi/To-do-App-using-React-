import { ADD_TASK, EDIT_TASK, DELETE_TASK } from './actionTypes'


export const ADD_TODO = (data) => {
    return{
        type: ADD_TASK,
        payload: data,
    }
}

export const EDIT_TODO = (text, id) => {
    return{
        type: EDIT_TASK,
        payload: text,
        id
    }
}

export const DELETE_TODO = (id) => {
    return{
        type: DELETE_TASK,
        id
    }
}
