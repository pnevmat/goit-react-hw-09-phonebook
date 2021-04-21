import {createReducer} from '@reduxjs/toolkit';

import registerActions from '../actions/AuthorisationActions/registerActions';
import loginActions from '../actions/AuthorisationActions/loginActions';
import getUserDataActions from '../actions/AuthorisationActions/getUserDataActions';
import logoutActions from '../actions/AuthorisationActions/logoutActions';

const authorisationInitialState = {};

const authorisationReducer = createReducer(authorisationInitialState, {
    [registerActions.registerSuccess]: (_, {payload}) => payload.user,
    [registerActions.registerError]: (_, {payload}) => payload,
    [loginActions.loginSuccess]: (_, {payload}) => payload.user,
    [loginActions.loginError]: (_, {payload}) => payload,
    [getUserDataActions.getUserDataSuccess]: (_, {payload}) => payload,
    [getUserDataActions.getUserDataError]: (_, {payload}) => payload,
    [logoutActions.logoutSuccess]: (_, {payload}) => payload,
    [logoutActions.logoutError]: (_, {payload}) => payload
});

// const tokenInitialState = null;

const tokenReducer = createReducer({userToken: null}, {
    [registerActions.registerSuccess]: (_, {payload}) => ({userToken: payload.token}),
    [loginActions.loginSuccess]: (_, {payload}) => ({userToken: payload.token}),
    [logoutActions.logoutSuccess]: (_, __) => ({userToken: null}),
});

const authorisedReducer = createReducer(false, {
    [registerActions.registerSuccess]: () => true,
    [loginActions.loginSuccess]: () => true,
    [getUserDataActions.getUserDataSuccess]: () => true,
    [logoutActions.logoutSuccess]: () => false,
    [registerActions.registerError]: () => false,
    [loginActions.loginError]: () => false,
    [getUserDataActions.getUserDataError]: () => false,
});

export default {authorisationReducer, tokenReducer, authorisedReducer};