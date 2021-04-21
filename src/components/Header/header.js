import AutorisationNav from './authorisationNav/autorisationNav';
import LogoutContainer from '../../redux/containers/logoutContainer';

import PropTypes from 'prop-types';

import styles from './header.module.css'

const Header = (props) => {
    const {authorisation, userName} = props;
    return (
        <section className={styles.section}>
            {authorisation ? <LogoutContainer userName={userName} /> : <AutorisationNav />}
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