# MG Service — Sitio web

Sitio estático, multipágina, sin frameworks ni build (HTML + CSS + JS puro). Listo para subir a cualquier hosting estático.

## Estructura

```
mg-service-web/
├── index.html              Home
├── servicios.html           Servicios completos
├── nosotros.html            Quiénes somos
├── trabajos.html            Galería de trabajos realizados
├── contacto.html            Contacto + mapa
├── assets/
│   ├── css/style.css        Estilos (design system completo)
│   ├── js/main.js           Menú mobile, acordeón FAQ, año del footer
│   └── img/
│       ├── logo-white.png   Logo en blanco (para fondo oscuro, usado en header/footer)
│       ├── logo-transparent.png  Logo en negro, fondo transparente (por si lo necesitás sobre fondo claro)
│       ├── taller-interior.png   Foto real del taller
│       └── fachada-mg.png        Foto real de la fachada
└── ESTRATEGIA-MG-SERVICE.md  Documento de estrategia (auditoría, posicionamiento, copy, SEO)
```

## Datos de contacto (confirmados)

Si alguno cambia, hay que actualizarlo en los 5 archivos `.html` y en el schema JSON-LD (`<script type="application/ld+json">`) de `index.html` y `contacto.html`.

- **WhatsApp**: `+54 9 11 2233-4658` — en los links usa el formato `5491122334658` (`https://wa.me/5491122334658`).
- **Email**: `cyjautomotores@gmail.com`
- **Dirección**: Tte. Coronel Guiffra 1371, B1870 Avellaneda, Buenos Aires
- **Horarios**: lunes a viernes de 9 a 18 hs, sábados de 9 a 13 hs.
- **Dominio**: https://www.mg-service.com.ar/ (canónicas, Open Graph, `robots.txt` y `sitemap.xml` apuntan acá).

## Cómo publicarlo (deploy)

Es un sitio 100% estático — no necesita servidor ni build. Opciones más simples:

- **Netlify / Vercel**: arrastrar la carpeta completa en el dashboard, o conectar un repo de GitHub con esta misma estructura.
- **GitHub Pages**: subir esta carpeta a un repo y activar Pages apuntando a la rama principal.
- **Hosting tradicional (cPanel, etc.)**: subir todo el contenido de la carpeta por FTP a la raíz del dominio (`public_html` o similar).

No hay variables de entorno ni dependencias que instalar — son archivos estáticos.

## Notas de diseño

- Paleta y tipografía siguen el documento `ESTRATEGIA-MG-SERVICE.md`, sección 7 (Identidad visual).
- El motivo de las tres franjas diagonales del isotipo se repite como elemento gráfico (`.stripes`, `.stripe-divider`) en eyebrows y separadores — es la firma visual de la marca extendida a toda la web.
- El sitio respeta `prefers-reduced-motion` y tiene foco de teclado visible en links y botones.
