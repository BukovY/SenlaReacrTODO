import React from 'react';
import Card from "./Card";

const Cards = ({filmData, changeFilm, role, deliteFilm}) => {
    return (
        <div className='main'>
            {filmData.map((el) => <Card el={el} changeFilm={changeFilm} role={role} deliteFilm={deliteFilm}

                //deleteCard={props.deleteCard}
                //setId={props.setId}
            />)}
        </div>
    );
};

export default Cards;