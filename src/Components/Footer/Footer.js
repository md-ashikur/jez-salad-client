import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer px-10 lg:px-20 my-20 bg-base-100 text-base-content">
        <div>
          <span className="">
            <p className=" normal-case font-bold text-2xl text-secondary">
              <span className="text-primary">JEZ</span> SALAD
            </p>
          </span>
          <p>
            Jez Salad is the pioneer of<br></br> healthy fruit salad with high nutrition.
          </p>
          <p>©Copyright by Ashik</p>
        </div>
        <div>
          <span className="text-primary text-lg font-blod">Feature</span>
          <Link to="/">Menu</Link>
          <Link to="/">Contact</Link>
          <Link to="/">About us</Link>
        </div>
        <div>
          <span className="text-primary text-lg font-blod">Get in Touch</span>
          <Link to="/">Bogura-5800, Bangladesh</Link>
          <Link to="/">mdashik.contact@gmail.com</Link>
          <Link to="/">+880 1705-433694</Link>
        </div>

         
          <div>
          <div className="grid grid-flow-col gap-4">
            <Link to="">
            <FaFacebookF className="text-2xl hover:text-[#3b5998]"/>
            </Link>
            <Link to="">
            <FaLinkedinIn className="text-2xl hover:text-[#3b5998]"/>
            </Link>

             <FaTwitter className="text-2xl hover:text-[#00acee]"/>
            
           
          </div>
          <p>Follow our social media.</p>
          </div>
       
      </footer>
    </div>
  );
};

export default Footer;
