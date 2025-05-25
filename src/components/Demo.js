import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Demo = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        const getAllCourse = async () => {
            const c = await axios.get('http://localhost:7000/course/all')
            console.log(c.data)
            setCourses(c.data)
        }
        getAllCourse()
    }, [])

    return (
        <div>
            {
                courses.map(course => (
                    <img src={course.thumbnail} alt="" />
                ))
            }
        </div >
    )
}

export default Demo