import React from 'react'

const CourseTimeline = ({ timeline }) => {
    console.log("Timeline Data:", timeline)
    return (
        <div className="mt-12">
            <h2 className="text-2xl font-semibold text-[#ff6900] mb-6 border-b pb-2">Course Timeline</h2>
            <div className="space-y-6 relative ml-4 border-l-4 border-orange-400 pl-6">
                {timeline.map((item, index) => (
                    <div key={index} className="relative">
                        <div className="absolute -left-[36px] top-1.5 w-5 h-5 bg-[#ff6900] rounded-full border-4 border-white"></div>
                        <div className="bg-[#ff6a0041] p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200">
                            <p className="text-sm text-[#ff6900] font-medium uppercase tracking-wide">{`Timeline ${index+1}`}</p>
                            <h3 className="text-base font-semibold text-gray-900 mt-1">{item}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CourseTimeline