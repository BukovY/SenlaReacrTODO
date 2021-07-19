import {ROLE_CHANGE, USERNAME_CHANGE, ADD_USER, SET_LOADING, SET_FILMDATA} from "../constatns";

export const roleChange = (el) =>({
    type: ROLE_CHANGE,
    payload: el
})
export const usernameChange = (el) => ({
    type: USERNAME_CHANGE,
    payload: el
})
export const addUser =(el)=>({
    type: ADD_USER,
    payload: el
})
export const setLoading = (el) =>({
    type: SET_LOADING,
    payload: el
})
export const setFilmData = (el) => ({
    type:SET_FILMDATA,
    payload: el
})