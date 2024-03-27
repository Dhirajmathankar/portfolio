import React from "react";
import dhiraj from './img/newdhiraj.png'
import newdhiraj from './img/dhiraj1.jpg'

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center ft-initial"> <br /> <br /> <br />
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-12 border-img">
            {/* <p className="mb-3 mb-md-0">Made with ❤️ by {" "}
              <a  href="https://sahibsingh.dev" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Sahib Singh</a>
            </p> */}
            {/* <a className="text-dark fs-4" href="https://github.com/ssahibsingh" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a> */}
           <img src={newdhiraj} className="footer-img" alt="" />
           <div>
<h1 className="white-cl"><strong>Dhiraj Mathankar</strong></h1>           </div>
<p className="font-20 white-cl">Copyright © 2024 <a href="https://dhirajmathankar.com" className="get-link">Dhriaj mathankar</a> </p>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
