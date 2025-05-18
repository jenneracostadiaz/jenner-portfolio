import { getCldImageUrl } from 'astro-cloudinary/helpers';
import { v2 as cloudinary } from 'cloudinary';
import type { CloudinaryResource, GalleryImage } from '../types/portfolio';

// Configure Cloudinary
cloudinary.config({
    cloud_name: import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: import.meta.env.PUBLIC_CLOUDINARY_API_KEY,
    api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

/**
 * Extracts alt text from a Cloudinary public ID
 */
export const extractAltFromPublicId: (publicId: string) => string = (publicId: string) => {
    const baseName = publicId.split('/').pop()?.split('.')[0] ?? '';
    return baseName
        .replace(/[-_]/g, ' ')
        .replace(
            /\w\S*/g,
            (word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
};

/**
 * Retrieves gallery images from Cloudinary
 */
export const getGalleryImages: (galleryPrefix: string) => Promise<GalleryImage[]> = async (
    galleryPrefix: string
) => {
    try {
        const result = await cloudinary.api.resources({
            type: 'upload',
            prefix: galleryPrefix + '/',
            max_results: 500,
            context: true,
            metadata: true,
        });

        return result.resources.map((resource: CloudinaryResource) => {
            const altText: string = extractAltFromPublicId(resource.public_id);
            const imageUrl: string = getCldImageUrl({ src: resource.public_id });

            return {
                public_id: resource.public_id,
                imageUrl: imageUrl,
                alt: altText,
                width: resource.width,
                height: resource.height,
                format: resource.format,
            };
        });
    } catch (error) {
        console.error('Error fetching gallery images:', error);
        return [];
    }
};
