import React from 'react';
import './Academics.css';

const Academics = () => {
    return (
        <div className="academics-container">
            <h2>Academics</h2>
            <section className="academics-section">
                <h3>Curriculum</h3>
                <ul>
                    <li>Primary (Grades 1-5): English, Mathematics, Science, Social Studies, Art, Physical Education</li>
                    <li>Secondary (Grades 6-10): English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</li>
                    <li>Senior Secondary (Grades 11-12):
                        <ul>
                            <li>Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
                            <li>Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English</li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section className="academics-section">
                <h3>Teaching Methodologies</h3>
                <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
            </section>
            <section className="academics-section">
                <h3>Educational Resources</h3>
                <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
            </section>
        </div>
    );
}

export default Academics;
