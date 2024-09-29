function extractAllProductInfo(retries = 0) {
    return new Promise((resolve) => {
        const productElements = document.querySelectorAll('.product-grid-product');
        const allProductInfo = [];
        console.log("Length:", productElements.length);

        // Check if no products were found
        if (productElements.length === 0 && retries < 10) { // Set a maximum retry limit
            setTimeout(() => {
                resolve(extractAllProductInfo(retries + 1)); // Resolve the Promise with retry
            }, 2000); // Delay of 100 milliseconds
            return; // Exit to prevent further execution
        }

        // Loop through each product element and extract details
        productElements.forEach(productElement => {
            const productNameElement = productElement.querySelector('h2');
            const productPriceElement = productElement.querySelector('.price__amount-wrapper .money-amount__main');
            const productImageElement = productElement.querySelector('.media-image__image');

            // Extract the product name
            const productName = productNameElement ? productNameElement.innerText : 'N/A';

            // Extract the product price
            const productPrice = productPriceElement ? productPriceElement.textContent : 'N/A';

            // Extract the product image URL (First image from the carousel)
            const productImage = productImageElement ? productImageElement.src : '';

            // Store the extracted information in an object
            const productInfo = {
                name: productName,
                price: productPrice,
                imageUrl: productImage
            };

            if (productInfo.imageUrl.includes('transparent-background.png')) {
                setTimeout(() => {
                    resolve(extractAllProductInfo(retries + 1)); 
                }, 2000); // Delay of 100 milliseconds
                return; // Exit to prevent further execution
            }

            // Push the product info to the allProductInfo array
            allProductInfo.push(productInfo);
        });

        resolve(allProductInfo); // Resolve the Promise with the extracted product info
    });
}

window.onload = function() {
    extractAllProductInfo().then(productsInfo => {
        console.log('Extracted Product Information:', productsInfo);
        chrome.runtime.sendMessage({ type: 'PRODUCT_INFO', productsInfo });
    });
}
