import { useEffect, useState } from "react";
// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const CarData = () => {
  const [cars,setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/list-rental")
    .then(response =>  response.json())
    .then(cars => setCars(cars))
  },[])

  const handleDelete = async (id_user) => {
    await fetch(`http://localhost:8833/delete-rental/${id_user}`, {
      method: 'DELETE',
    })
    setCars(cars.filter(cars => cars.id_user !== id_user))
  }
}

export default CarData;
