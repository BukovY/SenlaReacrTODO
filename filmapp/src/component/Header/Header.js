import React from 'react';

const Header = ({username, statusHandler, role, page}) => {
    return (
        <header>
            <button onClick={() => statusHandler('main')}>Home</button>
            <div className='flex'>
                {role == 'admin' ? <p>admin</p> : <p>{username}</p>}
                {username == '' ? <button onClick={() => statusHandler('sign')}> Sign in</button> : page === 'addFilm' ? <button onClick={() => statusHandler('addFilmAdminLogout')}> Log out</button> : <button onClick={() => statusHandler('mainLogOut')}> Log out</button>}
            </div>
        </header>
    );
};

export default Header;