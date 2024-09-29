import React, { useEffect, useState } from 'react';


const Products = () => {
    const [productsInfo, setProductsInfo] = useState({});

    useEffect(() => {
        chrome.storage.local.get(['products'], function(result) {
            console.log('Product Information:', result.products);
            setProductsInfo(result.products|| {});
        });
    }, []);

    const products=Object.values(productsInfo);

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Product Information</h1>
            {products.length > 0 ? (
                <ul style={styles.productList}>
                    {products.map((product) => (
                        <li key={product.name} style={styles.productItem}>
                            <img src={product.imageUrl} alt={product.name} style={styles.productImage} />
                            <div style={styles.productDetails}>
                                <h2 style={styles.productName}>{product.name}</h2>
                                <p style={styles.productPrice}>{product.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No product information available.</p>
            )}
        </div>
    );
};

// Styles defined at the end
const styles = {
    container: {
        maxWidth: '600px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
    },
    productList: {
        listStyleType: 'none',
        padding: '0',
    },
    productItem: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #eee',
        padding: '10px 0',
    },
    productImage: {
        width: '50px',
        height: '50px',
        marginRight: '15px',
        borderRadius: '4px',
    },
    productDetails: {
        flexGrow: '1',
    },
    productName: {
        margin: '0',
        fontSize: '18px',
        color: '#555',
    },
    productPrice: {
        margin: '5px 0 0',
        fontSize: '16px',
        color: '#888',
    },
    error: {
        color: 'red',
        textAlign: 'center',
    },
};

export default Products;
