// ========== DATOS ORIGINALES (ANIME) ==========
const products = [
    { id: "lamina_1.5", nombre: "Lámina Anime 1,5 cm", categoria: "Láminas de Anime", presentacion: "paquete", contenido: 33, stock: 33, tipoUnidad: "paquete", promoUnidades: 33 },
    { id: "lamina_2", nombre: "Lámina Anime 2 cm", categoria: "Láminas de Anime", presentacion: "paquete", contenido: 25, stock: 25, tipoUnidad: "paquete", promoUnidades: 25 },
    { id: "lamina_2.5", nombre: "Lámina Anime 2,5 cm", categoria: "Láminas de Anime", presentacion: "paquete", contenido: 20, stock: 20, tipoUnidad: "paquete", promoUnidades: 20 },
    { id: "lamina_3", nombre: "Lámina Anime 3 cm", categoria: "Láminas de Anime", presentacion: "paquete", contenido: 16, stock: 16, tipoUnidad: "paquete", promoUnidades: 16 },
    { id: "lamina_4", nombre: "Lámina Anime 4 cm", categoria: "Láminas de Anime", presentacion: "paquete", contenido: 12, stock: 12, tipoUnidad: "paquete", promoUnidades: 12 },
    { id: "lamina_5", nombre: "Lámina Anime 5 cm", categoria: "Láminas de Anime", presentacion: "paquete", contenido: 10, stock: 10, tipoUnidad: "paquete", promoUnidades: 10 },
    ...["10","15","20","25","30","35","40","45","50"].map(cm => ({ id: `base_${cm}`, nombre: `Base Circular ${cm} cm`, categoria: "Bases Circulares", presentacion: "paquete de 12 unidades", contenido: 12, stock: 100, tipoUnidad: "paquete", promoUnidades: 12 })),
    ...[41,42,43,44,45,46].map(n => ({ id: `cava_${n}`, nombre: `Cava N°${n} ${n===41?"(6 litros)":n===42?"(12 litros)":n===43?"(16 litros)":n===44?"(26 litros)":n===45?"(30 litros)":"(60 litros)"}`, categoria: "Cavas", presentacion: "unidad", contenido: 1, stock: 100, tipoUnidad: "unidad", promoUnidades: 1 })),
    { id: "bola_hueca_15", nombre: "Bola Dos Tapas N°15", categoria: "Bolas Dos Tapas", presentacion: "paquete de 10 unidades", contenido: 10, stock: 100, tipoUnidad: "paquete", promoUnidades: 10 },
    { id: "bola_hueca_20", nombre: "Bola Dos Tapas N°20", categoria: "Bolas Dos Tapas", presentacion: "paquete de 5 unidades", contenido: 5, stock: 100, tipoUnidad: "paquete", promoUnidades: 5 },
    { id: "bola_hueca_25", nombre: "Bola Dos Tapas N°25", categoria: "Bolas Dos Tapas", presentacion: "paquete de 5 unidades", contenido: 5, stock: 100, tipoUnidad: "paquete", promoUnidades: 5 },
    { id: "bola_hueca_30", nombre: "Bola Dos Tapas N°30", categoria: "Bolas Dos Tapas", presentacion: "paquete de 3 unidades", contenido: 3, stock: 100, tipoUnidad: "paquete", promoUnidades: 3 },
    { id: "bola_hueca_35", nombre: "Bola Dos Tapas N°35", categoria: "Bolas Dos Tapas", presentacion: "paquete de 3 unidades", contenido: 3, stock: 100, tipoUnidad: "paquete", promoUnidades: 3 },
    { id: "bola_hueca_40", nombre: "Bola Dos Tapas N°40", categoria: "Bolas Dos Tapas", presentacion: "paquete de 3 unidades", contenido: 3, stock: 100, tipoUnidad: "paquete", promoUnidades: 3 },
    { id: "bola_comp_3", nombre: "Bola Compacta N°3", categoria: "Bolas Compactas", presentacion: "paquete de 100 unidades", contenido: 100, stock: 100, tipoUnidad: "paquete", promoUnidades: 100 },
    { id: "bola_comp_4", nombre: "Bola Compacta N°4", categoria: "Bolas Compactas", presentacion: "paquete de 100 unidades", contenido: 100, stock: 100, tipoUnidad: "paquete", promoUnidades: 100 },
    { id: "bola_comp_5", nombre: "Bola Compacta N°5", categoria: "Bolas Compactas", presentacion: "paquete de 100 unidades", contenido: 100, stock: 100, tipoUnidad: "paquete", promoUnidades: 100 },
    { id: "bola_comp_6", nombre: "Bola Compacta N°6", categoria: "Bolas Compactas", presentacion: "paquete de 50 unidades", contenido: 50, stock: 100, tipoUnidad: "paquete", promoUnidades: 50 },
    { id: "bola_comp_7", nombre: "Bola Compacta N°7", categoria: "Bolas Compactas", presentacion: "paquete de 50 unidades", contenido: 50, stock: 100, tipoUnidad: "paquete", promoUnidades: 50 },
    { id: "bola_comp_8", nombre: "Bola Compacta N°8", categoria: "Bolas Compactas", presentacion: "paquete de 50 unidades", contenido: 50, stock: 100, tipoUnidad: "paquete", promoUnidades: 50 },
    { id: "bola_comp_10", nombre: "Bola Compacta N°10", categoria: "Bolas Compactas", presentacion: "paquete de 25 unidades", contenido: 25, stock: 100, tipoUnidad: "paquete", promoUnidades: 25 },
    { id: "bola_comp_12", nombre: "Bola Compacta N°12", categoria: "Bolas Compactas", presentacion: "paquete de 25 unidades", contenido: 25, stock: 100, tipoUnidad: "paquete", promoUnidades: 25 },
    { id: "bola_comp_15", nombre: "Bola Compacta N°15", categoria: "Bolas Compactas", presentacion: "paquete de 10 unidades", contenido: 10, stock: 100, tipoUnidad: "paquete", promoUnidades: 10 },
    { id: "bola_comp_20", nombre: "Bola Compacta N°20", categoria: "Bolas Compactas", presentacion: "paquete de 5 unidades", contenido: 5, stock: 100, tipoUnidad: "paquete", promoUnidades: 5 },
    ...[20,30,40,60,80].map(n => ({ id: `cono_${n}`, nombre: `Cono de Anime N°${n}`, categoria: "Conos", presentacion: "paquete de 10 unidades", contenido: 10, stock: 100, tipoUnidad: "paquete", promoUnidades: 10 }))
];

let cart = [];
let currentCategory = null;

// ===== HELPERS =====
function goToMainSite() {
    window.location.href = "https://jjrb47.github.io/JJRB47/";
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, m => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;" }[m]));
}

function showToast(msg) {
    let toast = document.createElement("div");
    toast.className = "fixed bottom-10 left-1/2 -translate-x-1/2 bg-black/90 border border-neon-green text-neon-green text-[11px] font-bold tracking-widest uppercase px-6 py-3 rounded-full z-[100] shadow-2xl toast-animate";
    toast.innerText = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

function saveCart() { localStorage.setItem("guicar_cart_anime", JSON.stringify(cart)); }
function loadCart() { let s = localStorage.getItem("guicar_cart_anime"); cart = s ? JSON.parse(s) : []; updateCartUI(); }

// ===== CARRITO =====
function addToCart(product) {
    let existing = cart.find(i => i.productId === product.id);
    if (existing) {
        if (existing.cantidad + 1 > product.stock) { showToast(`Stock máximo: ${product.nombre}`); return; }
        existing.cantidad++;
    } else {
        cart.push({
            productId: product.id,
            nombre: product.nombre,
            categoria: product.categoria,
            presentacion: product.presentacion,
            contenido: product.contenido,
            cantidad: 1,
            stockMax: product.stock,
            tipoUnidad: product.tipoUnidad
        });
    }
    saveCart(); updateCartUI(); showToast(`✓ ${product.nombre} agregado`);
}

function changeQty(productId, delta) {
    let idx = cart.findIndex(i => i.productId === productId);
    if (idx === -1) return;
    let nueva = cart[idx].cantidad + delta;
    if (nueva <= 0) cart.splice(idx, 1);
    else { if (nueva > cart[idx].stockMax) nueva = cart[idx].stockMax; cart[idx].cantidad = nueva; }
    saveCart(); updateCartUI();
}

function clearCart() { cart = []; saveCart(); updateCartUI(); showToast("Carrito vaciado"); }

// ===== MODAL VACIAR =====
function openClearModal() {
    const modal = document.getElementById('clearModal');
    if (!modal) return;
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = 'hidden';
    const card = modal.querySelector('.relative');
    if (card) {
        card.classList.remove('scale-95');
        card.classList.add('scale-100');
    }
}

function closeClearModal() {
    const modal = document.getElementById('clearModal');
    if (!modal) return;
    modal.classList.remove('opacity-100', 'pointer-events-auto');
    modal.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
    const card = modal.querySelector('.relative');
    if (card) {
        card.classList.remove('scale-100');
        card.classList.add('scale-95');
    }
}

function confirmClearCart() {
    clearCart();
    closeClearModal();
}

// ===== ACTUALIZAR UI DEL CARRITO =====
function updateCartUI() {
    let totalUnidades = cart.reduce((s, i) => s + i.cantidad * i.contenido, 0);
    let totalPromos = cart.reduce((s, i) => s + i.cantidad, 0);
    let badge = document.getElementById("cartBadge");
    if (badge) {
        if (totalPromos > 0) { badge.innerText = totalPromos > 99 ? "99+" : totalPromos; badge.classList.remove("hidden"); badge.classList.add("flex"); }
        else badge.classList.add("hidden");
    }

    const cartCount = document.getElementById("cartCount");
    if (cartCount) {
        cartCount.innerHTML = `<span class="text-yellow-neon">(</span><span class="text-white-neon">${totalUnidades} und en total</span><span class="text-yellow-neon">)</span>`;
    }

    document.getElementById("cartTotalUnidades").innerText = totalUnidades;

    let emptyDiv = document.getElementById("cartEmpty"), itemsDiv = document.getElementById("cartItems"), footer = document.getElementById("cartFooter");
    if (totalPromos === 0) { emptyDiv.classList.remove("hidden"); itemsDiv.classList.add("hidden"); footer.classList.add("hidden"); return; }
    emptyDiv.classList.add("hidden"); itemsDiv.classList.remove("hidden"); footer.classList.remove("hidden");

    itemsDiv.innerHTML = cart.map(item => {
        let totalUndItem = item.cantidad * item.contenido;
        let presentacion = item.presentacion;
        let textoCantidad = `${item.cantidad} PROMO / ${totalUndItem} UND`;
        return `<div class="glass-card p-5 rounded-3xl flex flex-col gap-4">
            <div class="flex justify-between items-start">
                <div>
                    <p class="font-semibold text-white tracking-tight leading-tight mb-1">${escapeHtml(item.nombre)}</p>
                    <p class="text-[10px] text-white-neon font-medium uppercase tracking-widest">${presentacion}</p>
                </div>
                <button onclick="changeQty('${item.productId}', -${item.cantidad})" class="text-zinc-600 hover:text-neon-green transition-colors">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
            </div>
            <div class="flex items-center justify-between">
                <div class="text-sm md:text-base font-bold neon-green uppercase tracking-tight">
                    ${textoCantidad}
                </div>
                <div class="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
                    <button onclick="changeQty('${item.productId}', -1)" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10"><i data-lucide="minus" class="w-4 h-4"></i></button>
                    <span class="w-8 text-center text-sm font-bold text-white">${item.cantidad}</span>
                    <button onclick="changeQty('${item.productId}', 1)" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10"><i data-lucide="plus" class="w-4 h-4"></i></button>
                </div>
            </div>
        </div>`;
    }).join("");

    let summaryMap = new Map();
    cart.forEach(item => {
        let cat = item.categoria;
        let packs = item.cantidad;
        let und = item.cantidad * item.contenido;
        if (summaryMap.has(cat)) { let v = summaryMap.get(cat); v.packs += packs; v.und += und; }
        else summaryMap.set(cat, { packs, und });
    });
    let summaryDiv = document.getElementById("cartSummaryLines");
    if (summaryDiv) {
        let html = "";
        for (let [cat, val] of summaryMap.entries()) {
            html += `<span class="bg-green-500/10 text-neon-green text-[10px] font-bold px-3 py-1.5 rounded-full border border-green-500/30 uppercase tracking-wider">${cat}: ${val.packs} PROMO / ${val.und} UND</span>`;
        }
        summaryDiv.innerHTML = html;
    }
    lucide.createIcons();
}

// ===== WHATSAPP =====
function sendWhatsApp() {
    if (cart.length === 0) { alert("Carrito vacío"); return; }
    let msg = `📋 SOLICITUD DE COTIZACIÓN%0A%0A`;
    msg += `Destinatario: INVERSIONES GUICAR 2025%0A%0A`;
    msg += `Estimados, reciban un cordial saludo. Agradecemos de antemano su atención; por favor, proceder con la cotización de los siguientes rubros:%0A%0A`;
    cart.forEach(item => {
        msg += `🔹 ${item.nombre}%0A`;
        let cant = item.cantidad;
        if (item.tipoUnidad === "paquete") {
            let undReales = item.cantidad * item.contenido;
            msg += `➤ Cantidad: ${cant} Paquete${cant !== 1 ? 's' : ''} (${undReales} Unidades)%0A%0A`;
        } else {
            msg += `➤ Cantidad: ${cant} Unidad${cant !== 1 ? 'es' : ''}%0A%0A`;
        }
    });
    let totalPromos = cart.reduce((s, i) => s + i.cantidad, 0);
    let totalUnidades = cart.reduce((s, i) => s + i.cantidad * i.contenido, 0);
    msg += `📦 RESUMEN DE CARGA%0A`;
    msg += `• Total Promos/Paquetes: ${totalPromos}%0A`;
    msg += `• Total Unidades Físicas: ${totalUnidades}%0A%0A`;
    msg += `✨ Gestión de Ventas: JONATHAN RANGEL%0A`;
    msg += `Quedo atento a su pronta respuesta.`;
    window.open(`https://wa.me/584122891366?text=${msg}`, '_blank');
}

// ===== CATEGORÍAS Y PRODUCTOS =====
function getCategories() {
    let cats = [...new Map(products.map(p => [p.categoria, p.categoria])).keys()];
    return cats.map(c => ({ id: c.toLowerCase().replace(/ /g, "-"), nombre: c }));
}

function renderCategories() {
    let cats = getCategories();
    let grid = document.getElementById("categoryGrid");
    grid.innerHTML = cats.map(cat => `<div class="glass-card rounded-3xl p-8 cursor-pointer flex flex-col items-center text-center group" onclick="openCategory('${cat.id}')">
        <div class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500/10 transition-all duration-500">
            <i data-lucide="layers" class="w-8 h-8 text-white/40 group-hover:text-neon-green transition-colors"></i>
        </div>
        <h3 class="text-xl font-medium tracking-tight text-white mb-2">${cat.nombre}</h3>
        <p class="text-xs uppercase tracking-widest font-bold neon-green">Explorar Catálogo</p>
    </div>`).join("");
    lucide.createIcons();
}

function openCategory(catId) {
    let catNombre = getCategories().find(c => c.id === catId)?.nombre;
    if (!catNombre) return;
    currentCategory = catNombre;
    document.getElementById("categoriesView").style.display = "none";
    document.getElementById("productsView").style.display = "block";
    let prods = products.filter(p => p.categoria === catNombre);
    let html = `<div class="mb-10"><h2 class="text-4xl font-light tracking-tight">${catNombre.split(' ')[0]} <span class="font-bold neon-green">${catNombre.split(' ').slice(1).join(' ')}</span></h2></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6">`;
    prods.forEach(p => {
        html += `<div class="glass-card p-6 rounded-3xl flex justify-between items-center group">
                    <div>
                        <h3 class="font-bold text-white group-hover:text-neon-green transition-colors">${escapeHtml(p.nombre)}</h3>
                        <p class="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-bold"><span class="neon-green">Promo : ${p.promoUnidades} und</span></p>
                    </div>
                    <button onclick="addToCartById('${p.id}')" class="bg-white/5 hover:bg-neon-green hover:text-black text-white px-6 py-2.5 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300">Agregar</button>
                </div>`;
    });
    html += `</div>`;
    document.getElementById("productsContent").innerHTML = html;
    lucide.createIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function addToCartById(pid) { let product = products.find(p => p.id === pid); if (product) addToCart(product); }
function goBack() { document.getElementById("categoriesView").style.display = "block"; document.getElementById("productsView").style.display = "none"; }
function openCart() { document.getElementById("cartPanel").classList.remove("closed"); document.getElementById("cartPanel").classList.add("open"); document.getElementById("cartOverlay").classList.remove("opacity-0", "pointer-events-none"); document.body.style.overflow = "hidden"; }
function closeCart() { document.getElementById("cartPanel").classList.remove("open"); document.getElementById("cartPanel").classList.add("closed"); document.getElementById("cartOverlay").classList.add("opacity-0", "pointer-events-none"); document.body.style.overflow = ""; }

// ===== INICIO =====
document.addEventListener("DOMContentLoaded", () => { renderCategories(); loadCart(); lucide.createIcons(); });
