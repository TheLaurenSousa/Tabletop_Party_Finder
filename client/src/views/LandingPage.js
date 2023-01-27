import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <h1>Welcome to the Tabletop Party Finder!</h1>
            <Link to={'/login'}>
                <h2>Let's Dive In</h2>
            </Link>
        </div>
    )
}