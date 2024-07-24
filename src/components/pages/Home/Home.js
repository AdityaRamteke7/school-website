import React, { useState, useEffect } from 'react';
import './Home.css';
import { carouselData } from '../../assets/assets';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = carouselData.length;


    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + length) % length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [currentIndex, length]);

    return (
        <>
            <div className='home'>
                <div className='header'>
                    <h1>Springdale Public School</h1>
                    <p>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
                </div>
            </div>
            <section className="slider">
                <button className="arrow left-arrow" onClick={prevSlide}>&#10094;</button>
                <button className="arrow right-arrow" onClick={nextSlide}>&#10095;</button>
                {carouselData.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        {index === currentIndex && (
                            <>
                                <img src={slide.src} alt={slide.alt} className="image" />
                                <div className="caption">
                                    <h3>{slide.title}</h3>
                                    <p>{slide.caption}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </section>
            <div className='home-footer'>
                <section>
                    <h3 >History</h3>
                    <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
                </section>
                <section>
                    <h3 >Vision</h3>
                    <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
                </section>
                <section>
                    <h3 >Mission</h3>
                    <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
                </section>
                <section>
                    <h3 >Principal's Message</h3>
                    <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
                </section>
                <section>
                    <h3 >Infrastructure and Facilities</h3>
                    <ul>
                        <li>State-of-the-art science and computer labs</li>
                        <li>Spacious and well-equipped classrooms</li>
                        <li>Library with a vast collection of books and digital resources</li>
                        <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
                    </ul>
                </section>
            </div>
        </>
    );
}

export default Home;
