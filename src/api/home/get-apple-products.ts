"use server";
/**
 * Get Apple products
 */
const getAppleProducts = async (slug: string | null, take: number, skip: number) => {
    try {
        if (slug) {
            const response = await fetch(
                `${process.env.ROOT_URL!}/api/products/list/bytype?type=${slug}&brand=apple&take=${String(take)}&skip=${String(skip)}`,
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

}

export { getAppleProducts }