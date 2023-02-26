import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Tentang Rental Mobil</h2>
              <p className="section__description">
              Rental mobil, sewa mobil, atau agen sewa mobil adalah perusahaan yang menyewakan mobil untuk jangka waktu yang singkat,
               umumnya mulai dari beberapa jam sampai beberapa minggu. Sering diatur dengan banyak cabang lokal (yang memungkinkan pengguna 
               untuk mengembalikan kendaraan ke lokasi yang berbeda), dan terutama terletak di dekat bandara atau daerah kota yang sibuk dan 
               sering dilengkapi dengan situs web yang memungkinkan pemesanan online.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
