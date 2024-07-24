import React from 'react';
import './Admissions.css';

const Admissions = () => {
    return (
        <div className="admissions-container">
            <h2>Admissions</h2>
            <section className="admissions-section">
                <h3>Admission Process</h3>
                <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
            </section>
            <section className="admissions-section">
                <h3>Criteria</h3>
                <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
            </section>
            <section className="admissions-section">
                <h3>Important Dates</h3>
                <ul>
                    <li>Admission Form Availability: March 1st</li>
                    <li>Last Date for Submission: March 31st</li>
                    <li>Entrance Test: April 15th</li>
                    <li>Announcement of Results: April 30th</li>
                </ul>
            </section>
        </div>
    );
}

export default Admissions;
