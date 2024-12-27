"use client";

import { BarChart3, Brain, Target, Dumbbell, Users, Trophy, ArrowRight } from 'lucide-react';
import BackgroundOverlay from "@/app/components/BackgroundOverlay/backgroundOverlay";

const Features = () => {
    const features = [
        {
            icon: <BarChart3 className="w-6 h-6 text-customRed" />,
            title: "Advanced Analytics",
            description: "Track your progress with detailed performance metrics and AI-powered insights",
            stats: [
                { label: "Data points tracked", value: "50+" },
                { label: "Accuracy rate", value: "99.8%" }
            ],
            benefits: ["Real-time strength curves", "Volume load tracking", "Recovery metrics"]
        },
        {
            icon: <Brain className="w-6 h-6 text-customRed" />,
            title: "AI Training Optimization",
            description: "Get personalized training recommendations based on your performance data",
            stats: [
                { label: "Training variables", value: "20+" },
                { label: "Success rate", value: "94%" }
            ],
            benefits: ["Auto-regulation", "Fatigue management", "Load optimization"]
        },
        {
            icon: <Target className="w-6 h-6 text-customRed" />,
            title: "Goal Setting",
            description: "Set and track your powerlifting goals with intelligent milestone planning",
            stats: [
                { label: "Achievement rate", value: "87%" },
                { label: "Milestones", value: "12/yr" }
            ],
            benefits: ["Custom timeframes", "Progress tracking", "Adaptive targets"]
        },
        {
            icon: <Dumbbell className="w-6 h-6 text-customRed" />,
            title: "Exercise Library",
            description: "Access comprehensive exercise database with technique guides and tips",
            stats: [
                { label: "Exercises", value: "500+" },
                { label: "HD videos", value: "1000+" }
            ],
            benefits: ["Form analysis", "Variation finder", "Progressive overload"]
        },
        {
            icon: <Users className="w-6 h-6 text-customRed" />,
            title: "Community",
            description: "Connect with fellow powerlifters and share your progress journey",
            stats: [
                { label: "Active users", value: "25K+" },
                { label: "Daily posts", value: "1.2K" }
            ],
            benefits: ["Live feedback", "Form checks", "Meet planning"]
        },
        {
            icon: <Trophy className="w-6 h-6 text-customRed" />,
            title: "Competition Prep",
            description: "Specialized programs and tools for meet preparation and peak performance",
            stats: [
                { label: "Success rate", value: "92%" },
                { label: "PR rate", value: "76%" }
            ],
            benefits: ["Peak timing", "Attempt selection", "Weight management"]
        }
    ];

    return (
        <div id="features" className="py-24 relative">
            <BackgroundOverlay/>
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                                Powerful Features for
                            </span>
                            <br/>
                            <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                                Serious Athletes
                            </span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Everything you need to optimize your training and achieve your strength goals
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="bg-white/5 rounded-xl p-3 w-fit mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-white text-xl font-semibold mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-white/60 mb-6">
                                    {feature.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {feature.stats.map((stat, idx) => (
                                        <div key={idx} className="bg-white/5 rounded-lg p-3">
                                            <div className="text-white/40 text-sm">{stat.label}</div>
                                            <div className="text-white font-semibold">{stat.value}</div>
                                        </div>
                                    ))}
                                </div>

                                <ul className="space-y-2">
                                    {feature.benefits.map((benefit, idx) => (
                                        <li key={idx} className="text-white/60 text-sm flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-red-500"></div>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>

                                <button className="mt-6 text-white/60 text-sm flex items-center gap-2 group-hover:text-red-500 transition-colors">
                                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;