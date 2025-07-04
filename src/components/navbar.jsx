import { TbSunMoon } from "react-icons/tb";
import "../css/navbar.css"
import { scroller } from "react-scroll";

function Navbar() {

    const handleScroll = (target) => {
        scroller.scrollTo(target, {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -60,
        });
    };

    return (
        <div className="navbar">
            <div className="navbar-links">
                <button id="name" onClick={() => handleScroll('home-element')}>Azer Omar</button>
                <button onClick={() => handleScroll('about-element')}>About</button> &nbsp;&nbsp;&nbsp;
                <button onClick={() => handleScroll('projects-element')}>Projects</button> &nbsp;&nbsp;&nbsp;
                <button onClick={() => handleScroll('contact-element')}>Contact Me</button>
            </div>
            <div className="navbar-options">
                <button><TbSunMoon /></button>
            </div>
        </div>
    );
}

export default Navbar