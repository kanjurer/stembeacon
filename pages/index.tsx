import type { GetStaticProps, NextPage } from "next";
import styles from "./home.module.scss";
import Head from "next/head";
import BlogLayout from "../components/BlogLayout";
import BlogPreview from "../components/BlogPreview";
import { IBlog, ICategory } from "../lib/interfaces";
import { getAllPosts } from "../lib/postUtils";
import CategoryPreview from "../components/CategoryPreview";

interface HomeProps {
    categories: ICategory[];
}

const Home: NextPage<HomeProps> = ({ categories }) => {
    return (
        <BlogLayout>
            {categories.map((category) => {
                return (
                    <CategoryPreview category={category} key={category.id} />
                );
            })}
        </BlogLayout>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const categories = [
        {
            id: "science",
            categoryName: "Science",
        },
        {
            id: "technology",
            categoryName: "Technology",
        },
        {
            id: "mathematics",
            categoryName: "Mathematics",
        },
        {
            id: "computer-science",
            categoryName: "Computer Science",
        },
    ];
    return {
        props: {
            categories,
        },
    };
};
