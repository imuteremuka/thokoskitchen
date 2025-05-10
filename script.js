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

document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const menuItem = e.target.closest('.menu-item');
            const title = menuItem.querySelector('.menu-item-title').textContent;
            const price = menuItem.querySelector('.price').textContent;
            
            // Add item to cart
            cart.push({
                title: title,
                price: price
            });
            
            // Update cart count
            cartCount.textContent = cart.length;
            
            // Visual feedback
            button.textContent = 'Added!';
            setTimeout(() => {
                button.textContent = 'Add to Cart';
            }, 1000);
        });
    });

    // Cart icon click handler
    document.getElementById('cart-icon').addEventListener('click', function(e) {
        e.preventDefault();
        if (cart.length === 0) {
            alert('Your cart is empty');
            return;
        }
        
        // Calculate total
        const total = cart.reduce((sum, item) => {
            const price = parseFloat(item.price.replace('R', ''));
            return sum + price;
        }, 0);
        
        // Show cart contents
        const cartItems = cart.map(item => `${item.title} - ${item.price}`).join('\n');
        alert(`Cart Contents:\n${cartItems}\n\nTotal: R${total.toFixed(2)}`);
    });
});
