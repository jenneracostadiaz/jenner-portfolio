export interface Frontmatter {
    title: string;
    role: string;
    description: string;
    company: string;
    tech: string[];
    imageCover: string;
    gallery: string;
    category: string;
    date: string;
    duration: string;
    demoLink?: string;
    gitHub?: string;
    deepWiki?: string;
}

export interface GalleryImage {
    public_id: string;
    imageUrl: string;
    alt: string;
    width: number;
    height: number;
    format: string;
}

export interface CloudinaryResource {
    context?: {
        custom?: {
            alt?: string;
            caption?: string;
        };
    };
    metadata?: {
        alt?: string;
    };
    public_id: string;
    width: number;
    height: number;
    format: string;
}
