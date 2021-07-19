import React from 'react';
import './Pagination.css'
import {useSelector} from "react-redux";
const Pagination = ({selectPage, changePaginationPage, isFetching}) => {
    let maxPaginationPage = useSelector((state) => state.paginationChange.maxPage)
    let paginationItems = [];

    if (selectPage === 1) {
        paginationItems = [[1,1],['Next',2],['End',maxPaginationPage]]
    } else if (selectPage === 2) {
        paginationItems = [['Prev',1],[2,2],['Next',3],['End',maxPaginationPage]]
    } else if (selectPage > 2 && selectPage < maxPaginationPage - 1) {
        paginationItems = [['First',1],['Prev',selectPage - 1],[selectPage,selectPage],['Next',selectPage + 1],['End',maxPaginationPage]]
    } else if (selectPage === maxPaginationPage - 1) {
        paginationItems = [['First',1],['Prev',selectPage - 1],[selectPage,selectPage],['End',maxPaginationPage]]
    } else if (selectPage === maxPaginationPage) {
        paginationItems = [['First',1],['Prev',maxPaginationPage - 1],[selectPage,maxPaginationPage]]
    }

    return (
        <div className='paginationDiv'>
            {isFetching? '' : paginationItems.map(el => <button key={el[1]} className={el[1] === selectPage ? 'paginationActive' : 'paginationDef'} onClick={() => changePaginationPage(el[1])}>{el[0]}</button>)}
        </div>
    );
};

export default Pagination;