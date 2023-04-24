"use client";
import React, { useEffect } from 'react';
import logo from "../../../public/first/IVAX.svg";
import bulb from "../../../public/first/blubGroup/blub.svg";
import circleOne from "../../../public/first/blubGroup/elipseOne.svg";
import circleTwo from "../../../public/first/blubGroup/elipseTwo.svg";
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

const upAnimation = {
    hidden: {
        y: 150,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
}

const imgAnimation = {
    hidden: {
        x: 80,
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
            <motion.div 
                custom={1}
                variants={titleAnimation}
                className={css.first__logo_cont}
            >
                <Image className={css.first__logo} src={logo} alt="company`s logo" />
            </motion.div>
            <div className={css.container}>
                <div className={css.first__title}>
                    <motion.h1
                        custom={1.4}
                        variants={titleAnimation}
                    >
                        Paint <br />
                        your thoughts <br />
                        with <span className='orange-text'>IVAX</span>
                    </motion.h1>
                    <motion.div 
                        className={css.first__btn}
                        custom={1.8}
                        variants={titleAnimation}
                    >
                        <button className={css.first__btn_one}>Portfolio</button>
                        <MainBtn text='Check with us'/>
                    </motion.div>
                </div>
                <motion.div 
                    className={css.first__img}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ 
                        //once: true, 
                    }}
                    custom={1}
                    variants={imgAnimation}
                >
                    <div className={css.circles}>
                        <motion.div
                            custom={2.1}
                            variants={upAnimation}
                        >
                            <Image className={css.circle} src={circleOne} alt="circle"/>
                        </motion.div>
                        <motion.div
                            custom={1.5}
                            variants={upAnimation}
                        >
                            <Image className={css.circle} src={circleTwo} alt="circle"/>
                        </motion.div>
                        <motion.div
                            custom={2.4}
                            variants={upAnimation}
                        >
                            <Image className={css.circle} src={circleOne} alt="circle"/>
                        </motion.div>
                        <motion.div
                            custom={1.8}
                            variants={upAnimation}
                        >
                            <Image className={css.circle} src={circleTwo} alt="circle"/>
                        </motion.div>
                    </div>
                    <div>
                        <div className={css.glow}></div>
                        <Image className={css.bulb} src={bulb} alt="bulb"/>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default First;