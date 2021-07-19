import {CHANGE_PAGE} from "../constatns";

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