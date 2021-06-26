import React from 'react';
import placeholder from '../../img/placeholderFilm.jpg'

const FilmInfo = ({selectedFilm, role, changeFilm, deliteFilm, genres, changeInput, userVote, validateInputs}) => {

    let link
    if(selectedFilm.backdrop_path != null){
        link = 'https://image.tmdb.org/t/p/w500/' + selectedFilm.backdrop_path
    } else {
        link = placeholder
    }

    let genresRender = [];
    for (let i of genres) {
        if (selectedFilm.genre_ids.indexOf(i.id) != -1) {
            genresRender.push(i.name)
        }
    }

    return (
        <div className='main'>
            <h1>Информация о фильме</h1>
            <img src={link}/>
            {role == 'admin' ? <button onClick={() => changeFilm(selectedFilm.id)}>Change</button> : ''}
            {role == 'admin' ? <button onClick={() => deliteFilm(selectedFilm.id)}>Delite</button> : ''}
            <p>Title: {selectedFilm.title}</p>
            <p>Overview: {selectedFilm.overview}</p>
            <p>Genres: {genresRender.map(el => el + ' ')}</p>
            <p>Popularity: {selectedFilm.popularity}</p>
            <p>Release date: {selectedFilm.release_date}</p>
            <p>Vote average: {selectedFilm.vote_average}</p>
            <p>Vote count: {selectedFilm.vote_count}</p>
            {role == 'user' ? <input className={userVote.valid ? '':'inputError'} onChange={(ev) => changeInput('userVote', ev.target.value)} value={userVote.value}/> : ''}
            {role === 'user' && userVote.valid? 'Оценка некорректная, пожалуйста смените оценку' : ''}

            {role == 'user' ? <button onClick={() => validateInputs('changeVote','userVote')}>Vote</button> : ''}
        </div>
    );
};

export default FilmInfo;
