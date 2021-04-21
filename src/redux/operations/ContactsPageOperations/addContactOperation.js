import axios from 'axios';
import actions from '../../actions/ContactPageActions/addContact';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const onAddContact = text => dispatch => {

    const contact = {...text}

    dispatch(actions.addContactRequest());

    axios.post('/contacts', contact)
        .then(({data}) => dispatch(actions.addContactSuccess(data)))
        .catch(error => dispatch(actions.addContactError(error)));
};

export default onAddContact;