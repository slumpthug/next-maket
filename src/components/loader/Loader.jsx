import React from 'react';
import css from './Loder-style.module.css'

const Loader = () => {
    return (
        <div className={css.loader}>
            <div className={css.loader__one}></div>
            <div className={css.loader__two}></div>
            <div className={css.loader__three}></div>
            <div className={css.loader__four}></div>
            <div className={css.loader__five}></div>
        </div>
    );
};

export default Loader;