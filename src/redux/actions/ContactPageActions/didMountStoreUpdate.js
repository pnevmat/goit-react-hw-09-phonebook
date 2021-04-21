import {createAction} from '@reduxjs/toolkit';

const updateStoreRequest = createAction('update/storeRequest');
const updateStoreSuccess = createAction('update/storeSuccess');
const updateStoreError = createAction('update/storeError');

export default {updateStoreRequest, updateStoreSuccess, updateStoreError};