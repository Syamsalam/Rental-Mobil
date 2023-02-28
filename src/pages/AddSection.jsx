import React, { useState } from 'react';
import "../styles/booking-form.css"

function CreateData() {
  const [data, setData] = useState({
    nama: '',
    alamat: '',
    nomor_telepon: '',
    jenis_akun: '',
    jenis_mobil: '',
    kapasitas_penumpang: '',
    harga_sewa_perhari: '',
    harga_sewa_perjam: '',
    tanggal_mulai_sewa: '',
    tanggal_akhir_sewa: '',
    lokasi_pengembalian: ''
  });

  // Fungsi untuk mengubah state saat input field diisi
  const handleChange = event => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Fungsi untuk mengirim data melalui Fetch API
  const handleSubmit = event => {
    event.preventDefault();

    fetch('http://localhost:8000/add-rental', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="booking_form">
        <label htmlFor="nama">Nama:</label>
        <input type="text" id="nama" name="nama" value={data.nama} onChange={handleChange} />
      </div>
      <div class="booking_form">
        <label htmlFor="alamat">alamat:</label>
        <input type="text" id="alamat" name="alamat" value={data.alamat} onChange={handleChange} />
      </div>
      <div class="booking_form">
        <label htmlFor="nomor_telepon">nomor telepon:</label>
        <input type="text" id="nomor_telepon" name="nomor_telepon" value={data.nomor_telepon} onChange={handleChange} />
      </div>
      <div class="booking_form">
        <label htmlFor="jenis_akun">jenis akun:</label>
        <input type="text" id="jenis_akun" name="jenis_akun" value={data.jenis_akun} onChange={handleChange} />
      </div>
      <div class="booking_form">
        <label htmlFor="jenis_mobil">jenis_mobil:</label>
        <input type="text" id="jenis_mobil" name="jenis_mobil" value={data.jenis_mobil} onChange={handleChange} />
      </div>
      <div class="booking_form">
        <label htmlFor="kapasitas_penumpang">kapasitas_penumpang:</label>
        <input type="text" id="kapasitas_penumpang" name="kapasitas_penumpang" value={data.kapasitas_penumpang} onChange={handleChange} />
      </div>
      <div class="booking_form">
        <label htmlFor="harga_sewa_perhari">harga_sewa_perhari:</label>
        <input type="text" id="harga_sewa_perhari" name="harga_sewa_perhari" value={data.harga_sewa_perhari} onChange={handleChange} />
      </div>
      <div class="booking_form">
        <label htmlFor="harga_sewa_perjam">harga_sewa_perjam:</label>
        <input type="text" id="harga_sewa_perjam" name="harga_sewa_perjam" value={data.harga_sewa_perjam} onChange={handleChange} />
      </div>
      <div class="booking_form">
        <label htmlFor="tangal_mulai_sewa">tangal_mulai_sewa:</label>
        <input type="text" id="tangal_mulai_sewa" name="tangal_mulai_sewa" value={data.tangal_mulai_sewa} onChange={handleChange} />
      </div>
      <div class="booking_form">
        <label htmlFor="tanggal_akhir_sewa">tanggal_akhir_sewa:</label>
        <input type="text" id="tanggal_akhir_sewa" name="tanggal_akhir_sewa" value={data.tanggal_akhir_sewa} onChange={handleChange} />
      </div>
      <div class="booking_form">
        <label htmlFor="lokasi_pengembalian">lokasi_pengembalian:</label>
        <input type="text" id="lokasi_pengembalian" name="lokasi_pengembalian" value={data.lokasi_pengembalian} onChange={handleChange} />
      </div>
      <div className='booking_form'>
      <button type="submit" className='submit'>Submit</button>
      </div>
    </form>
  );
}

export default CreateData;
