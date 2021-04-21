import React, {useEffect, lazy, Suspense} from 'react';
import { useDispatch } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/privateRoute';
import PublicRoute from './components/publicRoute';

import getUserDataOperation from './redux/operations/AuthorisationOperations/getUserDataOperation';

// import HomePageContainer from './redux/containers/homePageContainer';
// import RegistrationContainer from './redux/containers/registrationContainer';
// import LoginContainer from './redux/containers/loginContainer';
// import ContactsPageContainer from './redux/containers/contactsPageContainer';

// import ContactForm from './components/ContactsPage/ContactForm/ContactForm';
// import Filter from './components/ContactsPage/Filter/Filter';
// import ContactList from './components/ContactsPage/ContactList/ContactList';

import './App.css';

const HomePageContainer = lazy(() => import('./redux/containers/homePageContainer' /* webpackChunkName: "Home-Page" */));
const RegistrationContainer = lazy(() => import('./redux/containers/registrationContainer' /* webpackChunkName: "Registration-Page" */));
const LoginContainer = lazy(() => import('./redux/containers/loginContainer' /* webpackChunkName: "Login-Page" */));
const ContactsPageContainer = lazy(() => import('./redux/containers/contactsPageContainer' /* webpackChunkName: "Contacts-Page" */));

const PhoneBook = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDataOperation());
    
  }, [dispatch]);

  return (
    <Suspense fallback={<p>Загружаем...</p>} >
      <section className="section">
        <Switch>
          <Route exact path='/' render={(props) => <HomePageContainer {...props} />} />
          <PublicRoute path='/register' restricted component={RegistrationContainer} redirectTo='/contacts' />
          <PublicRoute path='/login' restricted component={LoginContainer} redirectTo='/contacts' />
          <PrivateRoute path='/contacts' component={ContactsPageContainer} redirectTo='/login' />
        </Switch>
      </section>
    </Suspense>
  );
};

export default PhoneBook;

// class PhoneBook extends Component {

//   componentDidMount() {
//     this.props.ongetUserData()
//   };

//   render() {
//     return (
      // <Suspense fallback={<p>Загружаем...</p>} >
      //   <section className="section">
      //     <Switch>
      //       <Route exact path='/' render={(props) => <HomePageContainer {...props} />} />
      //       <PublicRoute path='/register' restricted component={RegistrationContainer} redirectTo='/contacts' />
      //       <PublicRoute path='/login' restricted component={LoginContainer} redirectTo='/contacts' />
      //       <PrivateRoute path='/contacts' component={ContactsPageContainer} redirectTo='/login' />
      //     </Switch>
      //   </section>
      // </Suspense>
//     )
//   };
// };

// const mapDispatchToProps = {
//   ongetUserData: getUserDataOperation,
// }

// export default connect(null, mapDispatchToProps)(PhoneBook);