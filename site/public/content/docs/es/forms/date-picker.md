# Selector de fecha

Un calendario con panel de cristal, el mes en grande y los días en círculos de 44 px. Hoy va en azul y el día elegido, relleno.

## Ejemplo

Añade `data-gm-calendar` y carga el script del calendario: crea el calendario, cambia de mes y deja elegir un día con el ratón o el teclado.

```html
<div class="gm-calendar" data-gm-calendar data-today="2026-10-17" data-selected="2026-10-22"></div>

<script type="module">
  import { initCalendars } from 'glassmarshmallow/js/calendar.js';
  initCalendars();
</script>
```


## Días

| Día | Cómo se marca | Cómo se ve |
| --- | --- | --- |
| Hoy | `aria-current="date"` | En azul y en negrita |
| Elegido | `aria-pressed="true"` | Círculo negro en modo claro, blanco en oscuro |
| De otro mes | `.is-outside` | En gris |
| No disponible | `disabled` | Más claro, y no se puede elegir |

## Opciones

| Atributo | Qué hace |
| --- | --- |
| `data-selected="2026-10-22"` | El día elegido |
| `data-month="2026-10"` | El mes que se ve al empezar |
| `data-today="2026-10-17"` | Qué día es «hoy» (por defecto, la fecha del dispositivo) |
| `data-locale="es"` | Idioma de los nombres (por defecto, el `lang` de la página) |
| `data-min`, `data-max` | Primer y último día que se pueden elegir |

Al elegir un día, el calendario lanza el evento `gm-date-change` con la fecha:

```js
document.querySelector('.gm-calendar').addEventListener('gm-date-change', (event) => {
  console.log(event.detail.date); // '2026-10-22'
});
```

## Teclado

| Tecla | Qué hace |
| --- | --- |
| ← → | Día anterior o siguiente |
| ↑ ↓ | Mismo día de la semana anterior o siguiente |
| Inicio / Fin | Primer o último día de la semana |
| Re Pág / Av Pág | Mes anterior o siguiente |
| Intro / Espacio | Elegir el día |

## Solo con CSS

Sin el script puedes escribir el calendario a mano: el framework da el aspecto y tu página decide qué pasa.

```html-code
<div class="gm-calendar" role="group" aria-labelledby="cal-title">
  <div class="gm-calendar__header">
    <h3 class="gm-calendar__title" id="cal-title">Octubre <span>2026</span></h3>
    <div class="gm-calendar__nav">
      <button type="button" class="gm-icon-btn" aria-label="Mes anterior"><i class="gmi gmi-chevron-left" aria-hidden="true"></i></button>
      <button type="button" class="gm-icon-btn" aria-label="Mes siguiente"><i class="gmi gmi-chevron-right" aria-hidden="true"></i></button>
    </div>
  </div>
  <table class="gm-calendar__grid">
    <thead><tr><th scope="col"><abbr title="lunes">L</abbr></th><th scope="col"><abbr title="martes">M</abbr></th><th scope="col"><abbr title="miércoles">X</abbr></th><th scope="col"><abbr title="jueves">J</abbr></th><th scope="col"><abbr title="viernes">V</abbr></th><th scope="col"><abbr title="sábado">S</abbr></th><th scope="col"><abbr title="domingo">D</abbr></th></tr></thead>
    <tbody>
        <tr><td><button type="button" class="gm-calendar__day is-outside" aria-label="28 septiembre 2026">28</button></td><td><button type="button" class="gm-calendar__day is-outside" aria-label="29 septiembre 2026">29</button></td><td><button type="button" class="gm-calendar__day is-outside" aria-label="30 septiembre 2026">30</button></td><td><button type="button" class="gm-calendar__day" aria-label="1 octubre 2026">1</button></td><td><button type="button" class="gm-calendar__day" aria-label="2 octubre 2026">2</button></td><td><button type="button" class="gm-calendar__day" aria-label="3 octubre 2026">3</button></td><td><button type="button" class="gm-calendar__day" aria-label="4 octubre 2026">4</button></td></tr>
        <tr><td><button type="button" class="gm-calendar__day" aria-label="5 octubre 2026">5</button></td><td><button type="button" class="gm-calendar__day" aria-label="6 octubre 2026">6</button></td><td><button type="button" class="gm-calendar__day" aria-label="7 octubre 2026">7</button></td><td><button type="button" class="gm-calendar__day" aria-label="8 octubre 2026">8</button></td><td><button type="button" class="gm-calendar__day" aria-label="9 octubre 2026">9</button></td><td><button type="button" class="gm-calendar__day" aria-label="10 octubre 2026">10</button></td><td><button type="button" class="gm-calendar__day" aria-label="11 octubre 2026">11</button></td></tr>
        <tr><td><button type="button" class="gm-calendar__day" aria-label="12 octubre 2026">12</button></td><td><button type="button" class="gm-calendar__day" aria-label="13 octubre 2026">13</button></td><td><button type="button" class="gm-calendar__day" aria-label="14 octubre 2026">14</button></td><td><button type="button" class="gm-calendar__day" aria-label="15 octubre 2026">15</button></td><td><button type="button" class="gm-calendar__day" aria-label="16 octubre 2026">16</button></td><td><button type="button" class="gm-calendar__day" aria-label="17 octubre 2026" aria-current="date">17</button></td><td><button type="button" class="gm-calendar__day" aria-label="18 octubre 2026">18</button></td></tr>
        <tr><td><button type="button" class="gm-calendar__day" aria-label="19 octubre 2026">19</button></td><td><button type="button" class="gm-calendar__day" aria-label="20 octubre 2026">20</button></td><td><button type="button" class="gm-calendar__day" aria-label="21 octubre 2026">21</button></td><td><button type="button" class="gm-calendar__day" aria-label="22 octubre 2026" aria-pressed="true">22</button></td><td><button type="button" class="gm-calendar__day" aria-label="23 octubre 2026">23</button></td><td><button type="button" class="gm-calendar__day" aria-label="24 octubre 2026">24</button></td><td><button type="button" class="gm-calendar__day" aria-label="25 octubre 2026">25</button></td></tr>
        <tr><td><button type="button" class="gm-calendar__day" aria-label="26 octubre 2026">26</button></td><td><button type="button" class="gm-calendar__day" aria-label="27 octubre 2026">27</button></td><td><button type="button" class="gm-calendar__day" aria-label="28 octubre 2026">28</button></td><td><button type="button" class="gm-calendar__day" aria-label="29 octubre 2026">29</button></td><td><button type="button" class="gm-calendar__day" aria-label="30 octubre 2026">30</button></td><td><button type="button" class="gm-calendar__day" aria-label="31 octubre 2026">31</button></td><td><button type="button" class="gm-calendar__day is-outside" aria-label="1 noviembre 2026">1</button></td></tr>
    </tbody>
  </table>
</div>
```

## Accesibilidad

- Cada día es un botón con la fecha completa en `aria-label`, para que los lectores de pantalla digan «22 octubre 2026» y no solo «22».
- Los días de la semana llevan `<abbr>` con el nombre completo.
- Los botones del mes llevan `aria-label`.
- Días de 44 px, el tamaño que pide WCAG 2.5.5 (AAA), también en el móvil.
- Contraste: números de 15:1 o más, hoy en azul de 5:1 o más, días de otros meses de 5:1 o más (AA).
