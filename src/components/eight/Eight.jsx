"use client";
import React from 'react';
import css from './Eight-style.module.css';
import broski from '../../../public/eight/broski.jpg';
import broskiTwo from '../../../public/eight/broskiTwo.jpg';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative } from "swiper";

import { motion } from "framer-motion";

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

const leftAnimation = {
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

const Eight = () => {
    return (
        <div className={css.eight}>
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
                    variants={topAnimation}
                >
                    What our clients <span className='orange-text'>say about us</span>
                </motion.h2>
                <motion.div
                    className={css.eight__content}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        amount: 0.2,
                        //once: true, 
                    }}
                >
                    <div className={css.eight__wrapper}>
                        <motion.div
                            custom={1.2}
                            variants={topAnimation}
                        >
                            <Image className={css.eight__broski} src={broski} alt="woman in black dress" />
                        </motion.div>
                        <motion.div
                            custom={1.4}
                            variants={topAnimation}
                        >
                            <Image className={css.eight__broski} src={broski} alt="woman in black dress" />
                        </motion.div>
                        <motion.div
                            custom={1.6}
                            variants={topAnimation}
                        >
                            <Image className={css.eight__broski} src={broski} alt="woman in black dress" />
                        </motion.div>
                        <motion.div
                            custom={1.8}
                            variants={topAnimation}
                        >
                            <Image className={css.eight__broski_two} src={broskiTwo} alt="the man in a suit" />
                        </motion.div>
                    </div>
                    <motion.div 
                        className={css.eight__slider}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            amount: 0.2,
                            //once: true, 
                        }}
                        custom={1.2}
                        variants={topAnimation}
                    >
                        <Swiper
                            grabCursor={true}
                            effect={"creative"}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -400],
                                },
                                next: {
                                    translate: ["100%", 0, 0],
                                },
                            }}
                            modules={[EffectCreative]}
                            className={css.swiper}
                        >
                            <SwiperSlide className={css.swiper_slide}>
                                <Image className={css.eight__broski_two} src={broskiTwo} alt="the man in a suit" />
                            </SwiperSlide>
                            <SwiperSlide className={css.swiper_slide}>
                                <Image className={css.eight__broski_two} src={broskiTwo} alt="the man in a suit" />
                            </SwiperSlide>
                            <SwiperSlide className={css.swiper_slide}>
                                <Image className={css.eight__broski_two} src={broskiTwo} alt="the man in a suit" />
                            </SwiperSlide>
                            <SwiperSlide className={css.swiper_slide}>
                                <Image className={css.eight__broski_two} src={broskiTwo} alt="the man in a suit" />
                            </SwiperSlide>
                        </Swiper>
                    </motion.div>
                    <motion.div
                        className={css.eight__info}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            amount: 0.2,
                            //once: true, 
                        }}
                        custom={1.2}
                        variants={leftAnimation}
                    >
                        <h2>James Taylor</h2>
                        <h4>SEO Company </h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Sed eget id odio accumsan in. Pellentesque nunc amet cras vitae. Euismod justo non etiam auctor. Sapien quis feugiat porttitor quis nullam et venenatis sed.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Eight;