import React from 'react'
import { Footer, Navbar } from ".";
import myImage from './img/newdhiraj.png'
import CV from './img/DHIRAJ MATHANKAR CV.pdf'
const AboutPage = () => {
  return (
    <>
      <div className="container my-3 py-3 ft-initial">
        <br /> <br /> <br />
        <h1 className="text-left white-cl ft-initial"><b>01. <span className='mx-3'> About Me</span>  </b><hr class="new1"></hr> </h1>
        <hr />
        {/* ------------------ this is starting point of the editiong ---------------  */}

       <div>


       <div className="main-container-1 container mt-5">
        <div className="row">
           <div className="col-lg-5 col-md-5 col-sm-12">
              <div className='text-center'>
              <div className=''>
               <img src={myImage} className='about-img' alt="" />
              </div>
            </div>
           </div>
           <div className="col-lg-7 col-md-7 col-sm-12">
           <h3 className="  ft-initial col-text ">
            <b>	Hello, I am Dhiraj Mathankar.</b> 
           </h3> 
           <h5 className="  ft-initial">
            I’m focused on building a Web & Android production based project. personalized learning For explore my knowlage from multipal sources.
            </h5>
            <h5 className="  ft-initial mt-3">
            Here are a few technologies I’ve been working with recently & and have a hanse on practice:
            </h5>      

            <div className='row ft-initial'>
              <div className='col col-sm-6 col-md-6 col-xl-6'>
              <h4 className='col-text '>  Code Tools</h4>
              <ul className='ul-sty '>
                <li className='font-17'><i className="fa-brands fa-c mr-2 col-text "></i> C/CPP Language</li>
                <li className='font-17'><i className="fa-brands fa-js mr-2 col-text "></i> JavaScript Language</li>
                <li className='font-17'><i className="fa-brands fa-java mr-2 col-text "></i>Java Language </li>
                <li className='font-17'><i className="fa-brands fa-html5 mr-2 col-text "></i> HTML & CSS </li>
                <li className='font-17'><i className="fa-brands fa-css3 mr-2 col-text "></i> Bootstrap & Tailwind CSS</li>
                <li className='font-17'><i className="fa-brands fa-java mr-2 col-text "></i>React JS & Next JS</li>
                <li className='font-17'><i className="fa-brands fa-node-js mr-2 col-text "></i>Node JS & MongoDB</li>
                <li className='font-17'><i className="fa-brands fa-php mr-2 col-text "></i>CodeIgniter(PHP)</li>
              </ul>
              </div>
              <div className='col col-sm-6 col-md-6 col-xl-6'>
              <h4 className='col-text '>No Code Tools</h4>
              <ul className='ul-sty'>
                <li className='font-17'> <i className="fa-brands fa-wordpress mr-2 col-text "></i>   WordPress Pro</li>
                <li className='font-17'><i class="fa-solid fa-camera mr-2 col-text "></i> PhotoShop Pro</li>
                <li className='font-17'><i className="fa-solid fa-paintbrush mr-2 col-text "></i>Canva Pro</li>
                <li className='font-17'><i className="fa-brands fa-figma mr-2 col-text "></i>Figma (UI & UX)</li>
              </ul>
              <h4 className='col-text '>Connect With me Now at :</h4>
              
              <div className='m-2 mt-3 '>
                <div>
                <a href={CV} class="btn-flip" data-back="Let's Go" data-front="Let's Download CV " target='_blank' download></a>
                </div>
              </div>
              
              </div>
              </div>         
           </div>   
        </div>
      </div>

      
       </div>
      </div>
    </>
  )
}

export default AboutPage