import React from 'react';
import css from './TitlePart-style.module.css';

const TitlePart = () => {
    return (
        <div className={css.title_part}>
            <div className={css.container}>
                <h2 className={css.title_part__title_one}>UX_Web development_Brand identity</h2>
                <h2 className={css.title_part__title_two}>UX_Mobile apps_Video_Filmmaking</h2>
            </div>
        </div>
    );
};

export default TitlePart;