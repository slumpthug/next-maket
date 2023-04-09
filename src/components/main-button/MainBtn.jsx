import React from 'react';
import './MainBtn-style.css';

const MainBtn = ({text}) => {
    return (
        <div className='main-part__btn-two'>
            <div className='main-part__btn-two-circle'></div>
            <button className='main-part__btn btn-two'>{text}</button>
        </div>
    );
};

export default MainBtn;