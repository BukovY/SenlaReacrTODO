import {ADD_TODO, REMOVE_TODO, CHANGE_TODO} from './constants'
import {nanoid} from 'nanoid'

const initialState = {
    todoNow: '',
    todos: []
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TODO:
            return {
                ...state,
                todoNow: action.payload
            }
        case ADD_TODO:
            if(state.todoNow > 0){
                let todo = {
                    text: state.todoNow,
                    id: nanoid()
                }
                return {
                    ...state,
                    todos: [...state.todos, todo]
                }
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(el => el.id != action.payload)
            }
        default:
            return state

    }
}