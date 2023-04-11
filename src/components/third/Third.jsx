import React from 'react';
import css from './Third-style.module.css';
import lampaTwo from '../../../public/third/lampaTwo.svg';
import cardLogo from '../../../public/third/cardLogo.svg';
import Image from 'next/image';

const Third = () => {
    return (
        <div className={css.third}>
            <div className={css.container}>
                <h2 className='main__title'>We <span className='orange-text'>deliver</span></h2>
                <div className={css.third__content}>
                    <div className={css.third__card_conteiner}>
                        <div className={css.third__card}>
                            <div>
                                <Image src={cardLogo} alt="pen logo" />
                                <span>01</span>
                            </div>
                            <h4>
                                Branding
                            </h4>
                            <ul>
                                <li>Brand identity</li>
                                <li>Brand identity</li>
                                <li>Brand identity</li>
                                <li>Brand identity</li>
                            </ul>
                        </div>
                        <div className={css.third__card}>
                            <div>
                                <Image src={cardLogo} alt="pen logo" />
                                <span>02</span>
                            </div>
                            <h4>
                                Web development
                            </h4>
                            <ul>
                                <li>Landing-pages</li>
                                <li>Landing-pages</li>
                                <li>Landing-pages</li>
                            </ul>
                        </div>
                    </div>
                    <Image className={css.third__lampa} src={lampaTwo} alt="bulb" />
                    <div className={css.third__card_conteiner}>
                        <div className={css.third__card}>
                            <div>
                                <Image src={cardLogo} alt="pen logo" />
                                <span>03</span>
                            </div>
                            <h4>
                                WEB design
                            </h4>
                            <ul>
                                <li>Websites</li>
                                <li>Websites</li>
                                <li>Websites</li>
                            </ul>
                        </div>
                        <div className={css.third__card}>
                            <div>
                                <Image src={cardLogo} alt="pen logo" />
                                <span>04</span>
                            </div>
                            <h4>
                                Video
                            </h4>
                            <ul>
                                <li>Filmmaking</li>
                                <li>Filmmaking</li>
                                <li>Filmmaking</li>
                                <li>Filmmaking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Third;