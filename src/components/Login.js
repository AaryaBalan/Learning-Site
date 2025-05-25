import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ff6900] to-[#892cdc] p-4 animate-fade-in">
            <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md space-y-6 relative animate-slide-up">
                <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ff6900] to-[#892cdc] tracking-wider">Welcome Back</h2>
                <p className="text-center text-sm text-gray-500">Login to access your personalized dashboard</p>

                <form className="space-y-5">
                    <div className="relative">
                        <FaUser className="absolute top-3 left-4 text-[#ff6900]" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#892cdc] shadow-sm transition duration-300"
                        />
                    </div>
                    <div className="relative">
                        <FaLock className="absolute top-3 left-4 text-[#892cdc]" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6900] shadow-sm transition duration-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#ff6900] to-[#892cdc] text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Log In
                    </button>
                </form>

                <p className="text-sm text-center text-gray-600">
                    Don’t have an account? <a href="/signup" className="text-[#892cdc] font-bold hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;