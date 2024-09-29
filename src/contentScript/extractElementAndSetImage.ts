import shouldRetry from "./shouldRetry";

function extractElementAndSetImage(productId: string) {
    console.log('Extracting element and setting image for product:', productId);
    const productElement = document.querySelector(`[data-productid="${productId}"]`);
    if (!productElement) return; // Handle case where element is not found

    const productImageElement = productElement.querySelector('.media-image__image') as HTMLImageElement | null;
    
    const productImage = productImageElement ? productImageElement.src : ''; 

    chrome.storage.local.get(['products'], function(result) {
        const products = result.products;
        if(!products[productId] || shouldRetry({ imageUrl: productImage })) {
            setTimeout(() => {
                extractElementAndSetImage(productId);
            },1000);
            return;
        }

        products[productId].imageUrl = productImage;

        chrome.storage.local.set({ products });
    });
}

export default extractElementAndSetImage;