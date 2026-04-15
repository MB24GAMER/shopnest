# ShopNest - Premium eCommerce Frontend Project

ShopNest is a modern, responsive, frontend-only eCommerce platform designed for a diploma project. It leverages pure HTML, CSS, and JavaScript with `localStorage` for complete data persistence.

## 🚀 Key Features
- **Persistent Cart & Wishlist**: Add items that stay saved even after refreshing the page.
- **Dynamic Product Rendering**: All product data is centrally managed in `js/products.js`.
- **Live Search & Filtering**: Filter by category, price, and rating without page reloads.
- **Product Details View**: Dynamic generation of product pages based on URL parameters.
- **Modern UI/UX**: Features glassmorphism, skeleton loading, smooth transitions, and a responsive mobile menu.
- **Simulated Checkout**: A complete flow from cart to order confirmation.

## 📂 Project Structure
```text
/css
  └── style.css          # Design system & responsive styles
/js
  ├── products.js        # Hardcoded product data array
  └── script.js          # Core logic (Cart, Wishlist, UI)
/assets/images
  └── hero.png           # Premium banner image
index.html               # Home Page
products.html            # Shop / Category Page
product-details.html     # Single Product View
cart.html                # Shopping Cart
wishlist.html            # Favorites Page
login.html & signup.html # Authentic-style forms
checkout.html            # Billing & Payment UI
order-success.html       # Confirmation receipt
about.html               # Team/Project mission
contact.html             # Support form UI
faq.html                 # Accordion-style help
```

## 🛠️ Presentation Tips (Viva/Academic)
1.  **localStorage**: Explain that `localStorage` serves as a local "database" to store user choices (Cart/Wishlist) in the browser, making the site feel "alive" without a backend.
2.  **DOM Manipulation**: Highlight how the product grid is generated dynamically in `script.js` using templates, rather than hardcoding each card.
3.  **Responsive Design**: Show how the site adapts from a desktop grid to a mobile-friendly layout and use of CSS variables for theming.
4.  **Data Flow**: Walk through the "Buy Now" flow: Product Grid -> Details -> Cart -> Checkout -> Success.

---
*Created with ❤️ by Antigravity for your Diploma Project*
