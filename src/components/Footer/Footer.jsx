import React from "react";

import { Container, Row, Col, } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Rental <br /> Mobil
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Disini biasanya ada info penting, tapi saya tidak tau mau menulis apa dan deadline jga mepet, jadi tulisannya cuma begini saja.
            </p>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
