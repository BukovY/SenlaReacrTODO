import React from 'react';

const Sign = ({statusHandler, email, password, changeInput, validateInputs}) => {
    return (
        <div className='main'>
            <input className={email.valid ? '':'inputError'} onChange={(ev) => changeInput('email', ev.target.value)} value={email.value}/>
            {email.valid ? '' : 'Некорректный email'}
            <input className={password.valid ? '':'inputError'} onChange={(ev) => changeInput('password', ev.target.value)} value={password.value}/>
            {password.valid ? '' : 'Некорректный password'}
            <button onClick={() => validateInputs('email', 'password')}>Sign UP</button>
            <button onClick={() => statusHandler('registration')}>Register</button>
        </div>
    );
};

export default Sign;