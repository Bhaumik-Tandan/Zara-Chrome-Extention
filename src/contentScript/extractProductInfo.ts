function extractProductInfo(productElement) {
    const productNameElement = productElement.querySelector('h2');
    const productPriceElement = productElement.querySelector('.price__amount-wrapper .money-amount__main');
    const productImageElement = productElement.querySelector('.media-image__image');

    // Extract the product name
    const productName = productNameElement ? productNameElement.innerText : 'N/A';

    // Extract the product price
    const productPrice = productPriceElement ? productPriceElement.textContent : 'N/A';

    // Extract the product image URL (First image from the carousel)
    const productImage = productImageElement ? productImageElement.src : '';

    return {
        name: productName,
        price: productPrice,
        imageUrl: productImage
    };
}

export default extractProductInfo;