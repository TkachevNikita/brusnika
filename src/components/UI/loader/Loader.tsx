import React from 'react';
import classes from '../styles/Loader.module.css'

const Loader = () => {
    return (
        <div className={classes.loader}>
            <div className={classes.loader__spinner}></div>
        </div>
    );
};

export default Loader;