import React, { useState, useEffect } from 'react';
import kalam from './images/personal/StepUp_kalam_2k24.jpg';
import bb from './images/personal/ballbadminton1.jpg';
import hd from './images/projects/handwriten.jpeg';
import n from './images/projects/nlp.jpeg';

export default function ImageSlider() {
    const [currentInd, setCurrentInd] = useState(0);

    const slides = [
        {url: kalam, des: 'Kalam, A Mega Cultural Event Team'},
        {url: bb, des: 'Ball Badminton Team, SIET (2023 - 2024)'},
        {url: hd, des: 'this is the description 3'},
        {url: n, des: 'this is the description 4'},
    ];

    useEffect(() => {
        const intervalId = setInterval(goToNext, 3000); // Change slide every 1 second

        return () => clearInterval(intervalId);
    }, [currentInd]); // Depend on currentInd to reset the interval on every change

    const slideStyle = {
        width: "100%",
        height: "100%",
        backgroundColor: "purple",
        backgroundImage: `url(${slides[currentInd].url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const containerStyle = {
        position: "relative",
        height: "100%",
    };

    const goToPrevious = () => {
        const isFirstSlide = currentInd === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentInd - 1;
        setCurrentInd(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentInd === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentInd + 1;
        setCurrentInd(newIndex);
    };

    const descriptionStyle = {
        position: "absolute",
        top: "70%",
        width: "100%",
        textAlign: "center",
        color: "blueviolet",
        fontSize: "30px",
    };

    return (
        <div style={containerStyle}>
            <div style={slideStyle}>
                <div style={{left: "30px", color: "blueviolet", position: "absolute", top: "50%", fontSize: "55px", cursor: "pointer"}} onClick={goToPrevious}>&lt;</div>
                <div style={{right: "30px", color: "blueviolet", position: "absolute", top: "50%", fontSize: "55px", cursor: "pointer"}} onClick={goToNext}>&gt;</div>
            </div>
            <div style={descriptionStyle}>
                {slides[currentInd].des}
            </div>
        </div>
    );
}
