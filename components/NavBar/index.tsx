import type { NextPage } from "next";
import styles from "./NavBar.module.scss";

const NavBar: NextPage = () => {
    return <nav className={styles.nav}>This is the nav.</nav>;
};

export default NavBar;
