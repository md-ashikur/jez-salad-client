import React from "react";
import Slider from "react-slick";
import cardPic1 from "../../Images/Group 8443.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <div className="bg-accent py-20 my-20">
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:px-20">
        <div>
          <h3 className="text-5xl font-bold">
            What Are People Saying
            <span className="text-primary"> About Us</span>
          </h3>
          <p className="py-5">
            We are very happy if you are satisfied with our service and
            products, let's read pure reviews from customers who bought our
            products.
          </p>
        </div>

        {/* ==================
        carousel part
        ================================ */}
        <div className="lg:col-span-2 lg:pl-20">
          <div>
            <Slider {...settings}>
              <div>
                <div className=" w-96 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10 w-40">
                    <img
                      src={cardPic1}
                      alt="Shoes"
                      className="rounded-xl my-5"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Own fruit orchard</h2>
                    <p>
                      Langsung dari Kebun Sendiri yang tersebar di setiap
                      provinsi yang memiliki cabang toko Jez Salad.
                    </p>
                    <div className="mt-4 "></div>
                  </div>
                </div>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
             
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
