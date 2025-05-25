import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaBirthdayCake } from 'react-icons/fa';
import axios from 'axios'

const Signup = () => {

    const [userDetails, setUserDetails] = useState({})
    const handleUserInput = (e) => {
        const { name, value } = e.target
        setUserDetails(prevDetails => ({
            ...prevDetails,
            [name]: value 
        }))
    }
    console.log(userDetails)

    async function postUser(e) {
        e.preventDefault()
        try {
            const sendUser = await axios.post('http://localhost:7000/user/addUser', {
                ...userDetails
            })
        }catch(err){
            console.log(err)
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ff6900] to-[#892cdc] p-4 animate-fade-in">
            <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md space-y-6 relative animate-slide-up">
                <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ff6900] to-[#892cdc] tracking-wider">Join Us</h2>
                <p className="text-center text-sm text-gray-500">Start your journey with us</p>

                <form className="space-y-5" onSubmit={postUser}>
                    <div className="relative">
                        <FaUser className="absolute top-3 left-4 text-[#ff6900]" />
                        <input
                            onChange={handleUserInput}
                            name='name'
                            type="text"
                            placeholder="Full Name"
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#892cdc] shadow-sm transition duration-300"
                        />
                    </div>
                    <div className="relative">
                        <FaEnvelope className="absolute top-3 left-4 text-[#892cdc]" />
                        <input
                            onChange={handleUserInput}
                            name='email'
                            type="email"
                            placeholder="Email"
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6900] shadow-sm transition duration-300"
                        />
                    </div>
                    <div className="relative">
                        <FaLock className="absolute top-3 left-4 text-[#ff6900]" />
                        <input
                            onChange={handleUserInput}
                            name='password'
                            type="password"
                            placeholder="Password"
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#892cdc] shadow-sm transition duration-300"
                        />
                    </div>
                    <div className="relative">
                        <FaBirthdayCake className="absolute top-3 left-4 text-[#892cdc]" />
                        <input
                            onChange={handleUserInput}
                            name='age'
                            type="number"
                            placeholder="Age"
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6900] shadow-sm transition duration-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#ff6900] to-[#892cdc] text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-sm text-center text-gray-600">
                    Already have an account? <a href="/login" className="text-[#ff6900] font-bold hover:underline">Log in</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;