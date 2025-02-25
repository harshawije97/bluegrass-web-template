"use server";
import getProducts from "@/api/products/get-products";
import { getFilteredProducts } from "@/api/products/get-products-by-cat-brand";
import getProductsByIDsAsync from "@/api/products/get-products-by-ids";

const getProductsAction = async (take: number, skip: number) => {
    const response = await getProducts(String(take), String(skip));
    if (response.status === 200) {
        return response.data;
    }

    throw new Error("Error fetching products");
};

/**
 * Get all products with filter
 */
export const getFilteredProductsAction = async ({ category, brand, take, skip }: { category: string, brand: string, take: number, skip: number }) => {
    console.log(category, brand);
    try {
        const response = await getFilteredProducts(category, take, skip, brand);
        if (response.status === 200) {
            return response.data;
        }

        throw new Error("Error fetching products" + response.status);
    } catch (error) {
        throw new Error("Error fetching products" + error);
    }
};

/**
 * Get products relevant to category ID & brand ID
 */
export const getProductsByCategoryIDAndBrandID = async ({ categoryID, brandID }: { categoryID: string, brandID: string }) => {
    try {

        const response = await getProductsByIDsAsync({ params: { categoryId: categoryID, brandId: brandID, limit: 4 } });
        if (response.status === 200) {
            return response.data;
        }

        throw new Error("Error fetching products" + response)

    } catch (error) {
        throw new Error("Error fetching products" + error);
    }
};

export default getProductsAction;