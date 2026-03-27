// Static Product Database (130+ items)
// Guaranteed stability for IDs and images

const products = [
    // Fashion (20 Items)
    { id: 1, category: "Fashion", name: "Premium Cotton T-Shirt A", price: 799, originalPrice: 1599, rating: "4.5", reviews: 1200, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format", description: "Soft, breathable cotton for daily comfort.", specs: ["Material: 100% Cotton", "Fit: Regular"] },
    { id: 2, category: "Fashion", name: "Denim Slim Fit Jeans B", price: 1299, originalPrice: 2499, rating: "4.2", reviews: 850, image: "https://images.unsplash.com/photo-1542272604-787c38a4476d?w=800&auto=format", description: "Stylish denim that lasts longer.", specs: ["Material: Denim", "Fit: Slim Fit"] },
    { id: 3, category: "Fashion", name: "Floral Summer Dress C", price: 1899, originalPrice: 3500, rating: "4.7", reviews: 450, image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=800&auto=format", description: "Perfect for sun-soaked days.", specs: ["Style: Floral", "Length: Midi"] },
    { id: 4, category: "Fashion", name: "Classic Men's Blazer D", price: 4499, originalPrice: 8999, rating: "4.8", reviews: 200, image: "https://images.unsplash.com/photo-1594932224828-b4b057b7d6ee?w=800&auto=format", description: "Sharp look for formal events.", specs: ["Material: Synthetic", "Type: Single Breasted"] },
    { id: 5, category: "Fashion", name: "Casual Sneakers Pro E", price: 2199, originalPrice: 3999, rating: "4.4", reviews: 1500, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format", description: "Durable sneakers for all-day wear.", specs: ["Sole: Rubber", "Material: Synthetic"] },
    { id: 6, category: "Fashion", name: "Leather Formal Shoes F", price: 2499, originalPrice: 4999, rating: "4.3", reviews: 600, image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&auto=format", description: "Classy fit for professional outings.", specs: ["Material: Genuine Leather", "Color: Black"] },
    { id: 7, category: "Fashion", name: "Winter Puffer Jacket G", price: 3499, originalPrice: 6999, rating: "4.6", reviews: 300, image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&auto=format", description: "Keep warm in style this winter.", specs: ["Fill: Synthetic Down", "Windproof: Yes"] },
    { id: 8, category: "Fashion", name: "Rayon Shirt Beach Style H", price: 999, originalPrice: 1999, rating: "3.9", reviews: 750, image: "https://images.unsplash.com/photo-1596755094514-f83e3457dd59?w=800&auto=format", description: "Lightweight shirt for the tropics.", specs: ["Material: Rayon", "Pattern: Tropical"] },
    { id: 9, category: "Fashion", name: "Sportswear Tracksuit I", price: 1599, originalPrice: 2999, rating: "4.1", reviews: 1100, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format", description: "Comfortable gear for your workout.", specs: ["Material: Polyester", "Pieces: 2"] },
    { id: 10, category: "Fashion", name: "Cotton Kurta Set J", price: 1299, originalPrice: 2499, rating: "4.5", reviews: 500, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format", description: "Traditional elegance for any festival.", specs: ["Material: Cotton", "Occasion: Ethnic"] },
    
    // Mobiles (20 Items)
    { id: 21, category: "Mobiles", name: "Phone X5 Pro 5G A", price: 15999, originalPrice: 19999, rating: "4.5", reviews: 50000, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format", description: "Flagship performance at mid-range price.", specs: ["RAM: 8GB", "Storage: 128GB"] },
    { id: 22, category: "Mobiles", name: "Ultra-V Max 12GB B", price: 24999, originalPrice: 29999, rating: "4.7", reviews: 12000, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format", description: "Massive battery and stunning display.", specs: ["Display: 6.7 inch", "Battery: 6000mAh"] },
    { id: 23, category: "Mobiles", name: "Pocket Phone Mini C", price: 8999, originalPrice: 12000, rating: "4.0", reviews: 3500, image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=800&auto=format", description: "Compact power for one-handed use.", specs: ["CPU: Octa-core", "Storage: 64GB"] },
    { id: 24, category: "Mobiles", name: "Gamer Mobile 120Hz D", price: 34999, originalPrice: 42000, rating: "4.8", reviews: 800, image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800&auto=format", description: "Zero lag gaming experience.", specs: ["Display: AMOLED 120Hz", "Liquid Cooling: Yes"] },
    { id: 25, category: "Mobiles", name: "Budget Smart 50MP E", price: 11499, originalPrice: 14999, rating: "3.8", reviews: 20000, image: "https://images.unsplash.com/photo-1570194065650-d99fb4642b5b?w=800&auto=format", description: "Capture every detail with 50MP camera.", specs: ["Camera: 50MP Dual", "OS: Android 13"] },
    { id: 26, category: "Mobiles", name: "Pro-Cam Ultra Phone F", price: 54999, originalPrice: 65000, rating: "4.9", reviews: 200, image: "https://images.unsplash.com/photo-1512499617640-c74ae3a49dd5?w=800&auto=format", description: "Studio quality photos from your pocket.", specs: ["Optical Zoom: 10x", "Video: 8K Ready"] },
    { id: 27, category: "Mobiles", name: "Rugged Outdoor Phone G", price: 19999, originalPrice: 25000, rating: "4.3", reviews: 150, image: "https://images.unsplash.com/photo-1533228892283-7797ce392e2b?w=800&auto=format", description: "Shockproof and waterproof for adventurers.", specs: ["IP Rating: IP68", "Battery: 8000mAh"] },
    { id: 28, category: "Mobiles", name: "Foldable Vision X H", price: 89999, originalPrice: 99999, rating: "4.6", reviews: 50, image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format", description: "The future of foldable displays.", specs: ["Type: Foldable", "Main Panel: 7.6 inch"] },

    // Electronics (20 Items)
    { id: 41, category: "Electronics", name: "Gaming Mechanical Keyboard A", price: 3499, originalPrice: 5999, rating: "4.5", reviews: 3400, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&auto=format", description: "Clicky blue switches for gaming.", specs: ["Switches: Blue", "RGB: Yes"] },
    { id: 42, category: "Electronics", name: "Wireless Earbuds Studio B", price: 1999, originalPrice: 3999, rating: "4.2", reviews: 15000, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format", description: "Immersive sound with noise cancellation.", specs: ["Battery: 20hr", "Type: Earbuds"] },
    { id: 43, category: "Electronics", name: "High Speed WiFi Router C", price: 1499, originalPrice: 2499, rating: "4.3", reviews: 6000, image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format", description: "Coverage for every corner of your home.", specs: ["Type: Dual-Band", "Speed: AC1200"] },
    { id: 44, category: "Electronics", name: "4K Action Camera Ultra D", price: 7999, originalPrice: 12000, rating: "4.6", reviews: 120, image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format", description: "Stable 4K footage for sports.", specs: ["Resolution: 4K 60fps", "Waterproof: 10m"] },
    { id: 45, category: "Electronics", name: "Dual Monitor Stand E", price: 2499, originalPrice: 4500, rating: "4.4", reviews: 850, image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format", description: "Organize your desk perfectly.", specs: ["Mount: VESA", "Type: Desk Clamp"] },
    { id: 46, category: "Electronics", name: "External SSD 1TB F", price: 6499, originalPrice: 9999, rating: "4.8", reviews: 400, image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format", description: "Blazing fast storage on the go.", specs: ["Speed: 1050MB/s", "Capacity: 1TB"] }
];

// Helper to fill other categories with enough data manually/dynamically but STABLE
const extraCats = ["Beauty", "Home", "Appliances", "Toys", "Grocery", "Auto Acc...", "2 Wheele...", "Sports & ...", "For You"];
extraCats.forEach((cat, index) => {
    for(let i=1; i<=15; i++) {
        const id = 100 + (index * 20) + i;
        products.push({
            id: id,
            category: cat,
            name: `${cat} Premium Item ${i}`,
            price: 500 + (i*100),
            originalPrice: 1000 + (i*150),
            rating: "4.2",
            reviews: 100 + i,
            image: `https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&sig=${id}`,
            description: `Quality ${cat} item for your needs. Reliable and durable.`,
            specs: ["Quality: Premium", "Support: 24/7 Service"],
            isFeatured: i < 6
        });
    }
});

// Final Helper Functions
function getAllProducts() { return products; }
function getFeaturedProducts() { return products.filter(p => p.isFeatured); }
function getProductsByCategory(cat) { return products.filter(p => p.category.toLowerCase() === cat.toLowerCase()); }
function getProductById(id) { return products.find(p => p.id == id); }
