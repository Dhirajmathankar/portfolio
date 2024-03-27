import React, { useState, useEffect } from "react";
import cetification10 from "./img/androidcisco.png";
import project1 from './img/project1.jpg'
import project2 from './img/project2.jpg'
import project3 from './img/project3.jpg'
const WorkExpresince = () => {
  return (
    <>
      <div className="container my-3 py-3">
        <br /> <br /> <br />
        <h1 className="text-left white-cl ft-initial">
          <b>
            04. <span className="mx-3">My Best Works are ? </span>
          </b>
          <hr class="new1"></hr>
        </h1>
        <hr />
        <div className="web-pro">
          <div className="row ft-initial mt-2">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="card-pro">
                <img src={project1} className="pro-img" alt="" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <h4 className="col-text">URL shortener </h4>
              <p className="white-cl font-17 bg-about-pro">
              

              Efficient URL compression, intuitive interface, customizable links, detailed analytics, secure generation, API integration, cross-platform compatibility, social media sharing, QR code generation, URL management, branded links, password protection, expiry dates, bulk shortening, SEO redirects, alias management.
              </p>

              <ul className="ul-use-tcl">
                <li className="white-cl font-17 mr-2">
                <i class="fa-brands fa-node-js mr-2"></i> Express.Js
                </li>
                <li className="white-cl font-17 mr-2">
                <i class="fa-brands fa-node mr-2"></i> Node.Js
                </li>
                <li className="white-cl font-17 mr-2">
                <i class="fa-brands fa-react mr-2"></i>React.Js
                </li>
                <li className="white-cl font-17 mr-2">
                <i class="fa-brands fa-html5 mr-2"></i> HTML & CSS
                </li>
                <li className="white-cl font-17 mr-2">
                <i class="fa-solid fa-database mr-2"></i>MongoDB 
                </li>
              </ul>
              <div className="pro-btn-flex m-2 ">
                <div>
                  <button
                    class="btn-open-pro ml-3"
                    data-original-text="Have a Look!"
                  >
                      <a href="https://github.com/Dhirajmathankar/urlshotener" target="_blank"> <span>Let's See!  <i className="fa-brands fa-arrow ml-2 white-cl "></i></span></a>
                  
                  </button>
                </div>
                <div>
                  <button
                    class="btn-open-pro ml-3"
                    data-original-text="Github repo!"
                  >
                   <a href="https://github.com/Dhirajmathankar/urlshotener" target="_blank"> <span>Let's See!</span></a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3 ft-initial">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="card-pro">
                <img src={project2} className="pro-img" alt="" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <h4 className="col-text">ESE (Employee Search Engine)</h4>
              <p className="white-cl font-17 bg-about-pro">
              Employers utilize a specialized job matchmaking platform to efficiently search and recruit candidates tailored to their needs, streamlining hiring processes and enhancing workforce acquisition strategies for optimal recruitment outcomes.
              </p>

              <ul className="ul-use-tcl">
              <li className="white-cl font-17 mr-2">
                <i class="fa-brands fa-node-js mr-2"></i> Express.Js
                </li>
                <li className="white-cl font-17 mr-2">
                <i class="fa-brands fa-node mr-2"></i> Node.Js
                </li>
                <li className="white-cl font-17 mr-2">
                <i class="fa-brands fa-react mr-2"></i>React.Js
                </li>
                <li className="white-cl font-17 mr-2">
                <i class="fa-brands fa-html5 mr-2"></i> HTML & CSS
                </li>
                <li className="white-cl font-17 mr-2">
                <i class="fa-solid fa-database mr-2"></i>MongoDB 
                </li>
              </ul>
              <div className="pro-btn-flex m-2">
                <div>
                  <button
                    class="btn-open-pro ml-3"
                    data-original-text="Have a Look!"
                  >
                    <span>
                      Let's See!{" "}
                      <i className="fa-brands fa-arrow mr-2 white-cl "></i>{" "}
                    </span>
                  </button>
                </div>
                <div>
                  <button
                    class="btn-open-pro ml-3"
                    data-original-text="Github repo!"
                  >
                    <span>Let's See!</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3 ft-initial">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="card-pro">
                <img src={project3} className="pro-img" alt="" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <h4 className="col-text">My portfolio</h4>
              <p className="white-cl font-17 bg-about-pro">
              Built a portfolio website using React and Node technologies, showcasing skills and projects. Seamless integration of frontend and backend for a dynamic and interactive user experience. Expertly crafted design and functionality for a professional online presence
              </p>

              <ul className="ul-use-tcl">
                <li className="white-cl font-17 mr-2">
                  <i class="fa-brands fa-node-js mr-2"></i> Express.Js
                </li>
                <li className="white-cl font-17 mr-2">
                <i class="fa-brands fa-node mr-2"></i> Node.Js
                </li>
                <li className="white-cl font-17 mr-2">
                <i class="fa-brands fa-react mr-2"></i>React.Js
                </li>
                <li className="white-cl font-17 mr-2">
                <i class="fa-brands fa-html5 mr-2"></i> HTML & CSS
                </li>
                <li className="white-cl font-17 mr-2">
                <i class="fa-solid fa-database mr-2"></i>MongoDB 
                </li>
              </ul>
              <div className="pro-btn-flex m-2">
                <div>
                  <button
                    class="btn-open-pro ml-3"
                    data-original-text="Have a Look!"
                  >
                    <span>
                      Let's See!{" "}
                      <i className="fa-brands fa-arrow mr-2 white-cl "></i>{" "}
                    </span>
                  </button>
                </div>
                <div>
                  <button
                    class="btn-open-pro ml-3"
                    data-original-text="Github repo!"
                  >
                    <span>Let's See!</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default WorkExpresince;
