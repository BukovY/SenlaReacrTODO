import React from 'react';
/*
<select size="1" id="filterOption" onchange="filterchange()">
<option>Без фильтра</option>
<option>По убыванию рейтинга</option>
<option>По возрастанию рейтинга</option>
<option>По убыванию даты релиза</option>
<option>По возрастанию даты релиза</option>
</select>
function getGetURL(state) {
    let filter = 'popularity.desc';

    switch (state.selectedFilter) {
        case 'Без фильтра':
            filter = 'popularity.desc';
            break;
        case 'По убыванию рейтинга':
            filter = 'vote_average.desc';
            break;
        case 'По возрастанию рейтинга':
            filter = 'vote_average.asc';
            break;
        case 'По убыванию даты релиза':
            filter = 'release_date.desc';
            break;
        case 'По возрастанию даты релиза':
            filter = 'release_date.asc';
            break;
        default:
            alert('Нет такого фильтра, если добавил чноно новое то отрефакторь чтоб работало старое')
    }

    return `https://api.themoviedb.org/3/discover/movie?api_key=${state.apiKey}&language=en-US&sort_by=${filter}&include_adult=false&include_video=false&page=${state.selectPage}&with_watch_monetization_types=flatrate`
}
 */
const Filter = ({changeFilter}) => {
    return (
        <div className='main'>
            <select size="1"  onChange={(el) => changeFilter(el.target.value)}>
                <option>Без фильтра</option>
                <option>По убыванию рейтинга</option>
                <option>По возрастанию рейтинга</option>
                <option>По убыванию даты релиза</option>
                <option>По возрастанию даты релиза</option>
            </select>
        </div>
    );
};

export default Filter;