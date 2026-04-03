// --- DONNÉES DUMMY (PRODUITS) ---
const artworks = [
    { id: 1, title: "Masque Bamoun Bronze", artist: "Moussa F.", price: 75000, category: "Sculpture", img: "https://images.unsplash.com/photo-1566996694954-90b052c413c4?q=80&w=800" },
    { id: 2, title: "Rêve Tropical", artist: "Sali H.", price: 120000, category: "Peinture", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800" },
    { id: 3, title: "Dynastie Grassfields", artist: "Paul N.", price: 250000, category: "Sculpture", img: "https://images.unsplash.com/photo-1515405299443-f73bb32881d3?q=80&w=800" },
    { id: 4, title: "Afro-Futurisme 237", artist: "Awa N.", price: 45000, category: "Digital", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800" }
];

// --- INITIALISATION ---
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(artworks);
    initFilters();
});

// --- AFFICHAGE PRODUITS ---
function displayProducts(data) {
    const container = document.getElementById('product-display');
    if(!container) return;
    
    container.innerHTML = data.map(item => `
        <div class="product-card">
            <img src="${item.img}" alt="${item.title}" class="product-img">
            <div class="product-info">
                <small>${item.category}</small>
                <h3>${item.title}</h3>
                <p>Par ${item.artist}</p>
                <div class="price">${item.price.toLocaleString()} FCFA</div>
                <button class="btn-add" onclick="updateCart(1)">Ajouter au panier</button>
            </div>
        </div>
    `).join('');
}

// --- FILTRES ---
function initFilters() {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            btns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const filter = e.target.getAttribute('data-filter');
            const filteredData = filter === 'all' ? artworks : artworks.filter(a => a.category === filter);
            displayProducts(filteredData);
        });
    });
}

// --- GESTION PANIER ---
let cartCount = 0;
function updateCart(val) {
    cartCount += val;
    document.getElementById('cart-count').innerText = cartCount;
}

// --- DASHBOARD & PARAMÈTRES ---
function toggleUserDashboard() {
    document.getElementById('userDropdown').classList.toggle('show');
}

const modal = document.getElementById('settingsModal');
function openSettings() {
    modal.style.display = 'block';
    document.getElementById('userDropdown').classList.remove('show');
}
function closeSettings() {
    modal.style.display = 'none';
}

// Fermer les modals au clic extérieur
window.onclick = function(event) {
    if (event.target == modal) closeSettings();
}

// --- AUTH SWITCH (Pour auth.html) ---
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

if (loginBtn && registerBtn) {
    registerBtn.addEventListener('click', () => {
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');
        loginForm.classList.remove('active-form');
        registerForm.classList.add('active-form');
    });

    loginBtn.addEventListener('click', () => {
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
        registerForm.classList.remove('active-form');
        loginForm.classList.add('active-form');
    });
}
// auh modif

