import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { ICategory } from "../../types";
import styles from "./CategoryPreview.module.scss";

interface CategoryPreviewProps {
    category: ICategory;
}

const CategoryPreview: NextPage<CategoryPreviewProps> = ({ category }) => {
    return (
        <Link href={`/categories/${category.categoryId}`}>
            <div
                className={styles.categoryPreview}
                style={{
                    backgroundImage: `url("/images/blog-categories/${category.categoryImage}")`,
                }}
            >
                <h1>{category.categoryName}</h1>
                <div className={styles.categoryOverlay}>
                    <p>{category.categoryDescription}</p>
                </div>
            </div>
        </Link>
    );
};

export default CategoryPreview;
