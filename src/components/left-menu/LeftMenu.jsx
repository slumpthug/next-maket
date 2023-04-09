import React from 'react';
import './LeftMenu-style.css';
import ArrowUp from '../../../public/left-menu/arrow-up.svg';
import ArrowDown from '../../../public/left-menu/arrow-down.svg';
import Image from 'next/image';

const LeftMenu = () => {
    return (
        <div className='LeftMenu'>
            <p> <span className='orange-text'> 01 </span>/06</p>
            <div className='LeftMenu__line'></div>
            <div className='LeftMenu__arows-cont'>
                <div className='LeftMenu__arow LeftMenu__arow-up'>
                    <Image width="100%" src={ArrowUp} alt="" />
                </div>
                <div className='LeftMenu__arow LeftMenu__arow-down'>
                    <Image width="100%" src={ArrowDown} alt="" />
                </div>
            </div>
        </div>
    );
};

export default LeftMenu;