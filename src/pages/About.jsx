import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import driveImg from "../assets/all-images/drive.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Sejarah Rental Mobil
                </h2>

                <p className="section__description">
                Salah satu contoh mobil-mobil yang ditawarkan untuk penyewaan berawal pada tahun 1906. Perusahaan Jerman Sixt didirikan pada 
                tahun 1912 dibawah nama Sixt Autofahrten und Selbstfahrer (Sixt Car Cruises and Self Drivers).Joe Saunders dari Omaha, 
                Nebraska awalnya memulai dengan meminjam Ford Model T pada tahun 1916, namun pada tahun 1917, perusahaan Ford Livery sedang 
                menyewakan 18 Model T seharga 10 sen per mil. Nama perusahaan menjadi Saunders Drive-It-Yourself System dan kemudian Saunders
                 System. Pada 1926, Saunders diperluas ke 56 kota. Perusahaan Saunders dibeli oleh Avis pada tahun 1955.
                </p>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
