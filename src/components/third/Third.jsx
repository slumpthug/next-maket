"use client";
import React from 'react';
import css from './Third-style.module.css';
import bulbTwo from '../../../public/third/bulbTwo.svg';
import cardLogo from '../../../public/third/cardLogo.svg';
import Image from 'next/image';

import { motion } from "framer-motion";

const cardAnimationOne = {
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

const cardAnimationTwo = {
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

const bottomAnimation = {
    hidden: {
        y: 80,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
}

const Third = () => {
    return (
        <div className={css.third}>
            <motion.div 
                className={css.container}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.2,
                    //once: true, 
                }}
            >
                <motion.h2 
                    className='main__title'
                    custom={1}
                    variants={bottomAnimation}
                >
                    We <span className='orange-text'>deliver</span>
                </motion.h2>
                <div className={css.third__content}>
                    <motion.div 
                        className={css.third__card_conteiner}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            amount: 0.2,
                            //once: true, 
                        }}
                    >
                        <motion.div 
                            className={css.third__card}
                            custom={1}
                            variants={cardAnimationOne}
                        >
                            <div>
                                <Image src={cardLogo} alt="pen logo" />
                                <span>01</span>
                            </div>
                            <h4>
                                Branding
                            </h4>
                            <ul>
                                <li>Brand identity</li>
                                <li>Brand identity</li>
                                <li>Brand identity</li>
                                <li>Brand identity</li>
                            </ul>
                        </motion.div>
                        <motion.div 
                            className={css.third__card}
                            custom={2}
                            variants={cardAnimationOne}
                        >
                            <div>
                                <Image src={cardLogo} alt="pen logo" />
                                <span>02</span>
                            </div>
                            <h4>
                                Web development
                            </h4>
                            <ul>
                                <li>Landing-pages</li>
                                <li>Landing-pages</li>
                                <li>Landing-pages</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        className={css.third__img}
                        custom={2}
                        variants={bottomAnimation}
                    >
                        <div className={css.glow}></div>
                        <Image className={css.third__bulb} src={bulbTwo} alt="bulb" />
                    </motion.div>
                    <motion.div 
                        className={css.third__card_conteiner}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            amount: 0.2,
                            //once: true, 
                        }}
                    >
                        <motion.div 
                            className={css.third__card}
                            custom={1}
                            variants={cardAnimationTwo}
                        >
                            <div>
                                <Image src={cardLogo} alt="pen logo" />
                                <span>03</span>
                            </div>
                            <h4>
                                WEB design
                            </h4>
                            <ul>
                                <li>Websites</li>
                                <li>Websites</li>
                                <li>Websites</li>
                            </ul>
                        </motion.div>
                        <motion.div 
                            className={css.third__card}
                            custom={2}
                            variants={cardAnimationTwo}
                        >
                            <div>
                                <Image src={cardLogo} alt="pen logo" />
                                <span>04</span>
                            </div>
                            <h4>
                                Video
                            </h4>
                            <ul>
                                <li>Filmmaking</li>
                                <li>Filmmaking</li>
                                <li>Filmmaking</li>
                                <li>Filmmaking</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Third;