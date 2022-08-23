import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import BlogLayout from "../../components/BlogLayout";
import { IBlog, ICategory } from "../../lib/interfaces";
import {
    getAllCategories,
    getAllPostsByCategoryId,
    getCategoryById,
} from "../../lib/postUtils";
import { ParsedUrlQuery } from "querystring";
import BlogPreview from "../../components/BlogPreview";

interface BlogCategoryProps {
    category: ICategory;
    categoryPosts: IBlog[];
}

const BlogCategory: NextPage<BlogCategoryProps> = ({
    category,
    categoryPosts,
}) => {
    return (
        <BlogLayout>
            <h1>{category?.categoryName}</h1>
            <section>
                <p>{category?.categoryDescription}</p>
            </section>

            <section>
                {categoryPosts.map((blog) => {
                    return <BlogPreview blog={blog} key={blog.id} />;
                })}
            </section>
        </BlogLayout>
    );
};

export default BlogCategory;

interface Params extends ParsedUrlQuery {
    category: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllCategories().map((e) => {
        return {
            params: {
                category: e.id,
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
    const categoryId = params?.category ?? "";
    const category: ICategory = getCategoryById(categoryId) as ICategory;
    const categoryPosts = await getAllPostsByCategoryId(categoryId);

    return {
        props: { category, categoryPosts },
    };
};