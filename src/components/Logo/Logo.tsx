"use client";

import React from "react";
import styles from "./Logo.module.scss";

const Logo: React.FC = () => {
  return (
    <>
      <span className={styles.logo}>
        <span className="hide_mobile">number</span>8
      </span>
    </>
  );
};

export default Logo;
