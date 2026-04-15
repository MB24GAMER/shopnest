// Static Product Database (130+ items)
// Guaranteed stability for IDs and images

const products = [
    // Fashion (20 Items)
    { id: 3, category: "Fashion", name: "Floral Summer Dress C", price: 1899, originalPrice: 3500, rating: "4.7", reviews: 450, image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=800&auto=format", description: "Perfect for sun-soaked days.", specs: ["Style: Floral", "Length: Midi"] },
    { id: 5, category: "Fashion", name: "Casual Sneakers Pro E", price: 2199, originalPrice: 3999, rating: "4.4", reviews: 1500, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format", description: "Durable sneakers for all-day wear.", specs: ["Sole: Rubber", "Material: Synthetic"] },
    { id: 6, category: "Fashion", name: "Leather Formal Shoes F", price: 2499, originalPrice: 4999, rating: "4.3", reviews: 600, image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&auto=format", description: "Classy fit for professional outings.", specs: ["Material: Genuine Leather", "Color: Black"] },
    { id: 7, category: "Fashion", name: "Winter Puffer Jacket G", price: 3499, originalPrice: 6999, rating: "4.6", reviews: 300, image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&auto=format", description: "Keep warm in style this winter.", specs: ["Fill: Synthetic Down", "Windproof: Yes"] },
    { id: 9, category: "Fashion", name: "Sportswear Tracksuit I", price: 1599, originalPrice: 2999, rating: "4.1", reviews: 1100, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format", description: "Comfortable gear for your workout.", specs: ["Material: Polyester", "Pieces: 2"] },
    { id: 10, category: "Fashion", name: "Cotton Kurta Set J", price: 1299, originalPrice: 2499, rating: "4.5", reviews: 500, image: "assets/cotton_kurta_set.png", description: "Traditional elegance for any festival.", specs: ["Material: Cotton", "Occasion: Ethnic"] },
    
    // Mobiles (20 Items)
    { id: 21, category: "Mobiles", name: "Phone X5 Pro 5G A", price: 15999, originalPrice: 19999, rating: "4.5", reviews: 50000, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format", description: "Flagship performance at mid-range price.", specs: ["RAM: 8GB", "Storage: 128GB"] },
    { id: 22, category: "Mobiles", name: "Ultra-V Max 12GB B", price: 24999, originalPrice: 29999, rating: "4.7", reviews: 12000, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format", description: "Massive battery and stunning display.", specs: ["Display: 6.7 inch", "Battery: 6000mAh"] },
    { id: 23, category: "Mobiles", name: "Pocket Phone Mini C", price: 8999, originalPrice: 12000, rating: "4.0", reviews: 3500, image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=800&auto=format", description: "Compact power for one-handed use.", specs: ["CPU: Octa-core", "Storage: 64GB"] },
    { id: 24, category: "Mobiles", name: "Gamer Mobile 120Hz D", price: 34999, originalPrice: 42000, rating: "4.8", reviews: 800, image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800&auto=format", description: "Zero lag gaming experience.", specs: ["Display: AMOLED 120Hz", "Liquid Cooling: Yes"] },
    { id: 27, category: "Mobiles", name: "Rugged Outdoor Phone G", price: 19999, originalPrice: 25000, rating: "4.3", reviews: 150, image: "assets/rugged_phone.png", description: "Shockproof and waterproof for adventurers.", specs: ["IP Rating: IP68", "Battery: 8000mAh"] },
    // Electronics (20 Items)
    { id: 41, category: "Electronics", name: "Gaming Mechanical Keyboard A", price: 3499, originalPrice: 5999, rating: "4.5", reviews: 3400, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&auto=format", description: "Clicky blue switches for gaming.", specs: ["Switches: Blue", "RGB: Yes"] },
    { id: 42, category: "Electronics", name: "Wireless Earbuds Studio B", price: 1999, originalPrice: 3999, rating: "4.2", reviews: 15000, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format", description: "Immersive sound with noise cancellation.", specs: ["Battery: 20hr", "Type: Earbuds"] },
    { id: 43, category: "Electronics", name: "High Speed WiFi Router C", price: 1499, originalPrice: 2499, rating: "4.3", reviews: 6000, image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format", description: "Coverage for every corner of your home.", specs: ["Type: Dual-Band", "Speed: AC1200"] },
    { id: 44, category: "Electronics", name: "4K Action Camera Ultra D", price: 7999, originalPrice: 12000, rating: "4.6", reviews: 120, image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format", description: "Stable 4K footage for sports.", specs: ["Resolution: 4K 60fps", "Waterproof: 10m"] },
    { id: 45, category: "Electronics", name: "Dual Monitor Stand E", price: 2499, originalPrice: 4500, rating: "4.4", reviews: 850, image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format", description: "Organize your desk perfectly.", specs: ["Mount: VESA", "Type: Desk Clamp"] },
    { id: 46, category: "Electronics", name: "External SSD 1TB F", price: 6499, originalPrice: 9999, rating: "4.8", reviews: 400, image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format", description: "Blazing fast storage on the go.", specs: ["Speed: 1050MB/s", "Capacity: 1TB"] }
];

// Helper to fill other categories with enough data manually/dynamically but STABLE
const keywordMap = {
    "Beauty": "beauty,cosmetics",
    "Home": "home,furniture",
    "Appliances": "appliances,kitchen",
    "Toys": "toys,kids",
    "Grocery": "grocery,food",
    "Auto Acc...": "car,accessories",
    "2 Wheele...": "motorcycle,bike",
    "Sports & ...": "sports,gym",
    "For You": "gifts,lifestyle"
};

// Dictionary of genuine product names for extra categories
// Dictionary of genuine product names for extra categories
const categoryNames = {
    "Beauty": [
        "Dot & Key Vitamin C + E Super Bright Gel Face Wash",
        "Dot & Key 10% Vitamin C+E, 5% Niacinamide Face Serum",
        "Minimalist 2% Salicylic Acid Face Wash for Oily Skin",
        "Plum Green Tea Pore Cleansing Face Wash",
        "L'Oreal Paris Revitalift Hyaluronic Acid Serum",
        "Mamaearth Ubtan Face Wash with Turmeric & Saffron"
    ],
    "Home": [
        "Premium Cotton Double Bedsheet with Pillow Covers",
        "Aesthetic Ceramic Coffee Mug Set of 4",
        "Orthopedic Memory Foam Mattress Topper",
        "Blackout Window Curtains for Bedroom",
        "Decorative Wall Mirror with Metal Frame",
        "Wooden Floating Wall Shelves Set of 3"
    ],
    "Appliances": [
        "Samsung 28L Convection Microwave Oven",
        "Philips 750W Mixer Grinder with 3 Jars",
        "LG 8Kg Fully Automatic Front Load Washing Machine",
        "Havells 1000W Dry Iron with Non-Stick Coating",
        "Dyson V11 Absolute Pro Cordless Vacuum Cleaner",
        "Whirlpool 265L Frost-Free Double Door Refrigerator"
    ],
    "Toys": [
        "Creative Building Blocks Construction Set (100 Pcs)",
        "Musical Learning Study Book with Numbers & Animals",
        "Smartivity Mega Science Kit 150+ Experiments for Kids",
        "Kid's Learning Cushion Pillow Cum Book",
        "Princess Edition 3 in 1 DIY Dollhouse Kit",
        "Alphabet Puzzle Mat for Interlocking Learning"
    ],
    "Grocery": [
        "Tata Salt Vacuum Evaporated Iodised Salt 1kg",
        "India Gate Basmati Rice Classic 5kg",
        "Saffola Gold Blended Edible Oil 5L",
        "Maggi 2-Minute Noodles Masala 12-Pack",
        "Brooke Bond Red Label Natural Care Tea 1kg"
    ],
    "Auto Acc...": [
        "Portronics Car Power 120 Car Charger",
        "Michelin Digital Tyre Pressure Gauge",
        "Godrej Aer Twist Car Air Freshener",
        "AmazonBasics Premium Car Trunk Organizer",
        "Qubo Dashcam Pro GPS Dash Camera",
        "Bergmann Typhoon Heavy Duty Car Tyre Inflator"
    ],
    "2 Wheele...": [
        "Studds Ninja Elite Super Full Face Helmet",
        "Motul 3100 4T 20W50 API SM Engine Oil",
        "Probiker Leather Motorcycle Riding Gloves",
        "Autofy Universal Bike Mobile Holder with Charger",
        "AllExtreme EXH5S1 Headlight LED Bulb",
        "GoMechanic Universal Bike Chain Lube & Cleaner"
    ],
    "Sports & ...": [
        "Cosco Light Weight Tennis Ball Pack of 3",
        "Nivia Storm Football Size 5",
        "Strauss Adjustable Hand Grip Strengthener",
        "Boldfit Yoga Mat with Carrying Strap",
        "Yonex Mavis 350 Nylon Shuttlecocks",
        "Kore PVC 10-40 Kg Home Gym Set"
    ],
    "For You": [
        "Noise ColorFit Pro 4 Advanced Smartwatch",
        "Sony WH-1000XM4 Noise Cancelling Headphones",
        "Apple iMac 24-inch M1 Desktop",
        "Apple Watch Series 8 GPS",
        "Nike Air Max 2023 Men's Running Shoe",
        "Canon EF 50mm f/1.8 STM Lens"
    ]
};

// Dictionary of explicit matching images for the products above
const categoryImages = {
    "Beauty": [
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&auto=format", // Face wash tube
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format", // Serum dropper
        "assets/minimalist_face_wash.png", // Skincare pump
        "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=800&auto=format", // Cleanser bottle
        "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&auto=format", // Serum dropper
        "assets/mamaearth_face_wash.png"  // Face wash tube
    ],
    "Home": [
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format", // Bed
        "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&auto=format", // Mugs
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format", // Mattress/Bed
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format", // Curtains/Interior
        "assets/wall_mirror.png", // Mirror
        "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&auto=format"  // Shelf decoration
    ],
    "Appliances": [
        "assets/microwave_oven.png", // Oven/microwave
        "assets/mixer_grinder.png", // Mixer
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&auto=format", // Washing machine
        "assets/dry_iron.png", // Iron/clothes
        "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format", // Vacuum
        "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&auto=format"  // Fridge
    ],
    "Toys": [
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&auto=format", // Building blocks
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format", // Study/Book toy
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format", // Math/Science Blocks
        "https://images.unsplash.com/photo-1558066551-ea6295ca03e6?w=800&auto=format", // Plush/Cushion
        "https://images.unsplash.com/photo-1558877385-81a1c7e67d72?w=800&auto=format", // Doll
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&auto=format"  // Alphabet/puzzle
    ],
    "Grocery": [
        "https://images.unsplash.com/photo-1627464010360-1e5b8832a249?w=800&auto=format", // Salt/Sugar
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format", // Rice
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&auto=format", // Olive Oil
        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800&auto=format", // Noodles
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format"  // Tea
    ],
    "Auto Acc...": [
        "https://images.unsplash.com/photo-1513346940221-6f673d962e97?w=800&auto=format",
        "https://images.unsplash.com/photo-1615555431668-2436d41870ca?w=800&auto=format",
        "https://images.unsplash.com/photo-1520699049698-acd2fce187dd?w=800&auto=format",
        "https://images.unsplash.com/photo-1533558701576-23c65e0272fb?w=800&auto=format",
        "https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=800&auto=format",
        "https://images.unsplash.com/photo-1528629297340-d1d466945cb5?w=800&auto=format"
    ],
    "2 Wheele...": [
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&auto=format",
        "https://images.unsplash.com/photo-1544641328-98e3b4a2e558?w=800&auto=format",
        "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&auto=format",
        "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&auto=format",
        "https://images.unsplash.com/photo-1571127029519-aa32a0c4f808?w=800&auto=format",
        "https://images.unsplash.com/photo-1502476572111-c30fd4fbf35e?w=800&auto=format"
    ],
    "Sports & ...": [
        "https://images.unsplash.com/photo-1517649712990-8ba230589576?w=800&auto=format",
        "https://images.unsplash.com/photo-1613677134812-7067afb1836c?w=800&auto=format",
        "https://images.unsplash.com/photo-1584735174965-48c48d7028a6?w=800&auto=format",
        "https://images.unsplash.com/photo-1518314916590-5890360ba104?w=800&auto=format",
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format",
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format"
    ],
    "For You": [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format",
        "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=800&auto=format",
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format",
        "https://images.unsplash.com/photo-1508057198894-247b23fe5278?w=800&auto=format",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&auto=format"
    ]
};

const extraCats = ["Beauty", "Home", "Appliances", "Grocery", "For You"];

const badUrls = [
  "https://images.unsplash.com/photo-1627464010360-1e5b8832a249?w=800&auto=format",
  "https://images.unsplash.com/photo-1615555431668-2436d41870ca?w=800&auto=format",
  "https://images.unsplash.com/photo-1520699049698-acd2fce187dd?w=800&auto=format",
  "https://images.unsplash.com/photo-1528629297340-d1d466945cb5?w=800&auto=format",
  "https://images.unsplash.com/photo-1544641328-98e3b4a2e558?w=800&auto=format",
  "https://images.unsplash.com/photo-1571127029519-aa32a0c4f808?w=800&auto=format",
  "https://images.unsplash.com/photo-1502476572111-c30fd4fbf35e?w=800&auto=format",
  "https://images.unsplash.com/photo-1517649712990-8ba230589576?w=800&auto=format",
  "https://images.unsplash.com/photo-1613677134812-7067afb1836c?w=800&auto=format",
  "https://images.unsplash.com/photo-1584735174965-48c48d7028a6?w=800&auto=format",
  "https://images.unsplash.com/photo-1518314916590-5890360ba104?w=800&auto=format",
  "https://images.unsplash.com/photo-1508057198894-247b23fe5278?w=800&auto=format",
  "https://images.unsplash.com/photo-1542272604-787c38a4476d?w=800&auto=format",
  "https://images.unsplash.com/photo-1594932224828-b4b057b7d6ee?w=800&auto=format",
  "https://images.unsplash.com/photo-1596755094514-f83e3457dd59?w=800&auto=format",
  "https://images.unsplash.com/photo-1570194065650-d99fb4642b5b?w=800&auto=format",
  "https://images.unsplash.com/photo-1512499617640-c74ae3a49dd5?w=800&auto=format"
];

extraCats.forEach((cat, index) => {
    const keyword = keywordMap[cat] || "product";
    const namesList = categoryNames[cat] || categoryNames["For You"];
    const imagesList = categoryImages[cat] || categoryImages["For You"];
    
    for(let i=0; i<6; i++) {
        const id = 100 + (index * 20) + i;
        const imageUrl = imagesList[i] || `https://loremflickr.com/800/600/${keyword}?lock=${id}`;
        
        if (!namesList[i]) continue; // SKIP if name is undefined (e.g., item removed)
        if (badUrls.includes(imageUrl)) continue; // SKIP rendering if image is invisible

        products.push({
            id: id,
            category: cat,
            name: namesList[i],
            price: 500 + (i*100) + Math.floor(Math.random() * 50),
            originalPrice: 1000 + (i*150) + Math.floor(Math.random() * 50),
            rating: (4.0 + Math.random() * 0.9).toFixed(1),
            reviews: Math.floor(Math.random() * 5000) + 100,
            image: imageUrl,
            description: `Quality ${cat} item for your needs. Reliable and durable.`,
            specs: ["Quality: Premium", "Support: 24/7 Service"],
            isFeatured: i < 3
        });
    }
});

// Final Helper Functions
function getAllProducts() { return products; }
function getFeaturedProducts() { return products.filter(p => p.isFeatured); }
function getProductsByCategory(cat) { return products.filter(p => p.category.toLowerCase() === cat.toLowerCase()); }
function getProductById(id) { return products.find(p => p.id == id); }
