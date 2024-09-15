"use client";

import { Link, useLocation } from "react-router-dom";

import React from "react";
import styles from "./NavItem.module.scss";

export type NavItemProps = {
  href: string;
  label: string;
};

const NavItem: React.FC<NavItemProps> = ({href, label}) => {

	const location = useLocation();

	const isActive = location.pathname === href;
  
	return (
		<li className={`${styles.nav_item} ${isActive ? styles.active : ""}`}>
		  <Link to={href} title={label}>{label}</Link>
		</li>
	  );
};

export default NavItem;
