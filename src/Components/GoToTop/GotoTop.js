import React from "react";
import "./GotoTop.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";

const GotoTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

  const listenToScroll = () => {
     let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div >
        {isVisible && (
        <AiOutlineArrowUp
        className="animate-bounce font-5xl scroll-to-top"
        onClick={goToTop}
      />)}
      
    </div>
  );
};

export default GotoTop;
