import React from 'react';
import logo from "../../../public/first/IVAX.svg";
import circles from '../../../public/first/elipseGroup.svg';
import lampa from '../../../public/first/lampa.svg';
import css from './First-style.module.css';
import Image from 'next/image';
import MainBtn from '../main-button/MainBtn';

const First = () => {
    return (
        <div className={css.first}>
            <Image className={css.first__logo} src={logo} alt="company`s logo" />
            <div className={css.container}>
                <div className={css.first__title}>
                    <h1>
                        Paint <br />
                        your thoughts <br />
                        with <span className='orange-text'>IVAX</span>
                    </h1>
                    <div className={css.first__btn}>
                        <button className={css.first__btn_one}>Portfolio</button>
                        <MainBtn text='Check with us'/>
                    </div>
                </div>
                <div className={css.first__img}>
                    <Image className={css.first__img_one} src={circles} alt="circles" />
                    <Image className={css.first__img_two}  src={lampa} alt="bulb" />
                </div>
            </div>
        </div>
    );
};

export default First;