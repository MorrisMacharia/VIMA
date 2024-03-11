import React from "react";
import "../Nav/navbar.css";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { RiAccountBoxLine } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import { MdVerticalDistribute } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="top">
      <div className="topbar">
        <div className="logo">
          <p>Sapien</p>
        </div>
        <div className="menu">
          <div>Morbi</div>
          <div>Nunc Varius</div>
          <div>Donec</div>
        </div>
        <div className="icon">
          <CiSearch />
          <CiHeart />
          <RiAccountBoxLine />
          <CiShoppingCart />
        </div>
      </div>
      <div className="topbar2">
        <div className="btn">
          <MdVerticalDistribute />
        </div>
        <div className="fau">FAUCIBUS</div>
        <div className="grp">Morbi / Elit</div>
      </div>
      <hr width="80%" color="#15A1DB" size="3" />
    </div>
  );
};

export default Navbar;
