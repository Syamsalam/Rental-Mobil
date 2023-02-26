// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Malibu",
    imgUrl: img01,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS",
    seatType: "kursi berpemanas",
    automatic: "Automatic",
    description:
      " Model 3 hadir dengan opsi penggerak semua roda motor ganda, Roda Überturbine 20” dan Rem Performa untuk pengendalian total di segala kondisi cuaca. Spoiler serat karbon meningkatkan stabilitas pada kecepatan tinggi, semuanya memungkinkan Model 3 berakselerasi dari 0-60 mph* hanya dalam waktu 3,1 detik.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model-2022",
    price: 50,
    speed: "20kmpl",
    gps: "GPS",
    seatType: "kursi berpemanas",
    automatic: "Automatic",
    description:
      " Toyota Aventador tersedia dalam pilihan mesin Bensin di Indonesia Coupe baru dari Toyota hadir dalam 8 varian. Bicara soal spesifikasi mesin Toyota Aventador, ini ditenagai dua pilihan mesin Bensin berkapasitas 6498 cc. Aventador tersedia dengan transmisi Otomatis tergantung variannya. Juga, tergantung pilihan dan jenis bahan bakar, konsumsi BBM Aventador mencapai 3.8 kmpl,4 kmpl,4.1 kmpl untuk perkotaan, 8.9 kmpl saat menjelajah perjalanan luar kota. Aventador adalah Coupe 2 seater dengan panjang 4780 mm, lebar 2265 mm, wheelbase 2700 mm..",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 65,
    speed: "20kmpl",
    gps: "GPS",
    seatType: "kursi berpemanas",
    automatic: "Automatic",
    description:
      " Dengan BMW X3, kenikmatan berkendara dijamin. Aksesoris BMW Original hadir untuk memenuhi keinginan spesial Anda. Kami menawarkan berbagai pilihan penambahan dan ekstra individual yang sangat cocok untuk BMW X3 dalam kualitas, desain, dan performa, menawarkan nilai tambah maksimum apa pun yang Anda pikirkan.",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 70,
    speed: "20kmpl",
    gps: "GPS",
    seatType: "kursi berpemanas",
    automatic: "Automatic",
    description:
      "Nissan Murcielago , yakni mobil populer yang disukai banyak orang karena keindahannya yang unik. Mobil ini dirilis dengan desain yang menarik, gril yang ramping dan spoiler yang memesona. Dan kaca spion hitam mobil ini juga menambah kesejukannya.",
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Model-2022",
    price: 45,
    speed: "20kmpl",
    gps: "GPS",
    seatType: "kursi berpemanas",
    automatic: "Automatic",
    description:
      " Eksterior berbentuk Camry normal itu hanyalah cangkang yang menyembunyikan sasis tubular dan band drag dengan velg produksi. Cangkang tersebut bisa diangkat layaknya mobil drag bertenaga besar. Mobil ini memakai mesin V8 berkapasitas 5,7 liter yang dilengkapi supercharger TRD dan system nitrous basah.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 85,
    speed: "20kmpl",
    gps: "GPS",
    seatType: "kursi berpemanas",
    automatic: "Automatic",
    description:
      " Mercedes Benz E-Class tersedia dalam pilihan mesin Bensin di Indonesia Mobil E-Class tersedia dalam varian 4 Sedan dan 2 Coupe. Bicara soal spesifikasi mesin Mercedes Benz E-Class, ini ditenagai dua pilihan mesin Bensin berkapasitas 1991 cc. E-Class tersedia dengan transmisi Otomatis tergantung variannya. E-Class adalah 4 Sedan dan 2 Coupe 5 dan 4 seater dengan panjang 4835 mm, lebar 2055 mm, wheelbase 2760 mm.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS",
    seatType: "kursi berpemanas",
    automatic: "Automatic",
    description:
      " Mercedes Benz E-Class tersedia dalam pilihan mesin Bensin di Indonesia Mobil E-Class tersedia dalam varian 4 Sedan dan 2 Coupe. Bicara soal spesifikasi mesin Mercedes Benz E-Class, ini ditenagai dua pilihan mesin Bensin berkapasitas 1991 cc. E-Class tersedia dengan transmisi Otomatis tergantung variannya. E-Class adalah 4 Sedan dan 2 Coupe 5 dan 4 seater dengan panjang 4835 mm, lebar 2055 mm, wheelbase 2760 mm.",
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS",
    seatType: "kursi berpemanas",
    automatic: "Automatic",
    description:
      " Mercedes Benz E-Class tersedia dalam pilihan mesin Bensin di Indonesia Mobil E-Class tersedia dalam varian 4 Sedan dan 2 Coupe. Bicara soal spesifikasi mesin Mercedes Benz E-Class, ini ditenagai dua pilihan mesin Bensin berkapasitas 1991 cc. E-Class tersedia dengan transmisi Otomatis tergantung variannya. E-Class adalah 4 Sedan dan 2 Coupe 5 dan 4 seater dengan panjang 4835 mm, lebar 2055 mm, wheelbase 2760 mm.",
  },
];

export default carData;
