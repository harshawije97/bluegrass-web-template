"use server";

type Params = {
    categoryId: string,
    brandId: string,
    limit: number
}

const getProductsByIDsAsync = async ({ params }: { params: Params }) => {
    try {
        const response = await fetch(
            `${process.env.ROOT_URL!}/api/products/list/byquery?bid=${params.brandId as string}&cid=${params.categoryId}&limit=${params.limit}`, {
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
}

export default getProductsByIDsAsync