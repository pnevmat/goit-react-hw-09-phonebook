import {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './registrationForm.module.css';

const RegistrationForm = (props) => {
    const [name, setName] = useState('');

    // const handleChangeName = e => {
    //     const {value} = e.currentTarget;
    //     setName(value);
    // };

    const [email, setEmail] = useState('');

    // const handleChangeEmail = e => {
    //     const {value} = e.currentTarget;
    //     setEmail(value);
    // };

    const [password, setPassword] = useState('');

    // const handleChangePassword = e => {
    //     const {value} = e.currentTarget;
    //     setPassword(value);
    // };

    const handleChange = e => {
        const {name, value} = e.target;
        switch (name) {
            case 'name' :
                setName(value);
                break;
            case 'email' :
                setEmail(value);
                break;
            case 'password' :
                setPassword(value);
                break;
            default :
                console.log('error');
        };
    };

    const handleSubmit = () => {
        const {onRegistrationSubmit} = props;

        onRegistrationSubmit({name, email, password});
    };

    return (
        <form className={styles.registration_form} onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
            }}
        >
            <label className={styles.registration_label} htmlFor="" name="contact">
                <span className={styles.input_text}>Enter your name</span>
                <input className={styles.registration_input} type="text" placeholder="name" name="name" onChange={e => {
                handleChange(e);
            }}/>
            </label>
            <label className={styles.registration_label}>
                <span className={styles.input_text}>Enter your email</span>
                <input className={styles.registration_input} type="mail" placeholder="email" name="email" onChange={e => {
                handleChange(e);
            }}/>
            </label>
            <label className={styles.registration_label}>
                <span className={styles.input_text}>Enter your password</span>
                <input className={styles.registration_input} type="text" placeholder="password" name="password" onChange={e => {
                handleChange(e);
            }}/>
            </label>
            <button className={styles.registration_button} type="submit">Sign Up</button>
        </form>
    );
};

// class RegistrationForm extends Component {
//     state = {
//         name: '',
//         email: '',
//         password: ''
//     };

//     handleChange = (e) => {
//         this.setState({
//             [e.currentTarget.name]: e.currentTarget.value
//         });
//     };

//     handleSubmit = () => {
//         const {onRegistrationSubmit} = this.props;

//         onRegistrationSubmit(this.state);
//     };

//     render() {
//         return (
            // <form className={styles.registration_form} onSubmit={(e) => {
            //     e.preventDefault();
            //     this.handleSubmit();
            //     e.target.elements.name.value = '';
            //     e.target.elements.email.value = '';
            //     e.target.elements.password.value = '';
            //     }}
            // >
            //     <label className={styles.registration_label} htmlFor="" name="contact">
            //         <span className={styles.input_text}>Enter your name</span>
            //         <input className={styles.registration_input} type="text" placeholder="name" name="name" onChange={e => {
            //         this.handleChange(e);
            //     }}/>
            //     </label>
            //     <label className={styles.registration_label}>
            //         <span className={styles.input_text}>Enter your email</span>
            //         <input className={styles.registration_input} type="mail" placeholder="email" name="email" onChange={e => {
            //         this.handleChange(e);
            //     }}/>
            //     </label>
            //     <label className={styles.registration_label}>
            //         <span className={styles.input_text}>Enter your password</span>
            //         <input className={styles.registration_input} type="text" placeholder="password" name="password" onChange={e => {
            //         this.handleChange(e);
            //     }}/>
            //     </label>
            //     <button className={styles.registration_button} type="submit">Sign Up</button>
            // </form>
//         );
//     }
// };

export default RegistrationForm;

RegistrationForm.propTypes = {
    onRegistrationSubmit: PropTypes.func.isRequired,
};