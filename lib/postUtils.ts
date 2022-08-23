import path from "path";
import fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import html from "remark-html";
import { remark } from "remark";

import categoryList from "./categories.json";
import { IBlog, ICategory } from "./interfaces";

const POST_DIRECTORY = "blogPosts";
const { categories } = categoryList;

export async function getPostData(id: string): Promise<IBlog> {
    const fullPath = path.join(POST_DIRECTORY, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents, { excerpt: getBlogExcerpt });
    const { content, data, excerpt } = matterResult;
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    // TO-DO
    return {
        id,
        contentHtml,
        content,
        excerpt,
        ...data,
    };
}

export function getAllPostIds(): Array<string> {
    const fileNames = fs.readdirSync(POST_DIRECTORY);
    return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
}

export async function getAllPosts(): Promise<IBlog[]> {
    return Promise.all(getAllPostIds().map((id) => getPostData(id)));
}

export async function getAllPostsByCategoryId(id: string): Promise<IBlog[]> {
    const allPosts = await getAllPosts();

    return allPosts.filter((post) => post.categoryId === id);
}

export function getCategoryById(id: string) {
    return categories.find((c: ICategory) => c.id === id) ?? null;
}

export function getAllCategories() {
    return categories;
}

function getBlogExcerpt(file: any, options: any): string {
    return file.content.split("\n").slice(0, 4).join(" ");
}
