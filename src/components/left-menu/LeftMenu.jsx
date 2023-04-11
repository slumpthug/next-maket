import React from 'react';
import css from './LeftMenu-style.module.css';
import ArrowUp from '../../../public/left-menu/arrow-up.svg';
import ArrowDown from '../../../public/left-menu/arrow-down.svg';
import Image from 'next/image';

const LeftMenu = () => {
    return (
        <div className={css.left_menu}>
            <div className={css.container}>
                <p> <span className='orange-text'> 01 </span>/06</p>
                <div className={css.left_menu__line}></div>
                <div className={css.left_menu__arrows}>
                    <div>
                        <Image width="100%" src={ArrowUp} alt="arrow up" />
                    </div>
                    <div>
                        <Image width="100%" src={ArrowDown} alt="arrow down yellow" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftMenu;