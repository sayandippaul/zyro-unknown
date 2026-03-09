'use client';

import { motion } from 'framer-motion';
import { stats } from '@/lib/statsData';

export default function StatsTicker() {
    // Duplicate stats for seamless infinite scroll
    const duplicatedStats = [...stats, ...stats, ...stats];

    return (
        <section className="relative -my-12 md:-my-32 z-20 pointer-events-none">
            <div className="pointer-events-auto">


                {/* Main Front Layer - Tilted Banner with scrolling text */}
                <div
                    className="relative py-8 md:py-12"
                    style={{
                        transform: 'rotate(-3deg)',
                        transformOrigin: 'center',
                        zIndex: 3
                    }}
                >
                    {/* Dark Gray Theme Matched Background Banner */}
                    <div className="bg-[#1A1F1E] shadow-2xl overflow-hidden relative border-y border-[#00E08F]/20">

                        {/* Decorative top edge with green accent */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00E08F] to-transparent opacity-50" />

                        {/* Scrolling Text Container */}
                        <div className="py-6 md:py-8">
                            <motion.div
                                className="flex gap-12 whitespace-nowrap"
                                animate={{
                                    x: [0, '-33.33%'],
                                }}
                                transition={{
                                    x: {
                                        repeat: Infinity,
                                        repeatType: 'loop',
                                        duration: 30,
                                        ease: 'linear',
                                    },
                                }}
                            >
                                {duplicatedStats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 font-bold text-xl md:text-3xl lg:text-4xl"
                                        style={{
                                            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                                        }}
                                    >
                                        <span className="text-[#00E08F]">▲</span>
                                        <span className="text-[#C2C2C2] tracking-tight">{stat.label}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Decorative bottom edge with green accent */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00E08F] to-transparent opacity-50" />
                    </div>
                </div>

                {/* Gradient Fade Edges for scrolling effect */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#070B0B] to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#070B0B] to-transparent pointer-events-none z-10" />
            </div>
        </section>
    );
}
