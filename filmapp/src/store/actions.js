import {CHANGE_PAGE} from "./constant";

export const changePage = (value) => ({
    type: CHANGE_PAGE,
    payload: value
})