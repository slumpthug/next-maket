import React from 'react';
import css from './PartnersPart-style.module.css';
import Image from 'next/image';
import logo from '../../../public/partners-part/LOGO.svg';
import logoTwo from '../../../public/partners-part/logoTwo.svg';

const PartnersPart = ({words, orangeWord}) => {
    return (
        <div className={css.partners_part}>
            <div className={css.container}>
                <h2 className='main__title'>{words} <span className='orange-text'>{orangeWord}</span></h2>
                <div className={css.partners_part__wrapper}>
                   <div>
                        <Image className={css.partners_part__img} src={logoTwo} alt='java logo'/>
                        <Image className={css.partners_part__img} src={logo} alt='css logo'/>
                        <Image className={css.partners_part__img} src={logoTwo} alt='java logo'/>
                        <Image className={css.partners_part__img} src={logo} alt='css logo'/>
                        <Image className={css.partners_part__img} src={logoTwo} alt='java logo'/>
                        <Image className={css.partners_part__img} src={logo} alt='css logo'/>
                        <Image className={css.partners_part__img} src={logoTwo} alt='java logo'/>
                        <Image className={css.partners_part__img} src={logo} alt='css logo'/>
                        <Image className={css.partners_part__img} src={logoTwo} alt='java logo'/>
                        <Image className={css.partners_part__img} src={logo} alt='css logo'/>
                        <Image className={css.partners_part__img} src={logoTwo} alt='java logo'/>
                        <Image className={css.partners_part__img} src={logo} alt='css logo'/>
                        <Image className={css.partners_part__img} src={logoTwo} alt='java logo'/>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersPart;