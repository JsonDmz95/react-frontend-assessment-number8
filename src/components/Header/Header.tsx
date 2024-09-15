"use client";

import { Logo, NavItem } from '..';

import { Link } from 'react-router-dom';
import { Nav } from '@/models';
import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC  = () => {
	return (
		<header className={styles.header} id='header'>
		  <div className={"container " + styles.header_container}>
			<Link to="/" title="number8" aria-label="Home" className={styles.logo_container}>
				<Logo />
			</Link>
	
			<nav role="navigation">
			  <ul className={styles.nav_list}>
				<NavItem href="#" label={Nav.favorites.LABEL} />
				<NavItem
				  href={Nav.allProperties.LINK}
				  label={Nav.allProperties.LABEL}
				/>
			  </ul>
			</nav>
		  </div>
		</header>
	  );
};

export default Header;
