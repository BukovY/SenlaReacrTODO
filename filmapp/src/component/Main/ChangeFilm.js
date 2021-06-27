import React from 'react';

const ChangeFilm = ({title, description, pathImage, popularity, realiseDate, genres, averageVote, voteCount, isAdult, genresMap, changeInput, adultInputChange, validateInputs, genresInputChange, id}) => {
    return (
        <div className='main'>
            <h1>ChangeFilm id: {id}</h1>
            <input placeholder='title' className={title.valid ? '':'inputError'} onChange={(ev) => changeInput('title', ev.target.value)} value={title.value}/>
            {title.valid ? '' : 'Incorrect title'}
            <textarea placeholder='description' className={description.valid ? '':'inputError'} onChange={(ev) => changeInput('description', ev.target.value)} value={description.value}/>
            {description.valid ? '' : 'Incorrect description'}
            <input placeholder='pathImage' className={pathImage.valid ? '':'inputError'} onChange={(ev) => changeInput('pathImage', ev.target.value)} value={pathImage.value}/>
            {pathImage.valid ? '' : 'Incorrect pathImage'}
            <input placeholder='popularity' className={popularity.valid ? '':'inputError'} onChange={(ev) => changeInput('popularity', ev.target.value)} value={popularity.value}/>
            {popularity.valid ? '' : 'Incorrect popularity'}
            <input type='date' placeholder='realiseDate' className={realiseDate.valid ? '':'inputError'} onChange={(ev) => changeInput('realiseDate', ev.target.value)} value={realiseDate.value}/>
            {realiseDate.valid ? '' : 'Incorrect realiseDate'}
            <div className={genres.valid ? '':'inputError'}>
                {genresMap.map(el => <label key={el.id}>{el.name}<input type="checkbox" checked={genres.value.indexOf(el.id) != -1? 'checked': ''} onChange={(ev) => genresInputChange(el.id)}/></label>)}
                {genres.valid ? '' : 'Incorrect genres'}
            </div>
            <input placeholder='averageVote' className={averageVote.valid ? '':'inputError'} onChange={(ev) => changeInput('averageVote', ev.target.value)} value={averageVote.value}/>
            {averageVote.valid ? '' : 'Incorrect averageVote'}
            <input placeholder='voteCount' className={voteCount.valid ? '':'inputError'} onChange={(ev) => changeInput('voteCount', ev.target.value)} value={voteCount.value}/>
            {voteCount.valid ? '' : 'Incorrect voteCount'}
            <label>Adult<input placeholder='Alult' type="checkbox" checked={isAdult.value? 'checked': ''} onChange={(ev) => adultInputChange(isAdult.value)}/></label>
            <button onClick={() => validateInputs('addFilm', 'title', 'description', 'pathImage', 'popularity', 'realiseDate', 'genres','averageVote', 'voteCount', 'isAdult')}>Change</button>
        </div>
    );
};

export default ChangeFilm;