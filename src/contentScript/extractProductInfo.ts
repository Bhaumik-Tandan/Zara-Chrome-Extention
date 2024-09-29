import extractAllProductInfo from "./extractAllProductInfo";

function extractProductInfo(productElement,index) {
    const productNameElement = productElement.querySelector('h2');
    const productPriceElement = productElement.querySelector('.price__amount-wrapper .money-amount__main');
    const productImageElement = productElement.querySelector('.media-image__image');

    // Extract the product name
    const productName = productNameElement ? productNameElement.innerText : 'N/A';

    // Extract the product price
    const productPrice = productPriceElement ? productPriceElement.textContent : 'N/A';

    // Extract the product image URL (First image from the carousel)
    const productImage = productImageElement ? productImageElement.src : '';
    

    const product= {
        name: productName,
        price: productPrice,
        imageUrl: productImage
    };

    chrome.storage.local.get(['productsInfo'], function(result) {
        const productsInfo = result.productsInfo || [];
        if(index<productsInfo.length){
            productsInfo[index]=product;
        }
        else{
            productsInfo.push(product);
        }
    });

    if(product.imageUrl==='https://static.zara.net/stdstatic/6.32.0/images/transparent-background.png')
        setTimeout(() => {
            extractAllProductInfo();
        });
}

export default extractProductInfo;