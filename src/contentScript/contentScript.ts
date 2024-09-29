import extractAllProductInfo from "./extractAllProductInfo";
window.onload = function() {
    extractAllProductInfo().then(productsInfo => {
        console.log('Extracted Product Information:', productsInfo);
        chrome.runtime.sendMessage({ type: 'PRODUCT_INFO', productsInfo });
    });
}
