import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

import styles from './userMenu.module.css';
import defaultAvatar from './defaultAvatar.webp';

const UserMenu = (props) => {
    const {userName, onLogout} = props;
    return (
        <>
            <ul className={styles.nav_list}>
                <li className={styles.nav_item}>
                    <NavLink className={styles.nav_link} to='/'>Home</NavLink>
                </li>
                <li className={styles.nav_item}>
                    <NavLink className={styles.nav_link} to='/contacts'>Contacts</NavLink>
                </li>
            </ul>
            <div className={styles.autorized_info_container}>
                <img className={styles.avatar} src={defaultAvatar} alt='avatar' />
                <p className={styles.welcome_text}>Welcome, {userName}</p>
                <button className={styles.logout_button} type='button' onClick={onLogout}>Logout</button>
            </div>
        </>
    );
};

export default UserMenu;

UserMenu.propTypes = {
    userName: PropTypes.string.isRequired,
    onLogout: PropTypes.func.isRequired
};