import React from 'react';
import styles from "./buttons.module.css";
import Image from "next/image";

const ButtonsEnlist = () => {
  return (
    <div className={styles.bEnlist}>
      <a
        className={styles.primary}
        href="/pages/componentsOverview"
        rel="noopener noreferrer"
      >
        NOUS REJOINDRE
      </a>
    </div>
  );
};

export default ButtonsEnlist;
