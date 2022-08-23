import { IBlog } from "./interfaces/blog";

export function blogContentFirst50Characters(blog: IBlog): string {
    return blog.contentHtml.substring(7, 100);
}
