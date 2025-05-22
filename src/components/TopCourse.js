import React from 'react'

const TopCourse = ({ course }) => {
    return (
        <div
            className="bg-[#8a2cdc3b] border-2 border-[#892cdc] rounded-lg shadow-md p-2  md:w-[300px] flex flex-col gap-y-2"
        >
            <img src={course.image} alt={course.title} className=" md:w-[300px] rounded" />
            <h2 className="text-sm font-semibold mt-2">{course.title}</h2>
            <p className="text-xs text-gray-600">{course.author}</p>
            <div className="flex items-center text-sm mt-1">
                <span className="text-[red] font-semibold">⭐ {course.rating}</span>
            </div>
            <div className="text-sm font-bold mt-1">
                <span>{course.price}</span>
                <span className="line-through text-gray-500 ml-2">{course.original}</span>
            </div>
        </div>
    )
}

export default TopCourse