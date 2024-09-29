import React, { useEffect,useState } from 'react';
import { createRoot } from 'react-dom/client';


const Test = () => {
    const [productsInfo, setProductsInfo] = useState([]);

    useEffect(() => {
        // Listener to receive messages
        const messageListener = (message, sender, sendResponse) => {
            if (message.type === 'PRODUCT_INFO') {
                console.log('Received product info:', message.productsInfo);
                // Update the state with the received products info
                setProductsInfo(message.productsInfo);
            }
        };

        // Add the listener
        chrome.runtime.onMessage.addListener(messageListener);

        // Cleanup the listener on component unmount
        return () => {
            chrome.runtime.onMessage.removeListener(messageListener);
        };
    }, []);

    return (
        <div>
            <h1>Product Information</h1>
            {productsInfo.length > 0 ? (
                <ul>
                    {productsInfo.map((product) => (
                        <li key={product.name}>
                            {product.name}: ${product.price}
                            {product.imageUrl}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No product information available.</p>
            )}
        </div>
    );
};

export default Test;


// Create a container and render the component
const container = document.createElement('div');
document.body.appendChild(container);

const root = createRoot(container);
root.render(<Test />);
