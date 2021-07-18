/*
state = {
        page: 'notConnect',
        apiKey: '687697daf00f72e0a7e20cf9f55a44ec',
        selectedFilter: 'Без фильтра',
        ---role: 'admin',
        ---userName: 'admin',
        selectFilmId: 0,
        warning: '',
        ---users: users,
        isFetching: true,
        genres: [],
        filmData: [],
        myFilmAdd: [],
        delIds:[],
        isConnect: true,
    };
    const CHANGE_PAGE = 'CHANGE_PAGE'

export const changePage = (value) => ({
    type: CHANGE_PAGE,
    payload: value
})

const initialState = {
    maxPage: 15,
    selectPage: 1
}

const panginationChange = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PAGE:
            return{
                ...state,
                selectPage:action.payload
            };
        default:
            return state;
    }
}

export default panginationChange
[{ name: "admin", password: "533533", role: "admin", email: 'admin@mail.ru' },
    { name: "John", password: "533533", role: "user", email: 'user@mail.ru' }]
 */
import users from "../dummy_data/users";
const ROLE_CHANGE = 'ROLE_CHANGE'
const USERNAME_CHANGE = 'USERNAME_CHANGE'
const ADD_USER = 'ADD_USER'

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
const initialStateApp = {
    role: 'def',
    userName: '',
    users: users,
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
        default:
            return state;
    }
}

export default appReducer