import React from 'react';
import {useDispatch} from 'react-redux';

import logoutOperation from '../../redux/operations/AuthorisationOperations/logoutOperation';

import AutorisationNav from './authorisationNav/autorisationNav';
import UserMenu from './userMenu/userMenu';

import PropTypes from 'prop-types';

import styles from './header.module.css'

const Header = (props) => {
    const dispatch = useDispatch();
    const onLogout = userData => dispatch(logoutOperation(userData))
    const {authorisation, userName} = props;
    return (
        <section className={styles.section}>
            {authorisation ? <UserMenu onLogout={onLogout} userName={userName} /> : <AutorisationNav />}
        </section>
    );
};

export default Header;

Header.defaultProps = {
    authorisation: null
};

Header.propTypes = {
    authorisation: PropTypes.bool,
};