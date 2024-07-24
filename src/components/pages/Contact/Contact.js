import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <section className="contact-section">
                <h3>Address</h3>
                <p>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
            </section>
            <section className="contact-section">
                <h3>Contact Numbers</h3>
                <p>+1 (123) 456-7890</p>
            </section>
            <section className="contact-section">
                <h3>Email</h3>
                <p>info@springdale.edu</p>
            </section>
            <section className="contact-section">
                <h3>Contact Form</h3>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={form.name} onChange={handleChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={form.email} onChange={handleChange} />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" value={form.message} onChange={handleChange} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </section>
            <section className="contact-section">
                <h3>Location</h3>
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.49138373716!2d-74.0059413!3d40.7127837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQyJzQ2LjAiTiA3NMKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1621379442205!5m2!1sen!2sus"
                    loading="lazy"
                >  </iframe>
            </section>
        </div>
    );
}

export default Contact;
