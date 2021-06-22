import React from 'react';

const Header = ({ searchValue, searchHandler}) => {
    return (
        <header>
            <img title='logo'/>
            <input placeholder='search' value={searchValue} onChange={(event) => searchHandler(event.target.value)}/>
        </header>
    );
};

export default Header;