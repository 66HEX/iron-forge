import React from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';
import BackgroundOverlay from "@/app/components/BackgroundOverlay/backgroundOverlay";

const blogPosts = [
    {
        title: "Advanced Powerlifting Techniques for Maximum Gains",
        excerpt: "Discover the latest scientific approaches to powerlifting that can help you break through plateaus and achieve new personal records.",
        author: "Mike Strong",
        readTime: "8 min read",
        category: "Training",
        image: "/blog/blog-post-1.jpg",
    },
    {
        title: "Nutrition Strategies for Strength Athletes",
        excerpt: "Learn how to optimize your nutrition to support heavy training sessions and maximize recovery between workouts.",
        author: "Sarah Powers",
        readTime: "6 min read",
        category: "Nutrition",
        image: "/blog/blog-post-2.jpg",
    },
    {
        title: "AI-Powered Form Analysis: The Future of Training",
        excerpt: "How artificial intelligence is revolutionizing the way we analyze and improve lifting techniques.",
        author: "Dr. Tech Gains",
        readTime: "10 min read",
        category: "Technology",
        image: "/blog/blog-post-3.jpg",
    }
];

const BlogSection = () => {
    return (
        <div id="blog" className="min-h-screen relative">
            <BackgroundOverlay />
            <div className="container mx-auto px-4 py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">
                            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                                Latest from our
                            </span>
                            {" "}
                            <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                                Blog
                            </span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Stay updated with the latest training tips, nutrition advice, and technological innovations in strength training.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.map((post, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all group"
                            >
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-customRed text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-white/60 text-sm mb-4">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2">
                                                <User size={16} className="text-white/40" />
                                                <span className="text-white/40 text-sm">{post.author}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock size={16} className="text-white/40" />
                                                <span className="text-white/40 text-sm">{post.readTime}</span>
                                            </div>
                                        </div>
                                        <ArrowRight size={20} className="text-customRed group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button className="px-8 py-4 bg-white/5 text-white rounded-xl font-semibold border border-white/10 hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                            View all articles
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;