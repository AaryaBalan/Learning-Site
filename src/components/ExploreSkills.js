import React from 'react'

const ExploreSkills = () => {
    return (
        // {/* Skills Section */ }`
        <div className='flex item-center justify-center bg-gray-100'>
            < section className="px-6 py-8 max-w-7xl" >
                <h2 className="text-xl font-semibold mb-2">All the skills you need in one place</h2>
                <p className="mb-6 text-sm text-gray-600">
                    From Critical Skills To Technical Topics, Vikram Site Supports Your Professional Development.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Full-Stack Engineer", "Front-End Engineer", "Back-End Engineer", "Learn PHP", "Learn HTML", "Learn CSS", "Learn JavaScript", "Learn React"].map((title, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md p-4 rounded-md hover:shadow-lg transition-all"
                        >
                            <h3 className="font-semibold text-orange-600 mb-2">{title}</h3>
                            <p className="text-sm text-gray-700 mb-3">Description about {title.toLowerCase()}.</p>
                            <button className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600 cursor-pointer">
                                Explore
                            </button>
                        </div>
                    ))}
                </div>
            </section >
        </div >
    )
}

export default ExploreSkills