"use client";

import React from 'react';
import styles from './InfoBite.module.scss';

export type InfoBiteProps = {
	qty: number;
	stat: string;
}

const InfoBite: React.FC<InfoBiteProps>  = ({qty, stat}) => {
	return (
		<div className={styles.infobite}>
 			<span className={styles.qty}>{qty}</span>
			<span className={styles.stat}>{stat}</span>
 		</div>
	);
};

export default InfoBite;
