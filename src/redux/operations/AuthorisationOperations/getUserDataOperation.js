import axios from "axios";
import getUserDataActions from '../../actions/AuthorisationActions/getUserDataActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
};

const getUserDataOperation = () => async (dispatch, getState) => {
    const {
        userToken: {userToken}
    } = getState();

    if (!userToken) {
      return;  
    };

    dispatch(getUserDataActions.getUserDataRequest());
    token.set(userToken)

    try {
        const response = await axios.get('/users/current');

        dispatch(getUserDataActions.getUserDataSuccess(response.data));
    } catch(error) {
        dispatch(getUserDataActions.getUserDataError(error.message));
    };
};

export default getUserDataOperation;