import {createAction} from '@reduxjs/toolkit';

const registerRequest = createAction('authorisation/registerRequest');
const registerSuccess = createAction('authorisation/registerSuccess');
const registerError = createAction('authorisation/registerError');

export default {registerRequest, registerSuccess, registerError};