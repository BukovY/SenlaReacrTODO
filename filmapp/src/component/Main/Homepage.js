import React from 'react';
import Filter from "./Films/Filter";
import Pangination from "./Films/Pangination";
import Cards from "./Films/Cards";
const Homepage = ({filmData, role, statusHandler, changeFilm, deliteFilm, openFilmInfo, selectPage, changePanginationPage, maxPanginationPage, changeFilter, isFetching}) => {
    return (
        <div className='main'>
            <Filter changeFilter={changeFilter}/>
            {role == 'admin' ? <button onClick={() => statusHandler('addFilm')}>Add film</button> : ''}
            {isFetching ? '<p>Получаю данные...</p>'  : <Cards filmData={filmData} changeFilm={changeFilm} role={role} deliteFilm={deliteFilm} openFilmInfo={openFilmInfo}/>}
            <Pangination selectPage={selectPage} changePanginationPage={changePanginationPage} maxPanginationPage={maxPanginationPage}/>
        </div>
    );
};

export default Homepage;