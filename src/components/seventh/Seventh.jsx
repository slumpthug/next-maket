"use client";
import React from 'react';
import css from './Seventh-style.module.css';
import MainBtn from '../../components/main-button/MainBtn';
import cardImg from '../../../public/Seventh/cardImg.jpg';
import Image from 'next/image';

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

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

const cardAnimation = {
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

const Seventh = () => {
    const [sliderRef] = useKeenSlider({
        slides: {
          perView: 1,
          spacing: 15,
        },
    })

    return (
        <div className={css.seventh}>
            <div className={css.container}>
                <motion.div
                    className={css.seventh__nav}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        amount: 0.1,
                        //once: true, 
                    }}
                >
                    <motion.h2 
                        className='main__title main__title_Seventh'
                        custom={1.2}
                        variants={topAnimation}
                    >
                        Latest <span className='orange-text'>Projects</span>
                    </motion.h2>
                    <div>
                        <motion.a 
                            custom={1.2}
                            variants={topAnimation}
                            href="#"
                        >
                            All <span>84</span>
                        </motion.a>
                        <motion.a 
                            custom={1.4}
                            variants={topAnimation}
                            href="#"
                        >
                            DESIGN <span>14</span>
                        </motion.a>
                        <motion.a 
                            custom={1.6}
                            variants={topAnimation}
                            href="#"
                        >
                            DEVELOPMENT <span>18</span>
                        </motion.a>
                        <motion.a 
                            custom={1.8}
                            variants={topAnimation}
                            href="#"
                        >
                            MARKETING <span>46</span>
                        </motion.a>
                        <motion.a 
                            custom={2}
                            variants={topAnimation}
                            href="#"
                        >
                            TECHNOLOGY <span>6</span>
                        </motion.a>
                    </div>
                </motion.div>
                <motion.div 
                    className={css.seventh__card_container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        amount: 0.1,
                        //once: true, 
                    }}
                >
                    <motion.div 
                        className={css.seventh__card}
                        custom={1}
                        variants={cardAnimation}
                    >
                        <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                        <div className='Seventh__card-info'>
                            <span>DESIGN</span>
                            <h4>Unique Product Design</h4>
                        </div>
                    </motion.div>
                    <motion.div 
                        className={css.seventh__card}
                        custom={1.2}
                        variants={cardAnimation}
                    >
                        <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                        <div className='Seventh__card-info'>
                            <span>DESIGN</span>
                            <h4>Unique Product Design</h4>
                        </div>
                    </motion.div>
                    <motion.div 
                        className={css.seventh__card}
                        custom={1.4}
                        variants={cardAnimation}
                    >
                        <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                        <div className='Seventh__card-info'>
                            <span>DESIGN</span>
                            <h4>Unique Product Design</h4>
                        </div>
                    </motion.div>
                    <motion.div 
                        className={css.seventh__card}
                        custom={1.6}
                        variants={cardAnimation}
                    >
                        <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                        <div className='Seventh__card-info'>
                            <span>DESIGN</span>
                            <h4>Unique Product Design</h4>
                        </div>
                    </motion.div>
                    <motion.div 
                        className={css.seventh__card}
                        custom={1.8}
                        variants={cardAnimation}
                    >
                        <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                        <div className='Seventh__card-info'>
                            <span>DESIGN</span>
                            <h4>Unique Product Design</h4>
                        </div>
                    </motion.div>
                    <motion.div 
                        className={css.seventh__card}
                        custom={2}
                        variants={cardAnimation}
                    >
                        <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                        <div className='Seventh__card-info'>
                            <span>DESIGN</span>
                            <h4>Unique Product Design</h4>
                        </div>
                    </motion.div>
                    <motion.div 
                        className={css.seventh__card}
                        custom={2.2}
                        variants={cardAnimation}
                    >
                        <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                        <div className='Seventh__card-info'>
                            <span>DESIGN</span>
                            <h4>Unique Product Design</h4>
                        </div>
                    </motion.div>
                    <motion.div 
                        className={css.seventh__card}
                        custom={2.4}
                        variants={cardAnimation}
                    >
                        <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                        <div className='Seventh__card-info'>
                            <span>DESIGN</span>
                            <h4>Unique Product Design</h4>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className={css.seventh__slider}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        //once: true, 
                    }}
                    custom={2}
                    variants={cardAnimation}
                >
                        <div ref={sliderRef} className="keen-slider">
                            <div className="keen-slider__slide">
                                <div className={css.seventh__card}>
                                    <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                                    <div className='Seventh__card-info'>
                                        <span>DESIGN</span>
                                        <h4>Unique Product Design</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="keen-slider__slide">
                                <div className={css.seventh__card}>
                                    <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                                    <div className='Seventh__card-info'>
                                        <span>DESIGN</span>
                                        <h4>Unique Product Design</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="keen-slider__slide">
                                <div className={css.seventh__card}>
                                    <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                                    <div className='Seventh__card-info'>
                                        <span>DESIGN</span>
                                        <h4>Unique Product Design</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="keen-slider__slide">
                                <div className={css.seventh__card}>
                                    <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                                    <div className='Seventh__card-info'>
                                        <span>DESIGN</span>
                                        <h4>Unique Product Design</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="keen-slider__slide">
                                <div className={css.seventh__card}>
                                    <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                                    <div className='Seventh__card-info'>
                                        <span>DESIGN</span>
                                        <h4>Unique Product Design</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="keen-slider__slide">
                                <div className={css.seventh__card}>
                                    <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                                    <div className='Seventh__card-info'>
                                        <span>DESIGN</span>
                                        <h4>Unique Product Design</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                </motion.div>
                <div className='center center_no'>
                    <MainBtn text='Load more projects'/>
                </div>
            </div>
        </div>
    );
};

export default Seventh;