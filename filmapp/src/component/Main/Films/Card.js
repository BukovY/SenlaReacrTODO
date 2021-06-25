import React from 'react';
import placeholder from '../../../img/placeholderFilm.jpg'

const Card = ({el, changeFilm, role, deliteFilm}) => {
    let link
    if(el.backdrop_path != null){
        link = 'https://image.tmdb.org/t/p/w500/' + el.backdrop_path
    } else {
        link = placeholder
    }

    let change = () => {
        changeFilm(el.id)
    }
    /*

    let setId = () => {
        props.setId(props.id)
    }
      {//<button onClick={deleteHandler}>Delete</button>}
    */
    return(<>
        <div class="cardFilm" filmid={el.id}>
            <p>{el.original_title}</p>
            <img src={link}/>
            <p>{el.vote_average} / {el.release_date}</p>
            {role == 'admin' ? <button onClick={() => changeFilm(el.id)}>Change film</button> : ''}
            {role == 'admin' ? <button onClick={() => deliteFilm(el.id)}>Delite film</button> : ''}
        </div>
    </>)
};

export default Card;
