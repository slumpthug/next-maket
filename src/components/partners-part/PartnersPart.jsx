import React from 'react';
import './PartnersPart-style.css';
import Image from 'next/image';
import logo from '../../../public/partners-part/LOGO.svg';
import logoTwo from '../../../public/partners-part/logoTwo.svg';

const PartnersPart = ({words, orangeWord}) => {
    return (
        <div className='PartnersPart'>
            <h2 className='main__title main__title_PartnersPart'>{words} <span className='orange-text'>{orangeWord}</span></h2>
            <div className='PartnersPart__slider'>
                <Image className='PartnersPart__img' src={logoTwo} alt='java logo'/>
                <Image className='PartnersPart__img' src={logo} alt='css logo'/>
                <Image className='PartnersPart__img' src={logoTwo} alt='java logo'/>
                <Image className='PartnersPart__img' src={logo} alt='css logo'/>
                <Image className='PartnersPart__img' src={logoTwo} alt='java logo'/>
                <Image className='PartnersPart__img' src={logo} alt='css logo'/>
                <Image className='PartnersPart__img' src={logoTwo} alt='java logo'/>
            </div>
        </div>
    );
};

export default PartnersPart;