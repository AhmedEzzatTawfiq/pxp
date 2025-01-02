import React from 'react';
import { FaLinkedin, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Connect with Us</h2>
                <div className="flex justify-center items-center space-x-6 mb-4">
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-500 text-2xl"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://wa.me/your-number"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-green-500 text-2xl"
                    >
                        <FaWhatsapp />
                    </a>
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-700 text-2xl"
                    >
                        <FaFacebook />
                    </a>
                </div>
                <p className="text-gray-400">
                    © {new Date().getFullYear()} PXP Academy. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
