import React from "react";
import "../Bodytxt/bodytxt.css";
import { CiLocationOn } from "react-icons/ci";
import { IoStar } from "react-icons/io5";

const Bodytxt = () => {
  return (
    <div className="area1">
      <div className="texts1">
        <div className="details">
          <b>PRODUCT DETAILS</b>
        </div>
        <div className="description">
          <div className="des">
            <u> Description</u> <br />
            licursus Ut scelerisque sollicitudin. Lorem eget elit viverra non.
            ex ultrices porta lobortis, est. sit venenatis adipiscing laoreet
            convallis. at, amet, nec orci tincidunt non sollicitudin. maximus
            lobortis, ullamcorper ullamcorper non. eu tortor. quam Donec porta
            quis risus elementum elit lacus, Nam luctus nulla, Nunc non eget
            lacus, Cras dui vitae id Nunc quis ipsum Nunc placerat est. sed orci
            eget amet, amet, placerat facilisis elit. sit tempor convallis.
            viverra luctus ex nec Cras varius Donec eu Nullam felis, lacus,
            porta efficitur. vitae non tempor commodo tincidunt Nam at gravida
            maximus risus libero, Quisque elit viverra ex. faucibus id lacus,
            faucibus massa Sed quis sodales. vitae ex. efficitur.
          </div>
          <hr color="white"></hr>
          <hr color="white"></hr>
          <hr color="white"></hr>
          <div className="tech">
            <u>Technical Specifications</u>
            <ul>
              <li>
                Quisque elit viverra ex.<li> Nunc quis ipsum Nunc</li>
                <li>porta quis risus elementum </li>
                <li> risus elementum elit lacus</li>{" "}
                <li> nec orci tincidunt</li>
                <li>Nunc non eget lacus</li> <li> Cras dui vitae id</li>
                <li>Faucibus massa Sed</li>
              </li>
            </ul>
          </div>
          <hr color="white"></hr>
          <hr color="white"></hr>
          <hr color="white"></hr>
          <hr color="white"></hr>
          <div className="ship">
            <u>Shipping and Warranty</u>
            <hr color="white"></hr>
            <hr color="white"></hr>
            <ul>
              <li>
                Quisque elit viverra ex.<li> Nunc quis ipsum Nunc</li>
                <li>porta quis risus elementum </li>
                <li> risus elementum elit lacus</li>{" "}
                <li> nec orci tincidunt</li>
                <li>Nunc non eget lacus</li> <li> Cras dui vitae id</li>
                <li>Faucibus massa Sed</li>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="texts11">
        <div className="buy">
          <b>BUYER INSIGHTS</b>
        </div>
        <div className="fici">
          <div className="frm">
            <img src="/frame2.png" alt="pic" />
          </div>
          <div className="fic">
            <div className="veh">
              <b>Ficibus Haohao Vehicle Co., Ltd.</b>
            </div>
            <div className="texas">
              <CiLocationOn /> Texas
            </div>
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <p>59+</p> <p>Inquiries(180 days)</p>
          </div>
          <div className="grid-item">
            <p>$365,456.16</p> <p> Vendors Sales amount</p>
          </div>
          <div className="grid-item">
            <p>10+</p> <p>Stores Order Volume</p>
          </div>
          <div className="grid-item">
            <p>6hr</p> <p>Response Time </p>
          </div>
          <div className="grid-item">
            <p>90%</p> <p>On-Time Delivery rate</p>
          </div>
          <div className="grid-item">
            <p>170,000+</p>
            <p>Transactions</p>
          </div>
        </div>
        <div className="rate">
          <div className="rev">
            <u>Ratings % Reviews</u>
            <div className="comp">
              <div className="sttr">
                5
                <div className="stars">
                  <IoStar /> <IoStar /> <IoStar /> <IoStar />
                  <div className="stars2">
                    <IoStar />
                  </div>
                </div>
                <div className="eight"> 38 Reviews </div>
              </div>
              <u>Add review</u>
            </div>
          </div>
        </div>
        <div className="reviews">
          <div className="stars">
            <IoStar />
            <IoStar /> <IoStar /> <IoStar />
            <div className="stars3">
              <IoStar />
            </div>
          </div>
          <div className="revtxt">
            <b>I Like it</b>
            <hr color="white"></hr>
            It is a good sunscreen and it leaves no whitecast but it makes the
            face very sweaty. Good product , fast delivery , amazing price
            <hr color="white"></hr>
            <i>3rd Jul 2023 by Aneliko</i>
          </div>
        </div>

        <div className="reviews">
          <div className="stars">
            <IoStar />
            <IoStar /> <IoStar /> <IoStar />
            <div className="stars3">
              <IoStar />
            </div>
          </div>
          <div className="revtxt">
            <b>I Like it</b>
            <hr color="white"></hr>
            It is a good sunscreen and it leaves no whitecast but it makes the
            face very sweaty. Good product , fast delivery , amazing price
            <hr color="white"></hr>
            <i>3rd Jul 2023 by Aneliko</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodytxt;
