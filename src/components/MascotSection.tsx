'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Reveal, GradientText } from './AdvancedAnimations';

export default function MascotSection() {
    return (
        <section className="section relative overflow-hidden">
            {/* Background gradient */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(0, 224, 143, 0.05) 0%, transparent 60%)'
                }}
            />

            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Mascot */}
                    <motion.div
                        className="relative h-[500px] flex items-center justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* EcoBot Mascot Illustration */}
                        <motion.div
                            className="relative w-64 h-80 mx-auto"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            {/* Robot Body */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-40 rounded-3xl bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a] shadow-xl">
                                {/* Body glow strip */}
                                <motion.div
                                    className="absolute left-1/2 -translate-x-1/2 top-8 w-6 h-20 rounded-full bg-[#00E08F]"
                                    animate={{
                                        boxShadow: [
                                            '0 0 10px #00E08F, 0 0 20px #00E08F',
                                            '0 0 20px #00E08F, 0 0 40px #00E08F',
                                            '0 0 10px #00E08F, 0 0 20px #00E08F'
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                {/* Indicator lights */}
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute right-4 w-3 h-3 rounded-full bg-[#00E08F]"
                                        style={{ top: 10 + i * 14 }}
                                        animate={{
                                            opacity: [0.5, 1, 0.5],
                                            scale: [1, 1.2, 1]
                                        }}
                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                                    />
                                ))}
                            </div>

                            {/* Head */}
                            <motion.div
                                className="absolute bottom-32 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-b from-[#4a4a4a] to-[#3a3a3a] shadow-lg"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                {/* Eyes */}
                                <motion.div
                                    className="absolute top-6 left-4 w-5 h-5 rounded-full bg-[#00E08F]"
                                    animate={{
                                        boxShadow: [
                                            '0 0 5px #00E08F',
                                            '0 0 15px #00E08F, 0 0 25px #00E08F',
                                            '0 0 5px #00E08F'
                                        ]
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                <motion.div
                                    className="absolute top-6 right-4 w-5 h-5 rounded-full bg-[#00E08F]"
                                    animate={{
                                        boxShadow: [
                                            '0 0 5px #00E08F',
                                            '0 0 15px #00E08F, 0 0 25px #00E08F',
                                            '0 0 5px #00E08F'
                                        ]
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                                />
                            </motion.div>

                            {/* Backpack with Plants */}
                            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 ml-16 w-20 h-28 rounded-2xl bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a]">
                                {/* Plants */}
                                <motion.div
                                    className="absolute -top-16 left-1/2 -translate-x-1/2"
                                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                >
                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-8 h-16 rounded-full bg-gradient-to-t from-green-600 to-green-400"
                                            style={{
                                                left: -15 + i * 8,
                                                top: -10 - Math.abs(i - 2) * 10,
                                                rotate: -30 + i * 15,
                                                transformOrigin: 'bottom center'
                                            }}
                                            animate={{
                                                rotate: [-30 + i * 15, -25 + i * 15, -30 + i * 15]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                        />
                                    ))}
                                </motion.div>
                            </div>

                            {/* Ground shadow */}
                            <motion.div
                                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-8 bg-[#00E08F]/20 rounded-full blur-xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.2, 0.3, 0.2]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>

                        {/* Floating badges around mascot */}
                        <motion.div
                            className="absolute top-10 right-10 glass rounded-xl px-4 py-2"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <span className="text-[#00E08F] font-bold">AI Powered</span>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-20 left-0 glass rounded-xl px-4 py-2"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                        >
                            <span className="text-white font-medium text-sm">100% Eco-Friendly</span>
                        </motion.div>
                    </motion.div>

                    {/* Right - Content */}
                    <div className="space-y-6">
                        <Reveal direction="right">
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                Meet <GradientText>EcoBot</GradientText>
                            </h2>
                        </Reveal>

                        <Reveal direction="right" delay={0.2}>
                            <p className="text-[#A1A1A1] text-lg leading-relaxed">
                                Your personal guide to sustainable technology. EcoBot combines
                                cutting-edge AI with nature-inspired design to help you make
                                eco-conscious decisions every day.
                            </p>
                        </Reveal>

                        <Reveal direction="right" delay={0.4}>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                {[
                                    { icon: '🌱', title: 'Nature First', desc: 'Designed with sustainability' },
                                    { icon: '🤖', title: 'AI Powered', desc: 'Smart eco recommendations' },
                                    { icon: '⚡', title: 'Energy Efficient', desc: 'Low carbon footprint' },
                                    { icon: '♻️', title: 'Recyclable', desc: '100% biodegradable parts' }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="glass rounded-xl p-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                        whileHover={{
                                            y: -5,
                                            boxShadow: '0 10px 30px rgba(0, 224, 143, 0.15)'
                                        }}
                                    >
                                        <div className="text-2xl mb-2">{item.icon}</div>
                                        <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                                        <p className="text-[#A1A1A1] text-xs">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal direction="right" delay={0.6}>
                            <motion.button
                                className="btn-primary mt-4"
                                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 224, 143, 0.5)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More About EcoBot
                            </motion.button>
                        </Reveal>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-px"
                style={{
                    background: 'linear-gradient(to right, transparent, rgba(0, 224, 143, 0.3), transparent)'
                }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
            />
        </section>
    );
}
