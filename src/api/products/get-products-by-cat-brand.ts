/**
 * Get Category & Brand products
 */
export const getFilteredProducts = async (category: string, take: number, skip: number, brand?: string) => {
    try {
        const response = await fetch(
            `${process.env.ROOT_URL!}/api/products/filter`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                category_name: category,
                brand_name: brand,
                take: take.toString(),
                skip: skip.toString()
            }),
            next: {
                revalidate: 60 * 60
            }
        }
        );
        return response.json();

    } catch (error) {
        throw new Error("Error fetching products" + error);
    }

};