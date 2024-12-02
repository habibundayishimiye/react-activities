import React, { useState } from 'react';

function StudentForm() {
    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [course, setCourse] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Student Registered:\nName: ${name}\nID: ${studentId}\nCourse: ${course}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Student ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
            />
            <button type="submit">Register Student</button>
        </form>
    );
}

export default StudentForm;
