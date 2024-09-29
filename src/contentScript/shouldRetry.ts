function shouldRetry(productInfo) {
    return productInfo.imageUrl.includes('transparent-background.png');
}

export default shouldRetry;