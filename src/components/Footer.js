import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Styles.css";

function Footer() {
  return (
    <footer className="pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">About Us</h5>
            <p>The Library is a vital instrument in the realization of the ISPSC Vision and Mission along instruction, research, extension and production.</p>
          </div>
          <div className="contact-us col-md-4 mb-3">
            <h5 className="fw-bold">Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#"><i className="fa-solid fa-location-dot"></i>Poblacion Norte, Sta. Maria, Ilocos Sur</a>     
              </li>
              <li>
                <a href="mailto: ispsc_2705@yahoo.com"><i className="fa-solid fa-envelope"></i>ispsc_2705@yahoo.com</a>
              </li>
              <li>
                <a href="#"><i className="fa-solid fa-phone"></i>(077)732-5512</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mb-4"> 
            <h5 className="fw-bold">Follow Us</h5>
            <a href="https://www.facebook.com/profile.php?id=100095026794023"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.youtube.com/@ISPSC"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://x.com/ISPSC_Official"><i className="fa-brands fa-x-twitter"></i></a>
          </div>
          <div className="col-md-2 mb-3">
            <h5 className="fw-bold">Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center py-3 border-top mt-3">
          © 2025 ISPSC Library Management System
        </div>
      </div>
    </footer>
  )
}

export default Footer