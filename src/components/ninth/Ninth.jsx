import React from 'react';
import './Ninth-style.css';
import broski from '../../../public/ninth/broski.jpg';
import Image from 'next/image';

const Ninth = () => {
    return (
        <div className='Ninth'>
            <h2 className='main__title'><span className='orange-text'>Team</span> that Builds Ideas Driven by the Future</h2>
            <div className='Ninth__card-cont'>
                <div className='Ninth__card Ninth__card_mini left'>
                    <Image className='Ninth__card-img' src={broski} alt='man looks'/>
                    <div className='Ninth__card-info'>
                        <h2>Harry Newman</h2>
                        <h4>Frontend Developer</h4>
                    </div>
                </div>
                <div className='Ninth__card'>
                    <Image className='Ninth__card-img' src={broski} alt='man looks'/>
                    <div className='Ninth__card-info'>
                        <h2>Harry Newman</h2>
                        <h4>Frontend Developer</h4>
                    </div>
                </div>
                <div className='Ninth__card Ninth__card_mini right'>
                    <Image className='Ninth__card-img' src={broski} alt='man looks'/>
                    <div className='Ninth__card-info'>
                        <h2>Harry Newman</h2>
                        <h4>Frontend Developer</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ninth;