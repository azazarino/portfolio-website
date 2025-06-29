import { TbSunMoon } from "react-icons/tb";
import "../css/navbar.css"

function Navbar() {


    return (
        <div className="navbar">
            <div className="navbar-links">
                <button id="name">Azer Omar</button>
                <button>About</button> &nbsp;&nbsp;&nbsp;
                <button>Projects</button> &nbsp;&nbsp;&nbsp;
                <button>Contact Me</button>
            </div>
            <div className="navbar-options">
                <button><TbSunMoon /></button>
            </div>
        </div>
    );
}

export default Navbar