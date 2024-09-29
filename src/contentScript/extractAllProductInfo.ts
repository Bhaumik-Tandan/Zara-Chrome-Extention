import extractProductInfo from "./extractProductInfo";

function extractAllProductInfo(retries = 0) {
    return new Promise((resolve) => {
        const productElements = document.querySelectorAll('.product-grid-product');
        const allProductInfo = [];
        console.log("Length:", productElements.length);

        // Check if no products were found or if we should retry
        if (productElements.length === 0 && retries < 10) {
            setTimeout(() => {
                extractAllProductInfo(retries + 1);
            }, 1000);
            return; // Exit to prevent further execution
        }

        // Loop through each product element and extract details
        productElements.forEach((productElement,index) => {
            const productInfo = extractProductInfo(productElement,index);

            
            // Push the product info to the allProductInfo array
            allProductInfo.push(productInfo);
        });

        resolve(allProductInfo); // Resolve the Promise with the extracted product info
    });
}

export default extractAllProductInfo;