import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

const ContactForm = (props) => {
    const [name, setName] = useState('');

    // const handleChangeName = (e) => {
    //     const {value} = e.currentTarget;
    //     setName(value);
    // };

    const [number, setNumber] = useState('');

    // const handleChangeNumber = (e) => {
    //     const {value} = e.currentTarget;
    //     setNumber(value);
    // };

    const handleChange = e => {
        const {name, value} = e.target;
        switch (name) {
            case 'name' :
                setName(value);
                break;
            case 'number' :
                setNumber(value);
                break;
            default :
                console.log('error');
        };
    };

    const handleSubmit = () => {
        const {onSubmit} = props;
        if (name !== '' && number !== '') {
            onSubmit({name, number});
            setName('');
            setNumber('')
        };
    };


    return (
        <>
            <h1>Phone Book</h1>
            <form className={styles.addContact_form} onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                e.target.elements.name.value = '';
                e.target.elements.number.value = '';
                }}
            >
                <label className={styles.addContact_label} htmlFor="" name="contact">
                    <span className={styles.input_text}>Enter your name</span>
                    <input className={styles.addContact_input} type="text" placeholder="name" name="name" onChange={e => {
                    handleChange(e);
                }}/>
                </label>
                <label className={styles.addContact_label}>
                    <span className={styles.input_text}>Enter your phone number</span>
                    <input className={styles.addContact_input} type="tel" placeholder="phone" name="number" onChange={e => {
                    handleChange(e);
                }}/>
                </label>
                <button className={styles.addContact_button} type="submit">Add Contact</button>
            </form>
        </>
    );
};

// class ContactForm extends Component {
//     state = {
//         name: '',
//         number: ''
//     }

    // handleChange = (e) => {
    //     this.setState({
    //         [e.currentTarget.name]: e.currentTarget.value
    //     })
    // }

    // handleSubmit = () => {
    //     const {onSubmit} = this.props;
    //     const {name, number} = this.state;
    //     if (name !== '' && number !== '') {
    //         onSubmit(this.state);
    //         this.setState({name: '', number: ''});
    //     };
    // }

//     render() {
//         return (
            // <>
            //     <h1>Phone Book</h1>
            //     <form className={styles.addContact_form} onSubmit={(e) => {
            //         e.preventDefault();
            //         this.handleSubmit();
            //         e.target.elements.name.value = '';
            //         e.target.elements.number.value = '';
            //         }}
            //     >
            //         <label className={styles.addContact_label} htmlFor="" name="contact">
            //             <span className={styles.input_text}>Enter your name</span>
            //             <input className={styles.addContact_input} type="text" placeholder="name" name="name" onChange={e => {
            //             this.handleChange(e);
            //         }}/>
            //         </label>
            //         <label className={styles.addContact_label}>
            //             <span className={styles.input_text}>Enter your phone number</span>
            //             <input className={styles.addContact_input} type="tel" placeholder="phone" name="number" onChange={e => {
            //             this.handleChange(e);
            //         }}/>
            //         </label>
            //         <button className={styles.addContact_button} type="submit">Add Contact</button>
            //     </form>
            // </>
//         );
//     };
// };

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;