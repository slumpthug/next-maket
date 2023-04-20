"use client";
import React, { useEffect } from 'react';
import logo from "../../../public/first/IVAX.svg";
import circles from '../../../public/first/elipseGroup.svg';
import lampa from '../../../public/first/lampa.svg';
import css from './First-style.module.css';
import Image from 'next/image';
import MainBtn from '../main-button/MainBtn';

import { motion } from "framer-motion";

// const up = document.getElementById('up');
// useEffect(() => {
//     window.scrollTo({
//         top: up,
//         left: 0,
//     })
// }, [])

const titleAnimation = {
    hidden: {
        x: -80,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
}

const First = () => {
    return (
        <motion.div 
            className={css.first} id='up'
            initial="hidden"
            whileInView="visible"
            viewport={{ 
                //once: true, 
            }}
        >
            <Image className={css.first__logo} src={logo} alt="company`s logo" />
            <div className={css.container}>
                <div className={css.first__title}>
                    <motion.h1
                        custom={1}
                        variants={titleAnimation}
                    >
                        Paint <br />
                        your thoughts <br />
                        with <span className='orange-text'>IVAX</span>
                    </motion.h1>
                    <motion.div 
                        className={css.first__btn}
                        custom={2}
                        variants={titleAnimation}
                    >
                        <button className={css.first__btn_one}>Portfolio</button>
                        <MainBtn text='Check with us'/>
                    </motion.div>
                </div>
                <div className={css.first__img}>
                    <Image className={css.first__img_one} src={circles} alt="circles" />
                    <Image className={css.first__img_two}  src={lampa} alt="bulb" />
                </div>
            </div>
        </motion.div>
    );
};

export default First;