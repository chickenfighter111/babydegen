import React, { Component, useState, useEffect } from 'react';
import {animateScroll as scroll} from 'react-scroll';
import  WelcomeContainer from './components/containers/welcomeContainer';
import  NFTCarousel from './components/containers/nft_carousel';
import ProjectIntro from './components/containers/introduction';
import Separator from './components/containers/separator';
import Roadmap from './components/containers/roadmap';
import Tokenomics from './components/containers/tokenomics';
import Team from './components/containers/team';
import Faq from './components/containers/faq';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const App = () =>{

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

    return(
        <div className='app'>
           <Header/>
           <WelcomeContainer/>
           <NFTCarousel/>
           <ProjectIntro/>
           <Roadmap/>
           <Tokenomics/>
           <Team/>          
           <Faq/>
           {showButton && (
                    <button onClick={scrollToTop} className="back-to-top">
                      <BsFillArrowUpCircleFill/>
                    </button>
                  )}
        </div>
    )

}
export default (App);