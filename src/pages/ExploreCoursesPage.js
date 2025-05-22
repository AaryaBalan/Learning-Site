import React from "react";
import TopCourse from "../components/TopCourse";
import FeaturedCourse from "../components/FeaturedCourse";
import SimpleCourse from "../components/SimpleCourse";

const courses = [
    {
        title: "Javascript for Beginners",
        author: "Asymmetric, Muneeb Kazi",
        rating: 4.5,
        price: "₹549",
        original: "₹3,049",
        image: "https://i.ytimg.com/vi/i_LwzRVP7bg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBjAF6NN3UZ2KoYVXmI2y_6AsDHaw"
    },
    {
        title: "Become a Certified Web Developer: HTML, CSS, and JavaScript",
        author: "Asymmetric, Muneeb Kazi",
        rating: 4.5,
        price: "₹549",
        original: "₹3,049",
        image: "https://i.ytimg.com/vi/i_LwzRVP7bg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBjAF6NN3UZ2KoYVXmI2y_6AsDHaw"
    },
    {
        title: "AJAX Development",
        author: "Asymmetric, Muneeb Kazi",
        rating: 4.6,
        price: "₹749",
        original: "₹2,049",
        image: "https://i.ytimg.com/vi/i_LwzRVP7bg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBjAF6NN3UZ2KoYVXmI2y_6AsDHaw"
    },
    {
        title: "The Complete 2020 Fullstack Web Developer Course",
        author: "Asymmetric",
        rating: 4.5,
        price: "₹649",
        original: "₹3,000",
        image: "https://i.ytimg.com/vi/i_LwzRVP7bg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBjAF6NN3UZ2KoYVXmI2y_6AsDHaw"
    }
];

const ExploreCoursesPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-[#892cdc]">Web Development Courses</h1>
            <p className="mt-2 text-gray-600">Courses To Get You Started</p>
            <p className="text-sm text-gray-500">Explore Courses From Experienced, Real-World Experts.</p>

            {/* top rated courses */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                {courses.map((course, i) => (
                    <TopCourse key={i} course={course} />
                ))}
            </div>


            {/* Featured Course */}
            <FeaturedCourse />

            {/* All Courses */}
            <h2 className="text-xl font-bold mt-10 mb-4">All Web Development courses</h2>
            <div className="space-y-6">
                {[...courses, ...courses].map((course, i) => (
                    <SimpleCourse key={i} course={course}/>
                ))}
            </div>
        </div>
    );
};

export default ExploreCoursesPage;
