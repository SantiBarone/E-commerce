# 🌍 Kurogane3D - Plataforma de E-Commerce

## 📖 Descripción del Proyecto

**Kurogane3D** es una plataforma de e-commerce diseñada para un micro emprendimiento de venta de perfumes. La aplicación permite gestionar pedidos, procesar pagos en línea mediante **Stripe**, y ampliar el alcance de ventas a todo el territorio argentino con envíos nacionales.

### Objetivo Principal
Crear una solución web moderna que permita a Kurogane3D:
- ✅ Comercializar sus productos (perfumes) en línea
- ✅ Gestionar pedidos y entregas en toda Argentina
- ✅ Procesar pagos seguros con Stripe
- ✅ Mantener un registro de clientes y transacciones con SQL
- ✅ Aumentar su presencia digital y alcance de mercado

---

## 🚀 Características Principales

### 1. **Catálogo de Productos**
- Visualización de perfumes con descripción, precio e imagen
- Sistema de navegación intuitivo
- Detalles completos de cada producto
- Diseño responsivo para dispositivos móviles y desktop

### 2. **Sistema de Autenticación**
- Registro de nuevos usuarios
- Login seguro
- Validación de campos con JavaScript
- Almacenamiento de credenciales en base de datos SQL

### 3. **Carrito de Compras**
- Agregar/remover productos del carrito
- Visualizar cantidad y precio total
- Cálculo automático de totales

### 4. **Sistema de Pagos (Stripe)**
- Integración de Stripe para procesamiento seguro
- Soporte para múltiples métodos de pago
- Confirmación de transacciones

### 5. **Gestión de Pedidos**
- Registro de cada compra en base de datos
- Historial de pedidos por usuario
- Estados de pedido (pendiente, procesado, enviado, entregado)

### 6. **Envíos a Todo Argentina**
- Cálculo de costos de envío según región
- Integración con proveedores de logística
- Seguimiento de entregas

---

## 💻 Tecnologías Utilizadas

### **Frontend**
| Tecnología | Función |
|-----------|---------|
| **HTML5** | Estructura del sitio web |
| **CSS3** | Estilos y diseño responsivo (Flexbox, Grid) |
| **JavaScript** | Interactividad y manejo de formularios |

### **Backend & Base de Datos**
| Tecnología | Función |
|-----------|---------|
| **SQL** | Almacenamiento de usuarios, productos y pedidos |


### **Integraciones Externas**
| Servicio | Función |
|---------|---------|
| **Stripe** | Procesamiento de pagos en línea |
| **Servicios de Logística** | Envíos a todo Argentina |

---

## 📂 Estructura de Archivos del Proyecto

```
ecomerce/
│
├── 📄 index.html                 # Página de inicio
├── 📄 README.md                  # Este archivo
│
├── 📁 main-containt/
│   ├── index.html                # Página principal
│   └── catalogo.html             # Catálogo de productos
│
├── 📁 components/
│   ├── perfume1.html             # Detalle: Club de Nuit Intense Man
│   ├── perfume2.html             # Detalle: Lataffa Asad
│   ├── perfume3.html             # Detalle: Lataffa Fakhar
│   └── perfume4.html             # Detalle: Lataffa Khamra
│
├── 📁 css/
│   ├── styles.css                # Estilos base (topbar, body, títulos)
│   ├── buttons.css               # Estilos de todos los botones
│   └── products.css              # Estilos de grillas y contenedores
│
├── 📁 js/
│   └── index.js                  # Lógica de JavaScript (forms, validación)
│
├── 📁 img/
│   ├── perfume1.jpg              # Imagen: Club de Nuit
│   ├── perfume2.jpg              # Imagen: Lataffa Asad
│   ├── perfume3.jpg              # Imagen: Lataffa Fakhar
│   ├── perfume4.jpg              # Imagen: Lataffa Khamra
│   └── logo caja.png             # Logo de Kurogane
│
├── 📄 login.html                 # Página de inicio de sesión
├── 📄 register.html              # Página de registro
└── 📄 carrito.html               # Página del carrito (próximamente)
```

---

## 🎨 Paleta de Colores

| Color | Valor RGB | Uso |
|-------|-----------|-----|
| **Negro Profundo** | rgb(17, 16, 16) | Fondo principal |
| **Gris Oscuro** | rgb(30, 30, 30) | Contenedores |
| **Blanco** | rgb(255, 255, 255) | Texto principal |
| **Gradiente Púrpura** | #667eea → #764ba2 | Botones |

---

## 🔧 Configuración e Instalación

### 1. **Requisitos Previos**
```
- Navegador web moderno (Chrome, Firefox, Safari, Edge, opera, etc.)
- Node.js 14+
- MySQL / PostgreSQL (para base de datos)
- Cuenta de Stripe (para procesamiento de pagos)
```

### 2. **Instalación Local**

#### Paso 1: Clonar el repositorio
```bash
git clone https://github.com/SantiBarone/kurogane3d.git
cd kurogane3d
```

#### Paso 2: Instalar dependencias (si usas Node.js)
```bash
npm install
```


### Para Usuarios (Clientes)

#### 1. **Registro de Cuenta**
1. Ir a la página de **Registro**
2. Completar formulario con:
   - Usuario (único)
   - Email
   - Contraseña
   - Confirmar Contraseña
3. Hacer clic en **"Registrarse"**
4. Se guardará en la base de datos automáticamente

#### 2. **Iniciar Sesión**
1. Ir a la página de **Login**
2. Ingresar Usuario y Contraseña
3. Hacer clic en **"Ingresar"**
4. Se validarán las credenciales en SQL

#### 3. **Explorar Catálogo**
1. Desde el inicio, hacer clic en **"Ver Catálogo"**
2. Se mostrarán todos los perfumes disponibles
3. Ver detalles haciendo clic en **"Comprar"**

#### 4. **Ver Detalles del Producto**
1. Se abrirá página con:
   - Nombre del perfume
   - Imagen de alta calidad
   - Descripción completa
   - Precio
   - Botón **"Agregar al Carrito"**

#### 5. **Realizar Compra (Carrito & Pago)**
1. Hacer clic en **"Agregar al Carrito"**
2. Ir a **Carrito** en la navegación
3. Revisar artículos y cantidad
4. Hacer clic en **"Proceder al Pago"**
5. Será redirigido a **Stripe**
6. Completar datos de tarjeta
7. Confirmar pago

#### 6. **Seguimiento de Pedidos**
1. Iniciar sesión
2. Ir a **"Mis Pedidos"**
3. Ver estado: Pendiente → Procesado → Enviado → Entregado
4. Código de seguimiento disponible una vez enviado

---

### Para Administradores

#### 1. **Panel de Control**
Acceder en: `http://localhost:3000/admin`

#### 2. **Gestión de Productos**
- Agregar nuevos perfumes
- Editar precios y descripciones
- Actualizar stock
- Ver imágenes de productos

#### 3. **Gestión de Pedidos**
- Ver todos los pedidos
- Cambiar estado (pendiente → procesado → enviado)
- Generar etiquetas de envío
- Ver detalles de cada orden

#### 4. **Gestión de Clientes**
- Ver lista de usuarios registrados
- Historial de compras por cliente
- Información de contacto
- Direcciones de envío

#### 5. **Reportes de Ventas**
- Ingresos por período
- Productos más vendidos
- Análisis de pagos Stripe
- Informes de devoluciones

## 🚚 Envíos a Todo Argentina

### Estrategia de Envíos

#### 1. **Zonas de Envío**
```
Zona 1 (CABA): $8000
Zona 2 (GBA): $8000
Zona 3 (Provincias): $10000

```

#### 2. **Integraciones de Logística**

- **Correo Argentino** - Cobertura nacional



-
## 🔒 Seguridad

### Medidas Implementadas

1. **Contraseñas**
   - Hash con SHA-256 o bcrypt
   - Nunca almacenar en texto plano

2. **Conexión HTTPS**
   - Certificado SSL/TLS
   - Encriptación de datos en tránsito

3. **Stripe PCI Compliance**
   - Conformidad con estándares de seguridad
   - No se procesan datos de tarjeta directamente

4. **Validación de Entrada**
   - Sanitización de datos
   - Prevención de SQL Injection
   - Validación de formularios

---

## 🐛 Solución de Problemas

### Problema: "Base de datos no conecta"
```
Solución:
1. Verificar servidor MySQL está activo
2. Comprobar credenciales en .env
3. Ejecutar: mysql -u root -p
4. Seleccionar base de datos: USE kurogane3d;
```

### Problema: "Stripe no procesa pagos"
```
Solución:
1. Verificar claves API en .env
2. Usar tarjetas de prueba de Stripe
3. Revisar consola de errores en navegador
4. Comprobar modo de prueba vs producción
```

### Problema: "Estilos CSS no se cargan"
```
Solución:
1. Verificar rutas de CSS en <head>
2. Limpiar cache del navegador (Ctrl+Shift+Del)
3. Comprobar que archivos CSS existan
4. Revisar consola de errores (F12)
```

---


## 📄 Licencia

Este proyecto es de propiedad de **BaroneDev**.

---

## 👨‍💻 Autor

**Santiago Barone**
- GitHub: [@SantiBarone](https://github.com/SantiBarone)
- Instagram: [@_santi.barone_](https://www.instagram.com/_santi.barone_)

---

## 🗺️ Roadmap Futuro
- [ ] Sistema de recomendaciones con IA
- [ ] Sistema de reseñas y calificaciones
- [ ] Análisis de datos, y informes de ventas
- [ ] Pagos con billetera virtual (MercadoPago, Ualá)

---

**Última actualización:** Noviembre 2025  
**Versión:** 1.0.0 Beta
