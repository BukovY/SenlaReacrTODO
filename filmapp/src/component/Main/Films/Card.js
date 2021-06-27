import React from 'react';
import placeholder from '../../../img/placeholderFilm.jpg'

const Card = ({el, changeFilm, role, deliteFilm, openFilmInfo}) => {
    let link
    if(el.poster_path != null){
        link = 'https://image.tmdb.org/t/p/w500/' + el.poster_path
    } else {
        link = placeholder
    }

    return(<>
        <div className="cardFilm"  onClick={(ev) => openFilmInfo(el.id, ev.target.tagName)}>
            <p>{el.original_title}</p>
            <img src={link}/>
            <p>{el.vote_average} / {el.release_date}</p>
            {role == 'admin' ? <button onClick={() => changeFilm(el.id)}>Change film</button> : ''}
            {role == 'admin' ? <button onClick={() => deliteFilm(el.id)}>Delite film</button> : ''}
        </div>
    </>)
};

export default Card;
