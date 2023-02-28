import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import { useState,useEffect } from "react";
import "../styles/blog-item.css"


const CarListing = () => {
  const [cars,setCars] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8000/list-rental")
    .then(response =>  response.json())
    .then(cars => setCars(cars))
  },[])

  return (
    <Helmet title="Cars">
      <CommonSection title="List Mobil" />

      <section>
        <Container>
          <Row>
            <Col>
            <h1>List Mobil</h1>
            </Col>
            <Col className="colom" >
              <Link to={`/cars/add`} className="link">Tambah</Link>
            </Col>
          </Row>
          <Row>
          {cars.map((product) => (
                <CarItem item={product} key={product.id_user} />
          ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
