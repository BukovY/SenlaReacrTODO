import {createStore, combineReducers} from 'redux'
import todosReducer from "../../../filmapp/src/store/panginationReducer";
const rootReducers = combineReducers({
    todosReducer
})
const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store
/*
const rootReducer = combineReducers({
    todos: todosReducer
})

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    //compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store
 */