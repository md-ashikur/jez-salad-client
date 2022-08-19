import React from "react";


const Carousel = () => {
  

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
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
