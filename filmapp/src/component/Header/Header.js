import React from 'react';
import {Link} from "react-router-dom";

const Header = ({username, statusHandler, role, page}) => {
    return (
        <header>
            <Link to='/' onClick={() => statusHandler('main')}>Home</Link>
            <div className='flex'>
                {role == 'admin' ? <p>admin</p> : <p>{username}</p>}
                {username == '' ? <Link to='/sign' onClick={() => statusHandler('sign')}> Sign in</Link> :
                    page === 'addFilm' ? <Link to='/' onClick={() => statusHandler('addFilmAdminLogout')}> Log out</Link> :
                        <Link to='/' onClick={() => statusHandler('mainLogOut')}> Log out</Link>}
            </div>
        </header>
    );
};

export default Header;