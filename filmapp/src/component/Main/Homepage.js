import React from 'react';
import Filter from "./Films/Filter";
import Pangination from "./Films/Pangination";
import Cards from "./Films/Cards";
import {Link} from "react-router-dom";

const Homepage = ({filmData, role, statusHandler, changeFilm, deliteFilm, openFilmInfo, selectPage, changePanginationPage, maxPanginationPage, changeFilter, isFetching, selectedFilfer}) => {
    return (
        <div className='main'>
            <div className='flex'>
                <Filter changeFilter={changeFilter} selectedFilfer={selectedFilfer}/>
                {role == 'admin' ? <Link to='/addfilm' onClick={() => statusHandler('addFilm')}>Add film</Link> : ''}
            </div>
            {isFetching ? <div className="loader"></div> : <Cards filmData={filmData} changeFilm={changeFilm} role={role} deliteFilm={deliteFilm} openFilmInfo={openFilmInfo}/>}
            <Pangination isFetching={isFetching} selectPage={selectPage} changePanginationPage={changePanginationPage} maxPanginationPage={maxPanginationPage}/>
        </div>
    );
};

export default Homepage;
