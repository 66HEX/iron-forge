import React from 'react';
import { Twitter, Instagram, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
    const links = {
        product: ['Features', 'Pricing', 'Integration', 'API', 'Documentation'],
        company: ['About', 'Blog', 'Careers', 'Press Kit', 'Partners'],
        resources: ['Community', 'Contact', 'Support', 'Terms', 'Privacy'],
        social: [
            { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
            { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
            { icon: <Youtube className="w-5 h-5" />, label: 'YouTube' },
            { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' }
        ]
    };

    return (
        <footer className="bg-black border-t border-white/10">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        <div className="col-span-2 md:col-span-1">
                            <div className="text-2xl font-bold text-white mb-6">IRONFORGE</div>
                            <p className="text-white/60 mb-6">Empowering athletes through technology and data-driven training.</p>
                            <div className="flex gap-4">
                                {links.social.map((item, index) => (
                                    <a key={index} href="#" className="text-white/60 hover:text-white transition-colors">
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">Product</h3>
                            <ul className="space-y-3">
                                {links.product.map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-white/60 hover:text-white transition-colors">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">Company</h3>
                            <ul className="space-y-3">
                                {links.company.map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-white/60 hover:text-white transition-colors">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4">Resources</h3>
                            <ul className="space-y-3">
                                {links.resources.map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-white/60 hover:text-white transition-colors">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/10 mt-12 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="text-white/60">
                                © 2024 IRONFORGE. All rights reserved.
                            </div>
                            <div className="flex gap-6">
                                <a href="#" className="text-white/60 hover:text-white transition-colors">Terms</a>
                                <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy</a>
                                <a href="#" className="text-white/60 hover:text-white transition-colors">Cookies</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;