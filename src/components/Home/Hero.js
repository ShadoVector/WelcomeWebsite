import React from "react";
import Hiasan from "../pictures/pay-by-bank-card.svg"
import Typed from "typed.js";
import {useRef, useEffect} from 'react'

function Hero() {
  const el = useRef(null)
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Cards", "Friends", "Families", "Merchant", "Classes"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 120,
      backSpeed: 80,
      backDelay: 1200,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      cursorChar: "|",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-center my-16">
      <div className="relative">
        <h1 className="font-bold text-6xl mb-6 leading-[72px] z-50">
          All Your <span className="text-blue-600" ref={el}></span>
          <br />
          Payment Made Easy
        </h1>
        <img src={Hiasan} alt="" className="absolute top-1 left-[232px] z-[-10]" style={{width: '500px'}}/>
      </div>
      <p className="font-light mb-10 max-w-xs mx-auto opacity-90">
        The Tap n Pay App, Make payments easy and mindful
      </p>
      <h5 className="font-semibold bg-blue-600 max-w-max mx-auto px-12 py-4 rounded-lg text-white cursor-pointer hover:bg-blue-700">
        See Our Progress
      </h5>
    </div>
  );
}

export default Hero;
