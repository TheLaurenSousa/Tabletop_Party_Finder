import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Nav from '../components/nav';

export default () => {
    const username = localStorage.getItem('username');
    const navigate = useNavigate();

    const onGameClick = e => {
        navigate('/searchGames');
    }

    const onGMClick = e => {
        navigate('/searchGMs');
    }

    return (
        <div>
            <Nav/>
            <h1>Welome {username}!</h1>
            <button onClick={onGameClick}>Find Open Games</button>
            <button onClick={onGMClick}>Find Game Masters</button>
            <p>Placeholder for user's active games</p>
            <p>Placeholder for user's game history</p>
        </div>
    )
}