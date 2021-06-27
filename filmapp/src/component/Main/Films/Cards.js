import React from 'react';
import Card from "./Card";

const Cards = ({filmData, changeFilm, role, deliteFilm,openFilmInfo}) => {
    return (
        <div className='main'>
            {filmData.map((el) => <Card key={el.id} el={el} changeFilm={changeFilm} role={role} deliteFilm={deliteFilm} openFilmInfo={openFilmInfo}
            />)}
        </div>
    );
};

export default Cards;