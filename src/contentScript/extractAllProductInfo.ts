import extractProductInfo from "./extractProductInfo";

async function extractAllProductInfo(retries = 0) {
        const productElements = document.querySelectorAll('.product-grid-product');

        // Check if no products were found or if we should retry
        if (productElements.length === 0 && retries < 10) {
            setTimeout(() => {
                extractAllProductInfo(retries + 1);
            }, 1000);
            return; 
        }

        const products={};
        productElements.forEach((productElement,index) => {
            const product = extractProductInfo(productElement as HTMLElement,index);
            if (product) {
                products[product.id] = product;
            }
        });

        chrome.storage.local.set({ products });

}

export default extractAllProductInfo;