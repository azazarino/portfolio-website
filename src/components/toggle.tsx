// src/components/Toggle.jsx
import { TbSunMoon } from "react-icons/tb";
import { useTheme } from "../context/ThemeContext.tsx";

function Toggle() {
    const {isDarkMode, toggleTheme} = useTheme();

    return (
        <div className="toggle-container" onClick={toggleTheme} style={{ cursor: "pointer" }}>
            <TbSunMoon size={24} color={isDarkMode ? "#f5f5f5" : "#121212"} />
        </div>
    );
}

export default Toggle;
