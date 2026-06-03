import React from "react";
import styles from "./CareerInfoTile.module.css";
function CareerInfoTile({ headingColor, data }) {  // For Gray Heading :-  headingColor={1}
  
  return (
    <div className={styles.box}>
      {data.map(([title, description], index) => (
        <div className={styles.data} key={index}>
          <div>
            <span className={headingColor ? styles.headingColor : ""}>
              {title}
            </span>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CareerInfoTile;
