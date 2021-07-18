import {ADD_TODO, REMOVE_TODO, CHANGE_TODO} from './constants'

export const changeTodoInput = (val) => ({
    type: CHANGE_TODO,
    payload: val
})
 export const addTodo = () => ({
     type: ADD_TODO
 })
export const remoteTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id
})