import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import panginationChange from "./panginationReducer";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
    panginationChange,
    appReducer
})

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store