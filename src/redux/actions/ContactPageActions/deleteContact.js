import {createAction} from '@reduxjs/toolkit';

const deleteContactRequest = createAction('delete/contactRequest');
const deleteContactSuccess = createAction('delete/contactSuccess');
const deleteContactError = createAction('delete/contactError');

export default {deleteContactRequest, deleteContactSuccess, deleteContactError};