import onSearchContacts from '../../actions/ContactPageActions/searchContacts';

const onFilterContacts = text => dispatch => {
    dispatch(onSearchContacts(text));
};

export default onFilterContacts;