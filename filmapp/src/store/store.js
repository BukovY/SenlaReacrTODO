import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import panginationChange from "./reducers";

const rootReducer = combineReducers({
    panginationChange
})

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store