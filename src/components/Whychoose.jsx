import React, { useState, useEffect } from "react";
import cetification1 from "./img/dhiraj1.jpg";

const Home = () => {
//   Number.prototype.format = function(n) {
//     var r = new RegExp('\\d(?=(\\d{3})+' + (n > 0 ? '\\.' : '$') + ')', 'g');
//     return this.toFixed(Math.max(0, Math.floor(n))).replace(r, '$&,');
// };

// window.addEventListener('scroll', function() {
//     var counterElement = document.querySelector('.count');
//     var counterWrapper = document.querySelector('.counter');
//     var windowHeight = window.innerHeight;
//     var scrollY = window.scrollY || window.pageYOffset;
//     var contentHeight = document.querySelector('.content').offsetHeight;
//     var bottomOffset = 100; // Adjust as needed

//     if (windowHeight + scrollY >= contentHeight - bottomOffset) {
//         counterWrapper.style.display = 'block';
//         animateCounter(counterElement, 0, 100);
//     } else {
//         counterWrapper.style.display = 'none';
//     }
// });

// function animateCounter(element, start, end) {
//     var counter = start;
//     var increment = 1; // Adjust the increment as needed
//     var duration = 1000; // Animation duration in milliseconds

//     var animationInterval = setInterval(function() {
//         counter += increment;
//         element.textContent = counter.format();

//         if (counter >= end) {
//             clearInterval(animationInterval);
//             element.textContent = end.format();
//         }
//     }, duration / (end - start));
// }


  return (
    <>
      <div className="container my-3 py-3">
        <br /> <br /> <br />
        <h1 className="text-left white-cl ft-initial">
          <b>
            02. <span className="mx-3"> Why Choose me ? </span>{" "}
          </b>
          <hr class="new1"></hr>{" "}
        </h1>
        <hr />
        {/* ------------------ this is starting point of the editiong ---------------  */}
        <div>
          <div className="main-container-1 container mt-5">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h5 className="ft-initial col-text">
                  Creative Web & Android Designer
                </h5>
                <p className="ft-initial why-sty">
                  I have a broad technical skill set and one years of expertise
                  in front-end web development. Capable of multitasking and
                  juggling numerous urgent projects simultaneously. Always up to
                  date on the newest trends and technology.
                  <br /> <br />
                  Here are all services that I’ll be offering with to you:{" "}
                </p>

                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-6 ">
                    <ul className="ul-sty ul-li-sty ft-initial">
                      <li>
                        {" "}
                        <i className="fa-solid fa-gears col-text mr-2"></i>{" "}
                        Technically sounded
                      </li>
                      <li>
                        <i className="fa-solid fa-tty col-text mr-2"></i>{" "}
                        communication skills
                      </li>
                      <li>
                        <i className="fa-solid fa-chalkboard-user col-text mr-2"></i>
                        Hungry for Learning New Things
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6 ">
                    <ul className="ul-sty ul-li-sty ft-initial ">
                      <li>
                        <i class="fa-brands fa-product-hunt col-text mr-2"></i>{" "}
                        Good Quality of Product
                      </li>
                      <li>
                        <i class="fa-solid fa-handshake col-text mr-2"></i> 100%
                        client satisfaction
                      </li>
                      <li>
                        <i className="fas fa-american-sign-language-interpreting col-text mr-2"></i>
                        Unlimited revision
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 ft-initial ">
                <div className="row ">
                  <div className="col-sm-5 col-md-5 col-lg-5  element-count-1">
                    <div className="counter absolute-pos ">
                      <h1 className="">
                        <b>13+</b>
                      </h1>
                      <h5>Projects Completed</h5>
                    </div>
                  </div>
                  <div className="col-sm-5 col-md-5 col-lg-5  element-count-2">
                    <div className="counter absolute-pos ">
                      <h1 className="">
                        <b>7+</b>
                      </h1>
                      <h5>Our Happy Client</h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-5 col-md-5 col-lg-5 element-count-3">
                    <div className="counter absolute-pos ">
                      <h1 className="">
                        <b>100+</b>
                      </h1>
                      <h5>Cups Of Coffee</h5>
                    </div>
                  </div>
                  <div className="col-sm-5 col-md-5 col-lg-5 element-count-4">
                    <div className="counter absolute-pos ">
                      <h1 className="">
                        <b>1+</b>
                      </h1>
                      <h5>Years Experience</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------------- */}

        </div>
      </div>
    </>
  );
};

export default Home;
