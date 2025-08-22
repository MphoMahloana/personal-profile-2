import React, { useMemo } from 'react';

const LiveBackground: React.FC = () => {
    const particles = useMemo(() => {
        const particleArray = [];
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            const xEnd = -20 + Math.random() * 40; // horizontal drift in vw
            particleArray.push({
                id: i,
                left: `${Math.random() * 100}%`,
                animationDuration: `${20 + Math.random() * 20}s`,
                animationDelay: `${Math.random() * 20}s`,
                size: `${1 + Math.random() * 2}px`,
                xEnd: `${xEnd}vw`
            });
        }
        return particleArray;
    }, []);

    return (
        <>
            <style>
            {`
                @keyframes float {
                    0% {
                        transform: translateY(0) translateX(0);
                        opacity: 0.7;
                    }
                    100% {
                        transform: translateY(-110vh) translateX(var(--x-end));
                        opacity: 0;
                    }
                }
                .particle-animation {
                    position: absolute;
                    bottom: -10vh; /* Start from below the viewport */
                    border-radius: 50%;
                    background-color: rgba(77, 182, 172, 0.3); /* teal-400/30 */
                    animation-name: float;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }
            `}
            </style>
            <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden" aria-hidden="true">
                {particles.map(p => (
                    <div
                        key={p.id}
                        className="particle-animation"
                        style={{
                            left: p.left,
                            width: p.size,
                            height: p.size,
                            animationDuration: p.animationDuration,
                            animationDelay: p.animationDelay,
                            '--x-end': p.xEnd
                        } as React.CSSProperties}
                    />
                ))}
            </div>
        </>
    );
};

export default LiveBackground;