import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <body>
        <footer>
          <div class="wrapper">
            <small>
              &copy;2021 <strong>Biker's Den</strong>, All Rights Reserved
            </small>
            {/* <nav class="footer-nav">
              <a href="#/home">Back to Top</a>
            </nav> */}
            <Nav.Link href="/home#home">Back To Top</Nav.Link>
          </div>
        </footer>
      </body>
    </div>
  );
};

export default Footer;