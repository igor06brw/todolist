import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { taskReducer } from "./reducers/taskReducers";
import { finishedTasks, tasks } from "./tasks";

const reducer = combineReducers({
    task: taskReducer
})

const initialState = {
    task: tasks,
    finishedTasks: finishedTasks
}

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;