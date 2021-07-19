import React from 'react';
import placeholder from '../../../img/placeholderFilm.jpg'
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const FilmInfo = ({selectedFilm, changeFilm, deleteFilm, genres, changeInput, userVote, validateInputs}) => {
    let role = useSelector((state) => state.appReducer.role)
    const {id} = useParams();
    let isAvailable = selectedFilm?.id !== undefined && Number(selectedFilm.id) === Number(id)
    let link = '';
    let genresRender = [];
    if(isAvailable === true){
        if(selectedFilm.backdrop_path != null){
            link = 'https://image.tmdb.org/t/p/w500/' + selectedFilm.backdrop_path
        } else {
            link = placeholder
        }
        for (let i of genres) {
            if (selectedFilm.genre_ids.indexOf(i.id) !== -1) {
                genresRender.push(i.name)
            }
        }
    }

    return (
        isAvailable ? (<div className='main '>
            <h1>Информация о фильме</h1>
            <div className='flex'>
                <div><img src={link} height='auto' alt='cover'/>
                    {role === 'admin' ? <Link to={`/changefilm/${selectedFilm.id}`} className='actionButton' onClick={() => changeFilm(selectedFilm.id)}>Change</Link> : ''}
                    {role === 'admin' ? <Link to='/' className='actionButton' onClick={() => deleteFilm(selectedFilm.id)}>Delete</Link> : ''}
                </div>
                <div><p>Title: {selectedFilm.title}</p>
                    <p>Overview: {selectedFilm.overview}</p>
                    <p>Genres: {genresRender.map(el => el + ' ')}</p>
                    <p>Popularity: {selectedFilm.popularity}</p>
                    <p>Release date: {selectedFilm.release_date}</p>
                    <p>Vote average: {selectedFilm.vote_average}</p>
                    <p>Vote count: {selectedFilm.vote_count}</p>
                    {role === 'user' ? <input className={userVote.valid ? '':'inputError'} onChange={(ev) => changeInput('userVote', ev.target.value)} value={userVote.value}/> : ''}
                    {role === 'user' && !userVote.valid? 'Оценка некорректная, пожалуйста смените оценку' : ''}
                    {role === 'user' ? <button onClick={() => validateInputs('changeVote','userVote')}>Vote</button> : ''}</div>
            </div>
        </div>) : (<p>Даного фильма нет, перейдите пожалуйста с главной</p>)


    );
};

export default FilmInfo;
