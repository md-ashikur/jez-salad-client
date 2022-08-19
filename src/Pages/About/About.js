import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GiMeat, GiCheeseWedge,GiFrenchFries, GiFruitBowl } from "react-icons/gi";
import aboutbg from "../../Images/aboutbg.png";
import "./About.css";

const About = () => {
  const aboutCards = [
    {
      index: 0,
      picture: "https://i.ibb.co/RP9NM4p/c1.jpg",
      name: "Ronald David",
      position: "Chief Cook",
    },
    {
      index: 1,
      picture: "https://i.ibb.co/PNKjz8N/c2.jpg",
      name: "Mike Smith",
      position: "Taste Bud",
    },
    {
      index: 2,
      picture: "https://i.ibb.co/dgb5xnF/c3.jpg",
      name: "James Gandolfini",
      position: "Buffet Manager",
    },
    {
      index: 3,
      picture: "https://i.ibb.co/JcL52XB/c4.jpg",
      name: "Mike Dickey",
      position: "Meals Specialist",
    },
  ];

  return (
    <div className="my-28">
      <div className="grid lg:grid-cols-2">
        <div className="lg:ml-20 mx-3 mt-64 lg:mt-0">
          <p className="text-xl  font-bold ">WHY PEOPLE CHOOSE US</p>
          <h2 className="lg:text-4xl text-3xl font-sans font-bold text-primary my-3 mb-5 uppercase">JEZ SALAD is The Best<br></br> Restaurant in Town</h2>
          <p className="my-5">Pizza ummy text of the printing typesetting industrorem. Pizza ummy text of the printing typesetting industroremPizza ummy text of the printing typesetting industrorem</p>
          <div className="grid grid-cols-2 gap-5">
            <div className="grid lg:grid-cols-3">
              <div>
                <GiMeat className="text-7xl text-primary"/>
              </div>
              <div className="col-span-2">
                <h3 className="text-xl text-primary font-bold">
                  100% Halal Meat
                </h3>
                <p>Pizza ummy text of the printing typesetting industrorem</p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3">
              <div>
               <GiCheeseWedge className="text-7xl text-primary"/>
              </div>
              <div className="col-span-2">
                <h3 className="text-primary text-xl font-bold ">Quality Chees</h3>
                <p>Pizza ummy text of the printing typesetting industrorem</p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3">
              <div>
              <GiFrenchFries className="text-7xl text-primary"/>
              </div>
              <div className="col-span-2">
                <h3 className="text-primary text-xl font-bold ">Crunchi French Fry</h3>
                <p>Pizza ummy text of the printing typesetting industrorem</p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3">
              <div>
               <GiFruitBowl className="text-7xl text-primary"/>
              </div>
              <div className="col-span-2">
                <h3 className="text-primary text-xl font-bold ">Fresh Fruits</h3>
                <p>Pizza ummy text of the printing typesetting industrorem</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end lg:relative">
          <img src={aboutbg} alt="" className="w-full absolute -top-28 lg:-top-80"/>
        </div>
      </div>
      {/* ================
Master Chefs
========================= */}
      <div className="my-20 text-center">
        <p className="text-primary text-xl font-semibold">EXPERIENCED CHEFS</p>
        <h2 className="text-5xl my-5 font-bold ">
          Let’s Introduce Our Experte <br></br> Master Chefs
        </h2>
        <div className="grid lg:grid-cols-4 ">
          {aboutCards.map((aboutCard) => {
            const { name, picture, position } = aboutCard;

            return (
              <div className="h-96 lg:my-10 relative aboutCard overflow-hidden ">
                <img src={picture} alt=""></img>

                <div className="bg-primary aboutCardBg scale-75 translate-x-0 skew-y-6 rounded h-40 w-full absolute top-64 "></div>
                <div className="absolute top-72 left-20 text-left text-white aboutCardText z-30">
                  <h3 className="font-bold  text-lg "> {name}</h3>
                  <p className="text-sm">{position}</p>
                  <div className="flex my-3">
                    <FaFacebookF className="aboutIcon hover:text-[#3b5998]" />
                    <FaLinkedinIn className="mx-5 hover:text-[#0072b1] aboutIcon" />
                    <FaTwitter className="aboutIcon hover:text-[#00acee]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
