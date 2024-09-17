"use client";

import { Link } from "react-router-dom";
import { Logo } from "..";
import React from "react";
import { Social } from "@/models";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer_container}`}>
        <Link
          to="/"
          title="number8"
          aria-label="Home"
          className={styles.logo_container}
        >
          <Logo />
        </Link>

		<p className={styles.author}>Designed and Developed by <a href={Social.LINKEDIN} target="_blank" title="Jeeson's LinkedIn">Jeeson</a></p>
      </div>
    </footer>
  );
};

export default Footer;
