import React, { useState } from "react";


import img1 from '../../assets/img/photos/image1.jpg'
import img2 from '../../assets/img/photos/image2.jpg'
import img3 from '../../assets/img/photos/image3.jpg'
import img4 from '../../assets/img/photos/image4.jpg'
import img5 from '../../assets/img/photos/image5.jpg'
import img6 from '../../assets/img/photos/image6.jpg'
import img7 from '../../assets/img/photos/image7.jpg'
import img8 from '../../assets/img/photos/image8.jpg'
import img9 from '../../assets/img/photos/image9.jpg'
import img10 from '../../assets/img/photos/image10.jpg'
import img1Mobile from '../../assets/img/photos/photos__1.png'
import img2Mobile from '../../assets/img/photos/photos__2.png'
import img3Mobile from '../../assets/img/photos/photos__3.png'
import img4Mobile from '../../assets/img/photos/photos__4.png'
import img5Mobile from '../../assets/img/photos/photos__5.png'
import img6Mobile from '../../assets/img/photos/photos__6.png'
import img7Mobile from '../../assets/img/photos/photos__7.png'
import img8Mobile from '../../assets/img/photos/photos__8.png'
import img9Mobile from '../../assets/img/photos/photos__9.png'
import img10Mobile from '../../assets/img/photos/photos__10.png'


import { initLightboxJS } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import { SlideshowLightbox } from 'lightbox.js-react'

const Photos = ({ PhTitle }) => {


    const ColectionPhotos = [
        { img: img1, imgMobile: img1Mobile },
        { img: img2, imgMobile: img2Mobile },
        { img: img3, imgMobile: img3Mobile },
        { img: img2, imgMobile: img1Mobile },
        { img: img1, imgMobile: img5Mobile },
        { img: img10, imgMobile: img6Mobile },
        { img: img3, imgMobile: img7Mobile },
        { img: img4, imgMobile: img8Mobile },
        { img: img9, imgMobile: img9Mobile },
        { img: img10, imgMobile: img10Mobile }
    ];


    return (
        <div id="Photos-main" className="Photos-container">
            <div className="Photos-title">
                <h2 data-aos="fade-down">{PhTitle}</h2>
            </div>
            <div className="Photos-Colletion">
                {ColectionPhotos.map((photos, id) => {
                    const ImagePhoto = window.innerWidth > 1024 ? photos.img : photos.imgMobile;
                    return (
                        <div key={id} className="Photos-img" data-aos="zoom-in-up">
                            <SlideshowLightbox>
                                <img src={ImagePhoto} alt="" />
                            </SlideshowLightbox>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Photos;








