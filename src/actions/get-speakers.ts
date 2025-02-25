"use server";

import { getFilteredProducts } from "@/api/products/get-products-by-cat-brand";

const getSpeakers = async (category: string, take: number, skip: number) => {
    const response = await getFilteredProducts(category, take, skip);

    if (response.status === 200) {
        return response.data;
    }

    throw new Error("Error fetching products" + response);
};

export default getSpeakers;