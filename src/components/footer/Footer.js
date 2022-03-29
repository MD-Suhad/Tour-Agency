import React from "react";
import './footer.css';
/* this is the component for footer. */
const Footer = () => {
  return (
    <footer style={{backgroundColor: 'steelblue'}} className="text-white page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
          <h4 style={{color:'wheat',fontWeight:'700'}}>Tourist</h4> <h4>Spot BD</h4>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase mb-5">Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a style={{ textDecoration: "none" }} href="#!">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="#!">
                  <i className="fab fa-youtube"></i> YouTube
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="#!">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3 ">
            <h5 className="text-uppercase mb-5">Contact Us!</h5>
            <ul className="list-unstyled">
              <li>
                <a style={{ textDecoration: "none" }} href="#!">
                  <i className="fas fa-at"></i> Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © All rights reserved by Shohaib Suhad
      </div>
    </footer>
  );
};

export default Footer;
