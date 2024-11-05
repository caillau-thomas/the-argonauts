'use client'; // Ajoutez cette ligne pour faire de ce composant un Client Component

import React from 'react';
import styles from './scrolldown.module.css';

const ScrollDown = ({ targetId }) => {
    const scrollToSection = () => {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.scrollDown} onClick={scrollToSection}>
            <p>Scroll Down</p>
            <div className={styles.arrow}></div>
        </div>
    );
};

export default ScrollDown;


