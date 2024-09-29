
function extractElementAndSetImage(productId)
{
    const productElement = document.querySelector(`[data-productid="${productId}"]`);
    const productImageElement = productElement.querySelector('.media-image__image');
    const productImage = productImageElement ? productImageElement.src : '';
    chrome.storage.local.get(['products'], function(result) {
        const products = result.products;
        products[productId].imageUrl = productImage;
        chrome.storage.local.set({products});
    });
}

function extractProductInfo(productElement) {
    const productNameElement = productElement.querySelector('h2');
    const productPriceElement = productElement.querySelector('.price__amount-wrapper .money-amount__main');
    const productImageElement = productElement.querySelector('.media-image__image');
    const productId=productElement.getAttribute('data-productid');
    // Extract the product name
    const productName = productNameElement ? productNameElement.innerText : 'N/A';

    // Extract the product price
    const productPrice = productPriceElement ? productPriceElement.textContent : 'N/A';

    // Extract the product image URL (First image from the carousel)
    const productImage = productImageElement ? productImageElement.src : '';
    

    const product= {
        id: productId,
        name: productName,
        price: productPrice,
        imageUrl: productImage
    };

    chrome.storage.local.get(['products'], function(result) {
        const products = result.products || {};
        products[productId] = product;
        chrome.storage.local.set({products});
    });

    if(product.imageUrl==='https://static.zara.net/stdstatic/6.32.0/images/transparent-background.png')
        setTimeout(() => {
            extractElementAndSetImage(productId);
        },1000);
}

export default extractProductInfo;