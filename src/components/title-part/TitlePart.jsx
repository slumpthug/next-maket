"use client";
import React from 'react';
import css from './TitlePart-style.module.css';

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

const TitlePart = () => {
    return (
        <div className={css.title_part}>
            <motion.div 
                className={css.container}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.6,
                    //once: true, 
                }}
                custom={1}
                variants={opacityAnimation}
            >
                <h2 className={css.title_part__title_one}>UX_Web development_Brand identity</h2>
                <h2 className={css.title_part__title_two}>UX_Mobile apps_Video_Filmmaking</h2>
            </motion.div>
        </div>
    );
};

export default TitlePart;