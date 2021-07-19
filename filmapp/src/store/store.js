import {createStore, combineReducers, compose} from 'redux'
import paginationChange from "./reducers/pangination";
import appReducer from "./reducers/app";

const rootReducer = combineReducers({
    paginationChange,
    appReducer
})

const store = createStore(
    rootReducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store