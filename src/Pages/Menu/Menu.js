import React from "react";
import menuImg1 from "../../Images/menu1.png";
import delivery from "../../Images/delivery.png"
import d2 from "../../Images/d2.png"
import d3 from "../../Images/d3.png"
import "./Menu.css";
import GalleryMenu from "./GalleryMenu";

const Menu = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 my-20 lg:mx-20 mx-5">
        <div className="py-20">
          <p className="font-bold text-lg bg-primary text-white w-80 px-5">
            Free Home Delivery 24 Hours
          </p>
          <h1 className="lg:text-6xl text-4xl font-extrabold uppercase font-sans">
            ENJOY Healthy FOOD With Jez Salad!
          </h1>
          <button class="btn btn-primary text-xl my-3 text-white px-5 rounded-full">
            Order Now
          </button>
        </div>
        <div>
          <img src={menuImg1} alt="" className="img-responsive" />
        </div>
      </div>

      {/* ================
      Gallery Menu
      =================== */}
      <GalleryMenu></GalleryMenu>

      <div className="grid lg:grid-cols-2 my-20 lg:px-20 px-5 menuBg overflow-hidden">
        <div className="py-20">
          <h1 className="lg:text-6xl text-4xl font-bold font-sansm text-white  uppercase">
            We Have Excellent Of Quality Food
          </h1>
          <button class="btn btn-primary text-lg my-3 text-white px-10 rounded-full">
            see all menu
          </button>
        </div>
        <div>
          <img src={menuImg1} alt="" className="img-responsive" />
        </div>
      </div>

      {/* =============
            free delivery=
            ========================== */}
      <div className="grid lg:grid-cols-3 lg:my-20 my-28 lg:mx-20 bg-primary rounded-bl-[50px] rounded-tr-[50px]">
        <div className="flex items-center justify-center relative">
            <img src={delivery} alt="" className="lg:w-72 w-52 absolute lg:-top-10 z-20"/>
 
            <img src={d3} alt="" className="w-32 absolute lg:left-2 left-5 lg:top-16 "/>
        </div>
        <div className="lg:py-20 pt-28 px-5 text-white ">
          <h1 className="text-4xl font-bold font-sans uppercase">
          Get Free Delivery!
          </h1>
          <p>As well known and we are very busy all days beforeso we can guarantee your seat.</p>
        </div>
        <div className="flex items-center justify-center">
        <button class="btn btn- text-lg my-3 text-white px-10 rounded-full">
            Call: +880 1705-433694
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
