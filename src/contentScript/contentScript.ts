import extractAllProductInfo from "./extractAllProductInfo";
window.onload = function() {
    extractAllProductInfo().then(productsInfo => {
        console.log('Extracted Product Information:', productsInfo);
        chrome.storage.local.set({productsInfo});
    });
}
