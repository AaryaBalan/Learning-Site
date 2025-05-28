import React from 'react'

const TopCourse = ({ course }) => {
    return (
        <div
            className="bg-[#8a2cdc3b] border-2 border-[#892cdc] rounded-lg shadow-md p-2 w-[350px]  md:w-[400px] flex flex-col gap-y-2"
        >
            <img src={`http://localhost:7000/${course.thumbnail}`} alt={course.title} className="w-[350px] h-52 md:w-[400px] object-cover md:h-80 rounded" />
            <h2 className="text-sm font-semibold mt-2">{course.title}</h2>
            <p className="text-xs text-gray-600">{course.author}</p>
            <div className="flex items-center text-sm mt-1">
                <span className="text-[red] font-semibold">⭐ {course.rating}</span>
            </div>
            <p className="text-sm mt-1 text-gray-500 max-w-[500px]">{course.description && course.description.slice(0, 200)}</p>
            <div className="text-sm font-bold mt-1">
                <span>$ {course.price}</span>
                <span className="line-through text-gray-500 ml-2">{course.original}</span>
            </div>
        </div>
    )
}

export default TopCourse