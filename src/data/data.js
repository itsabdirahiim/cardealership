import  Image1 from "../images/LamborghiniAventador.jpeg";
import  Image2 from "../images/LamborghiniURIS.jpg";
import  Image3 from "../images/LamborghiniTerzor.jpg";
import  Image4 from "../images/BMWM5E60.jpg";
import  Image5 from "../images/BMWM3E30.jpg";
import  Image6 from "../images/BMWi4.jpg";
const cars = [
    {
      id: 1,
      type: "lamb",
      name: 'Lamborghini Aventador',
      price: 50000,
      image: Image1,
    },
    {
      id: 2,
      type : "lamb",
      name: 'Lamborghini URIS',
      price: 60000,
      image: Image2,
    },
    {
        id: 3,
        name: 'Lamborghini Terzor',
        type: "lamb",
        price: 90000,
        image: Image3,
      },
      {
        id: 4,
        type: "bmw",
        name: 'BMW M5E60',
        price: 60000,
        image: Image4,
      },
      {
        id: 5,
        type: "bmw",
        name: 'BMW M3E30',
        price: 60000,
        image: Image5,
      },
      {
        id: 6,
        type: "bmw",
        name: 'BMW i4',
        price: 60000,
        image: Image6,
      },
    // Add more car data as needed
  ];
  
  export default cars;