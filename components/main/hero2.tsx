"use client"

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Hero() {
  const mountRef = useRef(null);
  const mixerRef = useRef(null);
  const lastScrollTopRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  const baseSpeed = 0.2;       // always plays
  const scrollBoost = 2;     // amplify scroll velocity effect

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load("/space_station_3.glb", (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      const mixer = new THREE.AnimationMixer(model);
      const clip = gltf.animations[0];
      mixer.clipAction(clip).play();
      mixerRef.current = mixer;
    });

    let scrollVelocity = 0;

    const handleScroll = () => {
    const now = performance.now();
    const scrollTop = document.documentElement.scrollTop;
    const deltaScroll = scrollTop - lastScrollTopRef.current;
    const deltaTime = now - lastTimeRef.current;

    scrollVelocity = Math.abs(deltaScroll) / deltaTime;

      lastScrollTopRef.current = scrollTop;
      lastTimeRef.current = now;
    };

    window.addEventListener("scroll", handleScroll);

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (mixerRef.current) {
        const boostedSpeed = baseSpeed + scrollBoost * scrollVelocity;
        mixerRef.current.update(delta * boostedSpeed);
        // Decay scroll boost over time
        scrollVelocity *= 0.9;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div style={{ height: "300vh" }}>
      <div
        ref={mountRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
        <div className="relative flex flex-col h-full w-full" id="about-me">
          <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
          >
            <source src="/blackhole.webm" type="video/webm" />
          </video>
        <HeroContent />
        </div>
      </div>

      
    </div>
  );
}
// const Hero = () => {
//   return (
//     <div className="relative flex flex-col h-full w-full" id="about-me">
//       <video
//         autoPlay
//         muted
//         loop
//         className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
//       >
//         <source src="/blackhole.webm" type="video/webm" />
//       </video>
//       <HeroContent />
//     </div>
//   );
// };

// export default Hero;
