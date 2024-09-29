function extractAllProductInfo() {
    const productElements = document.querySelectorAll('.product-grid-product');
    const allProductInfo = [];
    console.log("length",productElements.length);
    if(productElements.length == 0)
      return extractAllProductInfo();

    // Loop through each product element and extract details
    productElements.forEach(productElement => {
        const productNameElement = productElement.querySelector('h2');
        const productPriceElement = productElement.querySelector('.price__amount-wrapper .money-amount__main') ;
        const productImageElement = productElement.querySelector('.media-image__image');

        // Extract the product name
        const productName = productNameElement.innerText;

        // Extract the product price
        const productPrice = productPriceElement.textContent;

        // Extract the product image URL (First image from the carousel)
        const productImage = (productImageElement as HTMLImageElement)?.src;


        // Store the extracted information in an object
        const productInfo = {
            name: productName,
            price: productPrice,
            imageUrl: productImage
        };

        // Push the product info to the allProductInfo array
        allProductInfo.push(productInfo);
    });

    return allProductInfo;
}


window.onload = function() {
    const productsInfo = extractAllProductInfo();
    console.log('Extracted Product Information:', productsInfo);
}

