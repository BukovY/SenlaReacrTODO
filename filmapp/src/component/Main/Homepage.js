import React from 'react';
import Filter from "./Films/Filter";
import Pagination from "./Films/Pagination";
import Cards from "./Films/Cards";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Homepage = ({filmData, statusHandler, changeFilm, deliteFilm, openFilmInfo, selectPage, changePanginationPage, maxPanginationPage, changeFilter, isFetching, selectedFilfer}) => {
    let role = useSelector((state) => state.appReducer.role)
    return (
        <div className='main'>
            <div className='flex'>
                <Filter changeFilter={changeFilter} selectedFilfer={selectedFilfer}/>
                {role === 'admin' ? <Link to='/addfilm' onClick={() => statusHandler('addFilm')}>Add film</Link> : ''}
            </div>
            {isFetching ? <div className="loader"></div> : <Cards filmData={filmData} changeFilm={changeFilm} role={role} deliteFilm={deliteFilm} openFilmInfo={openFilmInfo}/>}
            <Pagination isFetching={isFetching} selectPage={selectPage} changePanginationPage={changePanginationPage} maxPanginationPage={maxPanginationPage}/>
        </div>
    );
};

export default Homepage;
