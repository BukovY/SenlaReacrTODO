import React from 'react';
import Filter from "./Films/Filter";
import Pangination from "./Films/Pangination";
import Cards from "./Films/Cards";
// filmData={this.state.filmData} role={this.state.role} statusHandler={this.statusHandler}
const Homepage = ({filmData, role, statusHandler, changeFilm, deliteFilm, openFilmInfo}) => {
    return (
        <div className='main'>
            <Filter/>
            {role == 'admin' ? <button onClick={() => statusHandler('addFilm')}>Add film</button> : ''}
            <Cards filmData={filmData} changeFilm={changeFilm} role={role} deliteFilm={deliteFilm} openFilmInfo={openFilmInfo}/>
            <Pangination/>
        </div>
    );
};

export default Homepage;