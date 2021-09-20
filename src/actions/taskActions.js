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

export const createTask = (task) => async (dispatch, getState) => {
    try {
        console.log(task)
        dispatch({type: CREATE_TASK, payload: task})
    } catch(error) {
        
    }
}

// export const deleteTask = (id) => async (dispatch, getState) => {
//     try {
//         dispatch({type: TASK_DELETE_REQUEST})
        
//         const tasks =  getState().taskList
//         const data = tasks

//         setTimeout(() => { 
//             dispatch({type: TASK_DELETE_SUCCESS,}) 
            
//         }, 300);
//     } catch(error) {
//         dispatch({
//             type: TASK_DELETE_ERROR,
//             payload: error
//         })
//     }
// }
