import React from "react";
import { SquareCard } from '../Card/SquareCard';
import styles from './style.css';

export const ItemContent = (props) => {

		return(
		<div className={styles.itemContent}>
			{props.children.map(x => <SquareCard>{x.name[0]}</SquareCard>)}
		</div>
			);
}