import {createStore, combineReducers, compose} from 'redux'
import panginationChange from "./panginationReducer";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
    panginationChange,
    appReducer
})

const store = createStore(
    rootReducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store