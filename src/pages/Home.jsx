import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import CarItem from "../components/UI/CarItem";
import {useNavigate} from 'react-router-dom';
import { useState,useEffect } from "react";


const Home = () => {
  const [cars,setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/list-rental")
    .then(response =>  response.json())
    .then(cars => setCars(cars))
  },[])

  const handleDelete = async (id_user) => {
    await fetch(`http://localhost:8000/delete-rental/${id_user}`, {
      method: 'DELETE',
    })
    setCars(cars.filter(cars => cars.id_user !== id_user))
  }

  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
      </section>

      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Pilihan</h6>
              <h2 className="section__title">Daftar Mobil</h2>
            </Col>

            {cars.map((product) => (
              <CarItem item={product} key={product.id_user} onDelete={handleDelete} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
