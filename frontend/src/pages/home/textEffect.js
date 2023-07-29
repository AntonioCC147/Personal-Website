import React, { useState, useEffect, useMemo } from 'react';

import './home.css';

const TextEffect = () => {
    const texts = useMemo(() => [
        "Student la Automatică și Calculatoare",
        "Îmi place Informatica și Programarea",
        "Mentor la Informatică și Matematică"
    ], []);

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState(texts[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [texts]);

    useEffect(() => {
        setCurrentText(texts[currentTextIndex]);
    }, [texts, currentTextIndex]);

    return (
        <div className="textEffect">
            <p>
                {currentText}
            </p>
        </div>
    );
};

export default TextEffect;