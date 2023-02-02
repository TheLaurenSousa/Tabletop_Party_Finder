import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logoutProcess from './helpers/logoutHelper';

const Nav = () => {
    const navigate = useNavigate();

    const onLogoutClick = e => {
        logoutProcess()
            .then(res => {
                localStorage.clear();
            })
            .catch(err => console.log(err));
            navigate('/');
    }

    const onHomeClick = e => {
        navigate('/home');
    }

    const onGameClick = e => {
        navigate('/searchGames');
    }

    const onGMClick = e => {
        navigate('/searchGMs');
    }

    return (
        <div className='nav'>
            <h2 onClick={onHomeClick}>Tabletop Party Finder</h2>
            <ul>
                <li onClick={onGameClick}>Find Games</li>
                <li onClick={onGMClick}>Find GM</li>
                <li onClick={onLogoutClick}>Logout</li>
            </ul>
        </div>
    )


}