

let cart = [];

// Add to Cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);

  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateUI();
}

// Update Quantity (prevent negative numbers)
function updateQuantity(id, change) {
  const item = cart.find(p => p.id === id);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    alert("Quantity cannot be negative!");
    item.quantity = 1;
  }

  updateUI();
}

// Clear Cart
function clearCart() {
  cart = [];
  updateUI();
}

// Calculate Total
function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
