import React from 'react';
import { Award, Users, Clock, Activity, ChevronRight, Star } from 'lucide-react';
import BackgroundOverlay from "@/app/components/BackgroundOverlay/backgroundOverlay";

const About = () => {
    const stats = [
        { icon: <Users className="w-6 h-6 text-customRed" />, value: "25,000+", label: "Active Athletes" },
        { icon: <Award className="w-6 h-6 text-customRed" />, value: "500+", label: "Elite Coaches" },
        { icon: <Clock className="w-6 h-6 text-customRed" />, value: "1M+", label: "Training Hours" },
        { icon: <Activity className="w-6 h-6 text-customRed" />, value: "95%", label: "PR Success Rate" }
    ];

    const testimonials = [
        {
            text: "Increased my total by 45kg in 3 months",
            author: "Sarah Chen",
            role: "USAPL 84kg",
            image: "/testimonials/stefi-cohen.jpg",
            rating: 5
        },
        {
            text: "Best powerlifting app I've ever used",
            author: "Mike Peterson",
            role: "IPF -120kg",
            image: "/testimonials/mike-israetel.jpg",
            rating: 5
        }
    ];

    const achievements = [
        {
            title: "Best AI Sports Platform",
            organization: "Global Tech Awards 2024",
            icon: "/icons/global-tech-awards.webp"
        },
        {
            title: "Top 10 Training Apps",
            organization: "Men's Health 2023",
            icon: "/icons/mens-health.svg"
        }
    ];

    return (
        <div id="about" className="py-24 relative">
            <BackgroundOverlay/>
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="z-10">
                            <h2 className="text-4xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                                    Empowering Athletes
                                </span>
                                <br/>
                                <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                                    Through Technology
                                </span>
                            </h2>
                            <p className="text-white/60 text-lg mb-8 z-20">
                                IRONFORGE combines advanced AI technology with proven powerlifting methodologies to help
                                athletes achieve their strength goals. Our platform adapts to your training style and
                                continuously optimizes your progress.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                {stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                                    >
                                        <div className="bg-white/5 rounded-xl p-2 w-fit mb-4">
                                            {stat.icon}
                                        </div>
                                        <div className="text-2xl font-bold text-white mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-white/60">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 z-10">
                            <div className="flex flex-col gap-6">
                                <div className="bg-gradient-to-br from-red-500/20 to-red-800/20 p-6 rounded-2xl border border-white/10 sm:order-last order-first">
                                    <div className="text-white font-medium mb-2">Weekly Active Users</div>
                                    <div className="text-3xl font-bold text-white mb-4">12,547</div>
                                    <div className="flex items-center gap-2 text-green-400 text-sm">
                                        <Activity className="w-4 h-4" />
                                        +24.3% vs last week
                                    </div>
                                </div>
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                                        <div className="flex gap-2 mb-2">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-customRed text-customRed" />
                                            ))}
                                        </div>
                                        <p className="text-white font-medium mb-4">{testimonial.text}</p>
                                        <div className="flex items-center gap-3">
                                            <img src={testimonial.image} alt={testimonial.author} className="w-10 h-10 rounded-full" />
                                            <div>
                                                <div className="text-white text-sm font-medium">{testimonial.author}</div>
                                                <div className="text-white/60 text-sm">{testimonial.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col gap-6">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer">
                                        <img src={achievement.icon} alt={achievement.organization} className="w-auto h-12 mb-4" />
                                        <h3 className="text-white font-medium mb-2">{achievement.title}</h3>
                                        <div className="flex items-center justify-between text-white/60 text-sm">
                                            <span>{achievement.organization}</span>
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;