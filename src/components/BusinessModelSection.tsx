'use client';

import { motion } from 'framer-motion';
import { Reveal } from './AdvancedAnimations';

const businessComponents = [
    {
        id: 1,
        label: 'Node Pools',
        position: { top: '-7%', left: '22%' },
        border: 'right-bottom',
        lineAngle: 35,
        lineLength: 100
    },
    {
        id: 2,
        label: 'Shieldeum AI\nInfrastructure\nDePIN',
        position: { top: '-22%', left: '46%', transform: 'translateX(-50%)' },
        border: 'bottom',
        lineAngle: 90,
        lineLength: 80
    },
    {
        id: 3,
        label: 'Shieldeum\nProtocol',
        position: { top: '-15%', right: '23%' },
        border: 'left-bottom',
        lineAngle: 145,
        lineLength: 100
    },
    {
        id: 4,
        label: 'Infrastructure\n& Technology\nEcosystem',
        position: { top: '60%', left: '18%' },
        border: 'right-top',
        lineAngle: -35,
        lineLength: 90
    },
    {
        id: 5,
        label: 'Secure\nComputing\nPower',
        position: { top: '63%', right: '17%' },
        border: 'left-top',
        lineAngle: -145,
        lineLength: 90
    }
];

export default function BusinessModelSection() {
    return (
        <section className="section relative overflow-hidden bg-black min-h-screen flex items-center">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                >
                    <source src="https://res.cloudinary.com/dlrlet9fg/video/upload/v1769259881/business-video_sxa7f2.webm" type="video/webm" />
                </video>
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Left Circuit Decoration */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                <svg width="120" height="600" viewBox="0 0 120 600" className="opacity-90">
                    <line x1="60" y1="0" x2="60" y2="200" stroke="#00E08F" strokeWidth="2" />
                    <line x1="60" y1="200" x2="90" y2="230" stroke="#00E08F" strokeWidth="2" />
                    <line x1="90" y1="230" x2="90" y2="370" stroke="#00E08F" strokeWidth="2" />
                    <line x1="90" y1="370" x2="60" y2="400" stroke="#00E08F" strokeWidth="2" />
                    <line x1="60" y1="400" x2="60" y2="600" stroke="#00E08F" strokeWidth="2" />
                    {/* 
                    <circle cx="60" cy="200" r="5" fill="#00E08F" filter="url(#glow-bm)" />
                    <circle cx="90" cy="230" r="5" fill="#00E08F" filter="url(#glow-bm)" />
                    <circle cx="90" cy="370" r="5" fill="#00E08F" filter="url(#glow-bm)" />
                    <circle cx="60" cy="400" r="5" fill="#00E08F" filter="url(#glow-bm)" /> */}

                    <defs>
                        <filter id="glow-bm">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* Right Circuit Decoration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                <svg width="120" height="600" viewBox="0 0 120 600" className="opacity-90">
                    <line x1="60" y1="0" x2="60" y2="200" stroke="#00E08F" strokeWidth="2" />
                    <line x1="60" y1="200" x2="30" y2="230" stroke="#00E08F" strokeWidth="2" />
                    <line x1="30" y1="230" x2="30" y2="370" stroke="#00E08F" strokeWidth="2" />
                    <line x1="30" y1="370" x2="60" y2="400" stroke="#00E08F" strokeWidth="2" />
                    <line x1="60" y1="400" x2="60" y2="600" stroke="#00E08F" strokeWidth="2" />

                    {/* <circle cx="60" cy="200" r="5" fill="#00E08F" filter="url(#glow-bm2)" />
                    <circle cx="30" cy="230" r="5" fill="#00E08F" filter="url(#glow-bm2)" />
                    <path d="M 30,300 L 35,305 L 30,310 L 25,305 Z" fill="#00E08F" filter="url(#glow-bm2)" />
                    <circle cx="30" cy="305" r="2" fill="#00E08F" />
                    <circle cx="30" cy="370" r="5" fill="#00E08F" filter="url(#glow-bm2)" />
                    <circle cx="60" cy="400" r="5" fill="#00E08F" filter="url(#glow-bm2)" /> */}

                    <defs>
                        <filter id="glow-bm2">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* Heading - Left aligned like Shieldeum */}
            <div className="absolute top-[5%] left-[119.5px] z-10">
                <Reveal direction="up">
                    <h2 className="text-6xl md:text-7xl font-bold text-white uppercase">
                        Business Model
                    </h2>
                </Reveal>
            </div>

            {/* Main Visualization Container - Full width for proper label positioning */}
            <div className="relative w-full h-[600px] mt-32 z-10">
                {/* Component Labels with Connecting Lines */}
                {businessComponents.map((component, index) => {
                    // Calculate diagonal line endpoint using trigonometry
                    const angleRad = (component.lineAngle * Math.PI) / 180;
                    const endX = Math.cos(angleRad) * component.lineLength;
                    const endY = Math.sin(angleRad) * component.lineLength;
                    const svgWidth = Math.abs(endX) + 40;
                    const svgHeight = Math.abs(endY) + 40;
                    const startX = svgWidth / 2;
                    const startY = 10;

                    return (
                        <motion.div
                            key={component.id}
                            className="absolute"
                            style={component.position}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Label Box with border */}
                            <div
                                className="px-5 py-5 text-white text-sm md:text-base font-medium whitespace-pre-line text-center"
                                style={{
                                    borderLeft: component.border === 'left' ? '1px solid rgb(59, 67, 67)' : 'none',
                                    borderRight: component.border === 'right' ? '1px solid rgb(59, 67, 67)' : 'none',
                                    borderBottom: component.border === 'bottom' ? '1px solid rgb(59, 67, 67)' : 'none',
                                    borderRadius: component.border === 'right' ? '0 0 4px 0' : component.border === 'left' ? '0 0 0 4px' : '0'
                                }}
                            >
                                {component.label}
                            </div>

                            {/* Connecting Line - Diagonal/Angled */}
                            <svg
                                className="absolute top-full left-1/2 -translate-x-1/2 pointer-events-none"
                                width={svgWidth}
                                height={svgHeight}
                                style={{ overflow: 'visible' }}
                            >
                                <motion.line
                                    x1={startX}
                                    y1={startY}
                                    x2={startX + endX}
                                    y2={startY + endY}
                                    stroke="#00E08F"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                                />
                                <motion.circle
                                    cx={startX + endX}
                                    cy={startY + endY}
                                    r="4"
                                    fill="#00E08F"
                                    filter={`url(#glow-line-${component.id})`}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                                />
                                <defs>
                                    <filter id={`glow-line-${component.id}`}>
                                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                            </svg>
                        </motion.div>
                    );
                })}

                {/* Central Visualization Area (Video provides the 3D elements) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 flex items-center justify-center">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        {/* The video background shows the 3D isometric visualization */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
