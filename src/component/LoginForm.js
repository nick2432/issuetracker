import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../action/authActions';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector(state => state.auth.error);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password));
    };

    if (isAuthenticated) {
        navigate('/issues');
    }

    return (
        <div className="main-container">
            <div className="left-side">
                <div className="welcome-text">
                    <h1>Welcome to Our Platform</h1>
                    <p>username - nikhil  password - pas123</p>
                </div>
            </div>
            <div className="right-side">
                <div className="login-container">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                                required
                            />
                        </div>
                        <div className="input-container">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
