let allProducts = [];
let filteredProducts = [];

// Fetch Products
async function fetchProducts() {
  loader(true);
  try {
    let res = await fetch("https://fakestoreapi.com/products");
    allProducts = await res.json();
    filteredProducts = allProducts;
    showProducts(filteredProducts);
  } catch {
    document.getElementById("error").innerText = "Error loading data";
  }
  loader(false);
}

// Show / Hide Loader
function loader(show) {
  document.getElementById("loader").style.display = show ? "block" : "none";
}

// Display Products
function showProducts(list) {
  let box = document.getElementById("products");
  box.innerHTML = "";

  list.forEach(p => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.image}">
      <h4>${short(p.title, 20)}</h4>
      <p>${short(p.description, 60)}</p>
      <button class="price">₹ ${p.price}</button><br><br>
      <button class="view">View More</button>
    `;

    card.querySelector(".view").onclick = () =>
      viewDetails(p.title, p.description);

    box.appendChild(card);
  });
}

// Short text helper
function short(text, len) {
  return text.length > len ? text.slice(0, len) + "..." : text;
}

// Search Filter
document.getElementById("search").oninput = e => {
  let val = e.target.value.toLowerCase();
  filteredProducts = allProducts.filter(p =>
    p.title.toLowerCase().includes(val)
  );
  showProducts(filteredProducts);
};

// Sorting
function sortLow() {
  filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  showProducts(filteredProducts);
}

function sortHigh() {
  filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  showProducts(filteredProducts);
}

// Category Filter
document.getElementById("category").onchange = e => {
  let cat = e.target.value;
  filteredProducts = cat === "all"
    ? allProducts
    : allProducts.filter(p => p.category === cat);

  showProducts(filteredProducts);
};

// Modal
function viewDetails(title, desc) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Start
fetchProducts();