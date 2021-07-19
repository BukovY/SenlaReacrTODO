import React from 'react';
import './Pagination.css'
const Pagination = ({selectPage, changePaginationPage, maxPanginationPage, isFetching}) => {
    let paginationItems = [];

    if (selectPage === 1) {
        paginationItems = [[1,1],['next',2],['end',maxPanginationPage]]
    } else if (selectPage === 2) {
        paginationItems = [['prev',1],[2,2],['next',3],['end',maxPanginationPage]]
    } else if (selectPage > 2 && selectPage < maxPanginationPage - 1) {
        paginationItems = [['first',1],['prev',selectPage - 1],[selectPage,selectPage],['next',selectPage + 1],['end',maxPanginationPage]]
    } else if (selectPage === maxPanginationPage - 1) {
        paginationItems = [['first',1],['prev',selectPage - 1],[selectPage,selectPage],['end',maxPanginationPage]]
    } else if (selectPage === maxPanginationPage) {
        paginationItems = [['first',1],['prev',maxPanginationPage - 1],[selectPage,maxPanginationPage]]
    }

    return (
        <div className='paginationDiv'>
            {isFetching? '' : paginationItems.map(el => <button key={el[1]} className={el[1] === selectPage ? 'paginationActive' : 'paginationDef'} onClick={() => changePaginationPage(el[1])}>{el[0]}</button>)}
        </div>
    );
};

export default Pagination;