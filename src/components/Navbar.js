import React from 'react'

const Navbar = () => {
    return (
        <header className="flex justify-around items-center py-6">
            <h1 className="text-2xl font-bold text-orange-500">Vikram Site</h1>
            <nav className="flex space-x-4">
                <a href="#" className="text-black bg-white px-4 py-2 rounded-xl font-semibold">Home</a>
                <a href="#" className="text-black bg-white px-4 py-2 rounded-xl font-semibold">Courses</a>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-xl">Log in</button>
            </nav>
        </header>
    )
}

export default Navbar