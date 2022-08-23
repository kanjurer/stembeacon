import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { ICategory } from "../../lib/interfaces/blog";
import styles from "./CategoryPreview.module.scss";

interface CategoryPreviewProps {
    category: ICategory;
}

const CategoryPreview: NextPage<CategoryPreviewProps> = ({ category }) => {
    return (
        <Link href={`/categories/${category.id}`}>
            <div className={styles.categoryPreview}>
                <h2>{category.categoryName}</h2>
            </div>
        </Link>
    );
};

export default CategoryPreview;
