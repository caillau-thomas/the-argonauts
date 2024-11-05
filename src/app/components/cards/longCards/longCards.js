import React from 'react';
import styles from './longCards.module.css';

const LongCards = ({ title, description, style }) => {
  return (
    <div className={styles.card} style={style}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default LongCards;
