// SingleCoursePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CourseTimeline from '../components/CourseTimeline'

const dummyCourse = {
    id: 'course-1',
    title: 'The Complete JavaScript Course 2024',
    author: 'Jonas Schmedtmann',
    rating: 4.8,
    reviews: 215480,
    enrolled: '68.5k',
    price: '₹649',
    originalPrice: '₹3,999',
    image: 'https://i.ytimg.com/vi/i_LwzRVP7bg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBjAF6NN3UZ2KoYVXmI2y_6AsDHaw',
    description:
        'Master JavaScript with hands-on projects and practical applications. This course is designed for beginners and intermediate developers looking to level up their skills.',
    content: [
        { week: 'Week 1', topic: 'JavaScript Basics & Setup' },
        { week: 'Week 2', topic: 'DOM Manipulation & Events' },
        { week: 'Week 3', topic: 'ES6+ and Async JavaScript' },
        { week: 'Week 4', topic: 'Projects & Real-world Applications' },
    ],
    comments: [
        { user: 'Aarya', comment: 'Great course! Very clear explanations.' },
        { user: 'Adithya', comment: 'Loved the projects and hands-on tasks!' },
    ],
};

const SingleCoursePage = () => {
    const { id } = useParams();
    const course = dummyCourse;

    return (
        <div>
            <Navbar />
            <div className="max-w-5xl mx-auto p-6 mt-12">
                <div className="flex flex-col sm:flex-row gap-6">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full sm:w-1/2 rounded-xl shadow-md object-contain"
                    />
                    <div className="space-y-3">
                        <h1 className="text-3xl font-extrabold text-[#ff6900] leading-tight">
                            {course.title}
                        </h1>
                        <p className="text-base text-gray-700">Instructor: <span className="font-semibold">{course.author}</span></p>
                        <p className="text-yellow-500 font-medium">⭐ {course.rating} ({course.reviews.toLocaleString()} reviews)</p>
                        <p className="text-sm text-gray-600">Enrolled: {course.enrolled} learners</p>
                        <div className="text-2xl font-bold text-black">
                            {course.price}{' '}
                            <span className="line-through text-gray-400 text-lg ml-2">{course.originalPrice}</span>
                        </div>
                        <p className="text-gray-800 text-sm leading-relaxed">{course.description}</p>
                        <button className="bg-[#ff6900] text-white px-6 py-2 rounded-xl hover:bg-[#ff6900] transition duration-200 cursor-pointer">
                            Enroll Now
                        </button>
                    </div>
                </div>

                {/* course timeline */}
                <CourseTimeline course={course}/>

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-[#ff6900] mb-4 border-b pb-2">Student Reviews</h2>
                    <div className="space-y-4">
                        {course.comments.map((comment, i) => (
                            <div
                                key={i}
                                className="bg-white p-4 shadow rounded-xl border border-gray-100 hover:shadow-md transition duration-200"
                            >
                                <p className="font-semibold text-gray-900">{comment.user}</p>
                                <p className="text-sm text-gray-700 mt-1">{comment.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCoursePage;
