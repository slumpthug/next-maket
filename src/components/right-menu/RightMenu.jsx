import React from 'react';
import css from './RightMenu-style.module.css';
import MainBtn from '../main-button/MainBtn';
import instLogo from '../../../public/right-menu/instagramLogo.svg';
import Image from 'next/image';

const RightMenu = () => {
    return (
        <div className={css.right_menu}>
            <div className={css.container}>
                <div className={css.right_menu__user_part}>
                    <MainBtn text='Menu'/>
                    <a href="#">UA</a>
                </div>
                <div className={css.vertically}>
                    <MainBtn text='Get in touch'/>
                </div>
                <div className={css.right_menu__social_part}>
                    <a href="#">
                        <Image className={css.inst__logo} src={instLogo} alt="instagram logo" />
                    </a>
                    <a href="#">
                        <Image className={css.inst__logo} src={instLogo} alt="instagram logo" />
                    </a>
                    <a href="#">
                        <Image className={css.inst__logo} src={instLogo} alt="instagram logo" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RightMenu;