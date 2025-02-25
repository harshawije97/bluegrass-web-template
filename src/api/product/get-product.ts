"use server";

const getProductByIdAsync = async (id: string) => {
    try {
        const response = await fetch(
            `${process.env.ROOT_URL!}/api/product?id=${id}`,
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

    } catch (error) {
        throw new Error("Error fetching products" + error);
    }
};

export default getProductByIdAsync;