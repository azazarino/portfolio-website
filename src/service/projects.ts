export interface Project {
    id: number;
    title: string;
    description: string;
    full_description?: string;
    skills: string[];
    description_summary?: string;
    lessons_learned?: string[];
}

export const projectList: Project[] = [
  {
        "id": 1,
        "title": "TSIU03, VHDL project course",
        "description": "Built an oscilloscope in VHDL that displays the left and right sound signals on a VGA screen.",
        "full_description": `This project involved building a simple oscilloscope that displays the left and right ADC values on a VGA screen.
        This required low-level hardware interfacing, clock division, ADC integration, and careful timing coordination. 
        This was done using the DE2-115 FPGA board which included the different used models for audio and a VGA screen connection.
        The project involved six people and was split up into three parts. Each team of two worked on each part, I was mostly responsibly for reading the the data and display it on the VGA screen.
        I was originally planning on using a triple buffering method to display the lines clearly but because of time constraint and complication witht the zero-crossing calculation I settled with a double buffering solution.
        I even helped the team on the other modules such as keyboard input and volume managment.`,
        "skills": ["VHDL", "Quartus software"],
        "description_summary" : "Overall the project took approxiametly a month to both plan and implement everything from start to finish.", 
        "lessons_learned": ["Time planning", "Team communication", "Modelsim simulations", "Low level VHDL programming"]
    },
    {
        "id": 2,
        "title": "Bachelor Thesis, FPGA based AES encryption",
        "description" : `Implemented and compared two AES-128 on two platforms, 
        FPGA and softcore processor. Compared speed, memory and space usage.`,
        "skills": ["VHDL", "FPGA", "Soft core processor", "AES-128"] 
    },
    {
        "id": 3,
        "title": "TDDD97, Web programming project",
        "description" : "Implemented a basic twitter clone with login system, tweets and user lookup in vanilla javascript, HTML and CSS.",
        "skills": ["Javascript", "HTML", "CSS", "SQL", "Websockets"] 
    },
    {

        "id": 4,
        "title": "LIU Formula student, AMS engineer",
        "description" : `Managed the critical safety system for an electrical formula student battery. 
        Used CAN communication to monitor multiple points in the battery to ensure safe values of temperature, voltage and current sensor for current measurements.`,
        "skills": ["CAN", "STM32", "Arduino", "Embedded programming"] 
    },
    {
        "id": 5,
        "title": "TSEA29, Microcomputer Project",
        "description" : `Worked on a robot for warehouse environment. Implemented robot hand movement and communication between different modules.
        Implemented a PD controller to better stabilize robot movement.`,
        "skills": ["UART", "SPI", "PID controllers", "Arduino", "Raspberry PI"] 
    }

];