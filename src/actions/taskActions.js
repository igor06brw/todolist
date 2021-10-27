import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE, CREATE_TASK, EDIT_TASK, DELETE_TASK, COMPLETE_TASK } from "../constants/taskConstants"

export const fetchTasks = () => async (dispatch, getState) => {
    try {
        dispatch({type: FETCH_TASKS_REQUEST})
        
        const data = []
        
        for (let [key, value] of Object.entries(localStorage)) {
            data.push(JSON.parse(value))
        }
        
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
        localStorage.setItem(task._id, JSON.stringify(task))
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

export const editTask = (task) => async (dispatch) => {
    try {
        console.log(task, 'action')
        dispatch({ type: EDIT_TASK, payload: task})
    } catch(error) {

    }
}

export const completeTask = (task) => async (dispatch) => {
    try {
        console.log(task, 'complete task!')
        dispatch({ type: COMPLETE_TASK, payload: task})
    } catch(error) {

    }
}
