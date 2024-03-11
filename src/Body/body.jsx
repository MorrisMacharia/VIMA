import React from "react";
import "../Body/body.css";
import { FaStar } from "react-icons/fa";
import { CgDollar } from "react-icons/cg";

const Body = () => {
  return (
    <div className="body">
      <div className="body1a">
        <div className="body1">
          <div className="sideCam">
            <img src="/cam1.svg" width={100} height={100} alt="cam1" />
            <img src="/cam2.png" width={100} height={100} alt="cam2" />
            <img src="/cam3.png" width={100} height={100} alt="cam3" />
            <img src="/cam4.png" width={100} height={100} alt="cam4" />
          </div>
          <div>
            <img src="/frame1.png" width={470} height={500} alt="frame" />
          </div>
        </div>
        <div className="body2">
          <div className="frame11">
            <div>
              Nget Morbi venenatis tincidunt Nam elit. tempor volutpat non. Nunc
              varius nisl. Nunc amet, tincidunt ipsum non quis ex non.
            </div>
            <div className="frame12">
              5
              <div className="str">
                <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                <div className="strr">
                  <FaStar />
                </div>
              </div>
              <div className="txt">38 Reviews</div>
              <div className="stok">In Stock</div>
            </div>
            <div className="dollar">
              <CgDollar />
              36,758.00
            </div>
            <hr width="100%" height="2" color="black" />
          </div>
          <div className="text1">
            Sapien elementum luctus amet, gravida ipsumvitae ex id consectetur
            placerat efficitur. Nunc Ut malesuada facilisis sapien vitae varius
            T nec eget amet, venenatis id nibh id hendrerit ipsum nulla, dolor
            ex maximus tempor faucibus leo. eget tincidunt facilisis nibh elit
            turpis sed ex vehicula, est elementum turpis porta sodales. ultrices
            Nam libero, placerat. non. urna vitae placerat consectetur Praesent
            ipsum ipsum. d in a neat, compact unit. It can be easily arranged to
            match your living room design and give it a classy look at the same
            time. This sound system is designed for the extreme entertainment
            lovers to enjoy their amazing music and movies with sound clarity
            never heard before.
          </div>
          <div>
            <button type="button" className="btn2">
              NUNC LIBERO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
