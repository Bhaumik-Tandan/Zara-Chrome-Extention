import extractAllProductInfo from "./extractAllProductInfo";
function retryExtraction(retries) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(extractAllProductInfo(retries + 1)); // Resolve the Promise with retry
        }, 2000); // Delay of 2000 milliseconds
    });
}

export default retryExtraction;