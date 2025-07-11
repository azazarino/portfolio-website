import { Element } from "react-scroll";
import ProjectCards from "../components/projectCards";
import '../css/projects.css'
import { projectList } from "../service/projects";

function Projects() {
    return (
        <Element name="projects-element">
            <section id="projects-section">
                <div className="projects-div">
                    <h1>Projects</h1>
                    {projectList.map((project) => (
                        <ProjectCards project={project} />
                    ))}
                </div>
            </section>
        </Element>
    );
}

export default Projects