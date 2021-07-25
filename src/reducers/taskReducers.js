import { TASK_LIST_ERROR, TASK_LIST_REQUEST, TASK_LIST_SUCCESS } from "../constants/taskConstants"

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