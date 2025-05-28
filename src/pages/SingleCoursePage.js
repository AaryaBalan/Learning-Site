// SingleCoursePage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CourseTimeline from '../components/CourseTimeline'
import axios from 'axios';

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
    console.log('Course ID:', id);
    const course = dummyCourse;
    const [courseData, setCourseData] = useState({});
    const [timeline, setTimeline] = useState(courseData.timeline || []);

    useEffect(() => {
        // Fetch course data from the server using the id
        const fetchCourseData = async () => {
            try {
                const courseResponse = await axios.get(`http://localhost:7000/course/${id}`);
                setCourseData(courseResponse.data);
                setTimeline(courseResponse.data.timeline || []);
            } catch (error) {
                console.error('Error fetching course data:', error);
            }
        }
        fetchCourseData();

        console.log('Fetching course data for ID:', id);
    }, [id]);

    return (
        <div>
            <Navbar />
            <div className="max-w-5xl mx-auto p-6 mt-12">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <img
                        src={`http://localhost:7000/${courseData.thumbnail}`}
                        alt={courseData.title}
                        className="w-full sm:w-1/2 rounded-xl shadow-md object-contain"
                    />
                    <div className="space-y-3">
                        <h1 className="text-3xl font-extrabold text-[#ff6900] leading-tight">
                            {courseData.title}
                        </h1>
                        <p className="text-base text-gray-700">Instructor: <span className="font-semibold">{courseData.author}</span></p>
                        <p className="text-yellow-500 font-medium">⭐ {courseData.rating} ({courseData.reviews} reviews)</p>
                        <p className="text-sm text-gray-600">Enrolled: {courseData.enrolled} learners</p>
                        <div className="text-2xl font-bold text-black">
                            $ {courseData.price}
                            <span className="line-through text-gray-400 text-lg ml-2">{courseData.originalPrice}</span>
                        </div>
                        <p className="text-gray-800 text-sm leading-relaxed">{courseData.description}</p>
                        <button className="bg-[#ff6900] text-white px-6 py-2 rounded-xl hover:bg-[#ff6900] transition duration-200 cursor-pointer">
                            Enroll Now
                        </button>
                    </div>
                </div>

                {/* course timeline */}
                <CourseTimeline timeline={timeline} />

                <div className="mt-20 flex gap-y-10 flex-col">
                    <h1 className='text-3xl font-bold bg-[#8a2cdc3b] w-fit px-3 py-2 rounded shadow text-[#892cdc]'>Comments section</h1>
                    <textarea name="" id="" className='outline-none border p-3 w-2xl h-36 mr-auto rounded-lg' placeholder={`Comments about, ${courseData.title}`}></textarea>
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
