import reactDOM from "react-dom"
import "../css/projectModal.css"

function ProjectModal({ open, children, onClose }) {
    if (!open) return null

    return reactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
                <h1>hello world</h1>
            </div>
        </div>
        , document.getElementById("project-portal"))
}

export default ProjectModal