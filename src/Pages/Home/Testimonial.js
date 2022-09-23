import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Navigation, Autoplay } from "swiper";
import Slide from "./Silde";

const Testimonial = () => {
  const [slides, setSlides] = useState(Slide);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="px-5 lg:pl-20 grid lg:grid-cols-3 py-20 mb-20 bg-accent">
      <div>
        <h2 className="lg:text-5xl text-4xl font-bold my-5">
          What Are People Saying <span className="text-primary">About Us</span>
        </h2>
        <p>
          We are very happy if you are satisfied with our service and products,
          let's read pure reviews from customers who bought our products.
        </p>
        {/* ================
        Navigation buttons
        ============================ */}
        <div className="flex my-5 text-3xl gap-3">
          <div ref={navigationPrevRef}>
            <BsArrowLeftShort className="w-20 rounded-full bg-white hover:text-primary hover:pr-3" />
          </div>
          <div ref={navigationNextRef}>
            <BsArrowRightShort className="w-20 rounded-full bg-white hover:text-primary hover:pl-3" />
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 relative overflow-hidden">
        <Swiper
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            390: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper absolute lg:left-20"
        >
          {slides.map((elem) => {
            const { id, picture, name, description } = elem;

            return (
              //    ==============Slide cards =================
              <SwiperSlide className="flex flex-col items-center" key={id}>
                <img
                  className="drop-shadow-lg w-20 relative top-10 rounded-full"
                  src={picture}
                  alt=""
                />
                <figure className="flex flex-col items-center bg-white h-72 border-4 border-l-transparent border-r-transparent border-b-transparent border-t-primary py-10 rounded-lg">
                  <h5 className="text-[black] text-lg">{name}</h5>
                  <p className="mx-5 text-sm">{description}</p>
                </figure>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
