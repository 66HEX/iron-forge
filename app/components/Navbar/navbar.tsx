"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';
import { useLenis } from 'lenis/react';
import gsap from 'gsap';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const lenis = useLenis();
    const menuRef = useRef<HTMLDivElement | null>(null);

    const featureRef = useRef<HTMLButtonElement | null>(null);
    const pricingRef = useRef<HTMLButtonElement | null>(null);
    const aboutRef = useRef<HTMLButtonElement | null>(null);
    const blogRef = useRef<HTMLButtonElement | null>(null);
    const signInRef = useRef<HTMLButtonElement | null>(null);
    const getStartedRef = useRef<HTMLButtonElement | null>(null);

    const closeMenu = () => {
        const tl = gsap.timeline();

        tl.to([
            featureRef.current,
            pricingRef.current,
            aboutRef.current,
            blogRef.current,
            signInRef.current,
            getStartedRef.current
        ], {
            opacity: 0,
            y: 20,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.in"
        });

        tl.to(menuRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
            onComplete: () => {
                setIsMenuOpen(false);
            }
        });
    };

    const handleScroll = (sectionId: string): void => {
        if (isMenuOpen) {
            closeMenu();
        }

        if (sectionId) {
            lenis?.scrollTo(sectionId);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            gsap.fromTo(menuRef.current,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out"
                }
            );

            gsap.fromTo(
                [
                    featureRef.current,
                    pricingRef.current,
                    aboutRef.current,
                    blogRef.current,
                    signInRef.current,
                    getStartedRef.current
                ],
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: "power2.out"
                }
            );
        }
    }, [isMenuOpen]);

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between py-6">
                        <button onClick={() => handleScroll('#hero')} className="flex items-center gap-2 z-50">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-xl">
                                <Dumbbell className="w-6 h-6 text-white"/>
                            </div>
                            <span className="text-white font-bold text-xl">IRONFORGE</span>
                        </button>

                        <div className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur border border-white/10 absolute left-1/2 -translate-x-1/2 px-6 py-3 rounded-full">
                            <button onClick={() => handleScroll('#features')} className="text-white hover:text-customRed transition-colors">Features</button>
                            <button onClick={() => handleScroll('#pricing')} className="text-white/60 hover:text-customRed transition-colors">Pricing</button>
                            <button onClick={() => handleScroll('#about')} className="text-white/60 hover:text-customRed transition-colors">About</button>
                            <button onClick={() => handleScroll('#blog')} className="text-white/60 hover:text-customRed transition-colors">Blog</button>
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            <button className="px-4 py-2 text-white/60 hover:text-white transition-colors md:hidden lg:block">
                                Sign in
                            </button>
                            <button className="px-6 py-2 bg-white text-black rounded-xl font-medium hover:bg-white/90 transition-colors">
                                Get started
                            </button>
                        </div>

                        <button
                            className="md:hidden bg-white/5 p-2 rounded-xl z-50"
                            onClick={() => isMenuOpen ? closeMenu() : setIsMenuOpen(true)}
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-white" />
                            ) : (
                                <Menu className="w-6 h-6 text-white" />
                            )}
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div
                            ref={menuRef}
                            className="md:hidden bg-black/95 backdrop-blur-lg fixed inset-0 p-6 flex items-center"
                        >
                            <div className="flex flex-col gap-6 w-full">
                                <button
                                    ref={featureRef}
                                    onClick={() => handleScroll('#features')}
                                    className="text-white text-lg hover:text-customRed transition-colors"
                                >
                                    Features
                                </button>
                                <button
                                    ref={pricingRef}
                                    onClick={() => handleScroll('#pricing')}
                                    className="text-white/60 text-lg hover:text-customRed transition-colors"
                                >
                                    Pricing
                                </button>
                                <button
                                    ref={aboutRef}
                                    onClick={() => handleScroll('#about')}
                                    className="text-white/60 text-lg hover:text-customRed transition-colors"
                                >
                                    About
                                </button>
                                <button
                                    ref={blogRef}
                                    onClick={() => handleScroll('#blog')}
                                    className="text-white/60 text-lg hover:text-customRed transition-colors"
                                >
                                    Blog
                                </button>
                                <div className="flex flex-col gap-4 pt-6">
                                    <button
                                        ref={signInRef}
                                        className="w-full px-4 py-3 text-white/60 hover:text-white transition-colors border border-white/10 rounded-xl"
                                    >
                                        Sign in
                                    </button>
                                    <button
                                        ref={getStartedRef}
                                        className="w-full px-4 py-3 bg-white text-black rounded-xl font-medium hover:bg-white/90 transition-colors"
                                    >
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