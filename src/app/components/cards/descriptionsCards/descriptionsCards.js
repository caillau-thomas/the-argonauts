// components/DescriptionsCards.js
import React from 'react';
import styles from './descriptionsCards.module.css';

const LongCards = ({ title, description, style }) => {
  return (
    <div className={styles.card} style={style}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default LongCards;
