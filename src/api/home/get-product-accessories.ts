"use server";

const getAccessories = async (slug: string, take: number, skip: number) => {
    try {
        const response = await fetch(
            `${process.env.ROOT_URL!}/api/products/list/bytype?type=${slug}&take=${String(take)}&skip=${String(skip)}`,
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
        console.log(error);
        throw new Error("Error fetching products" + error);
    }
};

export default getAccessories;