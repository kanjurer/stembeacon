import { IBlog } from "./interfaces/blog";

export function blogContentFirst50Characters(blog: IBlog): string {
    return blog.content.substring(7, 100);
}
