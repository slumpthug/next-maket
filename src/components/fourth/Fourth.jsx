import React from 'react';
import './Fourth-style.css';
import elipse from '../../../public/fourth/elipse.svg';
import line from '../../../public/fourth/line.svg';
import lineTwo from '../../../public/fourth/lineTwo.svg';
import Image from 'next/image';
import MainBtn from '../main-button/MainBtn';

const Fourth = () => {
    return (
        <div className='Fourth'>
            <h2 className='main__title'>We promise <span className='orange-text'>six things</span> </h2>
            <div className='Fourth__cont'>
                <div className='Fourth__card-cont-top'>
                    <div className="Fourth__card Fourth__card_one">
                        <p>Your deadline is <br/> our religion</p>
                        <Image className='elipse' src={elipse} alt="elipse" />
                    </div>
                    <div className="Fourth__card Fourth__card_one">
                        <p>Maximum flexibility to <br/> meet your needs </p>
                        <Image className='elipse' src={elipse} alt="elipse" />
                    </div>
                    <div className="Fourth__card Fourth__card_one">
                        <p>24/7 direct contact <br/> with us </p>
                        <Image className='elipse' src={elipse} alt="elipse" />
                    </div>
                </div>
                <Image className='line' src={line} alt="line vertically" />
                <Image className='lineTwo' src={lineTwo} alt="line horizontally" />
                <div className='Fourth__card-cont-bottom'>
                    <div className="Fourth__card Fourth__card_two">
                        <Image className='elipse_two' src={elipse} alt="elipse" />
                        <p>Personalized approach <br/> towards each case</p>
                    </div>
                    <div className="Fourth__card Fourth__card_two">
                        <Image className='elipse_two' src={elipse} alt="elipse" />
                        <p>No job is too <br/> small</p>
                    </div>
                    <div className="Fourth__card Fourth__card_two">
                        <Image className='elipse_two' src={elipse} alt="elipse" />
                        <p>We are creative, inspired, curious, <br/> logic and open to critic</p>
                    </div>
                </div>
            </div>
            <MainBtn text='Talk to us'/>
        </div>
    );
};

export default Fourth;