import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import styles from "./home.module.scss";
import Head from "next/head";
import BlogLayout from "../../components/BlogLayout";
import BlogPreview from "../../components/BlogPreview";
import { IBlog } from "../../lib/interfaces/blog";
import { getAllPosts } from "../../lib/posts";

interface HomeProps {
    posts: IBlog[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
    return (
        <BlogLayout>
            {posts.map((blog) => {
                return <BlogPreview blog={blog} key={blog.id} />;
            })}
        </BlogLayout>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    // Fetch necessary data for the blog post using params.id
    const posts = await getAllPosts();
    return {
        // Passed to the page component as props
        props: {
            posts,
        },
    };
};
