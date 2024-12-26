import React from "react";

export default function BackgroundOverlay() {
    return (
        <div className="absolute inset-0 -z-10 bg-black overflow-hidden">
            <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <defs>
                    <radialGradient id="redGlow" cx="50%" cy="50%" r="70%">
                        <stop offset="0%" style={{stopColor: '#c81b1b', stopOpacity: 0.4}}/>
                        <stop offset="100%" style={{stopColor: '#000000', stopOpacity: 0.1}}/>
                    </radialGradient>

                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                <rect width="100%" height="100%" fill="url(#redGlow)"/>

                <path
                    d="M0,20% C20%,10% 60%,30% 100%,20%"
                    fill="none"
                    stroke="#c81b1b"
                    strokeWidth="1"
                    opacity="0.3"
                    filter="url(#glow)"
                />

                <path
                    d="M0,40% C30%,30% 70%,50% 100%,40%"
                    fill="none"
                    stroke="#c81b1b"
                    strokeWidth="1"
                    opacity="0.2"
                    filter="url(#glow)"
                />

                <path
                    d="M0,60% C20%,50% 80%,70% 100%,60%"
                    fill="none"
                    stroke="#c81b1b"
                    strokeWidth="1"
                    opacity="0.2"
                    filter="url(#glow)"
                />
            </svg>
            <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black to-transparent pointer-events-none"/>
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent pointer-events-none"/>

        </div>
    );
}