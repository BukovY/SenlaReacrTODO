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