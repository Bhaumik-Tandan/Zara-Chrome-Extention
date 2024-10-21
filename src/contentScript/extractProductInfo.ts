import extractElementAndSetImage from "./extractElementAndSetImage";
import shouldRetry from "./shouldRetry";

function extractProductInfo(productElement: HTMLElement,index:number) {
    const productNameElement = productElement.querySelector('h2');
    const productPriceElement = productElement.querySelector('.price__amount-wrapper .money-amount__main');
    const productImageElement = productElement.querySelector('.media-image__image') as HTMLImageElement ;
    const productId = productElement.getAttribute('data-productid');
    if (!productId) return; // Handle missing productId

    // Extract the product name
    const productName = productNameElement ? productNameElement.innerText : 'N/A';

    // Extract the product price
    const productPrice = productPriceElement ? productPriceElement.textContent : 'N/A';

    // Extract the product image URL
    const productImage = productImageElement ? productImageElement.src : '';

    const product = {
        id: productId,
        name: productName,
        price: productPrice,
        imageUrl: productImage,
        index
    };

    if(shouldRetry(product)) 
        setTimeout(() => {
        extractElementAndSetImage(productId);
        }, 300);

    return product;

}

export default extractProductInfo;
