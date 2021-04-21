import { useEffect } from 'react';
import {connect} from 'react-redux';

import onStoreUpdate from '../operations/ContactsPageOperations/storeUpdateOperation';
import onAddContact from '../operations/ContactsPageOperations/addContactOperation';
import onDeleteContact from '../operations/ContactsPageOperations/deleteContactOperation';
import onFilterContacts from '../operations/ContactsPageOperations/filterContactsOperation';

import selectors from '../selectors/selectors';

import ContactsPage from '../../views/contactsPage';

const ContactsPageContainer = (props) => {

  const {
    onStoreUpdate,
    onAddContact,
    onDeleteContact,
    onFilterContacts,
    contacts,
    foundContacts,
    filter
  } = props;

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
    <ContactsPage 
      {...props}
      contacts={contacts}
      filter={filter}
      onStateUpdate={onStateUpdate}
      onAddContact={onAddContact}
      onDeleteContact={onDeleteContact}
      onFilterContacts={onFilterContacts}
      foundContacts={foundContacts}
    />
  );
};

// class ContactsPageContainer extends Component {
//     componentDidMount() {
//         const {onStoreUpdate} = this.props;
      
//         onStoreUpdate();
//     };

//     onStateUpdate = (obj) => {
//         const {onAddContact} = this.props;
    
//         if (this.props.contacts.find(contact => contact.name === obj.name)) {
//           alert(`${obj.name}is alredy in contacts`);
    
//         } else {
//           onAddContact(obj);
//         };
//     };

//     render() {
//         const {
            // onAddContact,
            // onDeleteContact,
            // onFilterContacts,
            // contacts,
            // foundContacts,
            // filter
//         } = this.props;
        // return <ContactsPage 
        //     {...this.props}
        //     contacts={contacts}
        //     filter={filter}
        //     onStateUpdate={this.onStateUpdate}
        //     onAddContact={onAddContact}
        //     onDeleteContact={onDeleteContact}
        //     onFilterContacts={onFilterContacts}
        //     foundContacts={foundContacts}
        // />
//     };
// };

const mapStateToProps = state => ({
    contacts: selectors.getAllContacts(state),
    filter: selectors.getFilter(state),
    authorisation: selectors.authorisation(state),
    userName: selectors.getUserName(state),
    foundContacts: selectors.contactsFinderHandler(state)
  });
  
  const mapDispatchToProps = dispatch => ({
    onStoreUpdate: contacts => dispatch(onStoreUpdate(contacts)),
    onAddContact: contact => dispatch(onAddContact(contact)),
    onDeleteContact: contactId => dispatch(onDeleteContact(contactId)),
    onFilterContacts: event => dispatch(onFilterContacts(event))
  })

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPageContainer);