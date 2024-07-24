import React from 'react';
import './Students.css';

const Students = () => {
    return (
        <div className="students-container">
            <h2>Students</h2>
            <section className="students-section">
                <h3>Life at Springdale</h3>
                <p>Extracurricular Activities: Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</p>
                <p>Clubs and Societies: Literary Society, Environmental Club, Astronomy Club, Coding Club</p>
            </section>
            <section className="students-section">
                <h3>Achievements</h3>
                <ul>
                    <li>John Smith - National Level Math Olympiad Winner</li>
                    <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
                    <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
                </ul>
            </section>
            <section className="students-section">
                <h3>Student Council</h3>
                <ul>
                    <li>President: Amy Parker, Grade 12</li>
                    <li>Vice President: Rajiv Mehta, Grade 11</li>
                    <li>Secretary: Lisa Wong, Grade 10</li>
                </ul>
            </section>
        </div>
    );
}

export default Students;
