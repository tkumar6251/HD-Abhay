import React, { useState, useEffect } from 'react';

const BackgroundWatermark = () => {
    const images = [
        '/asset/ba.jpg',
        '/asset/bb.jpg',
        '/asset/bc.jpg',
        '/asset/bd.jpg',
        '/asset/be.jpg'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div style={styles.container}>
            {images.map((img, index) => (
                <div
                    key={img}
                    style={{
                        ...styles.image,
                        backgroundImage: `url(${img})`,
                        opacity: index === currentImageIndex ? 0.2 : 0, // 20% visible as requested
                    }}
                />
            ))}
        </div>
    );
};

const styles = {
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden',
        backgroundColor: '#ffffff', // Fallback
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'opacity 1.5s ease-in-out', // Smooth transition
    },
};

export default BackgroundWatermark;
