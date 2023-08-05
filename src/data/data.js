import  Image1 from "../images/LamborghiniAventador.jpeg";
import  Image2 from "../images/LamborghiniURIS.jpg";
import  Image3 from "../images/LamborghiniTerzor.jpg";
import  Image4 from "../images/BMWM5E60.jpg";
import  Image5 from "../images/BMWM3E30.jpg";
import  Image6 from "../images/BMWi4.jpg";
import React from "react";
import { SiLamborghini ,SiBmw} from 'react-icons/si'
const cars = [
    {
      id: 1,
      type: "lamb",
      name: 'Lamborghini Aventador',
      model :"lamborghini_aventador.glb",
      des : `Lamborghini Aventador, an extraordinary supercar that epitomizes the essence of Italian automotive excellence. With its aerodynamic design and iconic scissor doors, the Aventador commands attention and admiration wherever it roars.
      Beneath the sleek and aggressive exterior lies a mighty 6.5-liter V12 engine, producing a jaw-dropping 700 horsepower. This powerhouse of an engine catapults the Aventador from 0 to 60 mph in a mere few seconds, delivering a heart-pounding and adrenaline-fueled driving experience.`,
      price: 825,
      brand : <SiLamborghini size={32} color="gold" className="ml-2"/>,
      image: Image1,
    },
    {
      id: 2,
      type : "lamb",
      name: 'Lamborghini URIS',
      model : "lamborghini_urus.glb",
     des : `Lamborghini Urus, a high-performance luxury SUV that embodies the Italian automaker's legendary heritage. With its striking design and muscular proportions, the Urus exudes power and athleticism. Under the hood, it boasts a formidable twin-turbocharged V8 engine, delivering an exhilarating 650 horsepower.
      Hailing from the iconic Lamborghini brand, the Urus combines cutting-edge technology with exquisite craftsmanship, offering a lavish and comfortable interior. From the winding roads of the Italian countryside to the bustling streets of the city, the Urus effortlessly showcases its versatility and prowess.
      The Urus showcases the perfect harmony between opulence and performance, setting new standards for SUVs worldwide. Whether it's the thrilling acceleration, the precise handling, or the luxurious amenities, the Lamborghini Urus is sure to elevate your driving experience to new heights.`,
      price: 285,
      brand : <SiLamborghini size={32} color="gold" className="ml-2"/>,
      image: Image2,
    },
    {
        id: 3,
        name: 'Lamborghini Terzor',
        type: "lamb",
        des : `Lamborghini Terzor, an awe-inspiring supercar designed to redefine the limits of speed and performance. With its sleek and aerodynamic body, the Terzor boasts a futuristic design that captures attention wherever it goes.
        Powered by an innovative hybrid engine, the Terzor delivers an astonishing 900 horsepower, allowing it to accelerate from 0 to 60 mph in a breathtaking 2.5 seconds. The cutting-edge technology and advanced materials used in its construction contribute to its exceptional handling and stability, making every drive an adrenaline-pumping experience.
        Step inside the luxurious cabin of the Terzor, and you'll find a perfect blend of comfort and sophistication. High-quality leather, carbon fiber accents, and state-of-the-art infotainment systems create an ambiance of opulence and modernity.`,
        model : "lamborghini_ferzor.glb",
        brand : <SiLamborghini size={32} color="gold" className="ml-2"/>,
        price: 400,
        image: Image3,
      },
      {
        id: 4,
        type: "bmw",
        name: 'BMW M5E60',
       des:`the BMW M5 E60 is an iconic high-performance sedan that perfectly balances luxury and sportiness. Born from the renowned BMW M division, the M5 E60 is a true driver's car, offering a thrilling driving experience like no other.
       Under the hood, the M5 E60 packs a mighty 5.0-liter V10 engine, producing a heart-pounding 500 horsepower. The powerful engine is mated to a smooth and responsive 7-speed Sequential Manual Gearbox (SMG), providing lightning-fast gear changes and precise control.`,
        model : "BMW_M5E60.glb",
        brand : <SiBmw size={32}color="blue" className="ml-2"/>,
        price: 29,
        image: Image4,
      },
      {
        id: 5,
        type: "bmw",
        name: 'BMW M3E30',
        des:`the BMW M3 E30, an automotive legend that continues to captivate enthusiasts with its timeless design and exceptional performance. Born from BMW's Motorsport division, the M3 E30 is a true icon that defined the high-performance sports car segment.
        Equipped with a spirited 2.3-liter inline-4 engine, the M3 E30 delivers a thrilling 195 horsepower to the rear wheels. Its lightweight construction and finely tuned suspension ensure razor-sharp handling and precise cornering, making it a joy to drive on both road and track.
        The M3 E30's aerodynamic body features flared fenders and a distinctive rear spoiler, giving it an aggressive and purposeful appearance. Its racing heritage is evident in every detail, reflecting BMW's commitment to performance and precision engineering.`,
        model : "bmw_m3e30.glb",
        brand : <SiBmw size={32}color="blue" className="ml-2"/>,
        price: 73,
        image: Image5,
      },
      {
        id: 6,
        type: "bmw",
        name: 'BMW i4',
        des:`The BMW i4, an electrifying marvel from the German automaker, represents the future of sustainable driving without compromising on luxury and performance. As part of BMW's visionary i series, the i4 showcases the brand's commitment to cutting-edge electric mobility.
        With its sleek and aerodynamic design, the BMW i4 seamlessly blends elegance with efficiency. The electric powertrain delivers a powerful and instantaneous acceleration, boasting impressive horsepower and torque. Embracing sustainable practices, the i4 offers an impressive range on a single charge, making it ideal for both daily commutes and long-distance journeys.`,
        model : "bmw_i4.glb",
        brand : <SiBmw size={32}color="blue" className="ml-2"/>,
        price: 50,
        image: Image6,
      },
    // Add more car data as needed
  ];
  
  export default cars;