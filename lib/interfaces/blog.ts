export interface IBlog {
    contentHtml: string;
    id: string;
    title?: string;
    slug?: string;
    categoryId?: string;
    datePublished?: Date;
    content: string;
}

export interface ICategory {
    id: string;
    categoryName: string;
    categoryDescription: string;
}
