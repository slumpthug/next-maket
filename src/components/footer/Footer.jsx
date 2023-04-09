import React from 'react';
import './Footer-style.css';
import logo from '../../../public/first/IVAX.svg';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer__top-cont'>
                <div className="Footer__comunication-part">
                    <h4 className='Footer__title'>Communication</h4>
                    <a href="#">+38 (032) 295 84 53</a>
                    <a href="#" className='orange-text'>ivax_dev@gmail.com</a>
                </div>
                <div className="Footer__address-part">
                    <h4 className='Footer__title Footer__title-address'>Address</h4>
                    <a href="#">Lviv, Ukraine <br/>
                    st. Zalizniaka 21</a>
                </div>
            </div>
            <div className='Footer__bottom-cont'>
                <Image width="83px" src={logo} alt="logo" />
                <span className='Footer__copyright'>Copyright © 2022 IVAX</span>
                <div className='Footer__rules-links'>
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;