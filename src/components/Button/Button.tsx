"use client";

import React from 'react';
import styles from './Button.module.scss';

export type ButtonProps = {
	children: React.ReactNode;
	title: string;
	variant?: 'primary' | 'secondary' | 'full-width';
	onClick: () => void;
}

const Button: React.FC<ButtonProps>  = ({children, title, variant = 'primary', onClick}) => {
	return (
		<button title={title} className={`${styles.button} ${variant === 'secondary' ? styles.secondary : ''}`} onClick={() => onClick()}>
			{children}
		</button>
	);
};

export default Button;
