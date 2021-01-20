import { ADD_TASK, EDIT_TASK, DELETE_TASK } from './actionTypes'


export const ADD_TODO = (data) => {
    return{
        type: ADD_TASK,
        data
    }
}

export const EDIT_TODO = (data, id) => {
    return{
        type: EDIT_TASK,
        data,
        id
    }
}

export const DELETE_TODO = (id) => {
    return{
        type: DELETE_TASK,
        id
    }
}
