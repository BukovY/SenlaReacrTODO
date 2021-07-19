import {CHANGE_PAGE} from "../constatns";

export const changePage = (value) => ({
    type: CHANGE_PAGE,
    payload: value
})