import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { ICategory } from "../lib/interfaces";
import { getAllCategories } from "../lib/postUtils";

import BlogLayout from "../components/BlogLayout";
import CategoryPreview from "../components/CategoryPreview";

import styles from "./home.module.scss";

interface HomeProps {
    categories: ICategory[];
}

const Home: NextPage<HomeProps> = ({ categories }) => {
    return (
        <>
            <Head>
                <title>STEMbeacon - Home</title>
                <meta
                    name="STEMbeacon"
                    content="A personal blog, but not too personal."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <BlogLayout>
                {categories.map((category) => {
                    return (
                        <CategoryPreview
                            category={category}
                            key={category.categoryId}
                        />
                    );
                })}
            </BlogLayout>
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const categories = getAllCategories();
    return {
        props: {
            categories,
        },
    };
};
