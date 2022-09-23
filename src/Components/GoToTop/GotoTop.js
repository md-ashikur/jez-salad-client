import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";


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
    <div>
        {isVisible && (
        <BsFillArrowUpCircleFill
        className="animate-bounce text-4xl fixed bottom-10 right-10 text-primary z-50"
        onClick={goToTop}
      />)}
      
    </div>
  );
};

export default GotoTop;
