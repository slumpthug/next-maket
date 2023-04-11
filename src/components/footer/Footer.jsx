import React from 'react';
import css from './Footer-style.module.css';
import logo from '../../../public/first/IVAX.svg';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={css.container}>
                <div className={css.footer__top}>
                    <div className={css.footer__comunication}>
                        <h4>Communication</h4>
                        <a href="#">+38 (032) 295 84 53</a>
                        <a href="#" className='orange-text'>ivax_dev@gmail.com</a>
                    </div>
                    <div className={css.footer__address}>
                        <h4>Address</h4>
                        <a href="#">Lviv, Ukraine <br/>
                        st. Zalizniaka 21</a>
                    </div>
                </div>
                <div className={css.footer__bottom}>
                    <Image width="83px" src={logo} alt="company's logo" />
                    <span>Copyright © 2022 IVAX</span>
                    <div>
                        <a href="#">Terms of Use</a>
                        <a href="#">Privacy Policy </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;