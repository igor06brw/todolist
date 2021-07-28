import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { taskCreateReducer, taskDeleteReducer, taskReducer } from "./reducers/taskReducers";
import { finishedTasks, tasks } from "./tasks";

const reducer = combineReducers({
    task: taskReducer,
    taskDelete: taskDeleteReducer,
    taskCreate: taskCreateReducer
})

const initialState = {}

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;