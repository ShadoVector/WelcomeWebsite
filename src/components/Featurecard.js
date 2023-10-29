import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../FeatureCard.css'; // Import your CSS file

const FeatureCard = ({ index, feature }) => {
    const [hovered, setHovered] = useState(false);

    const cardAnimation = useSpring({
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
        boxShadow: hovered ? '0px 6px 10px rgba(0, 0, 0, 0.2)' : '0px 4px 6px rgba(0, 0, 0, 0.1)',
    });

    return (
        <>
            <div key={index} className="w-1/2 p-4">
                <div className="bg-white rounded-lg shadow-md feature-card" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop:'5%'}}>
                    <h2 className="text-xl font-semibold mb-2" style={{ marginRight: '40%'}}>{feature.heading}</h2>
                    <animated.div
                        className="feature-image"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        style={cardAnimation}
                    >
                        <img src={feature.image} alt={feature.heading} />
                        {hovered && (
                            <animated.p className="feature-description">
                                {feature.description}
                            </animated.p>
                        )}
                    </animated.div>
                </div>
            </div>
        </>
    );
};

export default FeatureCard;