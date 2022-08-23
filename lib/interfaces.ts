export interface IBlog {
    id: string;
    contentHtml: string;
    content: string;
    excerpt?: string;
    title?: string;
    slug?: string;
    categoryId: string;
    datePublished?: Date;
}

export interface ICategory {
    id: string;
    categoryName: string;
    categoryDescription: string;
}
