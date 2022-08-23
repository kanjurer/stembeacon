import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.scss";

const NavBar: NextPage = () => {
    return (
        <nav className={styles.nav}>
            <Image src="/vercel.svg" width={100} height={20} />
            <ul className={styles.navList}>
                <li>
                    <Link href="/home">Home</Link>
                </li>
                <li>
                    <Link href="/categories">Categories</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
