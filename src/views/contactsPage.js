import Header from '../components/Header/header'
import ContactForm from "../components/ContactForm/ContactForm";
import Filter from '../components/Filter/Filter';
import ContactList from "../components/ContactList/ContactList";

import styles from './contactsPage.module.css';

const ContactsPage = (props) => {
    const {
        onFilterContacts,
        contacts,
        filter,
        foundContacts,
        onDeleteContact,
        onStateUpdate,
        authorisation,
        userName
    } = props;
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