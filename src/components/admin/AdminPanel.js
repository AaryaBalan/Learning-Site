// AdminPanel.jsx
import React, { useState } from 'react';
import { Trash2, Plus } from 'lucide-react';
import axios from 'axios'

const AdminPanel = () => {
    const [courseDetails, setCourseDetails] = useState({});
    const [timeline, setTimeline] = useState(['']);
    console.log(courseDetails)

    const handleTimelineChange = (index, value) => {
        const updatedTimeline = [...timeline];
        updatedTimeline[index] = value;
        setTimeline(updatedTimeline);
        setCourseDetails(prevDetails => ({
            ...prevDetails,
            timeline: updatedTimeline
        }));
    };

    const addTimelineField = () => {
        setTimeline([...timeline, '']);
    };

    const removeTimelineField = (index) => {
        if (index) {
            const updatedTimeline = [...timeline];
            updatedTimeline.splice(index, 1);
            setTimeline(updatedTimeline);
            setCourseDetails(prevDetails => ({
                ...prevDetails,
                timeline: updatedTimeline
            }));
        }
    };

    const handleCourseDetails = (e) => {
        const { name, value, files } = e.target;
        const fieldValue = files ? files[0] : value;
        setCourseDetails(prevDetails => ({
            ...prevDetails,
            [name]: fieldValue,
            timeline
        }));
    };


    async function postCourse(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('title', courseDetails.title);
        formData.append('author', courseDetails.author);
        formData.append('description', courseDetails.description);
        formData.append('category', courseDetails.category);
        formData.append('thumbnail', courseDetails.thumbnail); // File object
        formData.append('video', courseDetails.video); // File object
        formData.append('timeline', JSON.stringify(courseDetails.timeline)); // Convert timeline array to string
        console.log('formData', formData)
        try {
            console.log('course', courseDetails)
            const course = await axios.post('http://localhost:7000/course/addCourse', formData)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#ff6900] to-[#892cdc] p-10">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-10 space-y-10 animate-fade-in">
                <h2 className="text-4xl font-bold text-center text-[#892cdc] tracking-wide">Post New Course</h2>
                <form className="space-y-6" onSubmit={postCourse}>
                    <input onChange={handleCourseDetails} name="title" type="text" placeholder="Course Title" className="w-full p-4 border border-gray-300 rounded-xl outline-[#892cdc] shadow" />
                    <input onChange={handleCourseDetails} name="author" type="text" placeholder="Author Name" className="w-full p-4 border border-gray-300 rounded-xl outline-[#892cdc] shadow" />

                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">Upload Thumbnail</label>
                        <input onChange={handleCourseDetails} name="thumbnail" type="file" accept="image/*" className="w-full p-3 border border-gray-300 rounded-xl outline-[#892cdc] shadow bg-white" />
                    </div>

                    <textarea onChange={handleCourseDetails} name="description" placeholder="Course Description" className="w-full p-4 border border-gray-300 rounded-xl h-28 outline-[#892cdc] shadow"></textarea>

                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">Upload Course Video</label>
                        <input onChange={handleCourseDetails} name="video" type="file" accept="video/*" className="w-full p-3 border border-gray-300 rounded-xl outline-[#892cdc] shadow bg-white" />
                    </div>

                    <div className="flex gap-x-4 items- justify-between">
                        <input onChange={handleCourseDetails} name="category" type="text" placeholder="Category" className="w-full p-4 border border-gray-300 rounded-xl outline-[#892cdc] shadow" />

                        <select name="courseType" onChange={handleCourseDetails} className="w-full p-4 border border-gray-300 rounded-xl outline-[#892cdc] shadow">
                            <option value="top">Top</option>
                            <option value="featured">Featured</option>
                            <option value="basic">Basic</option>
                        </select>
                    </div>
                    <input onChange={handleCourseDetails} name="price" type="number" placeholder="Price in rupees" className="w-full p-4 border border-gray-300 rounded-xl outline-[#892cdc] shadow" required/>
                    <div>
                        <h3 className="text-2xl font-semibold text-[#ff6900] mb-4">Course Timeline</h3>
                        {timeline.map((item, index) => (
                            <div key={index} className="flex items-center space-x-3 mb-4">
                                <input
                                    type="text"
                                    placeholder={`Timeline Step ${index + 1}`}
                                    value={item}
                                    onChange={(e) => handleTimelineChange(index, e.target.value)}
                                    className="flex-grow p-3 border border-gray-300 rounded-xl outline-[#892cdc] shadow"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => removeTimelineField(index)}
                                    className={`p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition ${index ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                                    aria-label="Delete Step"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addTimelineField}
                            className="flex items-center space-x-2 bg-[#892cdc] text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition shadow-lg"
                        >
                            <Plus size={18} /> <span>Add New Timeline Step</span>
                        </button>
                    </div>

                    <button type="submit" className="w-full bg-[#ff6900] text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition shadow-xl">
                        Post Course
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminPanel;
