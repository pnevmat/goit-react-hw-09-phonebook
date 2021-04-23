import React from 'react';
import {useDispatch} from 'react-redux';

import registerOperation from '../redux/operations/AuthorisationOperations/registerOperation';

import Header from '../components/Header/header';
import RegistrationForm from "../components/RegistrationForm/registrationForm";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const onRegistrationSubmit = (userData) => dispatch(registerOperation(userData))
    return (
        <>
            <Header />
            <h3>Sign Up Form</h3>
            <RegistrationForm 
                onRegistrationSubmit={onRegistrationSubmit}
            />
        </>
    )
};

export default RegisterPage;