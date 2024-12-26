"use client";

import React, { useState } from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between py-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-white/5 backdrop-blur-sm p-2 rounded-xl">
                                <Dumbbell className="w-6 h-6 text-[#770404]"/>
                            </div>
                            <span className="text-white font-bold text-xl">IRONFORGE</span>
                        </div>

                        <div className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur border border-white/10 absolute left-1/2 -translate-x-1/2 px-6 py-3 rounded-full">
                            <a href="#" className="text-white hover:text-customRed transition-colors">Features</a>
                            <a href="#" className="text-white/60 hover:text-customRed transition-colors">Pricing</a>
                            <a href="#" className="text-white/60 hover:text-customRed transition-colors">About</a>
                            <a href="#" className="text-white/60 hover:text-customRed transition-colors">Blog</a>
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            <button className="px-4 py-2 text-white/60 hover:text-white transition-colors">
                                Sign in
                            </button>
                            <button className="px-6 py-2 bg-white text-black rounded-xl font-medium hover:bg-white/90 transition-colors">
                                Get started
                            </button>
                        </div>

                        <button
                            className="md:hidden bg-white/5 p-2 rounded-xl z-50"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-white" />
                            ) : (
                                <Menu className="w-6 h-6 text-white" />
                            )}
                        </button>
                    </div>

                    {/* Mobile menu */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-black/95 backdrop-blur-lg fixed inset-0 p-6">
                            <div className="flex flex-col gap-6 mt-20">
                                <a href="#" className="text-white text-lg hover:text-customRed transition-colors">Features</a>
                                <a href="#" className="text-white/60 text-lg hover:text-customRed transition-colors">Pricing</a>
                                <a href="#" className="text-white/60 text-lg hover:text-customRed transition-colors">About</a>
                                <a href="#" className="text-white/60 text-lg hover:text-customRed transition-colors">Blog</a>
                                <div className="flex flex-col gap-4 pt-6">
                                    <button className="w-full px-4 py-3 text-white/60 hover:text-white transition-colors border border-white/10 rounded-xl">
                                        Sign in
                                    </button>
                                    <button className="w-full px-4 py-3 bg-white text-black rounded-xl font-medium hover:bg-white/90 transition-colors">
                                        Get started
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;