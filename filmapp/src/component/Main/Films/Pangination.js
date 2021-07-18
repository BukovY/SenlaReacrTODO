import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changePage} from "../../../store/panginationReducer";

const Pangination = ({isFetching}) => {
    let selectPage = useSelector((state) => state.panginationChange.selectPage)
    let maxPage = useSelector((state) => state.panginationChange.maxPage)
    let dispatch = useDispatch()


    let panginationItems = [];

    if (selectPage == 1) {
        panginationItems = [[1,1],['next',2],['end',maxPage]]
    } else if (selectPage == 2) {
        panginationItems = [['prev',1],[2,2],['next',3],['end',maxPage]]
    } else if (selectPage > 2 && selectPage < maxPage - 1) {
        panginationItems = [['first',1],['prev',selectPage - 1],[selectPage,selectPage],['next',selectPage + 1],['end',maxPage]]
    } else if (selectPage == maxPage - 1) {
        panginationItems = [['first',1],['prev',selectPage - 1],[selectPage,selectPage],['end',maxPage]]
    } else if (selectPage == maxPage) {
        panginationItems = [['first',1],['prev',maxPage - 1],[selectPage,maxPage]]
    }

    return (
        <div id='panginationDiv'>
            {isFetching? '' : panginationItems.map(el => <button key={el[1]} className={el[1] == selectPage ? 'panginationActive' : 'panginationDef'} onClick={() => dispatch(changePage(el[1]))}>{el[0]}</button>)}
        </div>
    );
};

export default Pangination;