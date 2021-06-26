import React from 'react';

const Registration = ({name, surname, password, repeatPassword, email, changeInput, validateInputs}) => {
    return (
        <div className='main'>
            <h1>Registration</h1>
            <input placeholder='name' className={name.valid ? '':'inputError'} onChange={(ev) => changeInput('name', ev.target.value)} value={name.value}/>
            {name.valid ? '' : 'Incorrect name'}
            <input placeholder='surname' className={surname.valid ? '':'inputError'} onChange={(ev) => changeInput('surname', ev.target.value)} value={surname.value}/>
            {name.valid ? '' : 'Incorrect surname'}
            <input placeholder='password' className={password.valid ? '':'inputError'} onChange={(ev) => changeInput('password', ev.target.value)} value={password.value}/>
            {name.valid ? '' : 'Incorrect password'}
            <input placeholder='repeatPassword' className={repeatPassword.valid ? '':'inputError'} onChange={(ev) => changeInput('repeatPassword', ev.target.value)} value={repeatPassword.value}/>
            {name.valid ? '' : 'Incorrect repeatPassword'}
            <input placeholder='email' className={email.valid ? '':'inputError'} onChange={(ev) => changeInput('email', ev.target.value)} value={email.value}/>
            {name.valid ? '' : 'Incorrect email'}
            <button onClick={() => validateInputs('register', 'name', 'surname', 'password', 'repeatPassword', 'email')}>Sign UP</button>
        </div>
    );
};

export default Registration;