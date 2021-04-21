import React from 'react';
import PropTypes from 'prop-types';

import styles from './Filter.module.css';

const Filter = ({onChange}) => (
    <>
        <h2>Contacts</h2>
        <label className={styles.search_label}>
            <span className={styles.search_text}>Find contacts by name</span>
            <input className={styles.search_input} type="text" placeholder="name" onChange={(e) => {
                e.preventDefault();
                const value = e.target.value;
                onChange(value);
            }}>
            </input>
        </label>
    </>
);

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default Filter;