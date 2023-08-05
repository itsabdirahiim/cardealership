import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import { OrbitControls } from "@react-three/drei";
import LoadingSkeleton from "react-loading-skeleton";
import { useParams, useLocation, Link } from "react-router-dom";
import cars from "../data/data";
import { GiReturnArrow } from "react-icons/gi";

const Carchosen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [model, setModel] = useState(null);
  const params = useParams();
  const carshosen = cars.filter((car) => car.id === parseInt(params.id));
  const carname = carshosen.map((x) => x.name);
  const carprice = carshosen.map((x) => x.price);
  const carmodel = carshosen.map((x) => x.model);
  const cartype = carshosen.map((x) => x.type);
  const cardes = carshosen.map((x) => x.des);
  const brand = carshosen.map((x) => x.brand);
  const modelUrl = `/${carmodel}`;
  const location = useLocation();
  const search = location.state?.chosen || "";

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      modelUrl,
      (gltf) => {
        setModel(gltf.scene);
        setIsLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading 3D model:", error);
        setIsLoading(true);
      }
    );
  }, [modelUrl]);

  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-3/4 md:w-3/4 md:h-3/4 relative">
        <Link
          to={`..${search}`}
          relative="path"
          state={{ cartype }}
          className="inline-flex items-center no-underline text-gold hover:text-yellow-300"
        >
          {/* Use the Tailwind CSS classes inline */}
          <span className="mr-2">
            <GiReturnArrow size={24} color="gold-dark" />
          </span>
          Go Back
        </Link>
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[15, 15, 15]} />
          <Suspense fallback={<LoadingSkeleton width="100%" height="100%" />}>
            {!isLoading && model && <Model model={model} />}
          </Suspense>
          <OrbitControls />
        </Canvas>
        <div className=" absolute h-full  bg-black bg-opacity-70 w-full md:w-1/2 xl:w-1/3 ">
          <div
            className="bottom-0 left-0 p-6 text-white  "
            style={{ bottom: "-30%", maxHeight: "60%" }}
          >
            <h2 className="text-4xl font-bold mb-4">{carname}</h2>
            <div style={{ maxHeight: "100%" }}>
              <p className="text-lg mb-6">{cardes}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg">Price:${carprice}K</p>
              <p className="text-lg flex items-center">Brand: {brand}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Model = ({ model }) => {
  return <primitive object={model} />;
};

export default Carchosen;

