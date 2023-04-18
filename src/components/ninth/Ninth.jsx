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

const Ninth = () => {
    return (
        <div className={css.ninth}>
            <div className={css.container}>
                <h2 className='main__title'><span className='orange-text'>Team</span> that Builds Ideas Driven by the Future</h2>
                <div className={css.ninth__slider}>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
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
                </div>
                <div className={css.ninth__slider_adap}>
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
                </div>
            </div>
        </div>
    );
};

export default Ninth;