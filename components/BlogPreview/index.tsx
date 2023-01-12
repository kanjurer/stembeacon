import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { IBlog } from "../../types";
import BlogDetailsHeader from "../BlogDetailsHeader";

import styles from "./BlogPreview.module.scss";

interface BlogPreviewProps {
    post: IBlog;
}

const BlogPreview: NextPage<BlogPreviewProps> = ({ post }) => {
    const { postId, title, category, excerpt } = post;

    return (
        <Link href={`/categories/${category.categoryId}/${postId}`}>
            <div className={styles.blogPreview}>
                <h2>{title}</h2>
                <BlogDetailsHeader post={post} />
                <p>{excerpt}</p>
            </div>
        </Link>
    );
};

export default BlogPreview;
