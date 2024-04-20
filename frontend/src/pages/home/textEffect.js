import { ReactTyped } from "react-typed";

import './home.css';

const TextEffect = ({ language }) => {
    return (
        <div className="textEffect">
            {language === "RO" && 
                <ReactTyped
                strings={[
                    "Sunt student la Automatică și Calculatoare",
                    "Sunt pasionat de informatică și tehnologie",
                    "Sunt mentor la informatică, matematică și tehnologii web",
                ]}
                typeSpeed={100}
                backSpeed={50}
                loop
            />
            }
            {language === "UK" && 
                <ReactTyped
                strings={[
                    "I am a student of Automation and Computers",
                    "I am passionate about informatics and technology",
                    "I am a mentor in computer science, mathematics and web technologies",
                ]}
                typeSpeed={100}
                backSpeed={50}
                loop
            />
            }
        </div>
    );
};

export default TextEffect;