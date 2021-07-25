import { tasks } from "../tasks";
import { TASK_LIST_ERROR, TASK_LIST_REQUEST, TASK_LIST_SUCCESS } from "../constants/taskConstants"

export const listOfTasks = () => async (dispatch) => {
    try {
        dispatch({type: TASK_LIST_REQUEST})
        const data = tasks
        console.log(tasks)


        dispatch({
            type: TASK_LIST_SUCCESS,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: TASK_LIST_ERROR,
            payload: error
        })
    }
}