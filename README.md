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

## ⚠️ Antes de publicar — reemplazar:

1. **Número de WhatsApp**: está como placeholder `5491100000000` en los botones de WhatsApp (header, hero, CTA finales, footer, botón flotante). Buscá y reemplazá ese número por el real, con formato `549` + código de área + número, sin espacios ni guiones. Aparece en los 5 archivos `.html`.
2. **Email de contacto**: `info@mgservice.com.ar` en el footer y en `contacto.html` — cambiar por el real si es distinto.
3. **Horarios**: en `contacto.html`, sección de horarios — ajustar si no coinciden con la realidad.
4. **Galería de Trabajos** (`trabajos.html`): hay 2 fotos reales y 4 placeholders ("Próximo trabajo documentado"). A medida que tengan fotos de trabajos terminados (con autorización del cliente), reemplazar los placeholders por `<img>` reales siguiendo el mismo patrón que las dos primeras.

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
