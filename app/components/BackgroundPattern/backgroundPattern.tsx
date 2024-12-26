import React from 'react';

const BackgroundPattern = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 opacity-10">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 80 80" // Zmienione na wielokrotność rozmiaru wzoru (4)
                    preserveAspectRatio="xMidYMid slice" // Dodane, aby zachować proporcje
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <pattern
                        id="grid"
                        width="4"
                        height="4"
                        patternUnits="userSpaceOnUse"
                    >
                        <line
                            x1="0"
                            y1="0"
                            x2="4"
                            y2="0"
                            stroke="rgba(255,255,255,0.5)"
                            strokeWidth="0.05"
                        />
                        <line
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="4"
                            stroke="rgba(255,255,255,0.5)"
                            strokeWidth="0.05"
                        />
                    </pattern>

                    <rect width="80" height="80" fill="url(#grid)" />
                </svg>
            </div>
        </div>
    );
};

export default BackgroundPattern;