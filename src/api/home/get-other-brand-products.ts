"use server";
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @product function
 * @description get other brand products
 */
const getOtherBrandProducts = async (slug: string, take: number, skip: number) => {
    try {
        if (slug) {
            const response = await fetch(
                `${process.env.ROOT_URL!}/api/products/list/bybrand?brand=${slug}&take=${String(take)}&skip=${String(skip)}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    method: "GET",
                    next: {
                        revalidate: 60 * 60
                    }
                }
            );

            return response.json();
        }

    } catch (error) {
        throw new Error("Error fetching products" + error);
    }
};

export default getOtherBrandProducts;