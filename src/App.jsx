import { useState } from 'react';

import { useTranslation } from "react-i18next";
import './i18n';


import './app.css'
import '../sass/global.scss'

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Description from './components/Description/Description';
import Movies from './components/Movies/Movies';
import Photos from './components/Photos/Photos';
import Possibilities from './components/Possibilities/Possibilities';
import Location from './components/Location/Location';
import Commission from './components/Commission/Commission';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import 'animate.css';

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  const headerTranslations = {
    h1: t('Header.one'),
    h2: t('Header.two'),
    h3: t('Header.three'),
    h4: t('Header.four'),
    h5: t('Header.five'),
    h6: t('Header.six'),
    btn: t('Header.seven')
  };
  const descriptionTranslations = {
    DtitleOne: t('Description.Titleone'),
    DSpan: t('Description.Span'),
    DtitleTwo: t('Description.TitleTwo'),
    DParagraph: t('Description.Paragraph'),
    DBtn: t('Description.Btn')
  }
  const moviesTranslations = {

    MtitleOne: t('Movies.Titleone'),
    MSpan: t('Movies.Span'),
    MtitleTwo: t('Movies.TitleTwo'),
    Mparagraph: t('Movies.Paragraph')

  }
  const pTranslations = {

    pTitle: t('p.Titleone'),
    pSpan: t('p.Span'),
    pTitleTwo: t('p.TitleTwo'),
    pIntroParagraph: t('p.IntroParagraph'),
    pSubHeading: t('p.SubHeading'),
    pInvestButton: t('p.InvestButton'),
    PP1: t('p.PP1'),
    PP2: t('p.PP2'),
    PP3: t('p.PP3'),
    PP4: t('p.PP4'),
    PP5: t('p.PP5'),
    PP6: t('p.PP6'),
    PP7: t('p.PP7'),
    PP8: t('p.PP8')
  }

  const lTranslations = {
    Ltitle: t('l.title'),
    Lspan: t('l.span'),
    Lsubtitle: t('l.subtitle'),
    LsubtitleTwo: t('l.subtitleTwo')
  }

  const cTranslations = {
    Ctitle: t('c.title'),
    Cspan: t('c.span'),
    CtitleTwo: t('c.titleTwo'),
    Csubtitle: t('c.subtitle'),
    Cbtn: t('c.btn')
  }
  const PhotosTranslations = {
    PhTitle: t('Ph.title')
  }
  const ctTranslations = {
    CTtitle: t('ct.title'),
    CTspan: t('ct.span'),
    CTName: t('ct.Name'),
    CTEmail: t('ct.Email'),
    CTtel: t('ct.tel'),
    CTSubject: t('ct.Subject'),
    CTTextLabel: t('ct.TextLabel'),
    CTbtn: t('ct.btn'),
    Sl: t('ct.Sl'),
    op1: t('ct.op1'),
    op2: t('ct.op2'),
    op3: t('ct.op3'),
    emailCt: t('ct.email'),
    nameCt: t('ct.name'),
    msg: t('ct.msg'),
    erroName: t('ct.erroName'),
    erroName2: t('ct.erroName2'),
    erroEmail: t('ct.erroEmail'),
    erroTel: t('ct.erroTel'),
    erroSubject: t('ct.erroSubject'),
    erroMsg: t('ct.erroMsg')
  }
  const FtTranslations = {
    FTitle: t('Ft.title'),
    FtermsPOne: t('Ft.termsPOne'),
    FtermsPTwo: t('Ft.termsPTwo')
  }



  return (
    <>
      {/* <div className='Img'>
        <img src={English} alt="English" onMouseOver={() => changeLanguage('en')} />
        <img src={Spanish} alt="Spanish" onMouseOver={() => changeLanguage('es')} />
        <img src={Portuguese} alt="Portuguese" onMouseOver={() => changeLanguage('pt')} />
        <img src={Arabic} alt="Arabic" onMouseOver={() => changeLanguage('ar')} />
        <img src={Mandarin} alt="Mandarin" onMouseOver={() => changeLanguage('zh')} />
        <img src={Germany} alt="Germany" onMouseOver={() => changeLanguage('de')} />
        <img src={Italian} alt="Italian" onMouseOver={() => changeLanguage('it')} />
        <img src={RUSSIAN} alt="Russian" onMouseOver={() => changeLanguage('ru')} />
        <img src={French} alt="French" onMouseOver={() => changeLanguage('fr')} />
      </div>
      <div className='conteudo'>
        <Header title={t('Header.title')} />
        <Main content={t('Main.content')} />
      </div> */}

      <Header {...headerTranslations} />
      <Banner />
      <Description {...descriptionTranslations} />
      <Movies {...moviesTranslations} />
      <Photos {...PhotosTranslations} />
      <Possibilities {...pTranslations} />
      <Location {...lTranslations} />
      <Commission {...cTranslations} />
      <Contact {...ctTranslations} />
      <Footer {...FtTranslations} />
    </>
  )
}

export default App
