import React from "react";
import cardPic1 from "../../Images/Group 8443.png";
import cardPic2 from "../../Images/Group 8444.png";
import cardPic3 from "../../Images/Group 8445.png";
import rightArrow from "../../Images/Arrow - Right.png";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-2 lg:mx-20 my-36 text-secondary">
        <div className=" w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 w-40">
            <img src={cardPic1} alt="Shoes" className="rounded-xl my-5" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Own fruit orchard</h2>
            <p>
              Langsung dari Kebun Sendiri yang tersebar di setiap provinsi yang
              memiliki cabang toko Jez Salad.
            </p>
            <div className="mt-4 ">
            <Link to="" >
               <button className="flex hover:bg-primary hover:text-white px-10 py-2 hover:px-10 hover:py-2 hover:rounded-full"> Learn more
                <img src={rightArrow} alt="" className="w-6 mx-3"></img></button>
              </Link>
            </div>
          </div>
        </div>

        {/* ================2nd card========= */}
        <div className=" w-96 bg-base-100 shadow-xl round-lg">
          <figure className="px-10 pt-10 w-40">
            <img src={cardPic2} alt="Shoes" className="rounded-xl my-5" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">#1 Healthy Fruit Salad</h2>
            <p>
              The pioneer of healthy fruit salads that are delicious & suitable
              for all people with the best quality assurance.
            </p>
            <div className="mt-4 ">
              <Link to="" >
               <button className="flex hover:bg-primary hover:text-white px-10 py-2 hover:px-10 hover:py-2 hover:rounded-full"> Learn more
                <img src={rightArrow} alt="" className="w-6 mx-3"></img></button>
              </Link>
            </div>
          </div>
        </div>
        {/* =============3rd card============= */}

        <div className=" w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 w-40">
            <img src={cardPic3} alt="Shoes" className="rounded-xl my-5" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">100 Top Brand</h2>
            <p>
              We are one of the best brands in the Food and Beverage sector<br></br> in
              Indonesia.
            </p>
            <div className="mt-4 ">
            <Link to="" >
               <button className="flex hover:bg-primary hover:text-white px-10 py-2 hover:px-10 hover:py-2 hover:rounded-full"> Learn more
                <img src={rightArrow} alt="" className="w-6 mx-3"></img></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
