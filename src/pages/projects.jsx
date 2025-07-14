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
                    <p>I have worked on many fun and exciting project both in my free time and in university. Here I include the most important projects and what they taught me.
                        Feel free to click on a project to get more information about it! 
                    </p>
                    {projectList.map((project) => (
                        <ProjectCards key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </Element>
    );
}

export default Projects