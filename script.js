// Base de datos de productos con atributos para filtrado
const productos = [
       {
        id: 1,
        nombre: "Laptop Gamer Pro",
        precio: 2500000,
        imagen: "https://www.gamerscolombia.com/img/products/ASUS-FA506NCR-R7-7435HS-8GB-SSD512-3050/17401790011.webp",
        descripcion: "Potente laptop para gaming con gráficos de última generación",
        categoria: "Electrónica",
        marca: "TechPro",
        calificacion: 5,
        color: "Negro",
        tamaño: "15 pulgadas",
        material: "Aluminio"
    },
    {
        id: 2,
        nombre: "Smartphone Ultra",
        precio: 2100000,
        imagen: "https://smselectronic.com/wp-content/uploads/2023/08/SAMSUNG-GALAXY-S23-ULTRA-256-GB-5G.png",
        descripcion: "Smartphone de alta gama con cámara 108MP y 5G",
        categoria: "Electrónica",
        marca: "Samsung",
        calificacion: 5,
        color: "Azul",
        tamaño: "6.5 pulgadas",
        material: "Metal y vidrio"
    },
    {
        id: 3,
        nombre: "Auriculares Noise Cancel",
        precio: 510000,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Vf4r1Ov8Y4yscYVHnTSsHbCViNuDZFHWeA&s",
        descripcion: "Auriculares inalámbricos con cancelación de ruido premium",
        categoria: "Electrónica",
        marca: "SoundMax",
        calificacion: 4,
        color: "Blanco",
        tamaño: "Estándar",
        material: "Plástico"
    },
    {
        id: 4,
        nombre: "Tablet Profesional",
        precio: 1610000,
        imagen: "https://www.muypymes.com/wp-content/uploads/2019/08/Galaxy-Tab-S6.jpg",
        descripcion: "Tablet de alta resolución para trabajo y creatividad",
        categoria: "Electrónica",
        marca: "TechPro",
        calificacion: 5,
        color: "Gris",
        tamaño: "11 pulgadas",
        material: "Aluminio"
    },
    {
        id: 5,
        nombre: "Monitor Curvo 4K",
        precio: 1550000,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrRtZc5HvXKeIdgQVlSpk0pO53za42EmYNAA&s",
        descripcion: "Monitor curvo ultraancho con resolución 4K",
        categoria: "Electrónica",
        marca: "ViewMax",
        calificacion: 4,
        color: "Negro",
        tamaño: "32 pulgadas",
        material: "Plástico y metal"
    },
    {
        id: 6,
        nombre: "Smartwatch Fitness",
        precio: 850000,
        imagen: "https://m.media-amazon.com/images/I/61I22cL7v+L.jpg",
        descripcion: "Smartwatch con seguimiento de salud y GPS integrado",
        categoria: "Electrónica",
        marca: "FitTech",
        calificacion: 4,
        color: "Negro",
        tamaño: "44mm",
        material: "Silicona y aluminio"
    },
    {
        id: 7,
        nombre: "Zapatillas Running Pro",
        precio: 252000,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN6B-shGqm4H2SPx78_YejuEdu5yDrHGX8tw&s",
        descripcion: "Zapatillas deportivas para running con amortiguación premium",
        categoria: "Deportes & Aire Libre",
        marca: "SportFlex",
        calificacion: 5,
        color: "Rojo",
        tamaño: "42",
        material: "Textil"
    },
    {
        id: 8,
        nombre: "Cafetera Automática",
        precio: 595000,
        imagen: "https://osterco.vtexassets.com/arquivos/ids/163637-800-auto?v=638029201449900000&width=800&height=auto&aspect=true",
        descripcion: "Cafetera con molinillo integrado y múltiples programas",
        categoria: "Hogar y Cocina",
        marca: "HomePlus",
        calificacion: 3,
        color: "Plateado",
        tamaño: "30cm",
        material: "Acero inoxidable"
    },
    {
        id: 9,
        nombre: "Set de Maquillaje Profesional",
        precio: 171000,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv85rdOCgkgTP1SD-SfI7xcMqlaID5AGSDAw&s",
        descripcion: "Set completo de maquillaje con 48 colores y brochas",
        categoria: "Belleza & Cuidado Personal",
        marca: "GlamBeauty",
        calificacion: 5,
        color: "Multicolor",
        tamaño: "Grande",
        material: "Varios"
    },
    {
        id: 10,
        nombre: "Robot Aspirador Inteligente",
        precio: 979999,
        imagen: "https://cdn1.totalcommerce.cloud/homesentry/product-zoom/es/aspiradora-robot-pure-clean-negra-90-min-pucrc26b-1.webp",
        descripcion: "Robot aspirador con mapeo láser y control por app",
        categoria: "Hogar y Cocina",
        marca: "CleanTech",
        calificacion: 5,
        color: "Blanco",
        tamaño: "35cm diámetro",
        material: "Plástico"
    },
    {
        id: 11,
        nombre: "Teclado Mecánico RGB",
        precio: 297000,
        imagen: "https://corporativo.tecnoplaza.com.co/wp-content/uploads/2020/09/Teclado-gamer-inalambrico-logitech-G9151-600x600.jpg",
        descripcion: "Teclado mecánico con retroiluminación RGB personalizable",
        categoria: "Electrónica",
        marca: "KeyPro",
        calificacion: 4,
        color: "Negro",
        tamaño: "Full",
        material: "Plástico y metal"
    },
    {
        id: 12,
        nombre: "Mochila Antirrobo",
        precio: 144000,
        imagen: "https://exitocol.vtexassets.com/arquivos/ids/513812/maletamochilamorralbolso-antirrobo-con-ext-usb-35-litros.jpg?v=637011177404100000",
        descripcion: "Mochila con compartimientos ocultos y puerto USB",
        categoria: "Accesorios",
        marca: "UrbanSafe",
        calificacion: 4,
        color: "Gris",
        tamaño: "Mediana",
        material: "Poliéster"
    },
    {
        id: 13,
        nombre: "Silla Ergonómica",
        precio: 739500,
        imagen: "https://media.falabella.com/falabellaCO/124390285_01/w=800,h=800,fit=pad",
        descripcion: "Silla de oficina ergonómica con soporte lumbar",
        categoria: "Oficina",
        marca: "ComfortSeat",
        calificacion: 4,
        color: "Negro",
        tamaño: "Grande",
        material: "Malla y metal"
    },
    {
        id: 14,
        nombre: "Bicicleta Urbana",
        precio: 1260000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_960744-MLU77499705818_072024-O.webp",
        descripcion: "Bicicleta ligera de aluminio con 7 velocidades",
        categoria: "Deportes & Aire Libre",
        marca: "CycleWay",
        calificacion: 3,
        color: "Blanco",
        tamaño: "26 pulgadas",
        material: "Aluminio"
    },
    {
        id: 15,
        nombre: "Lámpara LED Inteligente",
        precio: 207000,
        imagen: "https://nexxt-connectivity-frontend.s3.amazonaws.com/media/img/carrusel-NHB-S710_1.jpg",
        descripcion: "Lámpara con control por voz y cambio de color",
        categoria: "Hogar y Cocina",
        marca: "BrightHome",
        calificacion: 3,
        color: "Blanco",
        tamaño: "40cm",
        material: "Plástico"
    },
    {
        id: 16,
        nombre: "Gafas de Sol Polarizadas",
        precio: 108000,
        imagen: "https://static.dafiti.com.co/p/hawkers-9518-3399902-1-zoom.jpg",
        descripcion: "Protección UV400 con estilo deportivo",
        categoria: "Moda",
        marca: "SunShield",
        calificacion: 5,
        color: "Negro",
        tamaño: "Estándar",
        material: "Plástico"
    },
    {
        id: 17,
        nombre: "Parrilla Eléctrica Portátil",
        precio: 378000,
        imagen: "https://hogaruniversal.vtexassets.com/arquivos/ids/167085/L89258-PARRILLA-ELECTRICA-UNIVERSAL---01.jpg?v=638435474327100000",
        descripcion: "Ideal para interiores, con control de temperatura",
        categoria: "Hogar y Cocina",
        marca: "GrillMaster",
        calificacion: 3,
        color: "Rojo",
        tamaño: "45cm",
        material: "Metal"
    },
    {
        id: 18,
        nombre: "Cámara de Seguridad WiFi",
        precio: 342000,
        imagen: "https://exitocol.vtexassets.com/arquivos/ids/10514182/camara-de-seguridad-wifi-inalambrica-vision-nocturna-1080p-robotica.jpg?v=637698441096370000",
        descripcion: "Grabación HD, detección de movimiento y visión nocturna",
        categoria: "Electrónica",
        marca: "SafeVision",
        calificacion: 5,
        color: "Blanco",
        tamaño: "Compacta",
        material: "Plástico"
    },
    {
        id: 19,
        nombre: "Set de Herramientas 100 piezas",
        precio: 433500,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_917355-MLU75193314040_032024-O.webp",
        descripcion: "Completo kit para reparaciones domésticas",
        categoria: "Hogar y Bricolaje",
        marca: "ToolBox",
        calificacion: 3,
        color: "Negro",
        tamaño: "Grande",
        material: "Acero"
    },
    {
        id: 20,
        nombre: "Altavoz Bluetooth Resistente al Agua",
        precio: 234000,
        imagen: "https://i.blogs.es/619899/mifa-a90/650_1200.jpg",
        descripcion: "Altavoz compacto con sonido potente y batería de larga duración",
        categoria: "Electrónica",
        marca: "SoundBox",
        calificacion: 5,
        color: "Azul",
        tamaño: "Pequeño",
        material: "Plástico"
    }


];

// Variables globales
let carrito = [];
let filtrosActivos = {
    categoria: [],
    rangoPrecio: [],
    marca: [],
    calificacion: [],
    color: [],
    tamaño: [],
    material: []
};

// Sistema de usuarios
let usuarioActual = null;
let usuarios = [];

// Función para esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Cargar usuarios desde localStorage
    cargarUsuariosDesdeStorage();
    
    // Verificar si hay un usuario con sesión activa
    verificarSesionActiva();
    
    // Obtener referencias a elementos del DOM
    const contenedorProductos = document.getElementById('productos-container');
    const carritoItems = document.getElementById('carrito-items');
    const totalCarrito = document.getElementById('total-carrito');
    const contadorCarrito = document.getElementById('cart-count');
    const contenidoRecibo = document.getElementById('contenido-recibo');
    const pdfPreview = document.getElementById('pdf-preview');
    const searchInput = document.getElementById('searchInput');
    const filtroCategorias = document.getElementById('filtro-categorias');
    const filtroPrecio = document.getElementById('filtro-precio');
    const filtroMarca = document.getElementById('filtro-marca');
    const filtroCalificacion = document.getElementById('filtro-calificacion');
    const filtroColor = document.getElementById('filtro-color');
    const filtroTamaño = document.getElementById('filtro-tamaño');
    const filtroMaterial = document.getElementById('filtro-material');
    const btnFiltrar = document.getElementById('btn-filtrar');

    // Event listeners para modales de usuario
    const btnLogin = document.getElementById('btn-login');
    const btnRegistro = document.getElementById('btn-registro');
    const btnLogout = document.getElementById('btn-logout');
    
    if (btnLogin) {
        btnLogin.addEventListener('click', mostrarLoginModal);
    }
    
    if (btnRegistro) {
        btnRegistro.addEventListener('click', mostrarRegistroModal);
    }
    
    if (btnLogout) {
        btnLogout.addEventListener('click', cerrarSesion);
    }
    
    // Configurar formularios de login y registro
    const formLogin = document.getElementById('form-login');
    const formRegistro = document.getElementById('form-registro');
    
    if (formLogin) {
        formLogin.addEventListener('submit', function(e) {
            e.preventDefault();
            iniciarSesion();
        });
    }
    
    if (formRegistro) {
        formRegistro.addEventListener('submit', function(e) {
            e.preventDefault();
            registrarUsuario();
        });
    }
    
    // Verificar si los elementos existen
    if (!contenedorProductos) {
        console.error('Error: El elemento productos-container no existe en el DOM');
        return;
    }
    
    // Inicializar la aplicación
    cargarProductos(productos);
    inicializarFiltros();
    
    // Agregar event listener para la búsqueda si existe el elemento
    if (searchInput) {
        searchInput.addEventListener('input', buscarProductos);
    }
    
    // Event listener para el botón de filtrar
    if (btnFiltrar) {
        btnFiltrar.addEventListener('click', aplicarFiltros);
    }
    
    // Función para cargar productos
    function cargarProductos(productosAMostrar) {
        contenedorProductos.innerHTML = '';
        if (productosAMostrar.length === 0) {
            contenedorProductos.innerHTML = '<div class="sin-resultados">No se encontraron productos que coincidan con tu búsqueda.</div>';
            return;
        }
        
        productosAMostrar.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');
            productoDiv.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="producto-contenido">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <div class="producto-detalles">
                        <span class="producto-categoria">${producto.categoria}</span>
                        <span class="producto-calificacion">${generarEstrellas(producto.calificacion)}</span>
                    </div>
                    <p><strong>Precio: ${producto.precio.toLocaleString()}</strong></p>
                    <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
                </div>
            `;
            contenedorProductos.appendChild(productoDiv);
        });
    }
    
    // Función para generar estrellas según calificación
    function generarEstrellas(calificacion) {
        let estrellas = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= calificacion) {
                estrellas += '<i class="fas fa-star"></i>';
            } else {
                estrellas += '<i class="far fa-star"></i>';
            }
        }
        return estrellas;
    }
    
    // Inicializar filtros
    function inicializarFiltros() {
        // Extraer valores únicos para cada filtro
        const categorias = [...new Set(productos.map(p => p.categoria))];
        const marcas = [...new Set(productos.map(p => p.marca))];
        const colores = [...new Set(productos.map(p => p.color))];
        const tamaños = [...new Set(productos.map(p => p.tamaño))];
        const materiales = [...new Set(productos.map(p => p.material))];
        
        // Rellenar los selects de filtros
        if (filtroCategorias) {
            categorias.forEach(cat => {
                const option = document.createElement('option');
                option.value = cat;
                option.textContent = cat;
                filtroCategorias.appendChild(option);
            });
        }
        
        if (filtroMarca) {
            marcas.forEach(marca => {
                const option = document.createElement('option');
                option.value = marca;
                option.textContent = marca;
                filtroMarca.appendChild(option);
            });
        }
        
        if (filtroColor) {
            colores.forEach(color => {
                const option = document.createElement('option');
                option.value = color;
                option.textContent = color;
                filtroColor.appendChild(option);
            });
        }
        
        if (filtroTamaño) {
            tamaños.forEach(tamaño => {
                const option = document.createElement('option');
                option.value = tamaño;
                option.textContent = tamaño;
                filtroTamaño.appendChild(option);
            });
        }
        
        if (filtroMaterial) {
            materiales.forEach(material => {
                const option = document.createElement('option');
                option.value = material;
                option.textContent = material;
                filtroMaterial.appendChild(option);
            });
        }
        
        // Event listeners para actualizar filtros activos
        if (filtroCategorias) {
            filtroCategorias.addEventListener('change', function() {
                actualizarFiltroActivo('categoria', this.value);
            });
        }
        
        if (filtroPrecio) {
            filtroPrecio.addEventListener('change', function() {
                actualizarFiltroActivo('rangoPrecio', this.value);
            });
        }
        
        if (filtroMarca) {
            filtroMarca.addEventListener('change', function() {
                actualizarFiltroActivo('marca', this.value);
            });
        }
        
        if (filtroCalificacion) {
            filtroCalificacion.addEventListener('change', function() {
                actualizarFiltroActivo('calificacion', parseInt(this.value));
            });
        }
        
        if (filtroColor) {
            filtroColor.addEventListener('change', function() {
                actualizarFiltroActivo('color', this.value);
            });
        }
        
        if (filtroTamaño) {
            filtroTamaño.addEventListener('change', function() {
                actualizarFiltroActivo('tamaño', this.value);
            });
        }
        
        if (filtroMaterial) {
            filtroMaterial.addEventListener('change', function() {
                actualizarFiltroActivo('material', this.value);
            });
        }
    }
    
    // Actualizar filtros activos
    function actualizarFiltroActivo(tipo, valor) {
        if (valor) {
            // Si se selecciona un valor (que no sea "Todos"), lo agregamos a los filtros activos
            if (!filtrosActivos[tipo].includes(valor) && valor !== "todos") {
                filtrosActivos[tipo] = [valor];
            } else if (valor === "todos") {
                filtrosActivos[tipo] = []; // Limpiar filtro si se selecciona "Todos"
            }
        }
    }
    
    // Aplicar filtros
    function aplicarFiltros() {
        let productosFiltrados = [...productos];
        
        // Filtrar por categoría
        if (filtrosActivos.categoria.length > 0) {
            productosFiltrados = productosFiltrados.filter(producto => 
                filtrosActivos.categoria.includes(producto.categoria)
            );
        }
        
        // Filtrar por rango de precio
        if (filtrosActivos.rangoPrecio.length > 0) {
            productosFiltrados = productosFiltrados.filter(producto => {
                if (filtrosActivos.rangoPrecio.includes('bajo')) {
                    return producto.precio < 50;
                } else if (filtrosActivos.rangoPrecio.includes('medio')) {
                    return producto.precio >= 50 && producto.precio <= 200;
                } else if (filtrosActivos.rangoPrecio.includes('alto')) {
                    return producto.precio > 200;
                }
                return true;
            });
        }
        
        // Filtrar por marca
        if (filtrosActivos.marca.length > 0) {
            productosFiltrados = productosFiltrados.filter(producto => 
                filtrosActivos.marca.includes(producto.marca)
            );
        }
        
        // Filtrar por calificación
        if (filtrosActivos.calificacion.length > 0) {
            productosFiltrados = productosFiltrados.filter(producto => 
                filtrosActivos.calificacion.includes(producto.calificacion)
            );
        }
        
        // Filtrar por color
        if (filtrosActivos.color.length > 0) {
            productosFiltrados = productosFiltrados.filter(producto => 
                filtrosActivos.color.includes(producto.color)
            );
        }
        
        // Filtrar por tamaño
        if (filtrosActivos.tamaño.length > 0) {
            productosFiltrados = productosFiltrados.filter(producto => 
                filtrosActivos.tamaño.includes(producto.tamaño)
            );
        }
        
        // Filtrar por material
        if (filtrosActivos.material.length > 0) {
            productosFiltrados = productosFiltrados.filter(producto => 
                filtrosActivos.material.includes(producto.material)
            );
        }
        
        // Si hay texto en la búsqueda, aplicar ese filtro también
        const termino = searchInput ? searchInput.value.toLowerCase() : '';
        if (termino) {
            productosFiltrados = productosFiltrados.filter(producto => 
                producto.nombre.toLowerCase().includes(termino) || 
                producto.descripcion.toLowerCase().includes(termino)
            );
        }
        
        // Cargar los productos filtrados
        cargarProductos(productosFiltrados);
    }
    
    // Función de búsqueda
    function buscarProductos() {
        const termino = searchInput.value.toLowerCase();
        
        // Aplicar filtros activos junto con el término de búsqueda
        aplicarFiltros();
    }

    // Hacer que las funciones estén disponibles globalmente
    window.cargarProductos = cargarProductos;
    window.buscarProductos = buscarProductos;
    window.agregarAlCarrito = agregarAlCarrito;
    window.eliminarDelCarrito = eliminarDelCarrito;
    window.mostrarCarrito = mostrarCarrito;
    window.cerrarCarrito = cerrarCarrito;
    window.mostrarRecibo = mostrarRecibo;
    window.cerrarRecibo = cerrarRecibo;
    window.descargarRecibo = descargarRecibo;
    window.imprimirRecibo = imprimirRecibo;
    window.aplicarFiltros = aplicarFiltros;
    window.limpiarFiltros = limpiarFiltros;
    window.registrarUsuario = registrarUsuario;
    window.iniciarSesion = iniciarSesion;
    window.cerrarSesion = cerrarSesion;
    window.mostrarLoginModal = mostrarLoginModal;
    window.mostrarRegistroModal = mostrarRegistroModal;
    window.ocultarLoginModal = ocultarLoginModal;
    window.ocultarRegistroModal = ocultarRegistroModal;
    window.mostrarPagoModal = mostrarPagoModal;
    window.ocultarPagoModal = ocultarPagoModal;
    window.procesarPago = procesarPago;
    
    // Alternar formulario según método de pago
window.mostrarFormularioPago = function(metodo) {
    const tarjeta = document.getElementById('formulario-tarjeta');
    const pse = document.getElementById('formulario-pse');
    const btnTarjeta = document.getElementById('btn-tarjeta');
    const btnPSE = document.getElementById('btn-pse');

    if (metodo === 'tarjeta') {
        tarjeta.style.display = 'block';
        pse.style.display = 'none';
        btnTarjeta.classList.add('activo');
        btnPSE.classList.remove('activo');
    } else {
        tarjeta.style.display = 'none';
        pse.style.display = 'block';
        btnPSE.classList.add('activo');
        btnTarjeta.classList.remove('activo');
    }
};

// Procesamiento de pago con PSE
window.procesarPagoPSE = function(event) {
    event.preventDefault();

    const nombre = document.getElementById('pse-nombre').value;
    const documento = document.getElementById('pse-documento').value;
    const banco = document.getElementById('pse-banco').value;

    if (!nombre || !documento || !banco) {
        mostrarNotificacion('Por favor completa todos los datos de PSE');
        return;
    }

    mostrarIndicadorCarga('Procesando pago con PSE...');
    setTimeout(() => {
        ocultarIndicadorCarga();
        ocultarPagoModal();
        mostrarRecibo();
        carrito = [];
        actualizarCarrito();
        mostrarNotificacion('¡Pago con PSE completado!');
    }, 2000);
};

    // Función para limpiar todos los filtros
    function limpiarFiltros() {
        filtrosActivos = {
            categoria: [],
            rangoPrecio: [],
            marca: [],
            calificacion: [],
            color: [],
            tamaño: [],
            material: []
        };
        
        // Resetear todos los selects a su valor por defecto
        if (filtroCategorias) filtroCategorias.value = "todos";
        if (filtroPrecio) filtroPrecio.value = "todos";
        if (filtroMarca) filtroMarca.value = "todos";
        if (filtroCalificacion) filtroCalificacion.value = "todos";
        if (filtroColor) filtroColor.value = "todos";
        if (filtroTamaño) filtroTamaño.value = "todos";
        if (filtroMaterial) filtroMaterial.value = "todos";
        
        // Cargar todos los productos
        cargarProductos(productos);
    }
    
    // Función para agregar al carrito
    function agregarAlCarrito(id) {
        const producto = productos.find(p => p.id === id);
        if (producto) {
            carrito.push(producto);
            actualizarCarrito();
            
            // Mostrar mensaje de confirmación
            mostrarNotificacion(`${producto.nombre} añadido al carrito`);
        }
    }
    
    // Función para mostrar notificación temporal
    function mostrarNotificacion(mensaje) {
        // Verificar si ya existe una notificación y eliminarla
        const notificacionExistente = document.querySelector('.notificacion-flotante');
        if (notificacionExistente) {
            notificacionExistente.remove();
        }
        
        // Crear elemento de notificación
        const notificacion = document.createElement('div');
        notificacion.classList.add('notificacion-flotante');
        notificacion.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${mensaje}</span>
        `;
        document.body.appendChild(notificacion);
        
        // Mostrar notificación
        setTimeout(() => {
            notificacion.classList.add('mostrar');
        }, 10);
        
        // Ocultar y eliminar la notificación después de un tiempo
        setTimeout(() => {
            notificacion.classList.remove('mostrar');
            setTimeout(() => {
                notificacion.remove();
            }, 300);
        }, 3000);
    }
    
    // Función para actualizar el carrito
    function actualizarCarrito() {
        if (!carritoItems) return;
        
        carritoItems.innerHTML = '';
        let total = 0;
        
        carrito.forEach((producto, index) => {
            const itemCarrito = document.createElement('div');
            itemCarrito.classList.add('carrito-item');
            itemCarrito.innerHTML = `
                <span>${producto.nombre}</span>
                <span>${producto.precio.toLocaleString()}</span>
                <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
            `;
            carritoItems.appendChild(itemCarrito);
            total += producto.precio;
        });
    
        if (totalCarrito) {
            totalCarrito.innerHTML = `Total: ${total.toLocaleString()}`;
        }
        
        if (contadorCarrito) {
            contadorCarrito.textContent = carrito.length;
        }
    }
    
    // Función para eliminar del carrito
    function eliminarDelCarrito(index) {
        carrito.splice(index, 1);
        actualizarCarrito();
    }
    
    // Funciones para manejar el modal del carrito
    function mostrarCarrito() {
        const modalCarrito = document.getElementById('modal-carrito');
        if (modalCarrito) {
            modalCarrito.style.display = 'block';
        }
    }
    
    function cerrarCarrito() {
        const modalCarrito = document.getElementById('modal-carrito');
        if (modalCarrito) {
            modalCarrito.style.display = 'none';
        }
    }
    
    // Funciones para manejar el modal de login
    function mostrarLoginModal() {
        const modalLogin = document.getElementById('modal-login');
        if (modalLogin) {
            modalLogin.style.display = 'block';
        }
    }
    
    function ocultarLoginModal() {
        const modalLogin = document.getElementById('modal-login');
        if (modalLogin) {
            modalLogin.style.display = 'none';
        }
    }
    
    // Funciones para manejar el modal de registro
    function mostrarRegistroModal() {
        const modalRegistro = document.getElementById('modal-registro');
        if (modalRegistro) {
            modalRegistro.style.display = 'block';
        }
        ocultarLoginModal();
    }
    
    function ocultarRegistroModal() {
        const modalRegistro = document.getElementById('modal-registro');
        if (modalRegistro) {
            modalRegistro.style.display = 'none';
        }
    }
    
    // Funciones para manejar el modal de pago
    function mostrarPagoModal() {
        if (!usuarioActual) {
            mostrarLoginModal();
            mostrarNotificacion('Debe iniciar sesión para continuar con la compra');
            return;
        }
        
        const modalPago = document.getElementById('modal-pago');
        if (modalPago) {
            // Llenar el formulario con los datos del usuario actual
            document.getElementById('pago-nombre').value = usuarioActual.nombre || '';
            document.getElementById('pago-apellido').value = usuarioActual.apellido || '';
            document.getElementById('pago-direccion').value = usuarioActual.direccion || '';
            document.getElementById('pago-ciudad').value = usuarioActual.ciudad || '';
            document.getElementById('pago-codigo-postal').value = usuarioActual.codigoPostal || '';
            document.getElementById('pago-telefono').value = usuarioActual.telefono || '';
            
            modalPago.style.display = 'block';
        }
        cerrarCarrito();
    }
    
    function ocultarPagoModal() {
        const modalPago = document.getElementById('modal-pago');
        if (modalPago) {
            modalPago.style.display = 'none';
        }
    }
    
    // Función para calcular total
    function calcularTotal() {
        return carrito.reduce((total, producto) => total + producto.precio, 0);
    }
    
    // Gestión de usuarios
    function cargarUsuariosDesdeStorage() {
        const usuariosStorage = localStorage.getItem('usuarios');
        if (usuariosStorage) {
            usuarios = JSON.parse(usuariosStorage);
        }
        
        // Si no hay usuarios, crear algunos de ejemplo
        if (usuarios.length === 0) {
            usuarios = [
                {
                    email: 'usuario@ejemplo.com',
                    password: '123456',
                    nombre: 'Usuario',
                    apellido: 'Ejemplo',
                    direccion: 'Calle Principal 123',
                    ciudad: 'Ciudad Ejemplo',
                    codigoPostal: '12345',
                    telefono: '123456789'
                }
            ];
            guardarUsuariosEnStorage();
        }
    }
    
    function guardarUsuariosEnStorage() {
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
    
    function verificarSesionActiva() {
        const usuarioGuardado = localStorage.getItem('usuarioActual');
        if (usuarioGuardado) {
            usuarioActual = JSON.parse(usuarioGuardado);
            actualizarInterfazUsuario();
        }
    }
    
    function actualizarInterfazUsuario() {
        const btnLogin = document.getElementById('btn-login');
        const btnRegistro = document.getElementById('btn-registro');
        const btnLogout = document.getElementById('btn-logout');
        const nombreUsuario = document.getElementById('nombre-usuario');
        
        if (usuarioActual) {
            // Usuario logueado
            if (btnLogin) btnLogin.style.display = 'none';
            if (btnRegistro) btnRegistro.style.display = 'none';
            if (btnLogout) btnLogout.style.display = 'inline-block';
            if (nombreUsuario) {
                nombreUsuario.textContent = `Hola, ${usuarioActual.nombre}`;
                nombreUsuario.style.display = 'inline-block';
            }
        } else {
            // No hay usuario logueado
            if (btnLogin) btnLogin.style.display = 'inline-block';
            if (btnRegistro) btnRegistro.style.display = 'inline-block';
            if (btnLogout) btnLogout.style.display = 'none';
            if (nombreUsuario) nombreUsuario.style.display = 'none';
        }
    }
    
    function registrarUsuario() {
        const email = document.getElementById('registro-email').value;
        const password = document.getElementById('registro-password').value;
        const nombre = document.getElementById('registro-nombre').value;
        const apellido = document.getElementById('registro-apellido').value;
        const direccion = document.getElementById('registro-direccion').value;
        const ciudad = document.getElementById('registro-ciudad').value;
        const codigoPostal = document.getElementById('registro-codigo-postal').value;
        const telefono = document.getElementById('registro-telefono').value;
        
        // Validar que todos los campos estén llenos
        if (!email || !password || !nombre || !apellido || !direccion || !ciudad || !codigoPostal || !telefono) {
            mostrarNotificacion('Por favor, completa todos los campos');
            return;
        }
        
        // Verificar si el email ya existe
        const usuarioExistente = usuarios.find(u => u.email === email);
        if (usuarioExistente) {
            mostrarNotificacion('Este email ya está registrado');
            return;
        }
        
        // Crear el nuevo usuario
        const nuevoUsuario = {
            email,
            password,
            nombre,
            apellido,
            direccion,
            ciudad,
            codigoPostal,
            telefono
        };
        
        // Agregar a la lista de usuarios
        usuarios.push(nuevoUsuario);
        guardarUsuariosEnStorage();
        
        // Iniciar sesión con el nuevo usuario
        usuarioActual = nuevoUsuario;
        localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));
        
        // Actualizar interfaz
        actualizarInterfazUsuario();
        
        // Cerrar modal de registro
        ocultarRegistroModal();
        
        mostrarNotificacion('¡Registro exitoso! Has iniciado sesión automáticamente');
    }
    
    function iniciarSesion() {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // Buscar usuario
        const usuario = usuarios.find(u => u.email === email && u.password === password);
        
        if (usuario) {
            usuarioActual = usuario;
            localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));
            
            // Actualizar interfaz
            actualizarInterfazUsuario();
            
            // Cerrar modal de login
            ocultarLoginModal();
            
            mostrarNotificacion('¡Inicio de sesión exitoso!');
        } else {
            mostrarNotificacion('Email o contraseña incorrectos');
        }
    }
    
   function cerrarSesion() {
        usuarioActual = null;
        localStorage.removeItem('usuarioActual');
        
        // Actualizar interfaz
        actualizarInterfazUsuario();
        
        // Limpiar carrito
        carrito = [];
        actualizarCarrito();
        
        mostrarNotificacion('Has cerrado sesión correctamente');
    }
    
    // Funciones para generar el recibo de compra
    function mostrarRecibo() {
        if (carrito.length === 0) {
            mostrarNotificacion('El carrito está vacío');
            return;
        }
        
        const modalRecibo = document.getElementById('modal-recibo');
        if (!modalRecibo) return;
        
        const contenidoRecibo = document.getElementById('contenido-recibo');
        if (!contenidoRecibo) return;
        
        // Generar el contenido del recibo
        let total = 0;
        let contenidoHTML = `
            <div class="cabecera-recibo">
                <h2>Recibo de Compra</h2>
                <p>Fecha: ${new Date().toLocaleDateString()}</p>
                ${usuarioActual ? `<p>Cliente: ${usuarioActual.nombre} ${usuarioActual.apellido}</p>` : ''}
            </div>
            <table class="tabla-recibo">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        carrito.forEach(producto => {
            contenidoHTML += `
                <tr>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio.toLocaleString()}</td>
                </tr>
            `;
            total += producto.precio;
        });
        
        contenidoHTML += `
                </tbody>
                <tfoot>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>${total.toLocaleString()}</strong></td>
                    </tr>
                </tfoot>
            </table>
            <div class="footer-recibo">
                <p>¡Gracias por tu compra!</p>
            </div>
        `;
        
        contenidoRecibo.innerHTML = contenidoHTML;
        modalRecibo.style.display = 'block';
        
        // Generar vista previa PDF
        generarVistaPreviewPDF(contenidoHTML);
    }
    
    function generarVistaPreviewPDF(contenidoHTML) {
        const pdfPreview = document.getElementById('pdf-preview');
        if (!pdfPreview) return;
        
        // Aquí podríamos generar una vista previa del PDF si tuviéramos una biblioteca para ello
        // Por ahora simplemente mostraremos el contenido en un contenedor con estilo de PDF
        pdfPreview.innerHTML = `
            <div class="pdf-container">
                ${contenidoHTML}
            </div>
        `;
    }
    
    function cerrarRecibo() {
        const modalRecibo = document.getElementById('modal-recibo');
        if (modalRecibo) {
            modalRecibo.style.display = 'none';
        }
    }
    
    function descargarRecibo() {
        // Aquí implementaríamos la funcionalidad para descargar el recibo como PDF
        // Usando una biblioteca como jsPDF, pero para simplificar solo mostraremos un mensaje
        mostrarNotificacion('Recibo descargado correctamente');
    }
    
   function imprimirRecibo() {
    const contenidoRecibo = document.getElementById('contenido-recibo').innerHTML;
    const fecha = new Date().toLocaleDateString();

    const ventanaImpresion = window.open('', '_blank');
    ventanaImpresion.document.write(`
        <html>
        <head>
            
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, sans-serif;
                    padding: 40px;
                    background: #fffdf7;
                    color: #333;
                }

                .cabecera-recibo {
                    text-align: center;
                    margin-bottom: 30px;
                }

                .cabecera-recibo img {
                    height: 80px;
                    margin-bottom: 10px;
                }

                .cabecera-recibo h1 {
                    font-size: 24px;
                    color: #b76e20;
                    margin-bottom: 5px;
                }

                .cabecera-recibo .fecha {
                    font-size: 14px;
                    color: #666;
                }

                .tabla-recibo {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 30px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                }

                .tabla-recibo th {
                    background-color: #ff7043;
                    color: white;
                    padding: 10px;
                    text-align: left;
                    font-size: 14px;
                }

                .tabla-recibo td {
                    border: 1px solid #ddd;
                    padding: 10px;
                    font-size: 14px;
                }

                .tabla-recibo tr:nth-child(even) {
                    background-color: #fff3e0;
                }

                .total {
                    text-align: right;
                    font-weight: bold;
                    font-size: 16px;
                    color: #000;
                }

                .footer-recibo {
                    text-align: center;
                    margin-top: 40px;
                    font-size: 13px;
                    color: #777;
                    border-top: 1px solid #ddd;
                    padding-top: 15px;
                }
            </style>
        </head>
        <body>
            <div class="cabecera-recibo">
                <img src="imagenes/logo.png" alt="Digital Marketplace Hub">
                
                <div class="fecha">Fecha: ${fecha}</div>
            </div>

            ${contenidoRecibo}

            <div class="footer-recibo">
                ¡Gracias por tu compra!<br>
                Digital Marketplace Hub · www.digitalmarketplacehub.com
            </div>
        </body>
        </html>
    `);

    ventanaImpresion.document.close();
    ventanaImpresion.print();
    ventanaImpresion.close();
}

    
    // Función para procesar el pago
    function procesarPago(event) {
        event.preventDefault();
        
        // Validar que el carrito no esté vacío
        if (carrito.length === 0) {
            mostrarNotificacion('El carrito está vacío');
            return;
        }
        
        // Validar campos del formulario de pago
        const nombreTarjeta = document.getElementById('pago-tarjeta-nombre').value;
        const numeroTarjeta = document.getElementById('pago-tarjeta-numero').value;
        const fechaExpiracion = document.getElementById('pago-tarjeta-expiracion').value;
        const cvv = document.getElementById('pago-tarjeta-cvv').value;
        
        if (!nombreTarjeta || !numeroTarjeta || !fechaExpiracion || !cvv) {
            mostrarNotificacion('Por favor, completa todos los campos de pago');
            return;
        }
        
        // Validación básica del formato de los campos
        const regexNumeroTarjeta = /^\d{16}$/;
        const regexFechaExpiracion = /^(0[1-9]|1[0-2])\/\d{2}$/;
        const regexCVV = /^\d{3,4}$/;
        
        if (!regexNumeroTarjeta.test(numeroTarjeta.replace(/\s/g, ''))) {
            mostrarNotificacion('El número de tarjeta debe tener 16 dígitos');
            return;
        }
        
        if (!regexFechaExpiracion.test(fechaExpiracion)) {
            mostrarNotificacion('El formato de fecha de expiración debe ser MM/AA');
            return;
        }
        
        if (!regexCVV.test(cvv)) {
            mostrarNotificacion('El CVV debe tener 3 o 4 dígitos');
            return;
        }
        
        // Simulamos un procesamiento de pago
        mostrarIndicadorCarga('Procesando pago...');
        
        setTimeout(() => {
            ocultarIndicadorCarga();
            
            // Ocultar modal de pago
            ocultarPagoModal();
            
            // Mostrar recibo
            mostrarRecibo();
            
            // Limpiar carrito después de la compra exitosa
            carrito = [];
            actualizarCarrito();
            
            mostrarNotificacion('¡Pago procesado correctamente!');
        }, 2000);
    }
    
    // Funciones para indicador de carga
    function mostrarIndicadorCarga(mensaje) {
        // Verificar si ya existe un indicador de carga
        let indicadorCarga = document.querySelector('.indicador-carga');
        
        if (!indicadorCarga) {
            // Crear el indicador de carga
            indicadorCarga = document.createElement('div');
            indicadorCarga.classList.add('indicador-carga');
            indicadorCarga.innerHTML = `
                <div class="spinner"></div>
                <p>${mensaje || 'Cargando...'}</p>
            `;
            document.body.appendChild(indicadorCarga);
        } else {
            // Actualizar mensaje si es necesario
            const mensajeElement = indicadorCarga.querySelector('p');
            if (mensajeElement && mensaje) {
                mensajeElement.textContent = mensaje;
            }
            
            // Asegurarse de que sea visible
            indicadorCarga.style.display = 'flex';
        }
    }
    
    function ocultarIndicadorCarga() {
        const indicadorCarga = document.querySelector('.indicador-carga');
        if (indicadorCarga) {
            indicadorCarga.remove();
        }
    }
    
    // Función para agregar eventos al cambiar entre pestañas
    window.addEventListener('beforeunload', function() {
        // Guardar carrito en localStorage para recuperarlo después
        localStorage.setItem('carrito', JSON.stringify(carrito));
    });
    
    // Recuperar carrito si existe en localStorage
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        try {
            const carritoJSON = JSON.parse(carritoGuardado);
            // Verificar que los productos aún existen en la base de datos
            carrito = carritoJSON.filter(itemCarrito => 
                productos.some(producto => producto.id === itemCarrito.id)
            );
            actualizarCarrito();
        } catch (error) {
            console.error('Error al recuperar el carrito guardado:', error);
        }
    }
    
    // Escuchar por cambios en el tamaño de la ventana para hacer responsive
    window.addEventListener('resize', function() {
        // Ajustar la vista en función del tamaño de pantalla
        const ancho = window.innerWidth;
        
        if (ancho < 768) { // Móvil
            document.body.classList.add('vista-movil');
            document.body.classList.remove('vista-tablet', 'vista-desktop');
        } else if (ancho < 1024) { // Tablet
            document.body.classList.add('vista-tablet');
            document.body.classList.remove('vista-movil', 'vista-desktop');
        } else { // Desktop
            document.body.classList.add('vista-desktop');
            document.body.classList.remove('vista-movil', 'vista-tablet');
        }
    });
    
    // Iniciar con la clase correcta según el tamaño de pantalla
    window.dispatchEvent(new Event('resize'));
});