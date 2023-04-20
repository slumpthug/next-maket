"use client";
import React from 'react';
import css from './Ninth-style.module.css';
import broski from '../../../public/ninth/broski.jpg';
import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";

// import required modules
import { EffectCoverflow} from "swiper";
import { EffectCreative } from "swiper";

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

const Ninth = () => {
    return (
        <div className={css.ninth}>
            <motion.div 
                className={css.container}
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
                    <span className='orange-text'>Team</span> that Builds Ideas Driven by the Future
                </motion.h2>
                <motion.div 
                    className={css.ninth__slider}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        //once: true, 
                    }}
                    custom={1.2}
                    variants={rightAnimation}
                >
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        initialSlide={1}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                          rotate: 0,
                          stretch: 200,
                          depth: 300,
                          modifier: 1,
                          slideShadows: true,
                        }}
                        modules={[EffectCoverflow]}
                        className={css.swiper}
                    >
                        <SwiperSlide className={css.swiper_slide}>
                            <div className={css.ninth__card}>
                                <Image className={css.ninth__card_img} src={broski} alt='man looks'/>
                                <div>
                                    <h2>Harry Newman</h2>
                                    <h4>Frontend Developer</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                            <div className={css.ninth__card}>
                                <Image className={css.ninth__card_img} src={broski} alt='man looks'/>
                                <div>
                                    <h2>Harry Newman</h2>
                                    <h4>Frontend Developer</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={css.swiper_slide}>
                            <div className={css.ninth__card}>
                                <Image className={css.ninth__card_img} src={broski} alt='man looks'/>
                                <div>
                                    <h2>Harry Newman</h2>
                                    <h4>Frontend Developer</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>   
                </motion.div>
                <motion.div 
                    className={css.ninth__slider_adap}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        //once: true, 
                    }}
                    custom={1.2}
                    variants={rightAnimation}
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
                      className={css.swiper_two}
                    >
                      <SwiperSlide className={css.swiper_slide_two}>
                            <div className={css.ninth__card}>
                                <Image className={css.ninth__card_img} src={broski} alt='man looks'/>
                                <div>
                                    <h2>Harry Newman</h2>
                                    <h4>Frontend Developer</h4>
                                </div>
                            </div>
                      </SwiperSlide>
                      <SwiperSlide className={css.swiper_slide_two}>
                            <div className={css.ninth__card}>
                                <Image className={css.ninth__card_img} src={broski} alt='man looks'/>
                                <div>
                                    <h2>Harry Newman</h2>
                                    <h4>Frontend Developer</h4>
                                </div>
                            </div>
                      </SwiperSlide>
                      <SwiperSlide className={css.swiper_slide_two}>
                            <div className={css.ninth__card}>
                                <Image className={css.ninth__card_img} src={broski} alt='man looks'/>
                                <div>
                                    <h2>Harry Newman</h2>
                                    <h4>Frontend Developer</h4>
                                </div>
                            </div>
                      </SwiperSlide>
                    </Swiper>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Ninth;