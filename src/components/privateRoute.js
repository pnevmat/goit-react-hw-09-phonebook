import React from 'react';
import { useSelector } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import selectors from '../redux/selectors/selectors';

// const mapStateToProps = state => ({
//     authorisation: selectors.authorisation(state)
// })

// export default connect(mapStateToProps)(PrivateRoute);

const PrivateRoute = ({
    component: Component,
    // authorisation,
    redirectTo,
    ...routeProps
}) => {
    const authorisation = useSelector(selectors.authorisation);

    return (
        <Route 
            {...routeProps}
            render={props => authorisation ? <Component {...props} /> : <Redirect to={redirectTo} />}
        />
    );
};

export default PrivateRoute;

// const mapStateToProps = state => ({
//     authorisation: selectors.authorisation(state)
// })

// export default connect(mapStateToProps)(PrivateRoute);