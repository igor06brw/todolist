import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE, CREATE_TASK, EDIT_TASK, DELETE_TASK} from "../constants/taskConstants"

const initialState = {
    loading: false,
    tasks: [],
    error: ''
}

export const taskReducer = (state = initialState, action) => {
    
    

    switch (action.type) {
        case FETCH_TASKS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
                tasks: action.payload,
            }
        case FETCH_TASKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CREATE_TASK:
            return {
                ...state,
                tasks: state.tasks.concat(action.payload)
            }

        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task._id !== action.payload)
            }

        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task._id === action.payload._id ? {...action.payload} : task)
            }

        default:
            return state
    }
}