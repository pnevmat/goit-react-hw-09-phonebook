import { Component } from 'react';
import {connect} from 'react-redux';

import registerOperation from '../operations/AuthorisationOperations/registerOperation';

import RegisterPage from '../../views/registerPage';

class RegistrationContainer extends Component {

    render() {
        const {
            onRegistrationSubmit,
        } = this.props;
        return <RegisterPage 
            {...this.props}
            onRegistrationSubmit={onRegistrationSubmit}
        />
    };
};
  
  const mapDispatchToProps = dispatch => ({
    onRegistrationSubmit: userData => dispatch(registerOperation(userData))
  })

export default connect(null, mapDispatchToProps)(RegistrationContainer);