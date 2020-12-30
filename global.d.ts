/* /// <reference types="node" /> */

// Extend the NodeJS namespace with Next.js-defined properties
declare namespace NodeJS {
    interface Process {
        readonly browser: boolean;
    }

    interface ProcessEnv {
        NEXT_PUBLIC_API_URL: string;
        NEXT_PUBLIC_CLOUDINARY_NAME: string;
        NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET: string;
        NEXT_PUBLIC_CLOUDINARY_KEY: string;
        CLOUDINARY_SECRET: string;
        VERCEL_ANALYTICS_ID: string;
    }
}
declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any;
    }
}
