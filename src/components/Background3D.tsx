
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create spheres
    const spheres: THREE.Mesh[] = [];
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00'];
    
    for (let i = 0; i < 5; i++) {
      const geometry = new THREE.SphereGeometry(0.5, 32, 32);
      const material = new THREE.MeshPhongMaterial({
        color: colors[i],
        transparent: true,
        opacity: 0.7,
        shininess: 100
      });
      const sphere = new THREE.Mesh(geometry, material);
      
      // Position spheres in a circle
      const angle = (i / 5) * Math.PI * 2;
      sphere.position.x = Math.cos(angle) * 3;
      sphere.position.y = Math.sin(angle) * 3;
      sphere.position.z = -5;
      
      spheres.push(sphere);
      scene.add(sphere);
    }

    // Add particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: '#ffffff',
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Camera position
    camera.position.z = 8;

    // Mouse move event
    const onMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate spheres
      spheres.forEach((sphere, i) => {
        const time = Date.now() * 0.001;
        const angle = (i / 5) * Math.PI * 2;
        
        sphere.position.x = Math.cos(angle + time) * 3;
        sphere.position.y = Math.sin(angle + time) * 3;
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
      });

      // Rotate particles
      particlesMesh.rotation.y += 0.001;

      // Mouse interaction
      const targetX = mousePosition.current.x * 0.3;
      const targetY = mousePosition.current.y * 0.3;
      
      spheres.forEach(sphere => {
        sphere.position.x += (targetX - sphere.position.x) * 0.05;
        sphere.position.y += (targetY - sphere.position.y) * 0.05;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      
      // Cleanup all geometries and materials
      spheres.forEach(sphere => {
        sphere.geometry.dispose();
        (sphere.material as THREE.Material).dispose();
        scene.remove(sphere);
      });
      
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      scene.remove(particlesMesh);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 -z-10 bg-background" />;
};

export default Background3D;
