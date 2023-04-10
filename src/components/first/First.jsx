import React from 'react';
import logo from "../../../public/first/IVAX.svg";
import circles from '../../../public/first/elipseGroup.svg';
import lampa from '../../../public/first/lampa.svg';
import './First-style.css';
import Image from 'next/image';
import MainBtn from '../main-button/MainBtn';

const First = () => {
    return (
        <div className='First'>
            <Image className='First__logo' src={logo} alt="company`s logo" />
            <div className='main-part'>
                <div className='main-part__title-cont'>
                    <h1 className="main-part__title">
                        Paint <br />
                        your thoughts <br />
                        with <span className='orange-text'>IVAX</span>
                    </h1>
                    <div className="main-part__btn-cont">
                        <button className='main-part__btn btn-one'>Portfolio</button>
                        <div className='center'>
                            <MainBtn text='Check with us'/>
                        </div>
                    </div>
                </div>
                <div className='main-part__img-cont'>
                    <Image className='circles-img' src={circles} alt="circles" />
                    <Image className='lampa-img' src={lampa} alt="bulb" />
                </div>
            </div>
        </div>
    );
};

export default First;