"use client";
import React from 'react';
import css from './PartnersPart-style.module.css';
import Image from 'next/image';
import logo from '../../../public/partners-part/LOGO.svg';
import logoTwo from '../../../public/partners-part/logoTwo.svg';

import { motion } from "framer-motion";

const opacityAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
}

const topAnimation = {
    hidden: {
        y: -80,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
}

const PartnersPart = ({words, orangeWord}) => {
    return (
        <div className={css.partners_part}>
            <motion.div 
                className={css.container}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.5,
                    //once: true, 
                }}
            >
                <motion.h2 
                    className='main__title'
                    custom={1}
                    variants={topAnimation}
                >
                    {words} <span className='orange-text'>{orangeWord}</span>
                </motion.h2>
                <motion.div 
                    className={css.partners_part__wrapper}
                    custom={2}
                    variants={opacityAnimation}
                >
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
                </motion.div>
            </motion.div>
        </div>
    );
};

export default PartnersPart;