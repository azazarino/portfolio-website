import { useState, useEffect, useRef } from "react";
import "../css/collapsible.css"

function Collapsible({ className } : { className: string }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: PointerEvent) {
      if (
        containerRef.current &&
        event.target instanceof Node &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
}, [open]);

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
            href="/assets/Resume_AzerOmar.pdf"
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