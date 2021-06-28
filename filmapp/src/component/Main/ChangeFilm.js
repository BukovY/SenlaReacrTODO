import React from 'react';
const ChangeFilm = ({title, description, pathImage, popularity, realiseDate, genres, averageVote, voteCount, isAdult, genresMap, changeInput, adultInputChange, validateInputs, genresInputChange, id}) => {
    return (
        <div className='main'>
            <h1>ChangeFilm id: {id}</h1>
            {[[title, 'title'], [description, 'description'], [pathImage, 'pathImage'], [popularity, 'popularity'], [realiseDate, 'realiseDate'], [averageVote, 'averageVote'], [voteCount, 'voteCount']].map(el => <>
                <input placeholder={el[1]} className={el[0].valid ? '' : 'inputError'}
                       onChange={(ev) => changeInput(el[1], ev.target.value)} value={el[0].value}/>
                {el[0].valid ? '' : `Incorrect ${el[1]}`}</>)}
            <label><input placeholder='Alult' type="checkbox" checked={isAdult.value ? 'checked' : ''}
                          onChange={(ev) => adultInputChange(isAdult.value)}/>Adult</label>
                <h3>Genres</h3>
            <div className={genres.valid ? 'genres' : 'genres inputError'}>
                {genresMap.map(el => <label><input type="checkbox"
                                                   checked={genres.value.indexOf(el.id) != -1 ? 'checked' : ''}
                                                   onChange={(ev) => genresInputChange(el.id)}/>{el.name}</label>)}
                {genres.valid ? '' : 'Incorrect genres'}
            </div>
            <button onClick={() => validateInputs('addFilm', 'title', 'description', 'pathImage', 'popularity', 'realiseDate', 'genres','averageVote', 'voteCount', 'isAdult')}>Change</button>
        </div>
    );
};

export default ChangeFilm;