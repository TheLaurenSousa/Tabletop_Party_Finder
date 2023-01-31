import React, { useState } from 'react';
import '../../App.css';
import loginHelper from '../helpers/loginHelper';
import registrationHelper from '../helpers/registrationHelper';
import { useNavigate } from "react-router-dom";

const LoginForms = () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ errors, setErrors ] = useState([]);
    const navigate = useNavigate();

    const registrationHandler = e => {
        e.preventDefault();
        registrationHelper({ username, password, confirmPassword })
            .then((res) => {
                if (res.data.message === "Success!"){
                    localStorage.setItem('username', res.data.user.username);
                    localStorage.setItem('id', res.data.user._id);
                    navigate('/home');
                } else {
                    console.log(res);
                    const errorResponse = res.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors(errorArr);
                }
            });
    }

    const loginHandler = e => {
        e.preventDefault();
        loginHelper({ username, password })
            .then(res => {
                if (res.data.message === "Success!"){
                    localStorage.setItem('username', res.data.user.username);
                    localStorage.setItem('id', res.data.user._id);
                    navigate('/home');
                } else {
                    const errorResponse = res.data;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key])
                    }
                    setErrors(errorArr);
                }
            });
    }

    return (
        <div className='login'>
            {errors.map((err, i) => <p key={i}>{err}</p>)}
            <div>
                <form id='login' onSubmit={loginHandler}>
                    <h2>Login:</h2>
                    <p className='inputArea'>
                        <label>Username: </label>
                        <input type='text' name='username' autoComplete='off' onChange={(e) => setUsername(e.target.value)}/>
                    </p>
                    <p className='inputArea'>
                        <label>Password: </label>
                        <input type='password' name='password' onChange={(e) => setPassword(e.target.value)}/>
                    </p>
                    <input type="submit" value="Start Chatting"/>
                </form>
            </div>
            <div>
                <form id='registration' onSubmit={registrationHandler}>
                    <h2>Sign Up:</h2>
                    <p className='inputArea'>
                        <label>Username: </label>
                        <input type='text' name='username' autoComplete='off' onChange={(e) => setUsername(e.target.value)}/>
                    </p>
                    <p className='inputArea'>
                        <label>Password: </label>
                        <input type='password' name='password' onChange={(e) => setPassword(e.target.value)}/>
                    </p>
                    <p className='inputArea'>
                        <label>Confirm: </label>
                        <input type='password' name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </p>
                    <input type="submit" value="Start Chatting"/>
                </form>
            </div>
        </div>
    );
}

export default LoginForms;