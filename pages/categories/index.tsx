import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import BlogLayout from "../../components/BlogLayout";
import CategoryPreview from "../../components/CategoryPreview";
import { ICategory } from "../../lib/interfaces/blog";
import styles from "./categories.module.scss";

interface CategoriesProps {
    categories: ICategory[];
}

const Categories: NextPage<CategoriesProps> = ({ categories }) => {
    return (
        <>
            <BlogLayout>
                {categories.map((category) => {
                    return (
                        <CategoryPreview
                            category={category}
                            key={category.id}
                        />
                    );
                })}
            </BlogLayout>
        </>
    );
};

export default Categories;

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
