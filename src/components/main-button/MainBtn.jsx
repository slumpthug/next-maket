import React from 'react';
import css from './MainBtn-style.module.css';

const MainBtn = ({text}) => {
    return (
        <div className={css.container__btn}>
            <div></div>
            <button>{text}</button>
        </div>
    );
};

export default MainBtn;