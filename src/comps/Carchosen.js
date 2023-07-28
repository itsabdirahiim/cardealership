import React, { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib'; // Import GLTFLoader from 'three-stdlib'
import { OrbitControls } from '@react-three/drei';
import LoadingSkeleton from 'react-loading-skeleton';
import { SiLamborghini } from 'react-icons/si'

const Carchosen = () => {
  const modelUrl = `/themodel.glb`; // Replace with the correct path to the GLB model
  const [isLoading, setIsLoading] = useState(true);
  console.log("Model URL:", modelUrl);
  const [model, setModel] = useState(null);

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
        console.error('Error loading 3D model:', error);
        setIsLoading(false);
      }
    );
  }, [modelUrl]);

  return (
<div className="h-screen flex justify-center "
 style={{
  background: 'linear-gradient(to bottom, #071523, #04284e, #0A192F)',
}}>
      <div className="w-3/4 h-3/4 relative">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[15, 15, 15]} />
          <Suspense fallback={<LoadingSkeleton width="100%" height="100%" />}>
  
            {!isLoading && model && <Model model={model} />}
          
          </Suspense>
          <OrbitControls />
        </Canvas>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h2 className="text-4xl font-bold mb-4">X</h2>
          <p className="text-lg mb-6">Description of the car, its features, and specifications.</p>
          <div className="flex justify-between">
            <p className="text-lg">Price: $XXXXX</p>
            <p className="text-lg">Design: <SiLamborghini size={48} color="red"/></p>
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



// const params = useParams()
  // const location = useLocation()
  //  const search = location.state?.chosen || ""
  // const  carshosen = params.id