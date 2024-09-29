import extractProductInfo from "./extractProductInfo";
import retryExtraction from "./retryExtraction";
function extractAllProductInfo(retries = 0) {
    return new Promise((resolve) => {
        const productElements = document.querySelectorAll('.product-grid-product');
        const allProductInfo = [];
        console.log("Length:", productElements.length);

        // Check if no products were found or if we should retry
        if (productElements.length === 0 && retries < 10) {
            resolve(retryExtraction(retries));
            return; // Exit to prevent further execution
        }

        // Loop through each product element and extract details
        productElements.forEach(productElement => {
            const productInfo = extractProductInfo(productElement);

            
            // Push the product info to the allProductInfo array
            allProductInfo.push(productInfo);
        });

        resolve(allProductInfo); // Resolve the Promise with the extracted product info
    });
}

export default extractAllProductInfo;