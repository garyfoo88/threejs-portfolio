import React, { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useSnapshot } from "valtio";
import state from "../store";

const Plane = ({ isRotating, ...props }) => {
  const snap = useSnapshot(state);
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, scene);

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -3.5, -3];
    }

    return [screenScale, screenPosition];
  };

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  // Use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh
      {...props}
      position={planePosition}
      scale={planeScale}
      rotation={[0, snap.isLeftKeyDown ? 29.75 : 20.5, 0]}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
