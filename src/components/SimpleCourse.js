import React from 'react'

const SimpleCourse = ({ course }) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 border-b border-[#80808073] pb-4 ">
            <img
                src={`http://localhost:7000/${course.thumbnail}`}
                alt={course.title}
                className="w-[350px] object-cover h-52 rounded"
            />
            <div>
                <h3 className="text-lg font-bold text-[#892cdc]">{course.title}</h3>
                <p className="text-sm text-[#ff6900]">{course.author}</p>
                <div className="flex items-center text-sm mt-1">
                    <span className="text-yellow-500 font-semibold">⭐ {course.rating}</span>
                    <span className="ml-2 text-gray-500">(1,234)</span>
                </div>
                <p className="text-xs mt-1 text-gray-500">All Levels</p>
                <div className="text-md font-bold mt-2">
                    <span>{course.price}</span>
                    <span className="line-through text-gray-500 ml-2">{course.original}</span>
                </div>
            </div>
        </div>
    )
}

export default SimpleCourse