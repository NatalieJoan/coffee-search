import { STRAPI_URL } from "@/app/api/interface";
export const getCafes = async (
    page: number,
    searchTerm: string,
    pageSize: number = 9
) => {
    const populateQuery = "populate[0]=image&populate[1]=brew_methods&populate[2]=brew_methods.icon";
    const searchFilter = searchTerm ? `&filters[name][$containsi]=${searchTerm}` : "";
    const response = await fetch(
        `${STRAPI_URL}/api/cafes?${populateQuery}&pagination[page]=${page}&pagination[pageSize]=${pageSize}${searchFilter}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch cafes");
    }

    return response.json();
};
