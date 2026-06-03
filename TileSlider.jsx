import React from 'react';
import styles from './TileSlider.module.css';
import { boxData } from './boxData';

const AutoSlider = () => {
  const duplicatedData = [...boxData, ...boxData];

  const boxes = duplicatedData.map((box, index) => (
    <div
      key={`${box.id}-${index}`} // Ensure unique key using id + index
      className={styles.box}
      style={{ backgroundImage: `url(${box.image})` }}
    >
      <div className={styles.overlay}>
        <span className={styles.label}>{box.name}</span>
      </div>
    </div>
  ));

  return (
    <div className={styles.Container}>
      <h1>Top Study Places for BE/B.Tech</h1>
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderTrack}>
          {boxes}
        </div>
      </div>
    </div>
  );
};

export default AutoSlider;
