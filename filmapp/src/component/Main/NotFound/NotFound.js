import React from 'react';
const NotFound = ({statusHandler}) => {
    return (
        <div >
            <h1>Page not found</h1>
            <p>Login or go homepage</p>
            <button onClick={() => statusHandler('goHomepage')}>Go homepage</button>
        </div>
    );
};

export default NotFound;