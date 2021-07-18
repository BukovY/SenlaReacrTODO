import users from "../dummy_data/users";
const ROLE_CHANGE = 'ROLE_CHANGE'
const USERNAME_CHANGE = 'USERNAME_CHANGE'
const ADD_USER = 'ADD_USER'
const SET_LOADING = 'SET_LOADING'
const SET_FILMDATA = 'SET_FILMDATA'

// actions
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

const initialStateApp = {
    role: 'def',
    userName: '',
    users: users,
    isFetching: true,
    filmData: [],
    genges:[]
}

const appReducer = (state = initialStateApp, action) => {
    switch (action.type) {
        case ROLE_CHANGE:
            return{
                ...state,
                role: action.payload
            }
        case USERNAME_CHANGE:
            return {
                ...state,
                userName: action.payload
            }
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case SET_LOADING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_FILMDATA:
            return {
                ...state,
                filmData: action.payload
            }
        default:
            return state;
    }
}

export default appReducer