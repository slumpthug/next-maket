"use client";
import React from 'react';
import css from './Tenth-style.module.css';
import MainBtn from '../../components/main-button/MainBtn';
import fluent from '../../../public/tenth/fluent.svg';
import Image from 'next/image';

import { motion } from "framer-motion";

const rightAnimation = {
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

const Tenth = () => {
    return (
        <div className={css.tenth}>
            <motion.div 
                className={css.container}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.1,
                    //once: true, 
                }}
            >
                <motion.div 
                    className={css.tenth__contacts}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        //once: true, 
                    }}
                >
                    <motion.h2 
                        className='main__title'
                        custom={1}
                        variants={topAnimation}
                    >
                        <span className='orange-text'>Tell us</span> more
                    </motion.h2>
                    <motion.div 
                        className={css.tenth__checkbox}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            //once: true, 
                        }}
                    >
                        <motion.div
                            custom={1.2}
                            variants={topAnimation}
                        >
                            <input type="checkbox" />
                            <p>Branding </p>
                        </motion.div>
                        <motion.div
                            custom={1.4}
                            variants={topAnimation}
                        >
                            <input type="checkbox" />
                            <p>Web design</p>
                        </motion.div>
                        <motion.div
                            custom={1.6}
                            variants={topAnimation}
                        >
                            <input type="checkbox" />
                            <p>Development</p>
                        </motion.div>
                        <motion.div
                            custom={1.8}
                            variants={topAnimation}
                        >
                            <input type="checkbox" />
                            <p>Video</p>
                        </motion.div>
                    </motion.div>
                    <div className={css.tenth__input_top}>
                        <div className={css.tenth__input}>
                            <motion.span
                                custom={1.2}
                                variants={topAnimation}
                            >
                                Name*
                            </motion.span>
                            <motion.input 
                                type="text"
                                custom={1.4}
                                variants={topAnimation}
                            />
                        </div>
                        <div className={css.tenth__input}>
                            <motion.span
                                custom={1.2}
                                variants={topAnimation}
                            >
                                Phone*
                            </motion.span>
                            <motion.input 
                                type="text"
                                custom={1.4}
                                variants={topAnimation}
                            />
                        </div>
                    </div>
                    <div className={css.tenth__input}>
                        <motion.span
                            custom={1.2}
                            variants={topAnimation}
                        >
                            Email*
                        </motion.span>
                        <motion.input 
                            type="text"
                            custom={1.4}
                            variants={topAnimation}
                        />
                    </div>
                    <div className={css.tenth__input}>
                        <motion.span
                            custom={1.3}
                            variants={topAnimation}
                        >
                            Message
                        </motion.span>
                        <motion.input 
                            type="text"
                            custom={1.5}
                            variants={topAnimation}
                        />
                    </div>
                    <div className={css.tenth__btns}>
                        <motion.div
                            custom={1.2}
                            variants={topAnimation}
                        >
                            <MainBtn text='Send'/>
                        </motion.div>
                        <motion.div
                            custom={1.4}
                            variants={topAnimation}
                        >
                            <Image src={fluent} alt="fluent"/>
                            <button>Attach file</button>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div 
                    className={css.tenth__map}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        //once: true, 
                    }}
                    custom={1}
                    variants={rightAnimation}
                >
                    <iframe className={css.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10845363.572766306!2d46.449631333730366!3d48.42210209875439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a291a3bb5d189d%3A0x2438878df40cf028!2z0JrQsNGE0LUg0JjQu9GM0LPQuNC3!5e0!3m2!1sru!2skg!4v1680784112337!5m2!1sru!2skg" width="860" height="810" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Tenth;