import React from 'react';
import placeholder from '../../../../img/placeholderFilm.jpg'
import {Link} from 'react-router-dom'
import './Card.css'

const Card = ({el, changeFilm, role, deleteFilm, openFilmInfo}) => {
    let link
    if(el.poster_path != null){
        link = 'https://image.tmdb.org/t/p/w500/' + el.poster_path
    } else {
        link = placeholder
    }

    return(<>
        <div className="cardFilm"  >
            <p >{el.original_title}</p>
            <Link  to={`/filminfo/${el.id}`} onClick={(ev) => openFilmInfo(el.id, ev.target.tagName)}>
            <img src={link} alt='cover'/>
            </Link>
            <p>{el.vote_average} / {el.release_date}</p>
            {role === 'admin' ? <Link to={`/changefilm/${el.id}`} className='actionButton' onClick={() => changeFilm(el.id)}>Change film</Link> : ''}
            {role === 'admin' ? <button className='actionButton' onClick={() => deleteFilm(el.id)}>Delete film</button> : ''}
        </div>
    </>)
};

export default Card;
