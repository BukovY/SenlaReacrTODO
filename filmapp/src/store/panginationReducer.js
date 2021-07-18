const CHANGE_PAGE = 'CHANGE_PAGE'

// actions
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