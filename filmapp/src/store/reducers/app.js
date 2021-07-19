import users from "../../dummy_data/users";
import {ROLE_CHANGE, USERNAME_CHANGE, ADD_USER, SET_LOADING, SET_FILMDATA} from "../constatns";

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