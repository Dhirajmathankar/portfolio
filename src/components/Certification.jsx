import React, { useState, useEffect } from "react";
import cetification1 from "./img/JavaScript_Essentials_1.jpg";
import cetification2 from "./img/bachcisco1.png";
import cetification3 from "./img/advancegoogle.png";
import cetification4 from "./img/analisysAcadmy.png";
import cetification5 from "./img/mern.png";
import cetification6 from "./img/openwera.png";
import cetification7 from "./img/hackveda.png";
import cetification8 from "./img/css.png";
import cetification9 from "./img/cisco2.png";
import cetification10 from "./img/androidcisco.png";
import cetification11 from "./img/bachcisco2.png";
import tropy1 from "./img/trophy1.png";
import tropy2 from "./img/trophy2.png";

const Certification = () => {
  const certification = [
    {
      ImgUrl:
        "https://github.com/kunaal438/card-hover/blob/master/img.jpg?raw=true",
      AboutCertificate: "about me. ",
    },
  ];

  return (
    <>
      <div className="container my-3 py-3">
        <br /> <br /> <br />
        <h1 className="text-left white-cl ft-initial">
          <b>
            03. <span className="mx-3"> My Achivement & Certification ? </span>
          </b>
          <hr class="new1"></hr>
        </h1>
        <hr />
        <div>
          <div className="row">
            <div className="col-sm-12 col-ms-2 col-lg-2 text-center trophy-img-st">
              <img src={tropy1} className="tro-st-img" alt="" />
            </div>
            <div className="col-sm-12 col-ms-8 col-lg-10 ft-initial why-sty  text-center">
              <p>
              
Receiving recent achievements and certifications in the technical field has significantly enriched my knowledge and expanded my skill set. Obtaining certifications in Java, JavaScript, HTML, and CSS from reputable institutions like Cisco, OpenWera, and HackerRank has provided me with profound insights and advanced techniques in programming languages. These certifications have not only enhanced my proficiency but also broadened my understanding of complex coding principles and industry-standard practices. Through these accomplishments, I have demonstrated a commitment to continuous learning and mastery in the ever-evolving landscape of technology.
              </p>

              <div className="row text-left">
                <div className="col-12 col-sm-6 col-ms-6 col-lg-3">
                  <h5 className="col-text ">Google Analitycs </h5>
                  <ul className="ul-sty  font-17 white-cl">
                    <li className="posi-relative  ">
                      <i className="fa-brands fa-java mr-2 col-text   "></i>
                      Advanced Google Analytics
                    </li>
                    <li className="posi-relative  ">
                      <i className="fa-brands fa-java mr-2 col-text "></i>Google
                      Analytics For beginners
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6 col-ms-6 col-lg-3">
                  <h5 className="col-text ">CISCO Network Academy </h5>
                  <ul className="ul-sty font-17  white-cl">
                    <li>
                      <i className="fa-brands fa-java mr-2 col-text "></i>
                      JavaScript Essentials 1
                    </li>
                    <li>
                      <i className="fa-brands fa-java mr-2 col-text "></i>
                      JavaScript Essentials 2
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6 col-ms-6 col-lg-3">
                  <h5 className="col-text ">CISCO ThingQbator </h5>
                  <ul className="ul-sty font-17  white-cl">
                    <li>
                      <i className="fa-brands fa-java mr-2 col-text "></i>Full
                      Stack MERN
                    </li>
                    <li>
                      <i className="fa-brands fa-java mr-2 col-text "></i>
                      Android Development
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6 col-ms-6 col-lg-3">
                  <h5 className="col-text ">OpenWeaver </h5>
                  <ul className="ul-sty font-17  white-cl">
                    <li>
                      <i className="fa-brands fa-java mr-2 col-text "></i>Basic
                      Of Python
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-ms-2 col-lg-2 text-center trophy-img-st">
              <img src={tropy1} className="tro-st-img" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="certi-div-crd">
              <div>
                <div className="card-crt">
                  <div
                    className="card-img-crt"
                    style={{
                      background: `url(${cetification1})`,
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      "background-size": "cover",
                      "border-radius": "20px",
                      transform: "translateZ(40px)",
                    }}
                  ></div>
                  <div className="card-body-crt">
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <div className="content-crt">
                      <h2 className="title-crt">card 01</h2>
                      <p className="para-crt">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non aperiam fugiat eos odit numquam vitae facere dolore
                        id libero sit!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card-crt">
                  <div
                    className="card-img-crt"
                    style={{
                      background: `url(${cetification3})`,
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      "background-size": "cover",
                      "border-radius": "20px",
                      transform: "translateZ(40px)",
                    }}
                  ></div>
                  <div className="card-body-crt">
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <div className="content-crt">
                      <h2 className="title-crt">card 01</h2>
                      <p className="para-crt">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non aperiam fugiat eos odit numquam vitae facere dolore
                        id libero sit!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card-crt">
                  <div
                    className="card-img-crt"
                    style={{
                      background: `url(${cetification5})`,
                
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      "background-size": "cover",
                      "border-radius": "20px",
                      transform: "translateZ(40px)",
                    }}
                  ></div>
                  <div className="card-body-crt">
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <div className="content-crt">
                      <h2 className="title-crt">card 01</h2>
                      <p className="para-crt">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non aperiam fugiat eos odit numquam vitae facere dolore
                        id libero sit!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="card-crt">
                  <div
                    className="card-img-crt"
                    style={{
                      background: `url(${cetification4})`,
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      "background-size": "cover",
                      "border-radius": "20px",
                      transform: "translateZ(40px)",
                    }}
                  ></div>
                  <div className="card-body-crt">
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <div className="content-crt">
                      <h2 className="title-crt">card 01</h2>
                      <p className="para-crt">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non aperiam fugiat eos odit numquam vitae facere dolore
                        id libero sit!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div>
                <div className="card-crt">
                  <div
                    className="card-img-crt"
                    style={{
                      background: `url(${cetification2})`,
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      "background-size": "cover",
                      "border-radius": "20px",
                      transform: "translateZ(40px)",
                    }}
                  ></div>
                  <div className="card-body-crt">
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <div className="content-crt">
                      <h2 className="title-crt">card 01</h2>
                      <p className="para-crt">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non aperiam fugiat eos odit numquam vitae facere dolore
                        id libero sit!
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              <div>
                <div className="card-crt">
                  <div
                    className="card-img-crt"
                    style={{
                      background: `url(${cetification6})`,
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      "background-size": "cover",
                      "border-radius": "20px",
                      transform: "translateZ(40px)",
                    }}
                  ></div>
                  <div className="card-body-crt">
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <div className="content-crt">
                      <h2 className="title-crt">card 01</h2>
                      <p className="para-crt">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non aperiam fugiat eos odit numquam vitae facere dolore
                        id libero sit!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card-crt">
                  <div
                    className="card-img-crt"
                    style={{
                      background: `url(${cetification7})`,
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      "background-size": "cover",
                      "border-radius": "20px",
                      transform: "translateZ(40px)",
                    }}
                  ></div>
                  <div className="card-body-crt">
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <div className="content-crt">
                      <h2 className="title-crt">card 01</h2>
                      <p className="para-crt">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non aperiam fugiat eos odit numquam vitae facere dolore
                        id libero sit!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card-crt">
                  <div
                    className="card-img-crt"
                    style={{
                      background: `url(${cetification8})`,
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      "background-size": "cover",
                      "border-radius": "20px",
                      transform: "translateZ(40px)",
                    }}
                  ></div>
                  <div className="card-body-crt">
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <div className="content-crt">
                      <h2 className="title-crt">card 01</h2>
                      <p className="para-crt">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non aperiam fugiat eos odit numquam vitae facere dolore
                        id libero sit!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card-crt">
                  <div
                    className="card-img-crt"
                    style={{
                      background: `url(${cetification9})`,
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      "background-size": "cover",
                      "border-radius": "20px",
                      transform: "translateZ(40px)",
                    }}
                  ></div>
                  <div className="card-body-crt">
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <div className="content-crt">
                      <h2 className="title-crt">card 01</h2>
                      <p className="para-crt">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non aperiam fugiat eos odit numquam vitae facere dolore
                        id libero sit!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card-crt">
                  <div
                    className="card-img-crt"
                    style={{
                      background: `url(${cetification10})`,
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      "background-size": "cover",
                      "border-radius": "20px",
                      transform: "translateZ(40px)",
                    }}
                  ></div>
                  <div className="card-body-crt">
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <div className="content-crt">
                      <h2 className="title-crt">card 01</h2>
                      <p className="para-crt">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non aperiam fugiat eos odit numquam vitae facere dolore
                        id libero sit!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card-crt">
                  <div
                    className="card-img-crt"
                    style={{
                      background: `url(${cetification11})`,
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      "background-size": "cover",
                      "border-radius": "20px",
                      transform: "translateZ(40px)",
                    }}
                  ></div>
                  <div className="card-body-crt">
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <span className="bgcard"></span>
                    <div className="content-crt">
                      <h2 className="title-crt">card 01</h2>
                      <p className="para-crt">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non aperiam fugiat eos odit numquam vitae facere dolore
                        id libero sit!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------ */}
        </div>
      </div>
    </>
  );
};

export default Certification;
