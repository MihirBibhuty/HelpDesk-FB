"use client"

import React from "react";

import styles from "./item.module.scss";

const Item = ({
  item: { customer, type, intro },
  selected,
  onSelect,
}) => {
  return (
    <div className={styles.item} onClick={() => onSelect(customer.id)}>
      <div className={styles.head}>
        <div className={styles.check}>
          <input
            type={"checkbox"}
            onChange={() => onSelect(customer.id)}
            checked={selected}
          />
        </div>
        <div className={styles.title}>
          <div>
            {customer.name}
          </div>
          <small>Facebook {type}</small>
        </div>
        <div className={styles.time}>10min</div>
      </div>
      <div className={styles.intro}>
        <div className={styles.heading}>{intro?.title}</div>
        <div className={styles.message}>{intro?.message}</div>
      </div>
    </div>
  );
};

export default Item;