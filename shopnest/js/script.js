/* ShopNest Premium Logic v2.0 */

let cart = JSON.parse(localStorage.getItem('shopnest_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('shopnest_wishlist')) || [];
let currentTheme = localStorage.getItem('shopnest_theme') || 'light';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    updateBadges();
    initScrollReveal();
    
    // Global search functionality
    const searchInputs = document.querySelectorAll('.search-bar input');
    searchInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && input.value.trim() !== '') {
                window.location.href = 'products.html?search=' + encodeURIComponent(input.value.trim());
            }
        });
    });
});

// --- Theme Management ---
function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    const header = document.querySelector('.nav-actions');
    if (header && !document.querySelector('.theme-toggle')) {
        const toggle = document.createElement('div');
        toggle.className = 'theme-toggle';
        toggle.innerHTML = currentTheme === 'light' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
        toggle.onclick = toggleTheme;
        header.insertBefore(toggle, header.firstChild);
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('shopnest_theme', currentTheme);
    document.querySelector('.theme-toggle').innerHTML = currentTheme === 'light' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
}

// --- Scroll Reveal ---
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    reveals.forEach(el => observer.observe(el));
}

// --- UI Helpers ---
function updateBadges() {
    const cartBadge = document.getElementById('cart-badge');
    const wishlistBadge = document.getElementById('wishlist-badge');
    
    if (cartBadge) {
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    
    if (wishlistBadge) {
        wishlistBadge.textContent = wishlist.length;
        wishlistBadge.style.display = wishlist.length > 0 ? 'flex' : 'none';
    }
}

function showAlert(message, type = 'success') {
    const alert = document.createElement('div');
    alert.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: var(--primary);
        color: var(--bg);
        padding: 1.2rem 3rem;
        border-radius: 0.5rem;
        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 0.75rem;
    `;
    alert.innerHTML = `<i class="fa-solid fa-${type === 'success' ? 'check' : 'exclamation'}" style="margin-right: 1rem; color: var(--accent);"></i> ${message}`;
    document.body.appendChild(alert);

    setTimeout(() => {
        alert.style.animation = 'slideOut 0.5s ease-in forwards';
        setTimeout(() => alert.remove(), 500);
    }, 3000);
}

// --- Card Rendering ---
function createProductCard(product) {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const detailsUrl = `product-details.html?id=${encodeURIComponent(product.id)}`;
    return `
        <div class="product-card">
            <a href="${detailsUrl}" class="product-image" onclick="saveLastViewedProduct('${product.id}')">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </a>
            <div class="info">
                <a href="${detailsUrl}" class="product-title" title="${product.name}" onclick="saveLastViewedProduct('${product.id}')" style="display:block; text-decoration:none; color:inherit;">
                    ${product.name}
                </a>
                <div class="product-price">
                    ₹${product.price.toLocaleString()}
                    ${discount > 0 ? `<span style="color: #878787; font-size: 0.8rem; text-decoration: line-through; margin-left: 5px;">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                    ${discount > 0 ? `<span style="color: #388e3c; font-size: 0.8rem; font-weight: 500; margin-left: 5px;">${discount}% off</span>` : ''}
                </div>
                <div class="product-tagline">${product.category} Special</div>
            </div>
        </div>
    `;
}

function saveLastViewedProduct(productId) {
    localStorage.setItem('shopnest_last_product_id', String(productId));
}

// --- Actions ---
function addToCart(productId, event) {
    if (event) event.preventDefault();
    const product = products.find(p => p.id === parseInt(productId));
    if (!product) return;

    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('shopnest_cart', JSON.stringify(cart));
    updateBadges();
    showAlert(`Added to collection`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== parseInt(productId));
    localStorage.setItem('shopnest_cart', JSON.stringify(cart));
    updateBadges();
    showAlert('Removed from bag');
}

function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === parseInt(productId));
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('shopnest_cart', JSON.stringify(cart));
            updateBadges();
        }
    }
}

function toggleWishlist(productId, event) {
    if (event) event.preventDefault();
    const index = wishlist.indexOf(parseInt(productId));
    if (index > -1) {
        wishlist.splice(index, 1);
        showAlert('Removed from wish');
    } else {
        wishlist.push(parseInt(productId));
        showAlert('Saved to wish');
    }
    localStorage.setItem('shopnest_wishlist', JSON.stringify(wishlist));
    updateBadges();
    if (typeof filterProducts === 'function') filterProducts();
}
