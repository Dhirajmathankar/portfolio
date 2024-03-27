import React from "react";
import { useState , useRef} from "react";

const ContactPage = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");


  const sendEmail = async () => {
    setEmail("");
    setName("");
    setNumber("");
    setAddress("");
    setMessage("");
  };

  return (
    <>
      <div className="container my-3 py-3">
        <br /> <br /> <br />
        <h1 className="text-left white-cl ft-initial">
          <b>
            <span className="text-col">06.</span>{" "}
            <span className="mx-3">Get In Touch ? </span>
          </b>
          <hr className="new1"></hr>
        </h1>
        <hr />
        <h1 className="white-cl">
          <b>
            <span>Dhiraj Mathanakr</span>
          </b>
        </h1>
        <h3 className="white-cl-co">
          <b>
            <span>Full Stack Developer</span>
          </b>
        </h3>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
            <ul className="getTotouch white-cl ">
              <li>
                <strong>
                  {" "}
                  <span className="width-fixed">Email</span>{" "}
                </strong>{" "}
                <a href="mailto:0112it201013@gmail.com" className="get-link">
                  {" "}
                  - infodhirajmathankar@gmail.com
                </a>
              </li>
              <li>
                <strong>
                  <span className="width-fixed"> Phone </span>{" "}
                </strong>{" "}
                <a href="mailto:0112it201013@gmail.com" className="get-link">
                  {" "}
                  - 6261109366
                </a>
              </li>
              <li>
                <strong>
                  {" "}
                  <span className="width-fixed">Address</span>{" "}
                </strong>{" "}
                <a href="mailto:0112it201013@gmail.com" className="get-link">
                  {" "}
                  - Madhya pradesh India
                </a>
              </li>
            </ul>

            <ul className="ul-social-contact">
              <li>
                <a href="https://www.linkedin.com/in/dhiraj-mathankar-1638b622a/" target="_blank"> <i className="fab fa-linkedin m-2"></i></a>
              </li>
              <li>
              <a href="https://www.linkedin.com/in/dhiraj-mathankar-1638b622a/" target="_blank"> <i className="fab fa-facebook m-2"></i></a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-5 col-lg-5 form-control-width">
          {/* <form ref={form} onSubmit={sendEmail}> */}
              <div>
                <div className="form-control-width">
                  <input
                    type="text"
                    class="form-control form-control-input" style={{width:"90%"}}
                    id="Name"
                    required
                    value={name}
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                  />
                   <input
                    type="email"
                    class="form-control form-control-input mt-3" style={{width:"90%"}}
                    id="Name"
                    required
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="row ">
                  <div className="col-10 col-sm-11 col-md-5 col-lg-5 form-control-width">
                  <input
                    type="text"
                    class="form-control form-control-input"
                    id="Name"
                    required
                    value={number}
                    placeholder="Enter your Number"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  </div>
                  <div className="col-10 col-sm-11 col-md-5 col-lg-5 form-control-width">
                  <input
                    type="text"
                    class="form-control form-control-input"
                    id="address"
                    required
                    value={address}
                    placeholder="Enter your address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  </div>

                  <div className="form-control-width">
                  <textarea
                    type="text"
                    class="form-control  form-control-input" style={{width:"90%"}}
                    id="Name"
                    placeholder="Enter your description"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button className="col-11 btn btn-outline-info mt-3" onClick={sendEmail} type="submit" >Send</button>
                </div>
                </div>
              </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
