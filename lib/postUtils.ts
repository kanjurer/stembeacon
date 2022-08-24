import path from "path";
import fs from "fs";
import matter from "gray-matter";
import html from "remark-html";
import { remark } from "remark";

import categoryList from "./categories.json";
import { IAllPosts, IBlog, ICategory } from "./interfaces";

const POST_DIRECTORY = "blogPosts";
const { categories } = categoryList;

export async function getPostData(
    postId: string,
    categoryId: string
): Promise<IBlog> {
    const fullPath = path.join(POST_DIRECTORY, categoryId, postId + ".md");
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const {
        content,
        data: { datePublished, title },
    } = matter(fileContents);

    const excerpt = getBlogExcerpt(content);
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();
    const category = getCategoryById(categoryId);

    // TO-DO
    return {
        postId,
        category: category as ICategory,
        contentHtml,
        content,
        excerpt,
        datePublished,
        title,
    };
}

export async function getAllPosts(): Promise<IAllPosts> {
    const categoryIds = getAllCategoryIds();
    let obj: IAllPosts = {};

    for (const { categoryId } of categories) {
        obj[categoryId] = await getAllPostsByCategoryId(categoryId);
    }

    return obj;
}

export async function getAllPostsByCategoryId(
    categoryId: string
): Promise<IBlog[]> {
    const fullPath = path.join(POST_DIRECTORY, categoryId);
    const postNames = fs.readdirSync(fullPath);

    return Promise.all(
        postNames.map((postId) =>
            getPostData(postId.replace(/\.md$/, ""), categoryId)
        )
    );
}

export function getCategoryById(categoryId: string) {
    return categories.find((category) => category.categoryId === categoryId);
}

export function getAllCategories() {
    //const categoryIds = fs.readdirSync(POST_DIRECTORY); TO-DO

    return categories;
}

export function getAllCategoryIds() {
    return getAllCategories().map((category) => category.categoryId);
}

function getBlogExcerpt(fileContent: string): string {
    return fileContent.split("\n").slice(1, 2).join(" ");
}
