# README for E-Commerce Chrome Plugin

## Overview
This document provides instructions for setting up and installing the E-Commerce Chrome Plugin, which extracts product information from a fashion e-commerce website and displays it in a popup interface.

## Prerequisites
- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: This comes bundled with Node.js.

## Project Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Bhaumik-Tandan/Zara-Chrome-Extention
   cd Zara-Chrome-Extention
   ```

2. **Install Yarn (if not installed)**
   First, check if Yarn is installed:
   ```bash
   yarn --version
   ```
   If you see the version number, Yarn is already installed. If not, install it globally using npm:
   ```bash
   npm install -g yarn
   ```

3. **Install Dependencies**
   Run the following command in the project directory to install all required packages:
   ```bash
   yarn
   ```

4. **Build the Project**
   To build the plugin files, run:
   ```bash
   yarn build
   ```

## Chrome Plugin Installation

1. **Open Chrome Extensions Page**
   - Go to `chrome://extensions/` in your Chrome browser.

2. **Enable Developer Mode**
   - Toggle the switch for **Developer mode** at the top right corner of the page.
     ![Developer Mode](https://github.com/user-attachments/assets/c22e23ad-0edc-47f7-aed4-b7b457cae7b3)

3. **Load Unpacked Extension**
   - Click on the **Load unpacked** button.
   - Select the `dist/` folder.
     ![Load Unpacked](https://github.com/user-attachments/assets/f304b265-5e9c-49c4-b796-0e706c1ebb48)

4. **Test the Plugin**
   - Once loaded, you should see the plugin icon in your toolbar.
   - Navigate to a product page [Zara Product Page](https://www.zara.com/in/en/search/home)
   - Click on the plugin icon to open the popup interface and view extracted product details.

      https://github.com/user-attachments/assets/ab48da70-c253-4568-a611-e1a56f47d267




## Development

If you want to actively develop and test the plugin, you can use the `yarn watch` command to watch for file changes and automatically rebuild.

1. **Run the watch script**
   ```bash
   yarn watch
   ```

   This will continuously monitor your codebase for changes and rebuild the project automatically.
