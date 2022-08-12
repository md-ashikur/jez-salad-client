import React from "react";
import menuImg1 from "../../Images/menu1.png";
import delivery from "../../Images/delivery.png"
import d2 from "../../Images/d2.png"
import d3 from "../../Images/d3.png"
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <div className="grid grid-cols-2 my-20 mx-20">
        <div className="py-20">
          <p className="font-bold text-lg bg-primary w-80 px-5">
            Free Home Delivery 24 Hours
          </p>
          <h1 className="text-6xl font-extrabold uppercase font-sans">
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

      <div className="grid grid-cols-2 my-20 px-20 menuBg overflow-hidden">
        <div className="py-20">
          <h1 className="text-6xl font-bold font-sansm text-white  uppercase">
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
      <div className="grid grid-cols-3 my-20 mx-20 bg-primary rounded-bl-[50px] rounded-tr-[50px]">
        <div className="flex items-center justify-center relative">
            <img src={delivery} alt="" className="w-52 absolute z-20"/>
            <img src={d2} alt="" className="w-52 absolute"/>
            <img src={d3} alt="" className="w-52 absolute"/>
        </div>
        <div className="py-20 text-white">
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
