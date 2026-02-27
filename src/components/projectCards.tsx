import "../css/projectCards.css"
import ProjectModal from "./projectModal.tsx"
import { useState } from "react"
import type {Project} from "../service/projects.ts"

function ProjectCards({ project} : { project: Project }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
                <div className="project-card" onClick={() => setIsOpen(true)}>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="skills">
                        <h4>technologies used: </h4>
                        <ul>
                            {project.skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            {/* {isOpen && (
                <ProjectModal open={isOpen} onClose={() => setIsOpen(false)}>
                    <button className="close-btn" onClick={() => setIsOpen(false)}>
                        &times;
                    </button>
                    <h1>{project.title}</h1>
                    <p className="fullDescription">{project.full_description}</p>
                    <br />
                    <br />
                    <h4>lessons learned:</h4>
                </ProjectModal>
            )} */}
        </>
    )
}

export default ProjectCards