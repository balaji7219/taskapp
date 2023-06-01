import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted"    style={{backgroundColor:" #0B20B6"}}
    >
      

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company</h6>
              <p>
                <a href="#!" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Aboutjs
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>

            
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{backgroundColor:" rgba(0, 0, 0, 0.05)"}}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          
        </a>
      </div>
    </footer>
  );
};

export default Footer;
