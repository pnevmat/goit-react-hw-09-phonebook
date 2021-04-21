import { Component } from 'react';
import {connect} from 'react-redux';

import logoutOperation from '../operations/AuthorisationOperations/logoutOperation';

import UserMenu from '../../components/Header/userMenu/userMenu';

// import selectors from '../selectors/selectors';

class LogoutContainer extends Component {

    render() {
        const {
            onLogout,
        } = this.props;
        return <UserMenu 
            {...this.props}
            onLoginSubmit={onLogout}
        />
    };
};

// const mapStateToProps = state => ({
//   userName: selectors.getUserName(state),
//   authorisation: selectors.authorisation(state)
// })

const mapDispatchToProps = dispatch => ({
  onLogout: userData => dispatch(logoutOperation(userData))
});

export default connect(null, mapDispatchToProps)(LogoutContainer);