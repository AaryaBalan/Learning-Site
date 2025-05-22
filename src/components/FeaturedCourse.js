import React from 'react'

const FeaturedCourse = () => {
    return (
        <div className="mt-10 p-4 rounded-md bg-[#ff6a0041] shadow border-2 border-[#ff6900]">
            <h3 className="font-bold text-lg mb-1">Featured course</h3>
            <p className="text-[#ff6900] text-sm mb-4">
                Many learners enjoyed this highly rated course for its engaging content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
                <img
                    src="https://i.ytimg.com/vi/i_LwzRVP7bg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBjAF6NN3UZ2KoYVXmI2y_6AsDHaw"
                    alt="Angular Course"
                    className="w-40 rounded"
                />
                <div>
                    <h4 className="text-md font-semibold">
                        Modern Angular with Signals - The missing guide
                    </h4>
                    <p className="text-sm text-[#ff6900]">
                        Learn how to code in Angular 18 using the new feature: "Signals". Use the new best
                        practices while avoiding the pitfalls.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCourse