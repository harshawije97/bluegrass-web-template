"use server";
/**
 * Get all products
 */

const getProducts = async (take: string, skip: string) => {
    try {
        const response = await fetch(
            `${process.env.ROOT_URL!}/api/products/list?take=${take}&skip=${skip}`, {
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

    } catch (error) {
        throw new Error("Error fetching products" + error);
    }
};

/**
 * Get Best Selling products
 */

export const getBestSellingProducts = async (tag: string, take: string, skip: string) => {
    if (!tag) return

    try {
        const response = await fetch(
            `${process.env.ROOT_URL!}/api/products/list/bytag?tag=${tag}&take=${take}&skip=${skip}`, {
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

    } catch (error) {
        throw new Error("Error fetching products" + error);
    }
};

/**
 * Get most viewed products
 */
export const getMostViewedProducts = async (tag: string) => {
    if (!tag) return

    try {
        const response = await fetch(
            `${process.env.ROOT_URL!}/api/products/list/bytag?tag=${tag}`, {
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

    } catch (error) {
        throw new Error("Error fetching products" + error);
    }
};

/**
 * Get top rated products
 */
export const getTopRatedProducts = async (tag: string) => {
    if (!tag) return

    try {
        const response = await fetch(
            `${process.env.ROOT_URL!}/api/products/list/bytag?tag=${tag}`, {
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

    } catch (error) {
        throw new Error("Error fetching products" + error);
    }
};

export default getProducts