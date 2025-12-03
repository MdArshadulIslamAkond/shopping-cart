

// Load products in UI
function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = products
    .map((p) => {
      return `
        <div class="bg-white p-4 shadow rounded">
          <img src="${p.image}" class="w-full h-40 object-cover mb-3 rounded" />
          <h3 class="font-bold text-lg">${p.name}</h3>
          <p class="text-sm text-gray-600">${p.description}</p>
          <p class="font-bold my-2">$${p.price}</p>
          <button onclick="addToCart(${p.id})"
            class="bg-blue-600 text-white px-4 py-2 rounded mt-2">
            Add to Cart
          </button>
        </div>
      `;
    })
    .join("");
}

// Show cart items in UI
function displayCart() {
  const cartDiv = document.getElementById("cart-items");

  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartDiv.innerHTML = cart
    .map(
      (item) => `
      <div class="border-b py-3 flex justify-between items-center">
        <div>
          <h3 class="font-bold">${item.name}</h3>
          <p>$${item.price} × ${item.quantity}</p>
        </div>

        <div class="flex gap-2">
          <button onclick="updateQuantity(${item.id}, -1)"
            class="px-2 bg-gray-300 rounded">-</button>
          <button onclick="updateQuantity(${item.id}, 1)"
            class="px-2 bg-gray-300 rounded">+</button>
        </div>
      </div>
    `
    )
    .join("");
}

// Update Cart Count + Total + Cart UI
function updateUI() {
  document.getElementById("cart-count").innerText = cart.length;
  document.getElementById("cart-total").innerText = calculateTotal();
  displayCart();
}

// Initial Load
displayProducts();
updateUI();

// Clear Cart Button
document.getElementById("clear-cart").addEventListener("click", clearCart);
