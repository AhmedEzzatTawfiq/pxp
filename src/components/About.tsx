import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';

const About = () => {
    return (
        <section className="border-y-[2px] py-16">
            <div className=" px-4 text-center">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Welcome to Expert Coders, where we empower learners to master programming through high-quality courses taught by experienced instructors. Our mission is to provide accessible, engaging, and practical learning experiences that help you achieve your career goals.
                </p>
                <div className="flex justify-center items-center gap-6">
                    <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
                        <FaLaptopCode className="text-blue-600 text-4xl mb-4" />
                        <h2 className="text-2xl font-semibold">Expert Instructors</h2>
                        <p className="text-gray-600 mt-2">
                            Learn from industry-leading professionals with years of experience.
                        </p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
                        <FaLaptopCode className="text-blue-600 text-4xl mb-4" />
                        <h2 className="text-2xl font-semibold">Certification</h2>
                        <p className="text-gray-600 mt-2">
                            Receive certificates upon course completion to showcase your skills.
                        </p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg">
                        <FaLaptopCode className="text-blue-600 text-4xl mb-4" />
                        <h2 className="text-2xl font-semibold">Hands-On Learning</h2>
                        <p className="text-gray-600 mt-2">
                            Gain practical experience through real-world projects and examples.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
