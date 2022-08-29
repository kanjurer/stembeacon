import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

import { IAllPosts, IBlog } from "../../lib/interfaces";
import { getAllPosts, getPostData } from "../../lib/postUtils";
import BlogLayout from "../../components/BlogLayout";
import BlogDetailsHeader from "../../components/BlogDetailsHeader";

interface BlogPostProps {
    post: IBlog;
}

const BlogPost: NextPage<BlogPostProps> = ({ post }) => {
    const { title, content, postId, contentHtml } = post;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={title} content={content} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BlogLayout>
                <h2>{title}</h2>
                <BlogDetailsHeader post={post} />
                <article
                    dangerouslySetInnerHTML={{
                        __html: `${contentHtml}`,
                    }}
                />
            </BlogLayout>
        </>
    );
};

export default BlogPost;

interface Params extends ParsedUrlQuery {
    postId: string;
    categoryId: string;
}

type ParsedPaths = {
    params: {
        postId: string;
        categoryId: string;
    };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const posts: IAllPosts = await getAllPosts();
    const parsedPaths: ParsedPaths[] = [];

    for (const categoryId in posts) {
        posts[categoryId].forEach(({ postId }) => {
            parsedPaths.push({
                params: {
                    postId,
                    categoryId,
                },
            });
        });
    }

    return {
        paths: parsedPaths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<BlogPostProps, Params> = async ({
    params,
}) => {
    const post = await getPostData(
        params?.postId ?? "", // TO-DO
        params?.categoryId ?? "" // TO-DO
    );

    return {
        // Passed to the page component as props
        props: {
            post,
        },
    };
};
