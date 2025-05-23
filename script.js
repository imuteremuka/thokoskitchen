// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80; // Height of the fixed header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Menu tab switching
document.addEventListener('DOMContentLoaded', function() {
    const mealTabs = document.querySelectorAll('.meal-tab');
    const mealContents = document.querySelectorAll('.meal-content');

    mealTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            mealTabs.forEach(t => t.classList.remove('active'));
            mealContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const mealType = tab.getAttribute('data-meal');
            document.getElementById(mealType).classList.add('active');
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(this);
        const formValues = Object.fromEntries(formData.entries());
        
        // Here you would typically send the form data to a server
        // For now, we'll just show an alert
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Add scroll event listener for navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.backgroundColor = '#fff';
    }
});

// Menu item modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('menuItemModal');
    const closeBtn = document.querySelector('.close-modal');
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Additional menu item details
    const menuItemDetails = {
        // South African Drinks
        'Rooibos Tea': {
            preparation: '5-7 minutes steeping time',
            dietary: 'Caffeine-free, Vegan, Gluten-free'
        },
        'Moerkoffie': {
            preparation: '10-12 minutes preparation',
            dietary: 'Contains Caffeine'
        },
        'Amarula Hot Chocolate': {
            preparation: '5-7 minutes preparation',
            dietary: 'Contains Alcohol, Dairy'
        },
        'Rock Shandy': {
            preparation: '3-5 minutes preparation',
            dietary: 'Contains Bitters'
        },
        'Cream Soda Float': {
            preparation: '2-3 minutes preparation',
            dietary: 'Contains Dairy'
        },
        'Mango Lassi': {
            preparation: '4-5 minutes preparation',
            dietary: 'Contains Dairy, Vegetarian'
        },
        'Granadilla Cordial': {
            preparation: '2-3 minutes preparation',
            dietary: 'Vegan, Contains Natural Sugars'
        },
        'Pinotage': {
            preparation: 'Served at 16-18°C',
            dietary: 'Contains Alcohol, Vegan'
        },
        'Chenin Blanc': {
            preparation: 'Served at 8-10°C',
            dietary: 'Contains Alcohol, Vegan'
        },
        'Stellenbosch Cabernet': {
            preparation: 'Served at 18°C',
            dietary: 'Contains Alcohol, Vegan'
        },
        'Cape Sauvignon Blanc': {
            preparation: 'Served at 7-9°C',
            dietary: 'Contains Alcohol, Vegan'
        },
        // Western Drinks
        'Cappuccino': {
            preparation: '3-4 minutes preparation',
            dietary: 'Contains Caffeine, Dairy'
        },
        'Hot Chocolate': {
            preparation: '5-6 minutes preparation',
            dietary: 'Contains Dairy'
        },
        'Chai Latte': {
            preparation: '4-5 minutes preparation',
            dietary: 'Contains Caffeine, Dairy'
        },
        'Caramel Macchiato': {
            preparation: '4-5 minutes preparation',
            dietary: 'Contains Caffeine, Dairy'
        },
        'Fresh Juice Selection': {
            preparation: '3-4 minutes preparation',
            dietary: 'Vegan, No Added Sugar'
        },
        'Iced Coffee': {
            preparation: '4-5 minutes preparation',
            dietary: 'Contains Caffeine, Dairy'
        },
        'Berry Smoothie': {
            preparation: '4-5 minutes preparation',
            dietary: 'Contains Dairy, Vegetarian'
        },
        'Green Goddess': {
            preparation: '4-5 minutes preparation',
            dietary: 'Vegan, Raw'
        },
        'Classic Mojito': {
            preparation: '5-6 minutes preparation',
            dietary: 'Contains Alcohol'
        },
        'Aperol Spritz': {
            preparation: '3-4 minutes preparation',
            dietary: 'Contains Alcohol'
        },
        'Espresso Martini': {
            preparation: '4-5 minutes preparation',
            dietary: 'Contains Alcohol, Caffeine'
        },
        'Gin & Botanical Tonic': {
            preparation: '3-4 minutes preparation',
            dietary: 'Contains Alcohol'
        }
    };

    // Open modal when clicking on menu item
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const name = this.querySelector('h4').textContent;
            const price = this.querySelector('.price').textContent;
            const description = this.querySelector('p').textContent;
            const details = menuItemDetails[name] || {
                preparation: 'Preparation time varies',
                dietary: 'Information not available'
            };

            document.getElementById('modalItemName').textContent = name;
            document.getElementById('modalItemPrice').textContent = price;
            document.getElementById('modalItemDescription').textContent = description;
            document.querySelector('.dietary-info').textContent = `Dietary Info: ${details.dietary}`;
            document.querySelector('.preparation-time').textContent = `Preparation: ${details.preparation}`;

            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
});

// Shopping Cart functionality
let cart = [];
const cartCount = document.getElementById('cart-count');
const cartPreview = document.getElementById('cartPreview');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotal = document.getElementById('cartTotal');
const closeCartBtn = document.querySelector('.close-cart');
const checkoutBtn = document.getElementById('checkoutBtn');

// Toggle cart preview
function toggleCartPreview() {
    cartPreview.classList.toggle('show');
    cartOverlay.classList.toggle('show');
    document.body.style.overflow = cartPreview.classList.contains('show') ? 'hidden' : '';
}

// Close cart when clicking overlay
cartOverlay.addEventListener('click', toggleCartPreview);
closeCartBtn.addEventListener('click', toggleCartPreview);

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Calculate cart subtotal (before VAT)
function calculateSubtotal() {
    return cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace('R', ''));
        return total + (price * item.quantity);
    }, 0);
}

// Calculate VAT amount (15% of subtotal)
function calculateVat(subtotal) {
    return subtotal * 0.15; // 15% VAT
}

// Calculate total (subtotal + VAT)
function calculateTotal() {
    const subtotal = calculateSubtotal();
    const vat = calculateVat(subtotal);
    return {
        subtotal: subtotal,
        vat: vat,
        total: subtotal + vat
    };
}

// Render cart items
function renderCart() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        document.getElementById('cartSubtotal').textContent = 'R0.00';
        document.getElementById('cartVat').textContent = 'R0.00';
        document.getElementById('cartTotal').textContent = 'R0.00';
        checkoutBtn.disabled = true;
        return;
    }

    checkoutBtn.disabled = false;
    
    cartItemsContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item" data-index="${index}">
            <div class="cart-item-image">
                <img src="${item.image || 'images/placeholder.jpg'}" alt="${item.title}" onerror="this.src='images/placeholder.jpg'">
            </div>
            <div class="item-details">
                <h4>${item.title}</h4>
                <div class="item-price">${item.price}</div>
                <div class="item-quantity">
                    <button class="quantity-btn minus">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn plus">+</button>
                </div>
            </div>
            <button class="remove-item" title="Remove item">×</button>
        </div>
    `).join('');
    
    // Update totals
    const totals = calculateTotal();
    document.getElementById('cartSubtotal').textContent = `R${totals.subtotal.toFixed(2)}`;
    document.getElementById('cartVat').textContent = `R${totals.vat.toFixed(2)}`;
    document.getElementById('cartTotal').textContent = `R${totals.total.toFixed(2)}`;
    
    // Add event listeners to quantity buttons and remove buttons
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', handleQuantityChange);
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', removeItem);
    });
}

// Handle quantity changes
function handleQuantityChange(e) {
    const itemElement = e.target.closest('.cart-item');
    const index = parseInt(itemElement.dataset.index);
    const quantityElement = itemElement.querySelector('.quantity');
    let newQuantity = parseInt(quantityElement.textContent);

    if (e.target.classList.contains('plus')) {
        newQuantity++;
    } else if (e.target.classList.contains('minus') && newQuantity > 1) {
        newQuantity--;
    }

    cart[index].quantity = newQuantity;
    updateCart();
}

// Remove item from cart
function removeItem(e) {
    const itemElement = e.target.closest('.cart-item');
    const index = parseInt(itemElement.dataset.index);
    
    cart.splice(index, 1);
    updateCart();
}

// Update cart and UI
function updateCart() {
    updateCartCount();
    renderCart();
    saveCart();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Add item to cart
function addToCart(menuItem) {
    const title = menuItem.querySelector('.menu-item-title').textContent;
    const price = menuItem.querySelector('.price').textContent;
    const image = menuItem.querySelector('img')?.src || '';
    
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.title === title);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            title: title,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    updateCart();
    
    // Show feedback
    const addButton = menuItem.querySelector('.add-to-cart-btn');
    if (addButton) {
        const originalText = addButton.textContent;
        addButton.textContent = 'Added to Cart!';
        addButton.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            addButton.textContent = originalText;
            addButton.style.backgroundColor = '';
        }, 1500);
    }
}

// Initialize cart
loadCart();

// Cart icon click handler
document.getElementById('cart-icon').addEventListener('click', function(e) {
    e.preventDefault();
    toggleCartPreview();
});

// Update existing cart functionality in the preview modal
document.querySelector('.add-to-cart-preview').addEventListener('click', function() {
    const title = previewItemName.textContent;
    const price = previewItemPrice.textContent;
    
    const menuItem = document.querySelector(`.menu-item:has(.menu-item-title:contains('${title}'))`);
    if (menuItem) {
        addToCart(menuItem);
        this.textContent = 'Added to Cart!';
        this.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            closePreview();
        }, 1000);
    }
});

// Checkout button
checkoutBtn.addEventListener('click', function() {
    if (cart.length > 0) {
        // Here you would typically redirect to a checkout page
        alert('Proceeding to checkout with ' + cart.reduce((sum, item) => sum + item.quantity, 0) + ' items');
    }
});

// Close cart with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && cartPreview.classList.contains('show')) {
        toggleCartPreview();
    }
});

// Update existing event listeners to use the new addToCart function
document.addEventListener('DOMContentLoaded', function() {
    // Update menu item click handlers to open preview
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function(e) {
            // Don't open preview if clicking on Add to Cart button
            if (!e.target.classList.contains('add-to-cart-btn')) {
                openPreview(this);
            }
        });

        // Update add to cart button
        const addButton = item.querySelector('.add-to-cart-btn');
        if (addButton) {
            addButton.addEventListener('click', function(e) {
                e.stopPropagation();
                addToCart(item);
            });
        }
    });
});

// Preview Modal Elements
const previewModal = document.getElementById('previewModal');
const previewOverlay = document.getElementById('previewOverlay');
const previewClose = document.querySelector('.preview-close');
const closePreviewBtn = document.querySelector('.close-preview');
const previewItemName = document.getElementById('previewItemName');
const previewItemPrice = document.getElementById('previewItemPrice');
const previewItemDescription = document.getElementById('previewItemDescription');
const previewItemImage = document.getElementById('previewItemImage');
const previewImageContainer = document.querySelector('.preview-image-container');

// Fullscreen Image Elements
const imageFullscreen = document.getElementById('imageFullscreen');
const fullscreenImage = imageFullscreen.querySelector('img');
const closeFullscreenBtn = document.querySelector('.close-fullscreen');

// Function to open preview modal
function openPreview(menuItem) {
    const title = menuItem.querySelector('.menu-item-title').textContent;
    const price = menuItem.querySelector('.price').textContent;
    const description = menuItem.querySelector('p').textContent;
    const imageSrc = menuItem.querySelector('img')?.src || '';
    
    previewItemName.textContent = title;
    previewItemPrice.textContent = price;
    previewItemDescription.textContent = description;
    previewItemImage.src = imageSrc;
    
    // Store the full-size image URL for fullscreen view
    previewItemImage.dataset.fullSize = imageSrc;
    
    previewModal.classList.add('show');
    previewOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Toggle image zoom on click
previewImageContainer.addEventListener('click', function(e) {
    e.stopPropagation();
    
    // Toggle between zoomed and normal state
    if (previewItemImage.classList.contains('zoomed')) {
        previewItemImage.classList.remove('zoomed');
    } else {
        // Open fullscreen view if already zoomed
        openFullscreenImage(previewItemImage.src);
    }
});

// Open fullscreen image
function openFullscreenImage(src) {
    fullscreenImage.src = src;
    imageFullscreen.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close fullscreen image
function closeFullscreenImage() {
    imageFullscreen.classList.remove('show');
    document.body.style.overflow = '';
}

// Close fullscreen when clicking outside the image
imageFullscreen.addEventListener('click', function(e) {
    if (e.target === this) {
        closeFullscreenImage();
    }
});

// Close fullscreen with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && imageFullscreen.classList.contains('show')) {
        closeFullscreenImage();
    }
});

// Close fullscreen with close button
closeFullscreenBtn.addEventListener('click', closeFullscreenImage);

// Function to close preview modal
function closePreview() {
    previewModal.classList.remove('show');
    previewOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

// Event Listeners for Preview Modal
previewClose.addEventListener('click', closePreview);
closePreviewBtn.addEventListener('click', closePreview);
previewOverlay.addEventListener('click', closePreview);

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && previewModal.classList.contains('show')) {
        closePreview();
    }
});
