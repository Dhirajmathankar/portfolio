import React from "react";
import cetification1 from "./img/demymb.png";
import androidProject1 from './img/android1.jpg';
import androidProject2 from './img/android2.jpg';
import androidProject3 from './img/android3.jpg';

const Android = () => {
  return (
    <>
      <div className="container my-3 py-3 ft-initial font-17">
        <br /> <br /> <br />
        <h1 className="text-left white-cl ft-initial">
          <b>
            05. <span className="mx-3">My Best Android Project ? </span>
          </b>
          <hr class="new1"></hr>
        </h1>
        <hr />

        <div className="row">


          <div className="card-android my-3   col-sm-12 col-md-4 col-lg-4">
            <div
              className="card-img-android  text-center"
              style={{
                background: `url(${androidProject1})`,
                position: "relative",
                width: "100%",
                height: "100%",
                "background-size": "cover",
                "border-radius": "20px",
                transform: "translateZ(40px)",
              }}
            ></div>
            <div className="card-body-android">
              <span className="bgcardAndroid"></span>
              <span className="bgcardAndroid"></span>
              <span className="bgcardAndroid"></span>
              <div className="content-android">
                <h3 className="title-android"><b>Eyes Player</b></h3>
                <p className="para-android">
                A cutting-edge app that plays videos based on user's eye movement. Automatically pauses when connection to camera is lost, ensuring seamless viewing experience. Innovative entertainment at your fingertips.

                <div>
                  <ul className="flex-card-back">
                  <li><i className="fa-brands fa-java mr-3"></i>Java</li>
                    <li><i className="fa-brands fa-java mr-3"></i>XML</li>
                    <li><i className="fa-brands fa-java mr-3"></i>Android</li>
                    <li><i className="fa-brands fa-java mr-3"></i>API</li>
                    <li><i className="fa-brands fa-java mr-3"></i>CANVA</li>
                    <li><i className="fa-brands fa-java mr-3"></i>PS</li>
                  </ul>
                </div>
                </p>
              </div>
            </div>
          </div>

		  <div className="card-android my-3  col-sm-12 col-md-4 col-lg-4">
            <div
              className="card-img-android"
              style={{
                background: `url(${androidProject2})`,
                position: "relative",
                width: "100%",
                height: "100%",
                "background-size": "cover",
                "border-radius": "20px",
                transform: "translateZ(40px)",
              }}
            ></div>
            <div className="card-body-android">
              <span className="bgcardAndroid"></span>
              <span className="bgcardAndroid"></span>
              <span className="bgcardAndroid"></span>
              <div className="content-android">
                <h2 className="title-android"><b>Poetry</b></h2>
                <p className="para-android">
                Introducing our poetry app, where every day brings fresh verses to your fingertips. Immerse yourself in a world of lyrical beauty as you discover new poems daily. Let our carefully curated collection awaken your imagination and uplift your spirit with each enchanting stanza.
                <div>
                  <ul className="flex-card-back">
                  <li><i className="fa-brands fa-java mr-3"></i>Java</li>
                    <li><i className="fa-brands fa-java mr-3"></i>XML</li>
                    <li><i className="fa-brands fa-java mr-3"></i>Android</li>
                    <li><i className="fa-brands fa-java mr-3"></i>API</li>
                    <li><i className="fa-brands fa-java mr-3"></i>CANVA</li>
                    <li><i className="fa-brands fa-java mr-3"></i>PS</li>
                  </ul>
                </div>
                </p>
              </div>
            </div>
          </div>

		  <div className="card-android  my-3 col-sm-12 col-md-4 col-lg-4">
            <div
              className="card-img-android"
              style={{
                background: `url(${androidProject3})`,
                position: "relative",
                width: "100%",
                height: "100%",
                "background-size": "cover",
                "border-radius": "20px",
                transform: "translateZ(40px)",
              }}
            ></div>
            <div className="card-body-android">
              <span className="bgcardAndroid"></span>
              <span className="bgcardAndroid"></span>
              <span className="bgcardAndroid"></span>
              <div className="content-android">
                <h3 className="title-android"><b>MY Artical</b></h3>
                <p className="para-android">
                Explore daily blog posts in our app, offering a rich variety of content to enrich your day. From insightful articles to captivating stories, dive into a world of daily inspiration and knowledge, tailored just for you.
                <div>
                  <ul className="flex-card-back">
                    <li><i className="fa-brands fa-java mr-3"></i>Java</li>
                    <li><i className="fa-brands fa-java mr-3"></i>XML</li>
                    <li><i className="fa-brands fa-java mr-3"></i>Android</li>
                    <li><i className="fa-brands fa-java mr-3"></i>API</li>
                    <li><i className="fa-brands fa-java mr-3"></i>CANVA</li>
                    <li><i className="fa-brands fa-java mr-3"></i>PS</li>
                  </ul>
                </div>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Android;
