import React from 'react'
import ExploreSkills from '../components/ExploreSkills'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <div className="font-sans">
            {/* Navbar */}
            <Navbar />
            {/* Hero Section */}
            <HeroSection />
            {/* Explore Skills Section */}
            <ExploreSkills />
            {/* Newsletter */}
            <section className="bg-gray-100 py-8 px-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Join Our newsletter to keep up to date with us!</h3>
                <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                    <input
                        type="email"
                        placeholder="Enter Your email"
                        className="px-4 py-2 rounded border border-gray-300 w-full max-w-md"
                    />
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                        Join Us
                    </button>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>

    )
}

export default HomePage