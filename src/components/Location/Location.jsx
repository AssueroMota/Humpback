import React from "react";
import img1Mobile from '../../assets/img/location/map__1.png'
import img2Mobile from '../../assets/img/location/map__2.png'
import img3Mobile from '../../assets/img/location/map__3.png'
import img1Main from '../../assets/img/location/map-1.jpg'
import img2Main from '../../assets/img/location/map-2.jpg'
import img3Main from '../../assets/img/location/map-3.jpg'


const Location = ({Ltitle,Lspan,Lsubtitle,LsubtitleTwo}) => {

    const ColectionMap = [
        { img: img1Main, imgMobile: img1Mobile },
        { img: img2Main, imgMobile: img2Mobile },
        { img: img3Main, imgMobile: img3Mobile },
    ];

    return (
        <div id="Location-main" className="Location-container">
            <div className="Location-container-2" data-aos="fade-up" data-aos-duration="1300">
                <h2 className="Location-title">{Ltitle}<span className="Location-span"> {Lspan}</span></h2>
                <p className="Location-subtitle">{Lsubtitle}</p>
                <p className="Location-subtitle-2">{LsubtitleTwo}</p>
            </div>
            <div className="Location-Container-img">
                {ColectionMap.map((map, id) => {
                    const ImageMap = window.innerWidth > 1024 ? map.img : map.imgMobile;
                    return (
                        <div className="ColectionMap" key={id} data-aos="zoom-out" data-aos-duration="8000">
                                <img className='Location-Colletion' src={ImageMap} alt="" />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Location;
