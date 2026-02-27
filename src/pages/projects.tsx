import { Element } from "react-scroll";
import ProjectCards from "../components/projectCards.js";
import '../css/projects.css'
import { projectList } from "../service/projects.js";

function Projects() {
    return (
        <Element name="projects-element">
            <section id="projects-section">
                <div className="projects-div">
                    <h1>Projects</h1>
                    <p>I have worked on a range of projects through both my academic studies and personal initiatives. 
                        Below are selected projects that highlight my technical skills, problem-solving approach, and key lessons learned.
                    </p>
                    <div className="row">
                        {projectList.map((project) => (
                            <div className="column" key={project.id}>
                                <ProjectCards project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Element>
    );
}

export default Projects