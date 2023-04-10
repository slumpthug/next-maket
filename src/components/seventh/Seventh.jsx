import React from 'react';
import './Seventh-style.css';
import MainBtn from '../../components/main-button/MainBtn';
import cardImg from '../../../public/Seventh/cardImg.jpg';
import Image from 'next/image';

const Seventh = () => {
    return (
        <div className='Seventh'>
            <div className='Seventh__nav-cont'>
                <h2 className='main__title main__title_Seventh'>Latest <span className='orange-text'>Projects</span></h2>
                <div className='Seventh__nav'>
                    <a href="#" className='Seventh__nav-link'>All <span>84</span></a>
                    <a href="#" className='Seventh__nav-link'>DESIGN <span>14</span></a>
                    <a href="#" className='Seventh__nav-link'>DEVELOPMENT <span>18</span></a>
                    <a href="#" className='Seventh__nav-link'>MARKETING <span>46</span></a>
                    <a href="#" className='Seventh__nav-link'>TECHNOLOGY <span>6</span></a>
                </div>
            </div>
            <div className='Seventh__card-cont'>
                <div className="Seventh__card">
                    <Image className='Seventh__card-img' src={cardImg} alt="vertical wavy lines" />
                    <div className='Seventh__card-info'>
                        <span>DESIGN</span>
                        <h4>Unique Product Design</h4>
                    </div>
                </div>
                <div className="Seventh__card">
                    <Image className='Seventh__card-img' src={cardImg} alt="vertical wavy lines" />
                    <div className='Seventh__card-info'>
                        <span>DESIGN</span>
                        <h4>Unique Product Design</h4>
                    </div>
                </div>
                <div className="Seventh__card">
                    <Image className='Seventh__card-img' src={cardImg} alt="vertical wavy lines" />
                    <div className='Seventh__card-info'>
                        <span>DESIGN</span>
                        <h4>Unique Product Design</h4>
                    </div>
                </div>
                <div className="Seventh__card">
                    <Image className='Seventh__card-img' src={cardImg} alt="vertical wavy lines" />
                    <div className='Seventh__card-info'>
                        <span>DESIGN</span>
                        <h4>Unique Product Design</h4>
                    </div>
                </div>
                <div className="Seventh__card">
                    <Image className='Seventh__card-img' src={cardImg} alt="vertical wavy lines" />
                    <div className='Seventh__card-info'>
                        <span>DESIGN</span>
                        <h4>Unique Product Design</h4>
                    </div>
                </div>
                <div className="Seventh__card">
                    <Image className='Seventh__card-img' src={cardImg} alt="vertical wavy lines" />
                    <div className='Seventh__card-info'>
                        <span>DESIGN</span>
                        <h4>Unique Product Design</h4>
                    </div>
                </div>
                <div className="Seventh__card">
                    <Image className='Seventh__card-img' src={cardImg} alt="vertical wavy lines" />
                    <div className='Seventh__card-info'>
                        <span>DESIGN</span>
                        <h4>Unique Product Design</h4>
                    </div>
                </div>
                <div className="Seventh__card">
                    <Image className='Seventh__card-img' src={cardImg} alt="vertical wavy lines" />
                    <div className='Seventh__card-info'>
                        <span>DESIGN</span>
                        <h4>Unique Product Design</h4>
                    </div>
                </div>
            </div>
            <div className='center center_no'>
                <MainBtn text='Load more projects'/>
            </div>
        </div>
    );
};

export default Seventh;