import { useState } from "react";
import "../css/collapsible.css"

function Collapsible({ className }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div className="collapsible-container">
      <button className={className} onClick={toggle}>
        Contact Me
      </button>

      {open && (
        <div className="dropdown">
          <a
            href="mailto:azeromar2002@gmail.com"
            className="dropdown-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Me
          </a>

          <a
            href="/resume.pdf" // TODO <- fix this
            className="dropdown-btn"
            download
          >
            Download Resume
          </a>
        </div>
      )}
    </div>
  );
}

export default Collapsible;