import "../css/about.css"

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
        { id: 11, name: "SQL" }
    ];

    return (
    <section>
        <div className="about-div">
            <h1>About</h1>
            <div className="me-div">
                <h2>Who am i?</h2>
                <p>Im a 22 year old Bsc. in computer engineering who is mostly interested in embedded systems, cybersecurity and web programming.</p>
                <p>I have worked on many fun projects in university that taught me alot about programming which i have included further down.</p>
                <p>In my free time i usually try to learn new technologies, mostly applicable to embedded systems or try learning som new skills (currently reading and trying digital drawing)</p>
            </div>
            <h2>Skills</h2>
            <div className="skills-div">
                {skills.map(skill => (
                    <span className="skill" key={skill.id}>
                        {skill.name} &nbsp;
                    </span>
                ))}
            </div>
        </div>
    </section>
    );
}

export default About;