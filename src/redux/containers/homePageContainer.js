import { Component } from 'react';
import {connect} from 'react-redux';

import HomePage from '../../views/homePage';

import selectors from '../selectors/selectors';

class HomePageContainer extends Component {

    render() {
        const {
            onLogout,
        } = this.props;
        return <HomePage 
            {...this.props}
            onLogout={onLogout}
        />
    };
};
  
const mapStateToProps = state => ({
    authorisation: selectors.authorisation(state),
    userName: selectors.getUserName(state)
});

export default connect(mapStateToProps)(HomePageContainer);