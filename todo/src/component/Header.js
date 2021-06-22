import React from 'react';
import logo from '../img/Logo.png'
import searchIcon from '../img/Search.png'

const Header = ({ searchValue, searchHandler}) => {
    return (
        <header>
            <img title='logo' src={logo}/>
            <div>
                <img className="search" src={searchIcon}/>
            <input type="text" placeholder='Search task for to do' value={searchValue} onChange={(event) => searchHandler(event.target.value)}/>
            </div>
        </header>
    );
};

export default Header;