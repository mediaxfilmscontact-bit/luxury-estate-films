# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Misraim Orozco — Landing Page

## Negocio
Producción audiovisual (foto, video, drone) para bienes raíces en México.
**Público objetivo:** Asesores inmobiliarios, desarrollos, arquitectos y constructores que venden propiedades premium.
**Propuesta de valor:** Visuales que igualan la calidad del inmueble y posicionan la marca del asesor.

> La marca era "Luxury Estate Films"; se renombró a **Misraim Orozco**. No debe quedar rastro del nombre viejo.

## Stack
- HTML + CSS + JS puro. Sin frameworks ni npm. **Sin build system** — lo que está en las carpetas es lo que se publica.
- Un solo `index.html`, `css/styles.css`, `js/main.js`.
- Preview local: `npx serve -p 3456 -s .` (config en `.claude/launch.json`).

## Contacto
- WhatsApp: +52 4772402755 → `https://wa.me/524772402755`
- Email: mediaxfilmscontact@gmail.com

## Colores
| Rol                     | Variable CSS         | Hex       |
|-------------------------|----------------------|-----------|
| Fondo principal         | `--bg`               | `#F8F8F8` |
| Texto principal         | `--text`             | `#1E1E1E` |
| Texto secundario        | `--text-2`           | `#2F2E2E` |
| Acento (teal de marca)  | `--accent`           | `#234F60` |
| Acento hover            | `--accent-dark`      | `#1A3B49` |
| Acento sobre oscuro     | `--accent-on-dark`   | `#8DB0BC` |
| Crema (texto sobre teal)| `--cream`            | `#F5F2EA` |
| Dorado                  | `--gold`             | `#C7A24B` |
| Fondo oscuro            | `--dark`             | `#0F0F0F` |

> El teal `#234F60` es oscuro: sobre fondos oscuros se usa `--accent-on-dark` (`#8DB0BC`) o crema para que sea legible.

## Tipografías
- **Títulos:** Helvetica Neue (`var(--font-h)`, **weight 400**) — fuente de sistema, no requiere Google Fonts. En Windows cae a Arial.
- **Cuerpo / UI:** DM Sans (`var(--font-b)`, Google Fonts).
- Sin uppercase ni cursivas en toda la página (decisión de diseño).
- **Títulos de un solo color.** `.section-title em` y `.hero__title em` usan `color: inherit`. El teal se reserva para etiquetas de sección, números de paso y precios.
- Base: `html { font-size: 20px }` — todos los tamaños son rem, escala proporcional.
- Las carpetas `fonts/code` y `fonts/a_pompadour` están sin uso (descartadas).

### Títulos en una sola línea
Los títulos largos llevan la clase **`.nowrap-desktop`** (`white-space: nowrap`), que se libera en ≤768px para que puedan partirse en móvil.

> **Cuidado al tocar sus `clamp()`:** entre 769px y 1024px el `nowrap` sigue activo pero el contenedor ya es angosto. Los mínimos de `.section-title` (`1.4rem`) y `.filosofia__texto` (`0.7rem`) están calculados para que el texto más largo no se corte en esa franja. Si subes esos mínimos, verifica midiendo el ancho real del texto contra el del `.container` a 780px y 860px.

## Secciones (orden en index.html)
1. **Hero** — pantalla completa, **video de fondo** `video/hero-drone.mp4` al 25% opacidad (con `terraza.jpg` de `poster`). Título en una línea, eyebrow debajo, un solo CTA a WhatsApp.
2. **Portafolio** — carrusel horizontal **full-bleed** de 12 piezas en el orden **video → 3 fotos**, repetido 3 veces. Altura compartida + `aspect-ratio` por pieza = anchos naturales, cero recortes. Escalable: agregar o quitar piezas no rompe el layout.
3. **Filosofía** — bloque corto: título + 2 líneas. Nada más.
4. **Clientes** — label "Han confiado en nosotros" + 4 logos.
5. **Servicios** — 3 bloques grandes alternados (visual a un lado, texto al otro). Video es el bloque destacado con fondo teal.
6. **Proceso** — 4 pasos con descripción de una línea. Sin label de sección.
7. **Contacto** — CTA WhatsApp grande + email.
8. **Footer** — logo, nav, contacto.
- **WhatsApp FAB** fijo en esquina inferior derecha.

> No hay sección de Paquetes. Se eliminó a favor de precios "desde" por entregable, dentro de cada bloque de Servicios.

## Precios por entregable
| Servicio    | Precio desde | Nota                          |
|-------------|--------------|-------------------------------|
| Fotografía  | $2,500 MXN   | 10 fotos                      |
| Video       | $3,500 MXN   | Bloque destacado, "Más solicitado" |
| Drone       | $1,500 MXN   | Add-on, no servicio suelto    |

## Estructura de assets
Todos los assets son los definitivos. **~36 MB por visita** (30 MB de video + 6 MB de imágenes); cada archivo se carga una sola vez.

```
video/                      ← todos 720×1280 vertical, ~15 s, sin audio
  hero-drone.mp4            ← 1.2 MB · 1280×720 horizontal, fondo del hero
  portfolio-1/2/3.mp4       ← 5.3–5.5 MB c/u, carrusel portafolio
  servicio-video.mp4        ← 5.7 MB, bloque Video
  servicio-drone.mp4        ← 6.3 MB, bloque Drone
img/
  hero/terraza.jpg          ← poster del video del hero
  portfolio/                ← 9 fotos: pt-1, pt-1-2, pt-1-3, pt-2, … pt-3-3
  fotografia/               ← 6 fotos (foto-1 … foto-6), carrusel del bloque Fotografía
  clientes/                 ← cliente-1.png … cliente-5.png
```

Todos los videos: `autoplay muted loop playsinline`.

**Proporciones mezcladas.** Ni el portafolio ni el carrusel de fotografía asumen una proporción única: cada pieza lleva su clase (`--9-16`, `--3-4`, `--3-2`, `--16-9`) y comparte altura con las demás, de modo que el ancho sale natural y **nada se recorta**. Al agregar una foto hay que darle la clase que le corresponda.

> **`cliente-5.png` (Fonseca)** venía con el texto en blanco, invisible sobre el fondo claro. Se convirtió a negro conservando el verde de la casita — un `invert` completo habría vuelto el verde azul. El original está en `_masters-originales/ronda2/`.

## Compresión de assets
Herramientas nativas macOS (sin ffmpeg):
- Imágenes: `sips -Z <px_max> --setProperty format jpeg archivo.jpg`
- Video: `avconvert --preset AVAssetExportPreset960x540 --source entrada.mp4 --output salida.mp4`
- Másters originales respaldados en `_masters-originales/` (excluida de git).

**Specs objetivo:**
| Uso | Resolución | Peso objetivo |
|-----|-----------|---------------|
| Hero | 1920×1080, JPEG 85% | < 400 KB |
| Portafolio 3:4 | 900×1200, JPEG 80% | < 250 KB |
| Portafolio 16:9 | 1200×675, JPEG 80% | < 250 KB |
| Video 9:16 | 540×960, 15–20 s | < 20 MB |
| Video 16:9 | 1280×720, 15–20 s | < 25 MB |
| Logos clientes | PNG transparente, máx 400 px ancho | — |

## JS (main.js)
- Nav scroll → agrega `.nav--scrolled` (dark bg) al pasar 40px
- Menú hamburger móvil con bloqueo de scroll del body
- Smooth scroll compensando altura de nav (`--nav-h: 76px`)
- Scroll reveal via `IntersectionObserver` en `[data-reveal]` → clase `.is-visible`
- Hero: se revela con 200ms de delay inicial

## Verificar en preview
La página es pesada; el renderer del preview se cuelga si se cargan todos los videos. Antes de capturar:
```js
document.querySelectorAll('video').forEach(v => v.remove());
document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-visible'));
```
Además, **los screenshots solo capturan la zona superior del documento** — `window.scrollTo` no basta. Para ver una sección concreta, ocultar las anteriores con `style.display='none'` y capturar desde `scrollY = 0`.

## Git / Deploy
- Repo: `https://github.com/mediaxfilmscontact-bit/luxury-estate-films.git`
- `.gitignore` excluye: `_masters-originales/`, `*.zip`, `.DS_Store`, `.claude/`
- **Vercel está conectado al repo**: cada `git push` a `main` publica automáticamente. Build command vacío, publish dir `.`
