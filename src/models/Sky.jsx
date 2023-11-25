import React, { useRef } from "react";
import skyScene from "../assets/3d/sky.glb";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import state from "../store";

const Sky = ({ isRotating }) => {
  const snap = useSnapshot(state);
  const sky = useGLTF(skyScene);
  const skyRef = useRef();
  useFrame((_, delta) => {
    if (isRotating) {
      if (snap.isLeftKeyDown) {
        skyRef.current.rotation.y -= 0.15 * delta;
      } else {
        skyRef.current.rotation.y += 0.15 * delta;
      }
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
