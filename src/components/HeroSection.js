import React from 'react'
// import { button } from "/components/ui/button";

const HeroSection = () => {
    return (
        // Hero Section
        <div className="bg-[#892CDC] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col-reverse md:flex-row items-center py-16">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-4xl font-bold mb-4">
                            Power up your <span className="text-yellow-400">academic</span> <br />
                            journey with <span className="text-yellow-400">Vikram Site</span>
                        </h2>

                        <div className="flex flex-col sm:flex-row mt-10 bg-orange-500 rounded-xl text-black font-semibold text-center">
                            <div className="flex-1 py-4 border-b sm:border-b-0 sm:border-r border-white">
                                <p>learners</p>
                                <p className="text-xl">7M+</p>
                            </div>
                            <div className="flex-1 py-4 border-b sm:border-b-0 sm:border-r border-white">
                                <p>courses</p>
                                <p className="text-xl">4K+</p>
                            </div>
                            <div className="flex-1 py-4">
                                <p>live classes conducted</p>
                                <p className="text-xl">2K+</p>
                            </div>
                        </div>


                        <p className="mt-6 text-sm text-white/90">
                            Join 150,000+ solo business owners who use Podia to run their website, online store, and email marketing
                        </p>
                        <button className="mt-4 bg-white text-purple-800 font-semibold px-6 py-2 rounded-full">Get Started</button>
                    </div>

                    <div className="md:w-1/2 flex justify-center relative">
                        <img
                            src="https://i.ibb.co/tqkQ6KP/student.png"
                            alt="Student"
                            className="w-72 rounded-lg"
                        />
                        <div className="absolute top-4 left-4 bg-yellow-300 text-black px-3 py-1 rounded-full text-sm font-bold">
                            Interactive live lessons
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 py-10">
                    <div className="flex flex-col bg-white text-black p-4 rounded-xl shadow-md">
                        <img
                            src="https://i.ibb.co/Zdxn7Gj/python-card.png"
                            alt="Python Course"
                            className="rounded-md mb-4 h-52"
                        />
                        <h3 className="font-bold text-lg">Intro to Courses</h3>
                        <p className="text-sm mt-2">Get started and learn beginner free video tutorials.</p>
                    </div>

                    <div className="flex flex-col bg-white text-black p-4 rounded-xl shadow-md">
                        <img
                            src="https://i.ibb.co/tZ1rKw0/java-card.png"
                            alt="Java Course"
                            className="rounded-md mb-4 h-52"
                        />
                        <h3 className="font-bold text-lg">Intermediate Guides</h3>
                        <p className="text-sm mt-2">Boost your knowledge with intermediate-level tutorials.</p>
                    </div>

                    <div className="flex flex-col bg-white text-black p-4 rounded-xl shadow-md">
                        <img
                            src="https://i.ibb.co/zr2y7FC/dsa-card.png"
                            alt="DSA Course"
                            className="rounded-md mb-4 h-52"
                        />
                        <h3 className="font-bold text-lg">Advanced Mastery</h3>
                        <p className="text-sm mt-2">Master advanced techniques and become an expert.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection