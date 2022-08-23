import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { IBlog } from "../../lib/interfaces";

import styles from "./BlogPreview.module.scss";

interface BlogPreviewProps {
    blog: IBlog;
}

const BlogPreview: NextPage<BlogPreviewProps> = ({ blog }) => {
    return (
        <Link href={`/${blog.categoryId}/${blog.id}`}>
            <div className={styles.blogPreview}>
                <h2>{blog.title}</h2>
                <p>{blog.excerpt}</p>
            </div>
        </Link>
    );
};

export default BlogPreview;
