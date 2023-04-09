import React from 'react';
import './RightMenu-style.css';
import MainBtn from '../main-button/MainBtn';
import instLogo from '../../../public/right-menu/instagramLogo.svg';
import Image from 'next/image';

const RightMenu = () => {
    return (
        <div className='RightMenu'>
            <div className='RightMenu__user-part'>
                <MainBtn text='Menu'/>
                <a href="#">UA</a>
            </div>
            <div className='vertically'>
                <MainBtn text='Get in touch'/>
            </div>
            <div className="RightMenu__social-part">
                <a href="#">
                    <Image src={instLogo} alt="" />
                </a>
                <a href="#">
                    <Image src={instLogo} alt="" />
                </a>
                <a href="#">
                    <Image src={instLogo} alt="" />
                </a>
            </div>
        </div>
    );
};

export default RightMenu;