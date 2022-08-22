import type { NextPage } from "next";
import styles from "./BlogLayout.module.scss";

import NavBar from "../NavBar";
import Footer from "../Footer";

interface BlogLayoutProps {
    children: JSX.Element[];
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
    return (
        <>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default BlogLayout;
