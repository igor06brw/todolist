import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE, CREATE_TASK, EDIT_TASK, DELETE_TASK} from "../constants/taskConstants"

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