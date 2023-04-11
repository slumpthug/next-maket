"use client";
import React from 'react';
import css from './Seventh-style.module.css';
import MainBtn from '../../components/main-button/MainBtn';
import cardImg from '../../../public/Seventh/cardImg.jpg';
import Image from 'next/image';

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

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
                <div className={css.seventh__nav}>
                    <h2 className='main__title main__title_Seventh'>Latest <span className='orange-text'>Projects</span></h2>
                    <div>
                        <a href="#">All <span>84</span></a>
                        <a href="#">DESIGN <span>14</span></a>
                        <a href="#">DEVELOPMENT <span>18</span></a>
                        <a href="#">MARKETING <span>46</span></a>
                        <a href="#">TECHNOLOGY <span>6</span></a>
                    </div>
                </div>
                <div className={css.seventh__card_container}>
                    <div className={css.seventh__card}>
                        <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                        <div className='Seventh__card-info'>
                            <span>DESIGN</span>
                            <h4>Unique Product Design</h4>
                        </div>
                    </div>
                    <div className={css.seventh__card}>
                        <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                        <div className='Seventh__card-info'>
                            <span>DESIGN</span>
                            <h4>Unique Product Design</h4>
                        </div>
                    </div>
                    <div className={css.seventh__card}>
                        <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                        <div className='Seventh__card-info'>
                            <span>DESIGN</span>
                            <h4>Unique Product Design</h4>
                        </div>
                    </div>
                    <div className={css.seventh__card}>
                        <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                        <div className='Seventh__card-info'>
                            <span>DESIGN</span>
                            <h4>Unique Product Design</h4>
                        </div>
                    </div>
                    <div className={css.seventh__card}>
                        <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                        <div className='Seventh__card-info'>
                            <span>DESIGN</span>
                            <h4>Unique Product Design</h4>
                        </div>
                    </div>
                    <div className={css.seventh__card}>
                        <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                        <div className='Seventh__card-info'>
                            <span>DESIGN</span>
                            <h4>Unique Product Design</h4>
                        </div>
                    </div>
                    <div className={css.seventh__card}>
                        <Image className={css.seventh__card_img} src={cardImg} alt="vertical wavy lines" />
                        <div className='Seventh__card-info'>
                            <span>DESIGN</span>
                            <h4>Unique Product Design</h4>
                        </div>
                    </div>
                    <div className={css.seventh__card}>
                        <Image className='Seventh__card-img' src={cardImg} alt="vertical wavy lines" />
                        <div className='Seventh__card-info'>
                            <span>DESIGN</span>
                            <h4>Unique Product Design</h4>
                        </div>
                    </div>
                </div>
                <div className={css.seventh__slider}>
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
                </div>
                <div className='center center_no'>
                    <MainBtn text='Load more projects'/>
                </div>
            </div>
        </div>
    );
};

export default Seventh;