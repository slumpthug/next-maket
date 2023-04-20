"use client";
import React from 'react';
import css from './Footer-style.module.css';
import logo from '../../../public/first/IVAX.svg';
import Image from 'next/image';

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

const Footer = () => {
    return (
        <div className={css.footer}>
            <motion.div 
                className={css.container}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    //once: true, 
                }}
            >
                <div className={css.footer__top}>
                    <div className={css.footer__comunication}>
                        <motion.h4
                            custom={1}
                            variants={topAnimation}
                        >
                            Communication
                        </motion.h4>
                        <motion.a 
                            href="#"
                            custom={1.2}
                            variants={topAnimation}
                        >
                            +38 (032) 295 84 53
                        </motion.a>
                        <motion.a 
                            href="#" 
                            className='orange-text'
                            custom={1.4}
                            variants={topAnimation}
                        >
                            ivax_dev@gmail.com
                        </motion.a>
                    </div>
                    <div className={css.footer__address}>
                        <motion.h4
                            custom={1}
                            variants={topAnimation}
                        >
                            Address
                        </motion.h4>
                        <motion.a 
                            href="#"
                            custom={1.2}
                            variants={topAnimation}
                        >
                            Lviv, Ukraine <br/>
                            st. Zalizniaka 21
                        </motion.a>
                    </div>
                </div>
                <motion.div 
                    className={css.footer__bottom}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        //once: true, 
                    }}
                >
                    <motion.div
                        custom={1}
                        variants={bottomAnimation}
                    >
                        <Image width="83px" src={logo} alt="company's logo" />
                    </motion.div>
                    <motion.span
                        custom={1.2}
                        variants={bottomAnimation}
                    >
                        Copyright © 2022 IVAX
                    </motion.span>
                    <div>
                        <motion.a 
                            href="#"
                            custom={1.4}
                            variants={bottomAnimation}
                        >
                            Terms of Use
                        </motion.a>
                        <motion.a 
                            href="#"
                            custom={1.4}
                            variants={bottomAnimation}
                        >
                            Privacy Policy 
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Footer;