import React from 'react';
import {useDispatch} from 'react-redux';

import loginOperation from '../redux/operations/AuthorisationOperations/loginOperation';

import Header from '../components/Header/header';
import LoginForm from "../components/LoginForm/loginForm";

const LoginPage = () => {
    const dispatch = useDispatch();
    const onLoginSubmit = userData => dispatch(loginOperation(userData));
    return (
        <>
            <Header />
            <h3>Login Form</h3>
            <LoginForm 
                onLoginSubmit={onLoginSubmit}
            />
        </>
    )
};

export default LoginPage;