import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BlogPost {
    title: string;
    content: string;
    publishDate: string;
    slug: string;
    readTime: bigint;
    excerpt: string;
    category: string;
}
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
}
export interface Product {
    amazonUrl: string;
    features: Array<string>;
    isBestChoice: boolean;
    cons: Array<string>;
    name: string;
    pros: Array<string>;
    description: string;
    imageUrl: string;
    category: string;
    rating: bigint;
    price: string;
}
export interface backendInterface {
    addBlogPost(post: BlogPost): Promise<void>;
    addProduct(product: Product): Promise<void>;
    getAllBlogPosts(): Promise<Array<BlogPost>>;
    getAllProducts(): Promise<Array<Product>>;
    getBestChoiceProducts(): Promise<Array<Product>>;
    getBlogPostBySlug(slug: string): Promise<BlogPost>;
    getProductsByCategory(category: string): Promise<Array<Product>>;
    submitContactForm(submission: ContactSubmission): Promise<void>;
}
