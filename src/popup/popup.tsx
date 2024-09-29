import React from 'react';
import { createRoot } from 'react-dom/client';
import Products from './Products';


// Create a container and render the component
const container = document.createElement('div');
document.body.appendChild(container);

const root = createRoot(container);
root.render(<Products />);
