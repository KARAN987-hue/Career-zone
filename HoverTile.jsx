import React from "react";
import styles from "./HoverTile.module.css";
import { useFormContext } from "./FormContext.jsx";

function TileBox({ items, onClick, label }) {
  if (!items || items.length === 0) return null;
  const { setShowForm } = useFormContext();

  const [title, ...listItems] = items;

  return (
    <div className={styles.box}>
      <h1>{title}</h1>
      <ul>
        {listItems.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              onClick(`${label}/${item}`); // /medical/aiims-pg
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <button className={styles.BottomButton} onClick={()=> setShowForm(true)} >VIEW MORE COURSES</button>
    </div>
  );
}

export function HoverTile({ label, boxes = [], style, onClick }) {
  return (
    <div className={styles.container} style={{ ...style }}>
      {boxes.map((box, index) => (
        <TileBox key={index} items={box} onClick={onClick} label={label} />
      ))}
    </div>
  );
}
