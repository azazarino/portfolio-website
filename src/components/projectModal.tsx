import reactDOM from "react-dom"
import type { ReactNode } from "react";
import "../css/projectModal.css"

type propmodalProps = {
    open: boolean;
    children: ReactNode;
    onClose: () => void;
}

function ProjectModal({ open, children, onClose } : propmodalProps) {
    if (!open) return null

    const portalroot = document.getElementById("project-portal");
    if (!portalroot) return null;

    return reactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
        ,portalroot
    );
}

export default ProjectModal