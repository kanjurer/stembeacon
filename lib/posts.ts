import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { IBlog } from "./interfaces/blog";

const POST_DIRECTORY = "blogPosts";

export async function getPostData(id: string): Promise<IBlog> {
    const fullPath = path.join(POST_DIRECTORY, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}

export function getAllPostIds(): Array<{ params: { id: string } }> {
    const fileNames = fs.readdirSync(POST_DIRECTORY);
    /*
    Returns an array that looks like this:
    [
      {
        params: {
          id: 'ssg-ssr'
        }
      },
      {
        params: {
          id: 'pre-rendering'
        }
      }
    ]
    */
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        };
    });
}

export async function getAllPosts(): Promise<IBlog[]> {
    return Promise.all(
        getAllPostIds().map(async ({ params }) => {
            const p = await getPostData(params.id);

            return p;
        })
    );
}
