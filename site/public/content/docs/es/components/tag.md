# Etiqueta

Una píldora pequeña para marcar algo: una categoría, un estado, una novedad. Es la etiqueta gris de My Book Box.

## Ejemplo

```html
<div style="display: flex; flex-wrap: wrap; gap: 8px">
  <span class="gm-tag">Novela</span>
  <span class="gm-tag">Fantasía</span>
  <span class="gm-tag">2026</span>
</div>
```

## Con color

Con los colores de la paleta (`.gm-theme-…` y `.gm-theme-solid`), texto negro sobre el pastel.

```html
<div style="display: flex; flex-wrap: wrap; gap: 8px">
  <span class="gm-tag gm-theme-sky gm-theme-solid">Nuevo</span>
  <span class="gm-tag gm-theme-mint gm-theme-solid">Leído</span>
  <span class="gm-tag gm-theme-lemon gm-theme-solid">Pendiente</span>
  <span class="gm-tag gm-theme-coral gm-theme-solid">Agotado</span>
</div>
```

## Etiqueta o botón

La etiqueta solo informa: no se pulsa. Si quieres filtrar o elegir, usa un botón píldora (`.gm-btn--pill`) o el [segmentado](/docs/forms/segmented).

## Accesibilidad

- El texto de la etiqueta dice lo que significa; el color solo lo refuerza (WCAG 1.4.1).
- Texto normal sobre gris (14:1) o negro sobre pastel (7,8:1 o más): AAA.
- No parece un botón (sin borde ni efecto al pasar el ratón), para no confundir.
