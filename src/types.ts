import type { translations } from './utils/dictionary';

export type Post = {
    id: number;
    category_id: number;
    created_at: string;
    updated_at: string;
    img_url: string;
    title: string;
    content: string;
    category: {
        name: string;
        created_at?: string;
        updated_at?: string;
    }
}

export type PostsRequest = {
    pageCount?: number;
    itemCount: number;
}

export type FormArticle = {
    title: string;
    content: string;
    category_id: string;
    image: FileList;
};

export type BlogArticle = {
    title: string;
    content: string;
    category_id: string;
    image: string;
};

export type Link = {
    url: string | null;
    label: keyof typeof translations & "...";
    active: boolean;
};
