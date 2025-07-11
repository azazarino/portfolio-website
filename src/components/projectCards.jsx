import "../css/projectCards.css"

function ProjectCards({ project }) {
    return (
        <div className="project-card">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="skills">
                <h4>technologies: </h4>
                <p>{project.skills}</p>
            </div>
        </div>
    )
}

export default ProjectCards