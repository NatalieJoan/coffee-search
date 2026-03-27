export interface Cafe {
    id: string;
    name: string;
    address: string;
    image: any;
    brew_methods: BrewMethod[];
    link: string;
}

export interface BrewMethod {
    id: string;
    name: string;
    slug: string;
    icon: any;
}

export const STRAPI_URL = "http://localhost:1337";
