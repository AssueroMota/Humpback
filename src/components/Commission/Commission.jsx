import React from "react";



const Commission = ({ Ctitle, Cspan, CtitleTwo, Csubtitle, Cbtn }) => {




    return (
        <div id="Commission-main" className="Commission-container">
            <div className="Commission-container-2">
                <h2 data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000" className="Commission-title">{Ctitle} <span className="Commission-span">{Cspan} </span>{CtitleTwo}!</h2>
                <p data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000" className="Commission-subtitle">{Csubtitle}</p>
                <div className="Commission-btn-container">
                    <a href="#Contact-main" style={{ textDecoration: 'none' }}> <button className="Commission-btn" data-aos="fade-up" data-aos-duration="800">{Cbtn}</button></a>
                </div>
            </div>
        </div>
    )
}

export default Commission;
