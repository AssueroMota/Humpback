import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import '../../i18n';

import logo from '../../assets/img/header/header__logo.svg';
import logoMobile from '../../assets/img/header/header__logo-mobile.svg';
import menu from '../../assets/img/header/header__menu.svg';
import close from '../../assets/img/header/menu__close.svg';
import brazilflag from '../../assets/img/nacionalites/flag__brazil.svg'
import arabicflag from '../../assets/img/nacionalites/flag__arabic.svg'
import englishflag from '../../assets/img/nacionalites/flag__english.svg'
import frenchflag from '../../assets/img/nacionalites/flag__french.svg'
import germanyflag from '../../assets/img/nacionalites/flag__germany.svg'
import italianflag from '../../assets/img/nacionalites/flag__italian.svg'
import mandarinflag from '../../assets/img/nacionalites/flag__mandarin.svg'
import russianflag from '../../assets/img/nacionalites/flag__russian.svg'
import spanishflag from '../../assets/img/nacionalites/flag__spanish.svg'

const Header = ({ h1, h2, h3, h4, h5, h6, btn }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Mapeamento de códigos de idioma internos para valores exibidos
  const languageDisplayMap = {
    'pt': 'PT-BR',
    'ar': 'AR-AR',
    'en': 'EN-US',
    'fr': 'FR-FR',
    'de': 'DE-DE',
    'it': 'IT-IT',
    'zh': 'ZH-CN',
    'ru': 'RU-RU',
    'es': 'ES-ES',
  };

  // Select Paises
  const countryOptions = [
    { code: 'pt', name: 'Brazil', flag: brazilflag },
    { code: 'ar', name: 'Arabic', flag: arabicflag },
    { code: 'en', name: 'United States', flag: englishflag },
    { code: 'fr', name: 'France', flag: frenchflag },
    { code: 'de', name: 'Germany', flag: germanyflag },
    { code: 'it', name: 'Italy', flag: italianflag },
    { code: 'zh', name: 'China', flag: mandarinflag },
    { code: 'ru', name: 'Russia', flag: russianflag },
    { code: 'es', name: 'Spain', flag: spanishflag },
  ];
  // Links
  const Header = [
    { name: h1, link: '#Description-main' },
    { name: h2, link: '#Movies-main' },
    { name: h3, link: '#Photos-main' },
    { name: h4, link: '#Possibilities-main' },
    { name: h5, link: '#Location-main' },
    { name: h6, link: '#Commission-main' },
  ];

  // Variavel para trocar de imagem
  const logoToShow = window.innerWidth > 1024 ? logo : logoMobile;
  // Variavel do Estado do Idioma
  const { t, i18n } = useTranslation();

  const [selectedCountry, setSelectedCountry] = useState('en');

  const getDisplayValue = (code) => {
    return languageDisplayMap[code] || code;
  };

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
    changeLanguage(e.target.value);
  };

  const changeLanguage = (lng) => {
    console.log(`Mudando para o idioma: ${lng}`);
    i18n.changeLanguage(lng);
  }


  return (
    <div className={`header-main ${isMenuOpen ? 'menu-open' : ''}`}>
      <header className="header">
        {/* LOGO */}
        <div className="header-content">
          <a href='#'><img src={logoToShow} alt="Logo" /></a>
        </div>
        {/* FIM DO LOGO */}
        {/* MENU DO HEADER */}
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {Header.map((item, id) => (
            <a className='LinksHeader' href={item.link} key={id}>
              {item.name}
            </a>
          ))}
        </nav>
        {/* SELETOR DE PAISES */}
        <div className='header-container-2'>
          <div className="header-select-img">
            <div className='header-flag'>
              {selectedCountry && (
                <div className="header-selected-country">
                  <img src={countryOptions.find((country) => country.code === selectedCountry).flag} alt={selectedCountry} className='flag' />
                  {/* {selectedCountry} */}
                </div>
              )}
              <select onChange={handleChange} value={selectedCountry} className='header-selected'>
                {countryOptions.map((country, index) => (
                  <option key={index} value={country.code} className='header-code'>
                    {getDisplayValue(country.code)}
                    {/* {country.code} */}
                  </option>
                ))}
              </select>
            </div>

            <img src={menu} className="menu-button" onClick={toggleMenu} />
          </div>
          {/* FIM DO SELETOR */}
          <a href='#Contact-main'>
            <button className='menu-button-contact'>{btn}</button>
          </a>
        </div>
      </header>
      {/* FIM DO HEADER */}
      {/* MENU SIDEBAR */}
      <nav className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <img src={close} className="close-button" onClick={toggleMenu} />
        <div className='sidebar-options'>
          {Header.map((item, id) => (
            <a className='LinksSideBar' href={item.link} key={id}>
              {item.name}
            </a>

          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;
