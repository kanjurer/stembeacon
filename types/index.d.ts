export interface IBlog {
    postId: string;
    contentHtml: string;
    content: string;
    excerpt: string;
    title: string;
    category: ICategory;
    datePublished: string;
}

export interface ICategory {
    categoryId: string;
    categoryName: string;
    categoryDescription: string;
    categoryColor: string;
    categoryImage: string;
}

export interface IAllPosts {
    [key: string]: IBlog[];
}
