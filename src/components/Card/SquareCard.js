import React from "react";
import styles from './style.css';

export const SquareCard = (props) => {
	
		return(
		<div className={styles.squareCard}>
			{props.children}
			{console.log(document.getElementsByClassName(styles.squareCard))}
		</div>
		);
}