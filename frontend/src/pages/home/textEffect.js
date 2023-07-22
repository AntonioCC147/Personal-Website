import React, { useState, useEffect, useMemo } from 'react';
import './home.css';

const TextEffect = () => {
    const texts = useMemo(() => [
        "Student la Automatică și Calculatoare",
        "Îmi place Informatica și Programarea",
        "Mentor la Informatică și Matematică"
    ], []); // The second argument, the dependency array, is an empty array since 'texts' doesn't depend on any other variables.

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
    }, [texts, currentTextIndex]); // Add 'texts' as a dependency since it's used inside this effect.

    return (
        <div className="textEffect">
            <p>
                {currentText}
            </p>
        </div>
    );
};

export default TextEffect;