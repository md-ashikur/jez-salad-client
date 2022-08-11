import React from "react";
import { NavLink, Link } from "react-router-dom";
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div>
      <div className="navbar lg:bg-transparent bg-base-100 lg:px-20 lg:pt-5 z-50 fixed top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/home" activeClassName="selected">Home</NavLink>
              </li>
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
            </ul>
          </div>
          <p className=" normal-case font-bold text-2xl text-secondary">
            <span className="text-primary">JEZ</span> SALAD
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-medium">
            <li >
              <NavLink to="/home" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <Link to="signUp" className=" bg-primary border-0 text-white rounded-full px-10 py-2 ">
            Sign
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
