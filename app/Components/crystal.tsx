/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: pronko.tata (https://sketchfab.com/pronko.tateb0776e64de54e50)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/rystal-e2d25ff17fcb43d889f96325dba701ef
Title: Сrystal
*/

"use client";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import * as THREE from "three";
import React from "react";
import { Environment, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import PosterImage from "./poster.webp";
import Image from "next/image";

type GLTFResult = GLTF & {
  nodes: {
    SM_kristal__0: THREE.Mesh;
  };
  materials: {
    ["Scene_-_Root"]: THREE.MeshPhysicalMaterial;
  };
};

export function CrystalModel(props: JSX.IntrinsicElements["group"]) {
  const crystalRef = useRef<THREE.Mesh>(null!);
  const { nodes, materials } = useGLTF("/rystal.glb") as GLTFResult;

  useFrame(() => {
    crystalRef.current.rotation.y += 0.01;
    crystalRef.current.rotation.x += 0.01;
  });

  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.041, 1.135]} rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            ref={crystalRef}
            castShadow
            receiveShadow
            geometry={nodes.SM_kristal__0.geometry}
            material={materials["Scene_-_Root"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1, 0.947, 1.225]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/rystal.glb");

export function CrystalCanvas() {
  return (
    // @ts-ignore
    <Suspense fallback={<Image width={280} className="h-max" src={PosterImage} alt="rystal model" priority/>}>
      <Canvas camera={{ position: [0, 0, 30] }} flat>
      
        <CrystalModel />
        <Environment files={"moon_1k.hdr"} />
      </Canvas>
    </Suspense>
  );
}

useGLTF.preload("/rystal.glb");
