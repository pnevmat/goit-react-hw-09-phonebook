import {createReducer} from '@reduxjs/toolkit';

import onSearchContacts from '../actions/ContactPageActions/searchContacts';

const filterReducer = createReducer('', {
    [onSearchContacts]: (_, {payload}) => payload
});

export default filterReducer;