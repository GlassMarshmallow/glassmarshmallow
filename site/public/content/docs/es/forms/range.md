# Barra deslizante

Para elegir un número dentro de un rango arrastrando: volumen, opacidad, tamaño… El tirador es una bolita redonda y la parte recorrida va en el color de acento.

## Ejemplo

```html
<div class="gm-field" style="max-width: 420px">
  <label for="ejemplo-volumen">Volumen</label>
  <input id="ejemplo-volumen" class="gm-range" type="range" min="0" max="100" value="40">
</div>
```

## Con el valor a la vista

Enseña el valor junto a la etiqueta con un `<output>`. Así se sabe el número exacto sin tener que adivinarlo por la posición.

```html
<div class="gm-field" style="max-width: 420px">
  <div style="display: flex; justify-content: space-between; align-items: baseline">
    <label for="ejemplo-opacidad" style="font-weight: 700">Opacidad</label>
    <output id="ejemplo-opacidad-valor" for="ejemplo-opacidad" class="gm-muted">70 %</output>
  </div>
  <input id="ejemplo-opacidad" class="gm-range" type="range" min="0" max="100" value="70" oninput="document.getElementById('ejemplo-opacidad-valor').textContent = this.value + ' %'">
</div>
```

## Desactivada

```html
<div class="gm-field" style="max-width: 420px">
  <label for="ejemplo-desactivada">Brillo</label>
  <input id="ejemplo-desactivada" class="gm-range" type="range" min="0" max="100" value="50" disabled>
</div>
```

## Script

Firefox pinta la parte recorrida solo. Chrome y Safari no: el script opcional pone el porcentaje del valor en `--gm-range-progress` cada vez que se mueve la barra. Sin el script, la barra funciona igual, pero toda en gris.

```html
<script type="module">
  import { initRanges, updateRange } from 'glassmarshmallow/js/range.js';
  initRanges();

  // Si cambias el valor desde tu código, vuelve a pintarla:
  const volumen = document.querySelector('#volumen');
  volumen.value = 80;
  updateRange(volumen);
</script>
```

## Teclado

| Tecla | Qué hace |
| --- | --- |
| ← → / ↑ ↓ | Baja o sube un paso (`step`) |
| Re Pág / Av Pág | Baja o sube de 10 en 10 % |
| Inicio / Fin | Al mínimo o al máximo |

## Accesibilidad

- Es un `<input type="range">` de verdad, con su `<label>`: los lectores de pantalla dicen el nombre y el valor.
- Si el número sin más no se entiende («70»), añade `aria-valuetext` con el valor en palabras («70 por ciento»).
- La bolita es blanca con un borde gris de 3,5:1, así que se ve sobre fondo blanco y oscuro (WCAG 1.4.11). Con el teclado, lleva un anillo de foco.
- La barra mide 44 px de alto para pulsarla bien (WCAG 2.5.5, AAA), aunque la línea que se ve sea fina.
- Arrastrar no es la única forma: también se usa con el teclado o pulsando en la barra (WCAG 2.5.7).
