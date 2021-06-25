import React from 'react';

const Sign = ({statusHandler}) => {
    return (
        <div className='main'>
            <input/>
            <input/>
            <button>Sign UP</button>
            <button onClick={() => statusHandler('registration')}>Register</button>
        </div>
    );
};

export default Sign;