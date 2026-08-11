# Futurité — Landing Page de ventas

Landing de conversión para campañas de Google Ads, redes sociales y SEO + GEO.
CTA único a WhatsApp. Astro 5, sin framework de UI, sin dependencias de runtime.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
```

---

## Sistema de diseño

Todo vive en `src/styles/global.css` como variables CSS.

| Token | Valor | Uso |
| --- | --- | --- |
| `--navy` | `#0a1330` | Fondo base |
| `--navy-deep` | `#060c22` | Barra de métricas y cierre |
| `--lima` | `#c3f53c` | Acento y CTA principal |
| `--azul` | `#1a4bff` | Acento sobre fondos claros |
| `--azul-light` | `#6f8dff` | Contorno del isotipo, satélites |

**Regla de acento** (la misma del feed de la marca): el color de acento se
invierte según el fondo. Sobre navy o azul → lima. Sobre lima o blanco → azul.
Se aplica solo con las clases `.tema-lima` y `.tema-azul`, que redefinen los
tokens para toda la sección.

**Patrón de titular:** línea 1 en color neutro, línea 2 en `<span class="acento">`.
Es la firma tipográfica de la marca y se repite en las nueve secciones.

**Tipografía:** Plus Jakarta Sans 600/700/800 (titulares), Inter 400/500/600 (cuerpo).

**Ritmo de fondos** — tres "mundos" alternados para que el scroll no se aplane:

```
hero · métricas · problema · motores   →  navy
diferenciador                          →  lima
clientes                               →  navy
por qué invertir ahora                 →  azul eléctrico
proceso · cierre · footer              →  navy
```

---

## Estructura por sección

| # | Componente | Layout | Componentes UI | Animación | Icono |
| --- | --- | --- | --- | --- | --- |
| 1 | `Hero` | Split 1.05 / 0.95 | Botón lima + botón contorno, sellos glass | Reveal escalonado, parallax de la composición orbital, chips flotando | Composición orbital: planeta con glow, dos órbitas contrarrotantes, satélites |
| 2 | `Metricas` | Grid 4 col (2 en móvil) con separadores verticales | — | Contadores con `easeOutExpo` al entrar en pantalla (umbral 50%) | — |
| 3 | `Problema` | Bloque a una columna con barra de acento a la izquierda | Insignia con icono | Reveal escalonado | Triángulo de alerta |
| 4 | `Motores` | Bento 12 col: 7 / 5 arriba, 12 abajo en horizontal | Cards de vidrio, chips de capacidades, número 01–03 en marca de agua | Glow que sigue al cursor, elevación −6 px, el número se enciende en lima, los chips cambian de borde | Embudo de conversión · Diana con cursor de clic · Lupa con destello generativo |
| 5 | `Diferenciador` | Bento asimétrico 7/5 · 5/7 sobre lima | Cards blancas | Barras de señal en vivo en la card de monitoreo | Pantalla con pulso · Tablero con barras · Chip con núcleo · Curva de ROI |
| 6 | `PruebaSocial` | Marquesina de ancho completo + card de caso | Marquesina con máscara en los extremos | Bucle infinito de 42 s, se pausa al hacer hover | — |
| 7 | `Contexto` | 3 cards de dato + bloque partido 0.8/1.2 sobre azul | Ranking simulado de respuesta de IA | Reveal escalonado; las posiciones 4 y 5 aparecen desvanecidas y punteadas | — |
| 8 | `Proceso` | 4 columnas (vertical en móvil) | Nodos con número | El riel se dibuja de azul a lima al entrar en pantalla | Chat · Lupa de diagnóstico · Bifurcación de ruta · Cohete |
| 9 | `CtaFinal` | Centrado | Botón gigante | Glow lima inferior, astronauta flotando | — |

**Iconografía:** set propio en `src/components/Icono.astro`. Trazo lineal 1.7,
viewBox 24, sin relleno. Cada símbolo se eligió para su bloque; no hay iconos
de librería genérica.

**Micro-interacciones globales:**
`.reveal` (fade + 26 px de subida, con retardo por `--d`), pulso del anillo del
CTA lima, halo del botón flotante de WhatsApp, barra de progreso de lectura en
el header, subrayado animado en la navegación.

**Accesibilidad:** todo el movimiento se apaga con `prefers-reduced-motion`, los
contadores saltan al valor final, `:focus-visible` en lima, skip link.

---

## Contenido

`src/data/site.js` centraliza todo: teléfono, WhatsApp, métricas, motores,
diferenciadores, marcas, datos 2026 y pasos. Editar ahí cambia la landing entera.

El WhatsApp de ventas es **81 1273 8792** (distinto al de sede). `waLink()`
genera el enlace con mensaje precargado; cada CTA manda un mensaje distinto para
que el lead llegue segmentado por el bloque desde el que escribió.

---

## Pendientes antes de publicar

1. **Astronauta.** Suelta el recorte en `src/assets/astronauta.png` (hero) y
   `src/assets/astronauta-cierre.png` (cierre) y aparecen solos, sin tocar
   código. Sin ellos la composición orbital funciona por sí sola.
2. **Logos de clientes.** Hoy la marquesina usa los nombres como wordmarks.
   Para logos reales, sustituye el `<span class="marca">` de
   `PruebaSocial.astro` por `<img>` en SVG monocromo blanco.
3. **Aviso de privacidad.** `site.avisoPrivacidad` apunta a
   `futurite.mx/aviso-de-privacidad` — confirmar la URL real (Google Ads exige
   que sea accesible desde la landing).
4. **Dato del 30%** en el bloque de redes sociales: validar fuente antes de
   publicar, como quedó marcado en el brief.
5. **Píxeles.** Falta Google Ads / GA4 / Meta Pixel; van en `Layout.astro`.
