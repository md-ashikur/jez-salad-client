import React from "react";
import pic1 from "../../Images/Group 8425.png";
import pic2 from "../../Images/Group 8432.png";
import pic3 from "../../Images/Group 8442.png";
import pic4 from "../../Images/Group 8433.png";
import pic5 from "../../Images/Group (1).png";
import pic6 from "../../Images/Group.png";
import pic7 from "../../Images/Group 8438.png";
import pic8 from "../../Images/Group 8441.png";
import discountPic1 from "../../Images/top-view-fruity-salad-with-fresh-sliced-fruits 1.png";
import discountPic3 from "../../Images/front-view-creamy-avocados-with-sliced-peppers-bread-pieces-grey-space 1.png";
import discountPic2 from "../../Images/front-view-vegetable-salad-from-boiled-vegetables-mixed-inside-round-plate-dark-background 1.png";
import Cards from "./Cards";
import CountUp from "react-countup";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <img src={pic7} class="w-sm absolute top-0 right-0 " alt=""></img>
      <div class="grid lg:grid-cols-2 h-screen bg-base-10 lg:mx-20 lg:mt-20">
        <div class="mt-20 p-5 lg:p-0 z-40">
          <p className="text-center rounded-full font-semibold mb-10 py-3 bg-accent text-primary w-52 text-base ">
            #1 Best Healthy Salad
          </p>
          <h1 class="lg:text-7xl text-5xl  font-extrabold text-secondary">
            <span className="text-primary">Skip </span> The Diet,<br></br> Just
            Eat Healthy
            <br /> With Jez Salad
          </h1>
          <p class="py-6">
            Imagine you don't need a diet because we provide<br></br> healthy and
            delicious food for you!
          </p>
          <button class="btn btn-primary text-xl text-white rounded-full">
            Order Food
          </button>
          <div className="grid lg:grid-cols-5 grid-cols-3 gap-4 my-10 ">
            <div>
              <h3 className="text-xl font-bold">
                <CountUp end={5000} duration="2" enableScrollSpy delay={2}></CountUp>+
              </h3>
              <p>Customer</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">
                <CountUp end={8000} duration="2" enableScrollSpy delay={2}></CountUp>+
              </h3>
              <p>Delivery</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">
                <CountUp end={1000} duration="2" enableScrollSpy delay={2}></CountUp>+
              </h3>
              <p>Ratings</p>
            </div>
          </div>
        </div>

        {/* pic==================================== */}
        <div className="flex justify-center lg:justify-end relative">
          <img
            src={pic1}
            class="w-auto  lg:max-w-xl lg:h-screen h-96 z-10 container mx-auto"
            alt=""
          ></img>
          <img
            src={pic5}
            class="lg:w-36 absolute lg:top-52 top-28 right-0"
            alt=""
          ></img>
          <img
            src={pic6}
            class="w-40 absolute lg:top-36 top-16 lg:left-20 left-10"
            alt=""
          ></img>
          <img
            src={pic2}
            class="lg:w-72 animate-bounce w-44 absolute left-0 bottom-10 z-20"
            alt=""
          ></img>

          <img
            src={pic3}
            class="lg:w-44 w-28 absolute lg:bottom-[-40px] bottom-[-20px] right-3 z-20"
            alt=""
          ></img>
          <img
            src={pic4}
            class="lg:w-20 w-16 absolute top-5 right-10 animate-ping "
            alt=""
          ></img>
        </div>
      </div>

      <div class="grid lg:grid-cols-5 gap-2 lg:mx-20 lg:mt-40 mt-80 text-secondary">
        <div className="lg:col-span-3">
          <h2 className="px-2 text-secondary lg:text-5xl text-3xl font-bold">
            WHY CHOOSE US <br></br> FOR
            <span className="text-primary "> YOUR HEALTHY FOOD</span>
          </h2>
        </div>

        <div className="lg:col-span-2 flex justify-center items-center text-xl px-3">
          <p>
            We continue to consistently choose maintain the quality of
            the fruit served, so that
            it remains fresh and nutritious when you eat it.
          </p>
        </div>
      </div>

      {/* =============
      card
      ============================== */}
      <Cards></Cards>

      {/* ==========
      Testimonial
      ============================== */}
      <Testimonial/>

      {/*=======================
 discount section
================================= */}
      <div className="text-center text-secondary lg:px-20">
        <p className="text-primary text-xl my-3">
          MENU YANG MEMBUATMU JATUH CINTA
        </p>
        <h2 className=" text-5xl font-bold">
          ENJOY THE BEST MENU AND GET <br></br>
          <span className="text-primary ">DISCOUNTS</span> AVAILABLE FOR
        </h2>

        <div className=" grid lg:grid-cols-3 gap-4">
          <div class="w-auto image-full lg:my-20 mx-auto relative">
            <img src={discountPic1} alt="Shoes" />

            <div className="absolute bottom-10 left-10 text-2xl text-white">
              <p>Salad Yummy Red</p>
              <h2 class="card-title">$ 3.99</h2>
            </div>
          </div>
          <div class="w-auto image-full lg:my-20 mx-auto relative">
            <img src={discountPic2} alt="Shoes" />

            <div className="absolute bottom-10 left-10 text-2xl text-white">
              <p>Salad Yummy White</p>
              <h2 class="card-title">$ 2.99</h2>
            </div>
          </div>
          <div class="w-auto image-full lg:my-20 mx-auto relative">
            <img src={discountPic3} alt="Shoes" />

            <div className="absolute bottom-10 left-10 text-2xl text-white">
              <p>Salad Yummy Mix 2</p>
              <h2 class="card-title">$ 5.49</h2>
            </div>
          </div>
        </div>
      </div>

      {/* ========================
     Subscribe
     ============================ */}

      <div className="max-w-[1170px] lg:p-16 p-10 text-center relative  text-secondary lg:rounded-[50px] my-28 mx-auto bg-accent overflow-hidden">
        <img
          src={pic8}
          alt=""
          className="absolute w-auto lg:-top-10 top-72 -left-5 lg:-left-12"
        ></img>
        <div className="z-40 relative">
          <p className="text-primary text-xl my-3">Our Subscribe</p>
          <h3 className="lg:text-5xl text-xl font-bold leading-normal z-40 mb-6">
            Subscribe To Get The Latest<br></br>
            Promo from Jez Salad
          </h3>
          <p className="text-sm">
            We recommended you to subscribe to our promo program,<br></br>
            drop your email below to get daily update about us
          </p>

          <div className="flex justify-center my-5">
            <div class="form-control">
              <label class="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  class="input pl-10 rounded-full lg:w-[650px] w-96 h-[60px]"
                />
                <button className="bg-primary hover:bg-neutral rounded-full px-5 py-3 text-white absolute right-2 top-[6px]">
                  Subscribe
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
