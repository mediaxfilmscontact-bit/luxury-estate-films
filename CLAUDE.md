# Luxury Estate Films — Landing Page

## Negocio
Producción audiovisual (foto, video, drone) para el sector inmobiliario de lujo en México.
**Público objetivo:** Asesores inmobiliarios, desarrollos, arquitectos y constructores que venden propiedades premium.
**Propuesta de valor:** Visuales que igualan la calidad del inmueble y posicionan la marca del asesor.

## Stack
- HTML + CSS + JS puro. Sin frameworks ni npm.
- Un solo `index.html`, `css/styles.css`, `js/main.js`.

## Contacto
- WhatsApp: +52 4772402755 → `https://wa.me/524772402755`
- Email: mediaxfilmscontact@gmail.com

## Colores
| Rol                     | Hex       |
|-------------------------|-----------|
| Fondo principal         | `#F8F8F8` |
| Texto principal         | `#1E1E1E` |
| Texto secundario        | `#2F2E2E` |
| Acento (teal de marca)  | `#234F60` |
| Acento hover            | `#1A3B49` |
| Acento sobre oscuro     | `#8DB0BC` |
| Crema (texto sobre teal)| `#F5F2EA` |
| Footer / oscuro         | `#0A0A0A` |

> El teal `#234F60` es oscuro: sobre fondos oscuros (hero, footer, tarjetas
> destacadas) se usa `--accent-on-dark` (`#8DB0BC`) o crema para que sea legible.
> Las tarjetas destacadas (Video, Seriedad, Luxury) usan fondo teal con texto crema.

## Tipografías (Google Fonts)
- **Títulos:** Fraunces (`var(--font-h)`) — serif editorial, mixed-case, sin itálicas
- **Cuerpo / UI:** Jost (`var(--font-b)`)
- Sin uppercase ni cursivas en toda la página (decisión de diseño).
- Las carpetas `fonts/code` y `fonts/a_pompadour` quedaron sin uso (descartadas).

## Secciones (orden en index.html)
1. **Hero** — pantalla completa, fondo oscuro con grid dorado sutil, CTA a WhatsApp
2. **Filosofía** — grid 2 col con stats (3× consultas, +68% decisión antes de visita)
3. **Proceso** — 4 pasos sobre fondo oscuro: Briefing → Producción → Edición → Entrega
4. **Servicios** — 3 cards: Fotografía, Video (destacado), Drone
5. **Clientes** — logos de clientes (placeholders listos para sustituir con `<img>`)
6. **Portafolio** — grid asimétrico (3 cols, wide items), placeholders para fotos reales
7. **Paquetes** — 5 paquetes en layout 3+2
8. **Contacto** — sección oscura, CTA WhatsApp grande
9. **Footer** — logo, nav, contacto
- **WhatsApp FAB** fijo en esquina inferior derecha

## Paquetes
| Nombre             | Precio MXN | Notas                                      |
|--------------------|------------|---------------------------------------------|
| Individual Inicial | $3,500     | 1-2h, 10 fotos, video 30s-1min, 1 revisión |
| Individual Pro     | $5,750     | 2-3h, 10 fotos, video, 2 renders IA        |
| Percepción         | $6,500     | 1 día, 2 props, 4 videos, 20 fotos         |
| Seriedad ⭐        | $9,000     | 2-3 props, 2v simples + 2v dinámicos, 25 fotos, renders IA |
| Luxury             | $12,500    | 2-4 props, 4 videos cin., 30 fotos, 6-8 renders IA |

`Seriedad` tiene badge "Más popular" y estilo dark destacado.
`Luxury` tiene estilo dark gold.

## Pendiente (assets)
- **Hero:** reemplazar `.hero__bg` background con `url('../img/hero.jpg')` y agregar `background-size: cover; background-position: center;`
- **Portafolio:** reemplazar `.portafolio__img` background con las fotos reales (5 imágenes)
- **Clientes:** reemplazar `<span>Logo N</span>` con `<img src="img/logos/X.svg" alt="..." />`
- Carpeta `img/` ya existe: `img/portfolio/` y `img/logos/`

## JS (main.js)
- Nav scroll → agrega `.nav--scrolled` (dark bg) al pasar 40px
- Menú hamburger móvil con bloqueo de scroll del body
- Smooth scroll en todos los `a[href^="#"]` compensando altura de nav
- Scroll reveal via `IntersectionObserver` en elementos `[data-reveal]`
- Hero elements: se revelan con 200ms de delay inicial (above the fold)
