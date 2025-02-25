import getProductByIdAsync from "@/api/product/get-product";

const getProductAction = async (id: string) => {
    if (!id) return;

    try {
        const response = await getProductByIdAsync(id);
        // get category, brand as well from the product
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching product" + error);
    }
}

export default getProductAction