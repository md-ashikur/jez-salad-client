import React, { useState } from "react";
import "./GalleryMenu.css";
import Menulist from "./Menulist";

const GalleryMenu = () => {
  const [menuCards, setMenuCards] = useState(Menulist);
  const [active, setActive] = useState(false);
  const filterItem = (cateItem) => {
    const updatesCards = Menulist.filter((currentElem) => {
      return currentElem.category === cateItem;
    });
    setMenuCards(updatesCards);
    setActive(true);
  };


  
  return (
    <>
      <h2 className="lg:text-5xl text-3xl font-bold font-sans text-center">
        We Offer People Best Way<br></br>
        To Eat Best Food
      </h2>

      <div className="flex justify-center mx-3">

      

        <div className="menu-tab grid grid-cols-3 lg:grid-cols-5  gap-3 my-5 ">
          <button
          
            className={active ? "menu-btn" : "menu-btn text-primary"}
            onClick={() => setMenuCards(Menulist)}
          >
            All
          </button>
          <button
            className="menu-btn shadow-lg"
            onClick={() => filterItem("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="menu-btn shadow-lg"
            onClick={() => filterItem("lunch")}
          >
            Lunch
          </button>
          <button
            className="menu-btn shadow-lg"
            onClick={() => filterItem("evening")}
          >
            Evening
          </button>
          <button
            className="menu-btn shadow-lg"
            onClick={() => filterItem("dinner")}
          >
            Dinner
          </button>
        </div>
      </div>

      {/* =========menu items =============*/}

      <div className="grid lg:grid-cols-4 gap-3 lg:mx-20 mx-5">
        {menuCards.map((elem) => {
          const { picture, name, description } = elem;

          return (
            <div>
              <div
                className="  p-4 card transition ease-in-out duration-500 hover:scale-101 hover:shadow-xl rounded-xl  my-5 border slate-700"
              >
                <div className="lg:flex h-64 justify-center relative rounded-xl overflow-hidden">
                  <button className="btn card-btn absolute left-20 lg:left-10 rounded-full text-xl z-20">
                    VIEW OPTION
                  </button>
                  <img
                    src={picture}
                    alt=""
                    className="rounded-xl w-96 h-full card-img"
                  ></img>
                </div>
                {/* ---------card text start--------------------*/}
                <div className="mt-5 mx-3">
                  <div className="h-28 overflow-hidden">
                    <h3 className="text-2xl font-bold font-sans">{name}</h3>
                    <p className="my-3 text-slate-600">{description}</p>
                  </div>

                  <div class="form-control">
                    <div class=" flex justify-between items-center">
                      <select class="select border border-slate-200 w-2/3 outline-0 rounded-full">
                        <option>Large</option>
                        <option>Medium</option>
                        <option>Small</option>
                      </select>
                      <h3 className="text-xl font-bold text-primary">$15.00</h3>
                    </div>
                  </div>
                </div>
                {/* ------card text end------ */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GalleryMenu;
