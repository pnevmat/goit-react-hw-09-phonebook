import axios from "axios";
import logoutActions from '../../actions/AuthorisationActions/logoutActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
    unset() {
        axios.defaults.headers.common.Authorization = null;
    }
};

const logoutOperation = () => async dispatch => {
    dispatch(logoutActions.logoutRequest());

    try {
        const response = await axios.post('/users/logout');

        token.unset();
        dispatch(logoutActions.logoutSuccess(response.data));
    }catch(error) {
        dispatch(logoutActions.logoutError(error.message));
    };
};

export default logoutOperation;