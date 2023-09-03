import React, { useRef, useEffect } from "react";
import Hiasan from "../pictures/pay-by-bank-card.svg";
import Typed from "typed.js";

function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Cards", "Friends", "Families", "Merchant", "Classes"],
      startDelay: 300,
      typeSpeed: 120,
      backSpeed: 80,
      backDelay: 1200,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-center my-6 md:my-16">
      <div className="relative">
        <h1 className="font-bold text-4xl md:text-6xl mb-4 md:mb-6 leading-[56px] z-50">
          All Your <span className="text-blue-600" ref={el}></span>
          <br />
          Payment Made Easy
        </h1>
        <img
          src={Hiasan}
          alt=""
          className="absolute top-1 left-[30%] transform -translate-x-1/2 z-[-10]"
          style={{ width: "300px" }}
        />
      </div>
      <p className="font-light mb-4 md:mb-10 max-w-xs mx-auto opacity-90">
        The Tap n Pay App, Make payments easy and mindful
      </p>
      <h5 className="font-semibold bg-blue-600 max-w-max mx-auto px-4 md:px-12 py-2 md:py-4 rounded-lg text-white cursor-pointer hover:bg-blue-700">
        See Our Progress
      </h5>
    </div>
  );
}

export default Hero;
