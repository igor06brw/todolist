import { TASK_CREATE_ERROR, TASK_CREATE_REQUEST, TASK_CREATE_SUCCESS, TASK_LIST_ERROR, TASK_LIST_REQUEST, TASK_LIST_SUCCESS } from "../constants/taskConstants"

export const taskReducer = (state = { tasks: []}, action) => {
    switch (action.type) {
        case TASK_LIST_REQUEST:
            return { tasks: [] }
        case TASK_LIST_SUCCESS:
            return { tasks: action.payload }
        case TASK_LIST_ERROR:
            return { error: action.payload }
        default:
            return state
    }
}

export const taskDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_LIST_REQUEST:
            return {}
        case TASK_LIST_SUCCESS:
            return {success: true }
        case TASK_LIST_ERROR:
            return { error: action.payload }
        default:
            return state
    }
}

export const taskCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_CREATE_REQUEST:
            return { }
        case TASK_CREATE_SUCCESS:
            return { success: true, data: action.payload }
        case TASK_CREATE_ERROR:
            return { error: action.payload }
        default:
            return state
    }
}