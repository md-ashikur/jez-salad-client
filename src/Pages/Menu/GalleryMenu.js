import React, { useEffect, useState } from "react";

import "./GalleryMenu.css";
import MenuCard from "./MenuCard";

const GalleryMenu = () => {
  const [menuCards, setMenuCards] = useState([]);
  const filterItem = (cateItem) => {
    const updatesCards = MenuCard.filter((currentElem) => {
      return currentElem.category === cateItem;
    });
    setMenuCards(updatesCards);
  };

  useEffect(() => {
    fetch("MenuList.json")
      .then((res) => res.json())
      .then((data) => setMenuCards(data));
  }, []);

  return (
    <div>
      <h2 className="lg:text-5xl text-3xl font-bold font-sans text-center">
        We Offer People Best Way<br></br>
        To Eat Best Food
      </h2>
      <div className="flex justify-center mx-3">
        <div className="menu-tab grid grid-cols-3 lg:grid-cols-5  gap-3 my-5 ">
          <button
            className="menu-btn shadow-lg"
            onclick={() => filterItem("breakfast")}
          >
            Breakfast
          </button>
          <button className="menu-btn shadow-lg">Lunch</button>
          <button className="menu-btn shadow-lg">Evening</button>
          <button className="menu-btn shadow-lg">Dinner</button>
          <button className="menu-btn shadow-lg">All</button>
        </div>
      </div>

      {/* =========menu items =============*/}
      <div className="grid lg:grid-cols-4 gap-3 lg:mx-20 mx-5">
        {menuCards.map((menuCard) => (
          <MenuCard key={menuCard.index} menuCard={menuCard}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default GalleryMenu;
