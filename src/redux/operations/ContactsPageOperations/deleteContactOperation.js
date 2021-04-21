import axios from 'axios';
import actions from '../../actions/ContactPageActions/deleteContact';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const onDeleteContact = id => dispatch => {

    dispatch(actions.deleteContactRequest());

    axios.delete(`/contacts/${id}`)
        .then(({data}) => dispatch(actions.deleteContactSuccess(id)))
        .catch(error => dispatch(actions.deleteContactError(error)))
};

export default onDeleteContact;