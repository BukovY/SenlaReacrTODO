import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {roleChange, usernameChange} from "../../store/appReducer";

const Header = ({statusHandler}) => {
    let username = useSelector((state) => state.appReducer.userName)
    let role = useSelector((state) => state.appReducer.role)
    let dispatch = useDispatch()
    let logout = () => {
        dispatch(roleChange('def'))
        dispatch(usernameChange(''))
    }
    return (
        <header>
            <Link to='/' onClick={() => statusHandler('main')}>Home</Link>
            <div className='flex'>
                <p>{username}</p>
                {role === 'def' ? <Link to='/sign'> Sign in</Link> : <Link to='/' onClick={logout}> Log out</Link>}
            </div>
        </header>
    );
};

export default Header;