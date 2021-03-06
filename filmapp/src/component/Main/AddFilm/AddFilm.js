import React from 'react';
const AddFilm = ({title, description, pathImage, popularity, realiseDate, genres, averageVote, voteCount, isAdult, genresMap, changeInput, adultInputChange, validateInputs, genresInputChange}) => {
    return (
        <div>
            <h1>AddFilm</h1>
            {[[title, 'title'], [description, 'description'], [pathImage, 'pathImage'], [popularity, 'popularity'],  [averageVote, 'averageVote'], [voteCount, 'voteCount']].map(el => <div key={el[1]}>
                <input placeholder={el[1]} className={el[0].valid ? '' : 'inputError'}
                       onChange={(ev) => changeInput(el[1], ev.target.value)} value={el[0].value}/>
                {el[0].valid ? '' : `Incorrect ${el[1]}`}</div>)}
            <input type="date" placeholder={'realiseDate'} className={realiseDate.valid ? '' : 'inputError'}
                   onChange={(ev) => changeInput('realiseDate', ev.target.value)} value={realiseDate.value}/>
            {realiseDate.valid ? '' : `Incorrect realiseDate`}
            <div className={genres.valid ? '' : 'inputError'}>
                {genresMap.map(el => <label key={el.name}><input type="checkbox"
                                                   checked={genres.value.indexOf(el.id) !== -1 ? 'checked' : ''}
                                                   onChange={(ev) => genresInputChange(el.id)}/>{el.name}</label>)}
                {genres.valid ? '' : 'Incorrect genres'}
            </div>
            <label><input placeholder='Alult' type="checkbox" checked={isAdult.value ? 'checked' : ''}
                          onChange={(ev) => adultInputChange(isAdult.value)}/>Adult</label>
            <button
                onClick={() => validateInputs('addFilm', 'title', 'description', 'pathImage', 'popularity', 'realiseDate', 'genres', 'averageVote', 'voteCount', 'isAdult')}>Add
            </button>
            <button
                onClick={() => validateInputs('clear', 'title', 'description', 'pathImage', 'popularity', 'realiseDate', 'genres', 'averageVote', 'voteCount', 'isAdult')}>Clear
            </button>
        </div>
    );
};

export default AddFilm;