import React from 'react';
import './Faculty.css';

const Faculty = () => {
    return (
        <div className="faculty-container">
            <h2>Faculty</h2>
            <section className="faculty-section">
                <h3>Profiles</h3>
                <ul className="faculty-list">
                    <li>John Doe: Principal, M.Ed, 20 years of experience in educational administration.</li>
                    <li>Jane Smith: Vice Principal, M.Sc. in Physics, 15 years of teaching experience.</li>
                    <li>Emily Johnson: English Teacher, M.A. in English, 10 years of teaching experience.</li>
                    <li>Michael Brown: Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.</li>
                    <li>Sophia Davis: Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.</li>
                    <li>David Wilson: Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.</li>
                </ul>
            </section>
        </div>
    );
}

export default Faculty;
