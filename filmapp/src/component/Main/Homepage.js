import React from 'react';
import Filter from "./Films/Filter";
import Pangination from "./Films/Pangination";
import Cards from "./Films/Cards";
const Homepage = ({filmData, role, statusHandler, changeFilm, deliteFilm, openFilmInfo, selectPage, changePanginationPage, maxPanginationPage, changeFilter, isFetching}) => {
    return (
        <div className='main'>
            <div className='flex'>
                <Filter changeFilter={changeFilter}/>
                {role == 'admin' ? <button onClick={() => statusHandler('addFilm')}>Add film</button> : ''}
            </div>
            {isFetching ? <div className="loader"></div> : <Cards filmData={filmData} changeFilm={changeFilm} role={role} deliteFilm={deliteFilm} openFilmInfo={openFilmInfo}/>}
            <Pangination isFetching={isFetching} selectPage={selectPage} changePanginationPage={changePanginationPage} maxPanginationPage={maxPanginationPage}/>
        </div>
    );
};

export default Homepage;
