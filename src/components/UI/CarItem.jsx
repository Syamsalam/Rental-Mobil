import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";


const CarItem = (props) => {
  const {id_user, nama, jenis_mobil, kapasitas_penumpang, alamat, harga_sewa_perhari } = props.item;
  
  const handleDelete = () => {
    props.onDelete(id_user)
  }

  const handleEdit = () => {
    props.onEdit(id_user)
  }
  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src="" alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{jenis_mobil}</h4>
          <h6 className="rent__price text-center mt-">
            Rp.{harga_sewa_perhari}.00 <span>/ Hari</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {kapasitas_penumpang}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {nama}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {alamat}
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent" onClick={handleDelete}>Hapus</button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${id_user}`}>Edit</Link>
            </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
