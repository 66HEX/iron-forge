"use client"
import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import BackgroundOverlay from "@/app/components/BackgroundOverlay/backgroundOverlay";
import { Dumbbell, Activity, Share2 } from 'lucide-react';
import BackgroundPattern from "@/app/components/BackgroundPattern/backgroundPattern";

const chartData = [
    { month: 'Jan', value: 150 }, { month: 'Feb', value: 180 }, { month: 'Mar', value: 160 },
    { month: 'Apr', value: 220 }, { month: 'May', value: 200 }, { month: 'Jun', value: 240 },
    { month: 'Jul', value: 220 }, { month: 'Aug', value: 280 }, { month: 'Sep', value: 260 }
];

const integrationIcons = [
    { name: 'Strava', icon: '/icons/strava.svg' },
    { name: 'Fitbod', icon: '/icons/fitbod.svg' },
    { name: 'MyFitnessPal', icon: '/icons/my-fitness-pal.svg' },
    { name: 'Garmin', icon: '/icons/garmin.svg' },
    { name: 'Apple Health', icon: '/icons/apple-health.svg' },
    { name: 'Google Fit', icon: '/icons/google-fit.svg' }
];

const Hero = () => {
    return (
        <div id="hero" className="min-h-screen py-24 relative overflow-hidden">
            <BackgroundOverlay />
            <BackgroundPattern/>
            <div className="container mx-auto px-4 relative">
                <main className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <div className="flex -space-x-1">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i}
                                         className="w-6 h-6 rounded-full bg-red-800/50 border border-red-700/30"/>
                                ))}
                            </div>
                            <span className="text-white/70 text-sm">Trusted by 25,000+ athletes</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black mb-8 tracking-tight">
                            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                                Managing your training
                            </span>
                            <br/>
                            <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                                with IRONFORGE
                            </span>
                        </h1>
                        <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
                            An advanced powerlifting platform that uses AI to automate various aspects
                            of training optimization, progress tracking, and performance analysis.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
                            <button
                                className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-white/90 transition-colors">
                                Get started for free
                            </button>
                            <button
                                className="px-8 py-4 bg-white/5 text-white rounded-xl font-semibold border border-white/10 hover:bg-white/10 transition-colors">
                                Book a demo
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <Dumbbell className="text-red-500" size={24} />
                                    <h3 className="text-white text-lg font-medium">Strength Progress</h3>
                                </div>
                                <p className="text-white/60 text-sm mb-4">Track your 1RM progression across all major lifts with our AI-powered analytics</p>
                                <div className="h-48 text-white/60">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={chartData}>
                                            <XAxis dataKey="month" stroke="#666" />
                                            <YAxis stroke="#666" />
                                            <Tooltip
                                                contentStyle={{
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    borderRadius: '0.5rem',
                                                }}
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="value"
                                                stroke="#c81b1b"
                                                strokeWidth={2}
                                                dot={false}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <Activity className="text-red-500" size={24} />
                                    <h3 className="text-white text-lg font-medium">Training Quality</h3>
                                </div>
                                <p className="text-white/60 text-sm mb-4">Real-time form analysis and workout intensity scoring</p>
                                <div className="relative h-48 flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-full border-4 border-red-500 flex items-center justify-center relative">
                                        <div className="text-2xl font-bold text-white">89%</div>
                                        <div className="absolute -bottom-8 text-white/60 text-sm">Form Score</div>
                                    </div>
                                    <div className="absolute top-0 right-0 bg-green-500/20 text-green-400 text-sm px-3 py-1 rounded-full">
                                        +12% vs last week
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <Share2 className="text-red-500" size={24} />
                                    <h3 className="text-white text-lg font-medium">Smart Integrations</h3>
                                </div>
                                <p className="text-white/60 text-sm mb-4">Seamlessly sync with your favorite fitness apps</p>
                                <div className="grid grid-cols-3 gap-4">
                                    {integrationIcons.map((icon, i) => (
                                        <div
                                            key={i}
                                            className="aspect-square rounded-lg bg-gradient-to-br from-white/5 to-white/10 border border-white/5 flex items-center justify-center group hover:border-white/20 transition-colors"
                                        >
                                            <img
                                                src={icon.icon}
                                                alt={icon.name}
                                                className="w-8 h-8 md:w-16 md:h-16 object-contain"
                                            />
                                            <div className="absolute opacity-0 group-hover:opacity-100 bg-black/80 text-white text-xs p-1 rounded transition-opacity">
                                                {icon.name}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Hero;