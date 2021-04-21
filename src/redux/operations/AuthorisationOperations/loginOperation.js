import axios from "axios";
import loginActions from '../../actions/AuthorisationActions/loginActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
};

// {
//     "name":"Vadim",
//     "email":"kislenkoandrey10@gmail.com",
//     "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc2Zjc2MDY2N2M4MjAwMTc5ZDdkY2UiLCJpYXQiOjE2MTg0MDkzMTJ9.IVQ07ceBFrS-fICkN1XFGXAzbaREDNyJXG2sMlBrlkg",
//     "password":"12345678"
// }

// {
//     "name":"pnevmat",
//     "email":"lejlipet@gmail.com",
//     "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc2ZjljNTY2N2M4MjAwMTc5ZDdkZDMiLCJpYXQiOjE2MTg0MDk5MjV9.L7pXex2Jkeg0k6V1hnnKq-Tk3HCw8OW1EFSLY35WHKs",
//     "password":""
// }

const registerOperation = userData => async dispatch => {
    dispatch(loginActions.loginRequest());

    try {
        const response = await axios.post('/users/login', userData);

        token.set(response.data.token)
        dispatch(loginActions.loginSuccess(response.data));
    }catch(error) {
        dispatch(loginActions.loginError(error.message));
    };
};

export default registerOperation;