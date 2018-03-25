import React from "react";
import styles from './style.css';

export const ItemHeader = (props) => {
		return(
		<div className={styles.itemHeader}>
      <div className={styles.headerContent}>
        {props.children}
      </div>
      <div className={styles.headerControlIcon}>
        {props.collapsable ? "^" : ">"}
      </div>
		</div>
			);
}