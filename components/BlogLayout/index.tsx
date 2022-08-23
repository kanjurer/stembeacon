import type { GetStaticProps, NextPage } from "next";
import styles from "./BlogLayout.module.scss";

import NavBar from "../NavBar";
import Footer from "../Footer";

import { IBlog } from "../../lib/interfaces/blog";
import { getAllPosts } from "../../lib/posts";

interface BlogLayoutProps {
    children: JSX.Element[];
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
    return (
        <main className={styles.mainContainer}>
            <section className={styles.mainContent}>{children}</section>
        </main>
    );
};

export default BlogLayout;
