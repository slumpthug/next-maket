import React from 'react';
import './Tenth-style.css';
import MainBtn from '../../components/main-button/MainBtn';
import fluent from '../../../public/tenth/fluent.svg';

const Tenth = () => {
    return (
        <div>
            <div className='Tenth'>
            <div className="Tenth__contacts">
                <h2 className='main__title'><span className='orange-text'>Tell us</span> more</h2>
                <div className="Tenth__checkbox-cont">
                    <div className='Tenth__checkbox'>
                        <input type="checkbox" />
                        <p>Branding </p>
                    </div>
                    <div className='Tenth__checkbox'>
                        <input type="checkbox" />
                        <p>Web design</p>
                    </div>
                    <div className='Tenth__checkbox'>
                        <input type="checkbox" />
                        <p>Development</p>
                    </div>
                    <div className='Tenth__checkbox'>
                        <input type="checkbox" />
                        <p>Video</p>
                    </div>
                </div>
                <div className='Tenth__input-top'>
                    <div className='Tenth__input'>
                        <span>Name*</span>
                        <input type="text"/>
                    </div>
                    <div className='Tenth__input'>
                        <span>Phone*</span>
                        <input type="text"/>
                    </div>
                </div>
                <div className='Tenth__input'>
                    <span>Email*</span>
                    <input type="text"/>
                </div>
                <div className='Tenth__input'>
                    <span>Message</span>
                    <input type="text"/>
                </div>
                <div className="Tenth__btn-cont">
                    <MainBtn text='Send'/>
                    <div className="Tenth__btn">
                        <img src={fluent} alt="" />
                        <button>Attach file</button>
                    </div>
                </div>
            </div>
            <div className="Tenth__map">
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10845363.572766306!2d46.449631333730366!3d48.42210209875439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a291a3bb5d189d%3A0x2438878df40cf028!2z0JrQsNGE0LUg0JjQu9GM0LPQuNC3!5e0!3m2!1sru!2skg!4v1680784112337!5m2!1sru!2skg" width="860" height="810" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </div>
    );
};

export default Tenth;