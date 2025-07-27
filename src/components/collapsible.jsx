import { useState, useEffect, useRef } from "react";
import "../css/collapsible.css"

function Collapsible({ className }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

 const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="collapsible-container" ref={containerRef}>
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
            azeromar2002@gmail.com
          </a>

          <a
            href="/assets/resume.pdf"
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