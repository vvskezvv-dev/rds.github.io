const inventario = [
    {
        id: 1,
        nombre: "Heavyweight Hoodie V2",
        descripcion: "Algodón 500GSM. Corte Boxy extremo. Capucha estructurada sin cordones.",
        precio: "$42.000 CLP",
        imagen: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        nombre: "Oversized Tee 'Void'",
        descripcion: "Blanco óptico. Hombros caídos y cuello ajustado en rib.",
        precio: "$24.000 CLP",
        imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        nombre: "Oversized Tee 'Abyss'",
        descripcion: "Negro carbón. Costuras invisibles, tacto ultra suave.",
        precio: "$24.000 CLP",
        imagen: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        nombre: "Tactical Cargo Pants",
        descripcion: "Nylon anti-desgarro. 6 bolsillos utilitarios. Ajuste de velcro en tobillos.",
        precio: "$48.000 CLP",
        imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        nombre: "Zip-Up Windbreaker",
        descripcion: "Cortavientos repelente al agua. Cierres termosellados YKK.",
        precio: "$55.000 CLP",
        imagen: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        nombre: "Signature Beanie",
        descripcion: "Punto fino acrílico/lana. Etiqueta frontal tejida en alta definición.",
        precio: "$15.000 CLP",
        imagen: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        nombre: "Utility Vest Noir",
        descripcion: "Chaleco táctico con forro interior de malla respirable.",
        precio: "$38.000 CLP",
        imagen: "https://images.unsplash.com/photo-1588722883401-41712a6136e4?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        nombre: "Essential Sweatpants",
        descripcion: "Joggers de algodón peinado. Cintura elástica gruesa y caída recta.",
        precio: "$35.000 CLP",
        imagen: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        nombre: "Crossbody Bag 'Stealth'",
        descripcion: "Bolso cruzado resistente al agua con correa ajustable.",
        precio: "$20.000 CLP",
        imagen: "https://images.unsplash.com/photo-1548883354-94cbdb0a68d4?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 10,
        nombre: "Premium Socks Pack",
        descripcion: "Pack de 3 calcetines altos (2 negros, 1 blanco). Planta acolchada.",
        precio: "$12.000 CLP",
        imagen: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80"
    }
];

function renderizarCatalogo() {
    const grid = document.getElementById('catalog-grid');
    if (!grid) return;

    inventario.forEach((item, index) => {
        const delay = index * 100;
        const card = document.createElement('article');
        card.className = 'card reveal';
        card.style.transitionDelay = `${delay}ms`;
        
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${item.imagen}" alt="${item.nombre}" loading="lazy">
                <div class="card-overlay"></div>
            </div>
            <div class="card-info">
                <div class="card-header">
                    <h3 class="card-title">${item.nombre}</h3>
                    <span class="card-price">${item.precio}</span>
                </div>
                <p class="card-desc">${item.descripcion}</p>
                <a href="https://instagram.com/rds.cl" target="_blank" class="btn-card">Encargar Vía Instagram</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

function inicializarAnimaciones() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarCatalogo();
    setTimeout(inicializarAnimaciones, 100);
});