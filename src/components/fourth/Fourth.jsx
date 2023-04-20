"use client";
import React from 'react';
import css from './Fourth-style.module.css';
import elipse from '../../../public/fourth/elipse.svg';
import line from '../../../public/fourth/line.svg';
import lineTwo from '../../../public/fourth/lineTwo.svg';
import Image from 'next/image';
import MainBtn from '../main-button/MainBtn';

import { motion } from "framer-motion";

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

const lineAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
}

const Fourth = () => {
    return (
        <div className={css.fourth}>
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
                    We promise <span className='orange-text'>six things</span> 
                </motion.h2>
                <motion.div
                    className={css.fourth__content}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        amount: 0,
                        //once: true, 
                    }}
                >
                    <div className={css.fourth__content_top}>
                        <motion.div 
                            className={css.fourth__card_one}
                            custom={3}
                            variants={topAnimation}
                        >
                            <p>Your deadline is <br/> our religion</p>
                            <Image className={css.elipse} src={elipse} alt="elipse" />
                        </motion.div>
                        <motion.div 
                            className={css.fourth__card_one}
                            custom={2}
                            variants={topAnimation}
                        >
                            <p>Maximum flexibility to <br/> meet your needs </p>
                            <Image className={css.elipse} src={elipse} alt="elipse" />
                        </motion.div>
                        <motion.div 
                            className={css.fourth__card_one}
                            custom={1}
                            variants={topAnimation}
                        >
                            <p>24/7 direct contact <br/> with us </p>
                            <Image className={css.elipse} src={elipse} alt="elipse" />
                        </motion.div>
                    </div>
                    <motion.div
                        custom={1}
                        variants={lineAnimation}
                    >
                        <Image className={css.line} src={line} alt="line vertically" />
                        <Image className={css.lineTwo} src={lineTwo} alt="line horizontally" />
                    </motion.div>
                    <div className={css.fourth__content_bottom}>
                        <motion.div 
                            className={css.fourth__card_two}
                            custom={1}
                            variants={bottomAnimation}
                        >
                            <Image className={css.elipse_two} src={elipse} alt="elipse" />
                            <p>Personalized approach <br/> towards each case</p>
                        </motion.div>
                        <motion.div 
                            className={css.fourth__card_two}
                            custom={2}
                            variants={bottomAnimation}
                        >
                            <Image className={css.elipse_two} src={elipse} alt="elipse" />
                            <p>No job is too <br/> small</p>
                        </motion.div>
                        <motion.div 
                            className={css.fourth__card_two}
                            custom={3}
                            variants={bottomAnimation}
                        >
                            <Image className={css.elipse_two} src={elipse} alt="elipse" />
                            <p>We are creative, inspired, curious, <br/> logic and open to critic</p>
                        </motion.div>
                    </div>
                </motion.div>
                <MainBtn text='Talk to us'/>
            </motion.div>
        </div>
    );
};

export default Fourth;