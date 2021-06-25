import React from 'react';

const Header = ({username, statusHandler, role}) => {
    return (
        <header>
            <button onClick={() => statusHandler('main')}>Home</button>
            <div>
                {role == 'admin' ? <p>admin</p> : <p>{username}</p>}
                {username == '' ? <button onClick={() => statusHandler('sign')}> Sign in</button> :
                    <button onClick={() => statusHandler('mainLogOut')}> Log out</button>}
            </div>
        </header>
    );
};

export default Header;