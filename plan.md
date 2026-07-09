A corregir:
- SCROLL debe ir un poco más abajo porque se superpone sobre el boton "Hablar con un experto"

A cambiar o agregar:
- Reemplaza las imágenes que generaste con las que he adjuntado.
- Agrega una animación para el menú hamburguesa.
- Actualiza el formulario para que tenga un formato de Ecuador (número +593 y Quito - Ecuador)




# Landing Page — Green Metrics Solutions (GREEMETS)

Landing one-page premium, cálida y humana, siguiendo tu dirección visual al pie de la letra (verdes profundos + tierra, Playfair Display + Inter, curvas orgánicas, mucho aire).

## Stack
- Astro.
- Librería gratuita para envío a correo
- Motion (framer-motion) para micro-interacciones sutiles.
- Fuentes vía `<link>` en `__root.tsx` (Playfair Display + Inter desde Google Fonts).
- Imágenes (usar las que están en la carpeta img)

## Design system (src/styles.css)
Tokens semánticos en oklch:
- `--forest-deep` #0A3D2A, `--forest` #1E6B4E, `--sage` #4A9C6F
- `--sand` #D2B48C, `--cream` #F5F0E6, `--bone` blanco roto, `--warm-gray`
- Radios generosos (rounded-3xl/4xl), sombras suaves cálidas, gradientes orgánicos
- Familias: `--font-serif` Playfair Display (títulos), `--font-sans` Inter (cuerpo)

## Estructura de rutas
- `src/routes/index.tsx` — landing (secciones como componentes)
- `src/components/landing/` — Hero, About, Services, Projects, WhyUs, Testimonials, Contact, Footer, Nav, CookieBanner
- `src/components/ui/` — Card, Button reutilizables con variantes premium

## Secciones

1. **Nav** flotante translúcida con blur, logo wordmark GREEMETS + link a secciones + CTA "Hablar con un experto".

2. **Hero** (min-h-dvh)
   - Fondo: hero.jpg
   - H1 Playfair: "Medimos lo que realmente importa para construir un futuro sostenible"
   - Subtítulo, dos CTAs, scroll indicator animado suave.
   - Forma orgánica SVG (blob) en la transición inferior.

3. **Sobre Nosotros** — Layout asimétrico 60/40, foto de equipo natural + copy 150-200 palabras (placeholder auténtico editable), acento serif en frase clave.

4. **Servicios** — 7 tarjetas en grid asimétrico (masonry-like en desktop, stack en mobile). Icono lineal sutil (lucide), título serif, descripción, hover revela detalle extendido con transición suave.

5. **Proyectos / Casos de Éxito** — Grid masonry con imágenes generadas. Click abre modal (shadcn Dialog) con descripción + métricas de impacto (toneladas CO₂ reducidas, m³ agua ahorrados).

6. **Por qué GREEMETS** — 4 diferenciadores con iconografía orgánica, layout zigzag.

7. **Testimonios** — Carrusel simple con espacio reservado (2-3 placeholders realistas).

8. **Contacto** — Formulario (nombre, empresa, email, mensaje) con validación client-side, datos de contacto al lado, sin backend por ahora (submit muestra toast de confirmación; luego se puede conectar a Lovable Cloud).

9. **Footer** — Links, redes, aviso legal, copyright.

10. **Cookie Banner** — Componente propio, persistencia en localStorage (leído en useEffect para evitar hydration mismatch), diseño acorde a la paleta.

## SEO & performance
- `head()` en la ruta index con title, description, og:title/description/image, twitter card, JSON-LD Organization + LocalBusiness.
- Preload de fuentes y de imagen LCP del hero.
- Alt descriptivos en todas las imágenes, jerarquía h1→h2→h3 correcta, semántica (`<main>`, `<section>`, `<nav>`, `<footer>`).
- `aria-label` en botones icono, focus-visible visibles.
- Mobile-first, `min-h-dvh` en hero, tap targets ≥44px.

