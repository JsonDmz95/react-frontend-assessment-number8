"use client";

import CustomDialog, { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import { FavoritesTable, Logo, NavItem } from "..";

import { Link } from "react-router-dom";
import { Nav } from "@/models";
import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <CustomDialog>
        <p className="title_section">Favorites</p>
        <FavoritesTable/>
      </CustomDialog>
      <header className={styles.header} id="header">
        <div className={"container " + styles.header_container}>
          <Link
            to="/"
            title="number8"
            aria-label="Home"
            className={styles.logo_container}
          >
            <Logo />
          </Link>

          <nav role="navigation">
            <ul className={styles.nav_list}>
              <li className="nav_item">
                <a href="#" title={Nav.favorites.LABEL} onClick={handleClick}>
                  {Nav.favorites.LABEL}
                </a>
              </li>
              <NavItem
                href={Nav.allProperties.LINK}
                label={Nav.allProperties.LABEL}
              />
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
