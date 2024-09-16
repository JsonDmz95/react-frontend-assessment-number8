"use client";

import React from 'react';
import styles from './Button.module.scss';

export type ButtonProps = {
	children: React.ReactNode;
	title: string;
	variant?: 'primary' | 'secondary' | 'full-width';
	icon?: string | null;
	onClick: () => void;
}

const Button: React.FC<ButtonProps>  = ({children, title, variant = 'primary', icon, onClick}) => {
	return (
		<button title={title} className={styles.button} onClick={() => onClick()}>
			{children}
		</button>
	);
};

export default Button;
