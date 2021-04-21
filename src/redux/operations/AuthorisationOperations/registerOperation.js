import axios from "axios";
import registerActions from '../../actions/AuthorisationActions/registerActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
};

// {
//     "name":"Vadim",
//     "email":"kislenkoandrey10@gmail.com",
//     "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc2Zjc2MDY2N2M4MjAwMTc5ZDdkY2UiLCJpYXQiOjE2MTg0MDkzMTJ9.IVQ07ceBFrS-fICkN1XFGXAzbaREDNyJXG2sMlBrlkg"
// }

// {
//     "name":"pnevmat",
//     "email":"lejlipet@gmail.com",
//     "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc2ZjljNTY2N2M4MjAwMTc5ZDdkZDMiLCJpYXQiOjE2MTg0MDk5MjV9.L7pXex2Jkeg0k6V1hnnKq-Tk3HCw8OW1EFSLY35WHKs"
// }

const registerOperation = userData => async dispatch => {
    dispatch(registerActions.registerRequest());

    try {
        const response = await axios.post('/users/signup', userData);

        token.set(response.data.token);

        dispatch(registerActions.registerSuccess(response.data));
    }catch(error) {
        dispatch(registerActions.registerError(error.message));
    };
};

export default registerOperation;