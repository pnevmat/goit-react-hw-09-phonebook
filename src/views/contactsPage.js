import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import onStoreUpdateOperation from '../redux/operations/ContactsPageOperations/storeUpdateOperation';
import onAddContactOperation from '../redux/operations/ContactsPageOperations/addContactOperation';
import onDeleteContactOperation from '../redux/operations/ContactsPageOperations/deleteContactOperation';
import onFilterContactsOperation from '../redux/operations/ContactsPageOperations/filterContactsOperation';

import selectors from '../redux/selectors/selectors';

import Header from '../components/Header/header'
import ContactForm from "../components/ContactForm/ContactForm";
import Filter from '../components/Filter/Filter';
import ContactList from "../components/ContactList/ContactList";

import styles from './contactsPage.module.css';

const ContactsPage = () => {
    const contacts = useSelector(selectors.getAllContacts);
    const filter = useSelector(selectors.getFilter);
    const authorisation = useSelector(selectors.authorisation);
    const userName = useSelector(selectors.getUserName);
    const foundContacts = useSelector(selectors.contactsFinderHandler);

    const onStoreUpdateDispatch = useDispatch();
    const onStoreUpdate = contacts => onStoreUpdateDispatch(onStoreUpdateOperation(contacts));

    const onAddContactDispatch = useDispatch();
    const onAddContact = contact => onAddContactDispatch(onAddContactOperation(contact));

    const onDeleteContactDispatch = useDispatch();
    const onDeleteContact = contactId => onDeleteContactDispatch(onDeleteContactOperation(contactId));

    const onFilterContactsDispatch = useDispatch();
    const onFilterContacts = event => onFilterContactsDispatch(onFilterContactsOperation(event));

    useEffect(() => {
        onStoreUpdate();
    }, []);

    const onStateUpdate = (obj) => {
    
        if (contacts.find(contact => contact.name === obj.name)) {
          alert(`${obj.name}is alredy in contacts`);
        
        } else {
          onAddContact(obj);
        };
    };

    return (
        <>
            <Header 
                userName={userName}
                authorisation={authorisation}
            />
            <section className={styles.section}>
                <ContactForm
                    onSubmit={onStateUpdate}
                />
                <Filter
                    onChange={onFilterContacts}
                />
                {contacts.length !== 0 &&
                    <ContactList
                        foundContacts={foundContacts}
                        state={contacts}
                        filter={filter}
                        onDeleteContact={onDeleteContact}
                    />
                }
            </section>  
        </>
    )
};

export default ContactsPage;