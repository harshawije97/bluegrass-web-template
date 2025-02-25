type ImageObject = {
    id: string;
    imgUrl: string;
};

const getProductImagesAction = (feature: ImageObject, multiple: ImageObject[]) => {
    const urls = [feature.imgUrl, ...multiple.map(obj => obj.imgUrl)];
    return urls
}

export default getProductImagesAction