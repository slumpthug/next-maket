"use client";
import React from 'react';
import css from './Fourth-style.module.css';
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
                <div className={css.fourth__container_cont}>
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
                            <motion.p 
                                className={css.fourth__card_one}
                                custom={3}
                                variants={topAnimation}
                            >
                                Your deadline is <br/> our religion
                            </motion.p>
                            <motion.p 
                                className={css.fourth__card_one}
                                custom={2}
                                variants={topAnimation}
                            >
                                Maximum flexibility to <br/> meet your needs
                            </motion.p>
                            <motion.p 
                                className={css.fourth__card_one}
                                custom={1}
                                variants={topAnimation}
                            >
                                24/7 direct contact <br/> with us
                            </motion.p>
                            <motion.p 
                                className={css.fourth__card_one}
                                custom={3}
                                variants={topAnimation}
                            >
                                Your deadline is <br/> our religion
                            </motion.p>
                            <motion.p 
                                className={css.fourth__card_one}
                                custom={2}
                                variants={topAnimation}
                            >
                                Maximum flexibility to <br/> meet your needs
                            </motion.p>
                            <motion.p 
                                className={css.fourth__card_one}
                                custom={1}
                                variants={topAnimation}
                            >
                                24/7 direct contact <br/> with us
                            </motion.p>
                        </div>
                        <motion.div
                            custom={1}
                            variants={lineAnimation}
                            className={css.line}
                        >
                        </motion.div>
                        <div className={css.fourth__content_bottom}>
                            <motion.p 
                                className={css.fourth__card_two}
                                custom={1}
                                variants={bottomAnimation}
                            >
                                Personalized approach <br/> towards each case
                            </motion.p>
                            <motion.p 
                                className={css.fourth__card_two}
                                custom={2}
                                variants={bottomAnimation}
                            >
                                No job is too <br/> small
                            </motion.p>
                            <motion.p 
                                className={css.fourth__card_two}
                                custom={3}
                                variants={bottomAnimation}
                            >
                                We are creative, inspired, curious, <br/> logic and open to critic
                            </motion.p>
                            <motion.p 
                                className={css.fourth__card_two}
                                custom={1}
                                variants={bottomAnimation}
                            >
                                Personalized approach <br/> towards each case
                            </motion.p>
                            <motion.p 
                                className={css.fourth__card_two}
                                custom={2}
                                variants={bottomAnimation}
                            >
                                No job is too <br/> small
                            </motion.p>
                            <motion.p 
                                className={css.fourth__card_two}
                                custom={3}
                                variants={bottomAnimation}
                            >
                                We are creative, inspired, curious, <br/> logic and open to critic
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
                <MainBtn text='Talk to us'/>
            </motion.div>
        </div>
    );
};

export default Fourth;