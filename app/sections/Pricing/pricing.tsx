import React from 'react';
import { Check } from 'lucide-react';
import BackgroundOverlay from "@/app/components/BackgroundOverlay/backgroundOverlay";

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "Free",
            description: "Perfect for beginners starting their strength journey",
            features: [
                "Basic workout tracking",
                "Performance analytics",
                "Exercise library access",
                "Community forum access",
                "Mobile app"
            ]
        },
        {
            name: "Pro",
            price: "$29",
            highlight: true,
            description: "Advanced features for serious powerlifters",
            features: [
                "All Starter features",
                "AI training optimization",
                "Custom program builder",
                "Advanced analytics",
                "Progress tracking",
                "Competition prep tools",
                "Priority support"
            ]
        },
        {
            name: "Elite",
            price: "$99",
            description: "For teams and professional athletes",
            features: [
                "All Pro features",
                "Team management",
                "Coach dashboard",
                "Custom branding",
                "API access",
                "Dedicated support",
                "Training webinars"
            ]
        }
    ];

    return (
        <div id="pricing" className="py-24 relative">
            <BackgroundOverlay/>
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                                Simple Pricing for
                            </span>
                            <br/>
                            <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                                Every Athlete
                            </span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Choose the perfect plan for your training needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`
                                    bg-white/5 backdrop-blur-sm rounded-2xl p-8 border flex flex-col justify-between 
                                    ${plan.highlight ? 'border-customRed/50' : 'border-white/10'}
                                    relative overflow-hidden
                                `}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 right-0">
                                        <div className="bg-customRed text-white text-sm px-3 py-1 rounded-bl-lg">
                                            Popular
                                        </div>
                                    </div>
                                )}
                                <div className="mb-8">
                                    <h3 className="text-white text-xl font-semibold mb-2">
                                        {plan.name}
                                    </h3>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-4xl font-bold text-white">
                                            {plan.price}
                                        </span>
                                        {plan.price !== "Free" && (
                                            <span className="text-white/60">/month</span>
                                        )}
                                    </div>
                                    <p className="text-white/60">
                                        {plan.description}
                                    </p>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-customRed"/>
                                            <span className="text-white/80">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`
                                        w-full py-3 px-6 rounded-xl font-medium transition-colors
                                        ${plan.highlight
                                        ? 'bg-customRed hover:bg-red-800 text-white'
                                        : 'bg-white/10 hover:bg-white/20 text-white'}
                                    `}
                                >
                                    Get started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;