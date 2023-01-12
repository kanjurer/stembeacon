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
                    <Link href="/">
                        {/* <Image
                            src="/icons/home-svgrepo-com.svg"
                            width={50}
                            height={30}
                        /> */}
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/categories">
                        {/* <Image
                            src="/icons/home-svgrepo-com.svg"
                            width={50}
                            height={30}
                        /> */}
                        Categories
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        {/*
                        <Image
                            src="/icons/about-faq-help-svgrepo-com.svg"
                            width={50}
                            height={30}
                        />
                    */}
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
