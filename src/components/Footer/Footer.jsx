import React from "react";
import Logo from '../../assets/img/header/header__logo.svg'
import icon1 from '../../assets/img/footer/footer__facebook.svg'
import icon2 from '../../assets/img/footer/footer__instagram.svg'
import icon3 from '../../assets/img/footer/footer__linkedin.svg'
import icon4 from '../../assets/img/footer/footer__whatsapp.svg'



const Footer = ({FTitle, FtermsPOne, FtermsPTwo}) => {

    const SocialMedia = [
        { icon: icon1, Link: '#' },
        { icon: icon2, Link: '#' },
        { icon: icon3, Link: '#' },
        { icon: icon4, Link: '#' }
    ]
   
    return (
        <div className="Footer-Container" id="Footer-main">
            <div className="Footer-img">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="Footer-Contacts">
                <h3 className="Footer-Title">{FTitle}</h3>
                <div className="Footer-Contacts-Email-Tel">
                    <p className="Footer-Email">contact@humpback.com</p>
                    <p className="Footer-Tel">+1 (000) 000-0000</p>
                </div>
                <div className="Footer-icon">
                    {SocialMedia.map((icon, id) => {
                        return (
                            <div key={id}>
                                <img src={icon.icon} alt="" />
                            </div>
                        )
                    })}
                </div>

                <div className="Footer-terms">
                    <p>{FtermsPOne}</p>
                    <p>{FtermsPTwo}</p>
                </div>
                <div className="Footer-copyright">
                    <p>2023. Humpback Land</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;