import "../css/about.css"
import { Element } from "react-scroll";

function About() {

    const skills = [
        { id: 1, name: "JavaScript" },
        { id: 2, name: "React" },
        { id: 3, name: "HTML" },
        { id: 4, name: "CSS" },
        { id: 5, name: "C" },
        { id: 6, name: "C++" },
        { id: 7, name: "Python" },
        { id: 8, name: "MATLAB" },
        { id: 9, name: "Embedded C" },
        { id: 10, name: "VHDL" },
        { id: 11, name: "SQL" },
        { id: 12, name: "Linux" },
        { id: 13, name: "Git" },
        { id: 14, name: "GitHub" }
    ];

    return (
        <Element name="about-element">
            <section id="about-section">
                <div className="about-div">
                    <h1>About</h1>
                    <div className="me-div">
                        <h2>Who am i?</h2>
                        <p>I am a 23-year-old Master’s student in Computer Science, specializing in Artificial Intelligence and Machine Learning, with strong interests in embedded systems, cybersecurity, and web development.</p>
                        <p>Through my university studies, I have worked on a variety of projects that strengthened my programming skills and deepened my understanding of software development.
                            A selection of these projects is presented below.</p>
                        <p>Outside of my academic work, I actively explore new technologies, particularly those related to embedded systems and continuously develop new skills.</p>
                    </div>
                    <div className="skills-div">
                        <h2>Skills</h2>
                        <ul className="skills-list">
                            {skills.map(skill => (
                                <li key={skill.id} className="skill-item">{skill.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="education-div">
                        <h2>Education</h2>
                        <p>Msc. Computer Science aug. 2025 - present</p>
                        <p>Bsc. Computer Engineering aug. 2022 - jun. 2025</p>
                    </div>
                </div>
            </section>
        </Element>
    );
}

export default About;