import {createSelector} from '@reduxjs/toolkit'

const getAllContacts = state => {
  return state.contacts
};

const getFilter = state => state.filter;

// const contactsFinderHandler = (contacts, filter) => {

//     if (filter !== '') {
//       const foundContacts = contacts.filter(contact => 
//         contact.name.toLowerCase().includes(filter));
//       return foundContacts
//     };
// };

const contactsFinderHandler = createSelector([getAllContacts, getFilter], (contacts, filter) => {
  if (filter !== '' && contacts.length > 0) {
    const foundContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(filter));
    return foundContacts
  };
});

const authorisation = state => {
  return state.isAuthorised};
const getUserName = state => state.userData.name;

export default {getAllContacts, getFilter, contactsFinderHandler, authorisation, getUserName};