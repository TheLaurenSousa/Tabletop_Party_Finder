import React, { useState } from 'react';
import '../App.css';
import Nav from '../components/nav';

export default () => {
    const username = localStorage.getItem('username');

    return (
        <div>
            <Nav/>
            <h1>Welome {username}!</h1>
        </div>
    )
}