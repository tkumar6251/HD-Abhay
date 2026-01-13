import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ScrollControls, useScroll, Text, Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const items = [
    { url: '/asset/ba.jpg', title: 'Modern Living', date: '2021' },
    { url: '/asset/bd.jpg', title: 'Minimalist Kitchen', date: '2022' },
    { url: '/asset/be.jpg', title: 'Luxury Bedroom', date: '2023' },
    { url: '/asset/bf.jpg', title: 'Classic Office', date: '2024' },
    { url: '/asset/interior-4226020_1280.jpg', title: 'Cozy Corner', date: '2025' },
    { url: '/asset/office-4292265_1280.jpg', title: 'Elegant Dining', date: '2026' },
];

const BentPlaneMaterial = {
    uniforms: {
        uTexture: { value: null },
        uBend: { value: 0 },
    },
    vertexShader: `
    varying vec2 vUv;
    uniform float uBend;
    void main() {
      vUv = uv;
      vec3 pos = position;
      float x = vUv.x - 0.5;
      pos.z -= pow(x, 2.0) * uBend * 5.0; 
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
    fragmentShader: `
    uniform sampler2D uTexture;
    varying vec2 vUv;
    void main() {
      vec4 tex = texture2D(uTexture, vUv);
      gl_FragColor = tex;
    }
  `
};

function BentImage({ url, bendStrength = 0 }) {
    const mesh = useRef();
    const texture = useTexture(url);
    const shaderRef = useRef();


    useFrame(() => {
        if (shaderRef.current) {
            shaderRef.current.uniforms.uBend.value = THREE.MathUtils.lerp(
                shaderRef.current.uniforms.uBend.value,
                bendStrength,
                0.1
            );
        } else {
            // console.log('BentImage: shaderRef.current is NULL');
        }
    });

    const shaderMaterial = useMemo(() => {
        return new THREE.ShaderMaterial({
            uniforms: {
                uTexture: { value: texture },
                uBend: { value: 0 }
            },
            vertexShader: BentPlaneMaterial.vertexShader,
            fragmentShader: BentPlaneMaterial.fragmentShader,
            transparent: true,
            side: THREE.DoubleSide
        });
    }, [texture]);

    useFrame(() => {
        if (shaderRef.current) shaderRef.current.uniforms.uTexture.value = texture;
    });

    return (
        <mesh ref={mesh}>
            <planeGeometry args={[4.5, 3, 32, 32]} />
            <primitive object={shaderMaterial} ref={shaderRef} attach="material" />
        </mesh>
    );
}

function SpiralItem({ index, url, title, date, count }) {
    const groupRef = useRef();
    const scroll = useScroll();
    const [bend, setBend] = useState(0);

    const radius = 8.5;
    const initialTheta = (index / (count - 1)) * Math.PI * 4 + Math.PI / 2;

    const gap = 4.0;
    const initialY = -index * gap;

    const x = Math.cos(initialTheta) * radius;
    const z = Math.sin(initialTheta) * radius;


    useFrame((state, delta) => {
        if (!groupRef.current) return;

        const scrollOffset = scroll.offset;
        const itemPositionNormalized = index / (count - 1);
        const distance = (scrollOffset - itemPositionNormalized) * (count - 1);

        const absDistance = Math.abs(distance);
        const targetBend = Math.min(absDistance * 0.5, 1.0);
        setBend(targetBend);

        groupRef.current.rotation.z = distance * 0.05;
        const scale = 1.35 - Math.min(absDistance * 0.2, 0.5);
        groupRef.current.scale.set(scale, scale, scale);
    });

    return (
        <group ref={groupRef} position={[x, initialY, z]} rotation={[0, -initialTheta + Math.PI / 2, 0]}>
            <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
                <React.Suspense fallback={<mesh><planeGeometry args={[4, 2.5]} /><meshStandardMaterial color="#ccc" /></mesh>}>
                    <BentImage url={url} bendStrength={bend} />
                </React.Suspense>
                <Text
                    position={[0, -2.4, 0]}
                    fontSize={0.35}
                    color="#064E3B"
                    anchorX="center"
                    anchorY="middle"
                >
                    {title}
                </Text>
                <Text
                    position={[-3.0, 0, 0]}
                    fontSize={0.5}
                    color="#D97706"
                    rotation={[0, 0, Math.PI / 2]}
                    anchorX="center"
                    anchorY="middle"
                >
                    {date}
                </Text>
            </Float>
        </group>
    );
}

function SpiralContent() {
    const scroll = useScroll();
    const group = useRef();

    useFrame((state, delta) => {
        const offset = scroll.offset;
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, offset * Math.PI * 4, 0.08);

        const gap = 4.0;
        const totalHeight = (items.length - 1) * gap;

        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, offset * totalHeight, 0.08);
    });

    return (
        <group ref={group}>
            {items.map((item, i) => (
                <SpiralItem key={i} index={i} count={items.length} {...item} />
            ))}
        </group>
    );
}

const SpiralGallery = () => {
    const containerRef = useRef();
    const scrollDirection = useRef('down');
    const lastScrollY = useRef(0);

    // Track Scroll Direction
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            if (currentY > lastScrollY.current) {
                scrollDirection.current = 'down';
            } else {
                scrollDirection.current = 'up';
            }
            lastScrollY.current = currentY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smarter Auto-Snap Logic
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Trigger only if significantly visible
                if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
                    const rect = entry.boundingClientRect;

                    // CRITICAL FIX: Only snap if scrolling DOWN
                    // AND if the element is near the top (top > 0) but not 'above' the viewport
                    if (scrollDirection.current === 'down' && rect.top > 20 && rect.top < window.innerHeight * 0.8) {
                        console.log("Snapping Down");
                        entry.target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    // We intentionally DO NOT snap if scrolling 'up', allowing the user to leave.
                }
            },
            { threshold: [0.35, 0.6] }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            id="portfolio"
            style={{ height: '100vh', width: '100%', background: '#E2F1E8', position: 'relative', zIndex: 20 }}
        >
            <style>{`
        ::-webkit-scrollbar { display: none; }
        html { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
            <div style={{ pointerEvents: 'none' }} />

            {/* LEFT VERTICAL TEXT WITH LINES */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '40px',
                transform: 'translateY(-50%)',
                zIndex: 21,
                pointerEvents: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '30px'
            }}>
                <div style={{ width: '1px', height: '100px', background: '#047857', opacity: 0.6 }}></div>
                <p style={{
                    color: '#047857',
                    fontSize: '0.9rem',
                    letterSpacing: '0.5em',
                    fontWeight: 'bold',
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)',
                    margin: 0
                }}>
                    SCROLL TO EXPLORE
                </p>
                <div style={{ width: '1px', height: '100px', background: '#047857', opacity: 0.6 }}></div>
            </div>

            {/* RIGHT VERTICAL TEXT WITH LINES */}
            <div style={{
                position: 'absolute',
                top: '50%',
                right: '40px',
                transform: 'translateY(-50%)',
                zIndex: 21,
                pointerEvents: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '30px'
            }}>
                <div style={{ width: '1px', height: '100px', background: '#047857', opacity: 0.6 }}></div>
                <p style={{
                    color: '#047857',
                    fontSize: '0.9rem',
                    letterSpacing: '0.5em',
                    fontWeight: 'bold',
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)',
                    margin: 0
                }}>
                    CRAFTING LUXURY
                </p>
                <div style={{ width: '1px', height: '100px', background: '#047857', opacity: 0.6 }}></div>
            </div>

            <Canvas camera={{ position: [0, 0, 24], fov: 35 }}>
                <color attach="background" args={['#E2F1E8']} />
                <fog attach="fog" args={['#E2F1E8', 10, 40]} />

                <ambientLight intensity={0.8} />
                <spotLight position={[20, 20, 20]} angle={0.2} penumbra={1} intensity={1.5} color="#ffffff" />
                <spotLight position={[-20, 10, 10]} angle={0.2} penumbra={1} intensity={1.0} color="#fbbf24" />


                <Text
                    position={[0, 0, -4]}
                    fontSize={2.5}
                    color="black"
                    font="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvL-7_C_2_gnW_7H86J-z6GYZ9.woff"
                    anchorX="center"
                    anchorY="middle"
                    textAlign="center"
                    fillOpacity={1}
                    lineHeight={1}
                >
                    Our{'\n'}Design{'\n'}Stories
                </Text>

                <ScrollControls pages={items.length} damping={0.3}>
                    <SpiralContent />
                </ScrollControls>
            </Canvas>
        </div>
    );
};

export default SpiralGallery;
