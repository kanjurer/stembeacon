import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

import { IBlog, ICategory } from "../../lib/interfaces";
import {
    getAllCategories,
    getAllPostsByCategoryId,
    getCategoryById,
} from "../../lib/postUtils";

import BlogLayout from "../../components/BlogLayout";
import BlogPreview from "../../components/BlogPreview";

import styles from "./category.module.scss";

interface BlogCategoryProps {
    category: ICategory;
    categoryPosts: IBlog[];
}

const BlogCategory: NextPage<BlogCategoryProps> = ({
    category: { categoryName, categoryId, categoryDescription },
    categoryPosts,
}) => {
    return (
        <>
            <Head>
                <title>{categoryName} - STEMbeacon</title>
                <meta name={categoryName} content={categoryDescription} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BlogLayout>
                <h1>{categoryName}</h1>
                <section>
                    <p>{categoryDescription}</p>
                </section>

                <section className={styles.categoryList}>
                    {categoryPosts.map((post) => {
                        return <BlogPreview post={post} key={post.postId} />;
                    })}
                </section>
            </BlogLayout>
        </>
    );
};

export default BlogCategory;

interface Params extends ParsedUrlQuery {
    categoryId: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllCategories().map(({ categoryId }) => {
        return {
            params: {
                categoryId,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<
    BlogCategoryProps,
    Params
> = async ({ params }) => {
    const categoryId = params?.categoryId ?? ""; // TO-DO
    const category: ICategory = getCategoryById(categoryId) as ICategory;
    const categoryPosts = await getAllPostsByCategoryId(categoryId);

    return {
        props: { category, categoryPosts },
    };
};
