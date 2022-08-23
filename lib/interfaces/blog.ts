export interface IBlog {
    contentHtml: string;
    id: string;
    title?: string;
    slug?: string;
    category?: string;
    datePublished?: Date;
}

export interface ICategory {
    id: string;
    categoryName: string;
}
