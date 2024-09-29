import React, { useEffect, useState } from 'react';

const Test = () => {
    const [productsInfo, setProductsInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const messageListener = (message, sender, sendResponse) => {
            if (message.type === 'PRODUCT_INFO') {
                console.log('Received product info:', message.productsInfo);
                setProductsInfo(message.productsInfo);
                setLoading(false);
            } else {
                setError('Invalid message type received');
                setLoading(false);
            }
        };

        chrome.runtime.onMessage.addListener(messageListener);

        return () => {
            chrome.runtime.onMessage.removeListener(messageListener);
        };
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Product Information</h1>
            {loading ? (
                <p>Loading product information...</p>
            ) : error ? (
                <p style={styles.error}>{error}</p>
            ) : productsInfo.length > 0 ? (
                <ul style={styles.productList}>
                    {productsInfo.map((product) => (
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

export default Test;
