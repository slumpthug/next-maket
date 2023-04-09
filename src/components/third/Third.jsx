import React from 'react';
import './Third-style.css';
import lampaTwo from '../../../public/third/lampaTwo.svg';
import cardLogo from '../../../public/third/cardLogo.svg';
import Image from 'next/image';

const Third = () => {
    return (
        <div className='Third'>
            <h2 className='main__title'>We <span className='orange-text'>deliver</span></h2>
            <div className='Third__content'>
                <div className='Third__card-cont'>
                    <div className="Third__card">
                        <div className='Third__card-logo'>
                            <Image src={cardLogo} alt="" />
                            <span className='Third__card-number'>01</span>
                        </div>
                        <h4 className='Third__card-title'>
                            Branding
                        </h4>
                        <ul className='Third__card-list'>
                            <li>Brand identity</li>
                            <li>Brand identity</li>
                            <li>Brand identity</li>
                            <li>Brand identity</li>
                        </ul>
                    </div>
                    <div className="Third__card">
                        <div className='Third__card-logo'>
                            <Image src={cardLogo} alt="" />
                            <span className='Third__card-number'>02</span>
                        </div>
                        <h4 className='Third__card-title'>
                            Web development
                        </h4>
                        <ul className='Third__card-list'>
                            <li>Landing-pages</li>
                            <li>Landing-pages</li>
                            <li>Landing-pages</li>
                        </ul>
                    </div>
                </div>
                <Image className='Third__lampaTwo' src={lampaTwo} alt="" />
                <div className='Third__card-cont'>
                    <div className="Third__card">
                        <div className='Third__card-logo'>
                            <Image src={cardLogo} alt="" />
                            <span className='Third__card-number'>03</span>
                        </div>
                        <h4 className='Third__card-title'>
                            WEB design
                        </h4>
                        <ul className='Third__card-list'>
                            <li>Websites</li>
                            <li>Websites</li>
                            <li>Websites</li>
                        </ul>
                    </div>
                    <div className="Third__card">
                        <div className='Third__card-logo'>
                            <Image src={cardLogo} alt="" />
                            <span className='Third__card-number'>04</span>
                        </div>
                        <h4 className='Third__card-title'>
                            Video
                        </h4>
                        <ul className='Third__card-list'>
                            <li>Filmmaking</li>
                            <li>Filmmaking</li>
                            <li>Filmmaking</li>
                            <li>Filmmaking</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Third;