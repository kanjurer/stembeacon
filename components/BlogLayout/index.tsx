import styles from "./BlogLayout.module.scss";

interface BlogLayoutProps {
    children: JSX.Element[] | JSX.Element;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
    return (
        <main className={styles.mainContainer}>
            <section className={styles.mainContent}>{children}</section>
            <section style={{ backgroundColor: "black" }}>whatever </section>
        </main>
    );
};

export default BlogLayout;
