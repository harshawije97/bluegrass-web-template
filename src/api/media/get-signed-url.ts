"use server";

/**
 * Get Product URL
 * @param key 
 * 
 * @returns 
 */

const getSignedUrl = async (key: string) => {
    try {
        const response = await fetch(
            `${process.env.ROOT_URL!}/api/services/getImg`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ key }),
            next: {
                revalidate: 60 * 60
            }
        }
        );
        return response.json();

    } catch (error) {
        throw new Error("Error fetching products" + error);
    }
}

export default getSignedUrl;