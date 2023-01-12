import Link from "next/link";
import { IBlog, ICategory } from "../../types";

import styles from "./BlogDetailsHeader.module.scss";

interface CategoryTagProps {
    category: ICategory;
}

interface DateTagProps {
    post: IBlog;
}

interface BlogDetailsHeaderProps {
    post: IBlog;
}

const CategoryTag = ({
    category: { categoryName, categoryColor, categoryId },
}: CategoryTagProps) => {
    return (
        <Link href={`/categories/${categoryId}`}>
            <span
                className={styles.categoryTag}
                style={{ backgroundColor: categoryColor }}
            >
                {categoryName}
            </span>
        </Link>
    );
};

const DateTag = ({ post }: DateTagProps) => {
    return <span className={styles.dateTag}>{post.datePublished}</span>;
};
const BlogDetailsHeader = ({ post }: BlogDetailsHeaderProps) => {
    return (
        <>
            <CategoryTag category={post.category} />
            <DateTag post={post} />
        </>
    );
};

export default BlogDetailsHeader;
