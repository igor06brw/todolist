import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE, CREATE_TASK, EDIT_TASK, DELETE_TASK } from "../constants/taskConstants"

export const fetchTasks = () => async (dispatch, getState) => {
    try {
        dispatch({type: FETCH_TASKS_REQUEST})
        
        
        const data = getState().taskReducer.tasks
        console.log(getState())



        setTimeout(() => { 
            dispatch({
                type: FETCH_TASKS_SUCCESS,
                payload: data
            })
        }, 300);
    } catch(error) {
        dispatch({
            type: FETCH_TASKS_FAILURE,
            payload: error
        })
    }
}

export const createTask = (task) => async (dispatch) => {
    try {
        dispatch({type: CREATE_TASK, payload: task})
    } catch(error) {
        
    }
}

export const deleteTask = (id) => async (dispatch) => {
    try {
        dispatch({type: DELETE_TASK, payload: id})

    } catch(error) {

    }
}
