import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='footer'>
            <h2>About Us</h2>
            <div className='footer-content'>
                <section>
                    <h3 className='footer-title'>History</h3>
                    <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
                </section>
                <section>
                    <h3 className='footer-title'>Vision</h3>
                    <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
                </section>
                <section>
                    <h3 className='footer-title'>Mission</h3>
                    <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
                </section>
                <section>
                    <h3 className='footer-title'>Principal's Message</h3>
                    <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
                </section>
                <section>
                    <h3 className='footer-title'>Infrastructure and Facilities</h3>
                    <ul>
                        <li>State-of-the-art science and computer labs</li>
                        <li>Spacious and well-equipped classrooms</li>
                        <li>Library with a vast collection of books and digital resources</li>
                        <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default About;
