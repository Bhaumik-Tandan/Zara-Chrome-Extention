function extractElementAndSetImage(productId: string) {
    const productElement = document.querySelector(`[data-productid="${productId}"]`);
    if (!productElement) return; // Handle case where element is not found

    const productImageElement = productElement.querySelector('.media-image__image') as HTMLImageElement | null;
    
    const productImage = productImageElement ? productImageElement.src : ''; 

    chrome.storage.local.get(['products'], function(result) {
        const products = result.products;
        if(!products[productId]) {
            setTimeout(() => {
                extractElementAndSetImage(productId);
            },1000);
            return;
        }
        products[productId].imageUrl = productImage;

        // Ensure no race conditions by setting storage only after getting the data
        chrome.storage.local.set({ products });
    });
}

export default extractElementAndSetImage;