import React from 'react';

const Filter = ({changeFilter, selectedFilfer}) => {
    return (
        <div className='main'>
            <select size="1"  onChange={(el) => changeFilter(el.target.value)} value={selectedFilfer}>
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