import React from 'react';
import Card from "./Card/Card";

const Cards = ({filmData, changeFilm, role, deleteFilm,openFilmInfo}) => {
    return (
        <div id='film'>
            {filmData.map((el) => <Card key={el.id} el={el} changeFilm={changeFilm} role={role} deleteFilm={deleteFilm} openFilmInfo={openFilmInfo}
            />)}
        </div>
    );
};

export default Cards;