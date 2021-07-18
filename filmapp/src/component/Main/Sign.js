import React from 'react';
import {Link} from "react-router-dom";

const Sign = ({statusHandler, email, password, changeInput, validateInputs, warning}) => {
    return (
        <div className='main'>
            <input placeholder='Email' className={email.valid ? '':'inputError'} onChange={(ev) => changeInput('email', ev.target.value)} value={email.value}/>
            {email.valid ? '' : 'Некорректный email'}
            <input placeholder='Password' className={password.valid ? '':'inputError'} onChange={(ev) => changeInput('password', ev.target.value)} value={password.value}/>
            {password.valid ? '' : 'Некорректный password'}
            {warning.length > 0 ? warning : ''}
            <button onClick={() => validateInputs('signIn', 'email', 'password')}>Sign UP</button>
            <Link to='/register' onClick={() => statusHandler('registration')}>Register</Link>
        </div>
    );
};

export default Sign;