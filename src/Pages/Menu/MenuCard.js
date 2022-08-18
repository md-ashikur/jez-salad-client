import React from 'react';

const MenuCard = ({menuCard}) => {

const {picture, name, description } = menuCard;
    return (
        <div className=" p-4 card transition ease-in-out duration-500 hover:scale-101 hover:shadow-xl rounded-xl  my-5 border slate-700">
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
            <p className="my-3 text-slate-600">
              {description}
            </p>
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
    );
};

export default MenuCard;