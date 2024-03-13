import React from "react";
import "../Footer2/footer2.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer2 = () => {
  return (
    <div className="foot2">
      <div className="area3">
        <div className="boxx1">
          <div className="sapp">Sapien</div>
          <div className="trm">
            <div>Terms of use</div> <div>Privacy Policy</div>
          </div>
        </div>
        <div className="info">
          <div className="inform">Information</div>
          <div className="inftxt">
            <p>About Us</p>
            <p>Selling Tips</p>
            <p>Home 2</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="acc">
          <div className="acnt">My Account</div>
          <div className="acctxt">
            <p>My Account</p>
            <p>Register</p>
            <p>Cart</p>
            <p>WishList</p>
            <p>Order History</p>
          </div>
        </div>
        <div className="sup">
          <div className="help">Help and Support</div>
          <div className="suptxt">
            <p>How to Shop</p>
            <p>Payment</p>
            <p>Returns</p>
            <p>Delivery</p>
          </div>
        </div>
      </div>
      <div className="area4">
        <div className="copyright">© 2023 VIMA APP. All rights reserved.</div>
        <div className="icons5">
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer2;
