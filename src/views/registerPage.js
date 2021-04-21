import Header from '../components/Header/header';
import RegistrationForm from "../components/RegistrationForm/registrationForm";

const RegisterPage = (props) => {
    const {onRegistrationSubmit} = props;
    return (
        <>
            <Header />
            <h3>Sign Up Form</h3>
            <RegistrationForm 
                onRegistrationSubmit={onRegistrationSubmit}
            />
        </>
    )
};

export default RegisterPage;