import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

import { IBlog } from "../../lib/interfaces";
import { getAllPosts, getPostData } from "../../lib/postUtils";
import BlogLayout from "../../components/BlogLayout";

interface BlogPostProps {
    postData: IBlog;
}

const BlogPost: NextPage<BlogPostProps> = ({ postData }) => {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
                <meta name={postData.title} content={postData.content} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BlogLayout>
                <article
                    dangerouslySetInnerHTML={{
                        __html: `<h2>${postData.id}</h2>${postData.contentHtml}`,
                    }}
                />
            </BlogLayout>
        </>
    );
};

export default BlogPost;

interface Params extends ParsedUrlQuery {
    id: string;
    category: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const posts = await getAllPosts();
    const parsedPaths = posts.map((p) => {
        return {
            params: {
                id: p.id,
                category: p.categoryId,
            },
        };
    });

    return {
        paths: parsedPaths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<BlogPostProps, Params> = async ({
    params,
}) => {
    const postData = await getPostData(params?.id ?? ""); // TO-DO
    return {
        // Passed to the page component as props
        props: {
            postData,
        },
    };
};
