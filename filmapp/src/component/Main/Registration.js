import React from 'react';

const Registration = ({name, surname, password, repeatPassword, email, changeInput, validateInputs, warning}) => {
    return (
        <div className='main'>
            <h1>Registration</h1>
            <input placeholder='name' className={name.valid ? '':'inputError'} onChange={(ev) => changeInput('name', ev.target.value)} value={name.value}/>
            {name.valid ? '' : 'Incorrect name'}
            <input placeholder='surname' className={surname.valid ? '':'inputError'} onChange={(ev) => changeInput('surname', ev.target.value)} value={surname.value}/>
            {surname.valid ? '' : 'Incorrect surname'}
            <input placeholder='password' className={password.valid ? '':'inputError'} onChange={(ev) => changeInput('password', ev.target.value)} value={password.value}/>
            {password.valid ? '' : 'Incorrect password'}
            <input placeholder='repeatPassword' className={repeatPassword.valid ? '':'inputError'} onChange={(ev) => changeInput('repeatPassword', ev.target.value)} value={repeatPassword.value}/>
            {repeatPassword.valid ? '' : 'Incorrect repeatPassword'}
            <input placeholder='email' className={email.valid ? '':'inputError'} onChange={(ev) => changeInput('email', ev.target.value)} value={email.value}/>
            {email.valid ? '' : 'Incorrect email'}
            {warning.length > 0 ? warning : ''}
            <button onClick={() => validateInputs('register', 'name', 'surname', 'password', 'repeatPassword', 'email')}>Sign UP</button>
            <button onClick={() => validateInputs('clearRegister', 'name', 'surname', 'password', 'repeatPassword', 'email')}>Clear</button>
        </div>
    );
};

export default Registration;