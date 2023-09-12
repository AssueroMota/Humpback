import React from "react";
import icon from '../../assets/img/possibilities/iconP.svg'


const Possibilities = ({ pTitle, pSpan, pTitleTwo, pIntroParagraph, pSubHeading, pInvestButton, PP1, PP2, PP3, PP4, PP5, PP6, PP7, PP8 }) => {

    const PhotosPossibilities = [
        { icon: icon, description: PP1 },
        { icon: icon, description: PP2 },
        { icon: icon, description: PP3 },
        { icon: icon, description: PP4 },
        { icon: icon, description: PP5 },
        { icon: icon, description: PP6 },
        { icon: icon, description: PP7 },
        { icon: icon, description: PP8 }
    ]

    return (
        <>
            <div id="Possibilities-main" className="possibilities-container">
                <div className="possibilitiesContainer">
                    <div className="possibilitiesContainer-Title">
                        <h2 className="possibilities-title" data-aos="fade-down" data-aos-duration="400">{pTitle} <span className="possibilities-span">{pSpan}</span> {pTitleTwo}</h2>
                    </div>
                    <div className="possibilitiesContainer-Text">
                        <p className="possibilities-intro-paragraph" data-aos="fade-up" data-aos-duration="800">{pIntroParagraph}</p>
                        <p className="possibilities-sub-heading" data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom" data-aos-duration="800">{pSubHeading}</p>
                    </div>

                    <div className="possibilities-grid">
                        {PhotosPossibilities.map((photos, id) => {
                            return (
                                <div key={id} className="possibilities-investment-option" data-aos="fade-down" data-aos-duration="1200">
                                    <div className="possibilities-icon-image">
                                        <img className="possibilities-icon-image-icon" src={photos.icon} alt={photos.description} />
                                    </div>
                                    <p className="possibilities-description-text">{photos.description}</p>
                                </div>
                            )
                        })}
                    </div>
                    <a href="#Contact-main" style={{ textDecoration: 'none' }}> <button className="possibilities-invest-button" data-aos="fade-down" data-aos-duration="1200">{pInvestButton}</button>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Possibilities;