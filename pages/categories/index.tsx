import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { ICategory } from "../../types";
import { getAllCategories } from "../../utils";

import BlogLayout from "../../components/BlogLayout";
import CategoryPreview from "../../components/CategoryPreview";

import styles from "./categories.module.scss";

interface CategoriesProps {
    categories: ICategory[];
}

const Categories: NextPage<CategoriesProps> = ({ categories }) => {
    return (
        <>
            <Head>
                <title>STEMbeacon - Categories</title>
                <meta
                    name="STEMbeacon"
                    content="A personal blog, but not too personal."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                {categories.map((category) => {
                    return (
                        <CategoryPreview
                            category={category}
                            key={category.categoryId}
                        />
                    );
                })}
            </main>
        </>
    );
};

export default Categories;

export const getStaticProps: GetStaticProps = async () => {
    const categories = getAllCategories();
    return {
        props: {
            categories,
        },
    };
};
