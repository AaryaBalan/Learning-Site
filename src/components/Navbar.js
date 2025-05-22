import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // or any icon library you prefer

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    // Close sidebar on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div>
            {/* Top Navbar */}
            <header className="flex justify-between items-center p-4 bg-white shadow-md">
                <h1 className="text-2xl font-bold text-orange-500">Vikram Site</h1>
                <button onClick={() => setIsOpen(prev => !prev)} className="block sm:hidden">
                    <Menu className="w-6 h-6 text-black" />
                </button>

                {/* Horizontal Nav for large screens */}
                <nav className="hidden sm:flex space-x-4">
                    <a href="#" className="text-black bg-white px-4 py-2 rounded-xl font-semibold">Home</a>
                    <a href="#" className="text-black bg-white px-4 py-2 rounded-xl font-semibold">Courses</a>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-xl">Log in</button>
                </nav>
            </header>

            {/* Sidebar Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                ref={sidebarRef}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold text-orange-500">Menu</h2>
                    <button onClick={() => setIsOpen(false)}>
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <nav className="flex flex-col p-4 space-y-4">
                    <a href="#" className="text-black font-semibold">Home</a>
                    <a href="#" className="text-black font-semibold">Courses</a>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-xl w-full">Log in</button>
                </nav>
            </div>

            {/* Overlay when sidebar is open */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-30 z-40 sm:hidden" />
            )}
        </div>
    );
};

export default Navbar;
