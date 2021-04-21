import Header from '../components/Header/header';
import LoginForm from "../components/LoginForm/loginForm";

const LoginPage = (props) => {
    const {onLoginSubmit} = props;
    return (
        <>
            <Header />
            <h3>Login Form</h3>
            <LoginForm 
                onLoginSubmit={onLoginSubmit}
            />
        </>
    )
};

export default LoginPage;