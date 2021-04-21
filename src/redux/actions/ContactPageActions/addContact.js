import {createAction} from '@reduxjs/toolkit';

// const onAddContact = createAction('add/contact', ({name, number}) => ({
//     payload: {
//         id: shortid.generate(),
//         name: name,
//         number: number
//     }
// }));

const addContactRequest = createAction('add/contactRequest');
const addContactSuccess = createAction('add/contactSuccess');
const addContactError = createAction('add/contactError');

export default {addContactRequest, addContactSuccess, addContactError};