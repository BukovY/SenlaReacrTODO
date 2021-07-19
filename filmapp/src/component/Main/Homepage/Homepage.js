import React from 'react';
import Filter from "../Films/Filter";
import Pagination from "../Films/Pagination/Pagination";
import Cards from "../Films/Cards/Cards";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import './Homepage.css'

const Homepage = ({filmData, statusHandler, changeFilm, deleteFilm, openFilmInfo, selectPage, changePaginationPage, maxPaginationPage, changeFilter, isFetching, selectedFilter}) => {
    let role = useSelector((state) => state.appReducer.role)
    return (
        <div>
            <div className='flex'>
                <Filter changeFilter={changeFilter} selectedFilter={selectedFilter}/>
                {role === 'admin' ? <Link to='/addfilm' onClick={() => statusHandler('addFilm')}>Add film</Link> : ''}
            </div>
            {isFetching ? <div className="loader"></div> : <Cards filmData={filmData} changeFilm={changeFilm} role={role} deleteFilm={deleteFilm} openFilmInfo={openFilmInfo}/>}
            <Pagination isFetching={isFetching} selectPage={selectPage} changePaginationPage={changePaginationPage} maxPaginationPage={maxPaginationPage}/>
        </div>
    );
};

export default Homepage;
