import { useRef, useEffect } from "react";
import React from "react";
import social_1 from "./img/social-1.png";
import social_2 from "./img/social-2.png";
import social_3 from "./img/social-3.png";
import social_4 from "./img/social-4.png";
import social_5 from "./img/social-5.png";
import myImage from "./img/dhiraj1.jpg";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <div className="main-container-1 container mt-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3 className=" sura-bold  sura-regular">
              <b className="col-text">| Hi My Name Is |</b>{" "}
            </h3>{" "}
            <br />
            <h1 className="font-vw  madimi-one-regular">
              <Typewriter
                options={{
                  strings: [
                    "I'm Dhiraj mathankar",
                    "I'm a Full-stack Developer.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>{" "}
            <br />
            <h1 className=" font-vw col-text-gray">
              I build things for the web
            </h1>{" "}
            <br />
            <p>
              I am a full-stack developer. Part-time, I freelance for clients,
              providing responsive web and Android applications.
            </p>
            <br />
            <div>
              <a
                href="#"
                className="btn-flip"
                data-back="Let's Go"
                data-front="Let's Connect "
              ></a>
            </div>
            <div className="social_application_conenct_node">
              <ul className="social-logo-ul">
               

                <li>
                <a href="" target="_blank"><i className="fa-brands fa-instagram m-1 bg-set"></i></a>
                </li>
                <li>
                  <a href="https://twitter.com/MathankarD94919" target="_blank">
                  <i class="fa-brands fa-twitter m-1 bg-set"></i></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/dhiraj-mathankar-1638b622a/" target="_blank">
                  <i class="fa-brands fa-linkedin m-1 bg-set"></i></a>
                </li>
                <li>
                  <i class="fa-brands fa-telegram m-1 bg-set"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
