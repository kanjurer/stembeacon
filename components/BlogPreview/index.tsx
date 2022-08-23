import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogContentFirst50Characters } from "../../lib/blogUtils";
import { IBlog } from "../../lib/interfaces/blog";
import styles from "./BlogPreview.module.scss";

interface BlogPreviewProps {
    blog: IBlog;
}

const BlogPreview: NextPage<BlogPreviewProps> = ({ blog }) => {
    return (
        <Link href={`/posts/${blog.id}`}>
            <div className={styles.blogPreview}>
                <h2>{blog.title}</h2>
                <p>{blogContentFirst50Characters(blog)}</p>
            </div>
        </Link>
    );
};

export default BlogPreview;
