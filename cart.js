let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCartCount();
  alert(`${name} added to cart!`);
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("hidden");
  renderCartItems();
}

function renderCartItems() {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  cartItems.innerHTML = "";

  let sum = 0;
  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₵${item.price}`;
    cartItems.appendChild(li);
    sum += item.price;
  });

  total.textContent = `₵${sum}`;
}

function checkout() {
  alert("Checkout simulated! Thank you for your order.");
  cart = [];
  updateCartCount();
  renderCartItems();
  toggleCart();
}
