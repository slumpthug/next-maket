"use client";
import React from 'react';
import css from './Ninth-style.module.css';
import broski from '../../../public/ninth/broski.jpg';
import Image from 'next/image';

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Ninth = () => {
    const [sliderRef] = useKeenSlider()

    return (
        <div className={css.ninth}>
            <div className={css.container}>
                <h2 className='main__title'><span className='orange-text'>Team</span> that Builds Ideas Driven by the Future</h2>
                <div className={css.ninth__slider}>
                    <div ref={sliderRef} className="keen-slider">
                      <div className="keen-slider__slide number-slide1">
                        <div className={css.ninth__card}>
                            <Image className={css.ninth__card_img} src={broski} alt='man looks'/>
                            <div>
                                <h2>Harry Newman</h2>
                                <h4>Frontend Developer</h4>
                            </div>
                        </div>
                      </div>
                      <div className="keen-slider__slide number-slide1">
                        <div className={css.ninth__card}>
                            <Image className={css.ninth__card_img} src={broski} alt='man looks'/>
                            <div>
                                <h2>Harry Newman</h2>
                                <h4>Frontend Developer</h4>
                            </div>
                        </div>
                      </div>
                      <div className="keen-slider__slide number-slide1">
                        <div className={css.ninth__card}>
                            <Image className={css.ninth__card_img} src={broski} alt='man looks'/>
                            <div>
                                <h2>Harry Newman</h2>
                                <h4>Frontend Developer</h4>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ninth;