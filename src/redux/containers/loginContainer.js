import { Component } from 'react';
import {connect} from 'react-redux';

import loginOperation from '../operations/AuthorisationOperations/loginOperation';

import LoginPage from '../../views/loginPage';

// import selectors from '../selectors/selectors';

class LoginContainer extends Component {

    render() {
        const {
            onLoginSubmit,
        } = this.props;
        return <LoginPage 
            {...this.props}
            onLoginSubmit={onLoginSubmit}
        />
    };
};

// const mapStateToProps = state => ({
//   userName: selectors.getUserName(state),
//   authorisation: selectors.authorisation(state)
// })

const mapDispatchToProps = dispatch => ({
  onLoginSubmit: userData => dispatch(loginOperation(userData))
});

export default connect(null, mapDispatchToProps)(LoginContainer);