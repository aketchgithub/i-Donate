import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Works from "./works";
import charity6 from "../img/charity6.jpeg";
import charity7 from "../img/charity7.jpeg";
// import charity8 from "../img/charity8.jpeg";
// import charity9 from "../img/charity9.jpeg";


function LandingPage() {
  return (
    <div className="bg-dark text-light">
      <div className="hero-section">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "350px" }}
              src={charity6}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Donate to Charitable Organizations</h1>
              <p>
                Help make a difference by supporting causes you care about.
              </p>
              <a href="#main" className="btn btn-primary">
                Learn More
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "350px" }}
              src={charity7}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1>Empower Communities through Donations</h1>
              <p>
                Your contributions can bring positive change to those in need.
              </p>
              <a href="main" className="btn btn-primary">
                Learn More
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Add more carousel items with relevant images and captions */}
        </Carousel>
      {/* </div> */}
    
       <div className="bg-g" style={{ height: "390%", }}> 
      <div className="container name pt-5">
        <p style={{ width: "700px", height: "200px" ,marginLeft: 220 }}>
          <p>Welcome to i-Donate</p>
          While actions are always to be judged by the immutable standard
          of right and wrong, and judgments we pass upon men must be qualified
          by considerations of age, country, station and other accidental
          circumstances; and it will then be found that he who is most
          charitable in his judgment is generally th ...  
          <a
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="96"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
            href="main"
          >
            MAINPAGE
          </a>
          </p>
          
        {/* </p> */}
      </div>
      
          <Works/>
          
    </div>
    

    <footer className="footer ">
        <div className="container">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} i-Donate. All rights reserved.
          </p>
        </div>
      </footer>
     </div>
      
      {/* The rest of your landing page content goes here */}
      
     </div>
  );
}

export default LandingPage;
