import { tasks } from "../tasks";
import { TASK_CREATE_ERROR, TASK_CREATE_REQUEST, TASK_CREATE_SUCCESS, TASK_DELETE_ERROR, TASK_DELETE_REQUEST, TASK_DELETE_SUCCESS, TASK_LIST_ERROR, TASK_LIST_REQUEST, TASK_LIST_SUCCESS } from "../constants/taskConstants"

export const listOfTasks = () => async (dispatch) => {
    try {
        dispatch({type: TASK_LIST_REQUEST})
        const data = tasks


        setTimeout(() => { 
            dispatch({
                type: TASK_LIST_SUCCESS,
                payload: data
            })
        }, 300);
    } catch(error) {
        dispatch({
            type: TASK_LIST_ERROR,
            payload: error
        })
    }
}

export const deleteTask = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: TASK_DELETE_REQUEST})
        
        const tasks =  getState().taskList
        const data = tasks.filter(item => item._id !== id)

        setTimeout(() => { 
            dispatch({type: TASK_DELETE_SUCCESS,}) 
            dispatch({
                type: TASK_LIST_SUCCESS,
                payload: data
            })
        }, 300);
    } catch(error) {
        dispatch({
            type: TASK_DELETE_ERROR,
            payload: error
        })
    }
}

export const createTask = (task) => async (dispatch, getState) => {
    try {
        dispatch({type: TASK_CREATE_REQUEST})
        
        const tasks = getState()


        setTimeout(() => { 
            dispatch({ 
                type: TASK_CREATE_SUCCESS,
                payload: task
             })
             
        }, 300);

        
        // dispatch({ 
            //     type: TASK_LIST_SUCCESS,
            //     payload: result
            // })
        tasks.taskList = [...tasks.taskList, task]
    } catch(error) {
        dispatch({
            type: TASK_CREATE_ERROR,
            payload: error.response
        })
    }
}