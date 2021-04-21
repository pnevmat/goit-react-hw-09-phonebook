import { NavLink } from "react-router-dom";

import styles from './authorisationNav.module.css';

const AutorisationNav = () => {
    return (
        <>
            <ul className={styles.nav_list}>
                <li className={styles.nav_item}>
                    <NavLink className={styles.nav_link} to='/'>Home</NavLink>
                </li>
            </ul>
            <ul className={styles.nav_list}>
                <li className={styles.nav_item}>
                    <NavLink className={styles.nav_link} to='/register'>Sign Up</NavLink>
                </li>
                <li className={styles.nav_item}>
                    <NavLink className={styles.nav_link} to='/login'>Log In</NavLink>
                </li>
            </ul>
        </>
    );
};

export default AutorisationNav;