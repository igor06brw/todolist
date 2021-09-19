import { TASK_CREATE_ERROR, TASK_CREATE_REQUEST, TASK_CREATE_SUCCESS, TASK_LIST_ERROR, TASK_LIST_REQUEST, TASK_LIST_SUCCESS } from "../constants/taskConstants"

export const tasks = (state = [], action) => {
    switch (action.type) {
        case FETCH_TASKS_REQUEST:
        
        case FETCH_TASKS_SUCCESS:

        case FETCH_TASKS_FAILURE:

        case CREATE_TASK:
            
        case DELETE_TASK:

        case EDIT_TASK:

        default:
            return state
    }
}