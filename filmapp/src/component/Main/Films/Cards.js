import React from 'react';
import Card from "./Card";

const Cards = ({filmData, changeFilm, role, deliteFilm,openFilmInfo}) => {
    return (
        <div className='main'>
            {filmData.map((el) => <Card el={el} changeFilm={changeFilm} role={role} deliteFilm={deliteFilm} openFilmInfo={openFilmInfo}

                //deleteCard={props.deleteCard}
                //setId={props.setId}
            />)}
        </div>
    );
};

export default Cards;