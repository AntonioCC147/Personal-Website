import React, { useState, useEffect, useMemo } from 'react';

import './home.css';

const TextEffect = ({ language }) => {
    const textsRO = useMemo(() => [
        "Student la Automatică și Calculatoare",
        "Îmi place Informatica și Programarea",
        "Mentor la Informatică și Matematică"
    ], []);

    const textsUK = useMemo(() => [
        "Student at Automatic Control and Computer Science",
        "I like Informatics and Programming",
        "Mentor at Informatics and Mathematics"
    ], []);

    const [currentTextIndexRO, setCurrentTextIndexRO] = useState(0);
    const [currentTextIndexUK, setCurrentTextIndexUK] = useState(0);

    const [currentTextRO, setCurrentTextRO] = useState(textsRO[0]);
    const [currentTextUK, setCurrentTextUK] = useState(textsUK[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndexRO((prevIndex) => (prevIndex + 1) % textsRO.length);
            setCurrentTextIndexUK((prevIndex) => (prevIndex + 1) % textsUK.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [textsRO, textsUK]);

    useEffect(() => {
        setCurrentTextRO(textsRO[currentTextIndexRO]);
    }, [textsRO, currentTextIndexRO]);

    useEffect(() => {
        setCurrentTextUK(textsUK[currentTextIndexUK]);
    }, [textsUK, currentTextIndexUK]);

    return (
        <div className="textEffect">
            {language === "RO" && (<p>{currentTextRO}</p>)}
            {language === "UK" && (<p>{currentTextUK}</p>)}
        </div>
    );
};

export default TextEffect;