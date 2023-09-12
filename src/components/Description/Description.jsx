import React from "react";
import bannerDescripiton from '../../assets/img/description/description-banner.jpg'
import bannerDescripitonMobile from '../../assets/img/description/description__banner-mobile.png'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const Description = ({ DtitleOne, DSpan, DtitleTwo, DParagraph, DBtn }) => {

    const BannerDescripiton = window.innerWidth > 1024 ? bannerDescripiton : bannerDescripitonMobile;

    return (
        <>
            <div id="Description-main" className="description">
                <div className='description-container'>
                    <h2 className="description-title" data-aos="fade-right">{DtitleOne} <span className='description-span'>{DSpan} </span>{DtitleTwo}</h2>
                    <p className='description-paragraph' data-aos="fade-right">{DParagraph}</p>
                    <div className='description-btn-container'>
                       <a href="#Contact-main" style={{textDecoration:'none'}}><button className="description-btn" data-aos="fade-down">{DBtn}</button></a>
                    </div>
                </div>
                <div className="description--img" data-aos="fade-left">
                    <img className='description-img' src={BannerDescripiton} alt="" />
                </div>
            </div>
        </>
    );
};

export default Description;
