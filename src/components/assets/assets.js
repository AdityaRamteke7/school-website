import logo from "../assets/SchoolImg.jpg"
import sport1 from "../assets/sportFootball.jpg"
import sport2 from "../assets/sportSwmming.jpg"
import sport3 from "../assets/sportTennis.jpg"
import sport4 from "../assets/sportVolleyBall.jpg"
import lab from "../assets/Lab.jpg"
import dance from "../assets/schooldance.jpg"
import fest from "../assets/schoolFest.jpg"
import school from "../assets/school.jpg"
import classroom from "../assets/classroom.jpg"

export const assets = {
    logo,
}


export const carouselData = [
    {
        src: sport4,
        alt: 'Annual Sports Day',
        title: 'Annual Sports Day',
        caption: 'Celebrating Excellence in Sports'
    },
    {
        src: lab,
        alt: 'Science Exhibition',
        title: 'Science Exhibition',
        caption: 'Showcasing Student Innovations'
    },
    {
        src: dance,
        alt: 'Cultural Fest',
        title: 'Cultural Fest',
        caption: 'Embracing Diversity and Creativity'
    }
];



export const sports = {
    sport1,
    sport2,
    sport3,
    sport4,
}


export const images = [
    { src: sport3, alt: 'Sports Day', category: 'sports' },
    { src: lab, alt: 'Science Exhibition', category: 'science' },
    { src: fest, alt: 'Cultural Fest', category: 'cultural' },
    { src: classroom, alt: 'Classroom', category: 'infrastructure' },
    { src: school, alt: 'Library', category: 'infrastructure' },
];