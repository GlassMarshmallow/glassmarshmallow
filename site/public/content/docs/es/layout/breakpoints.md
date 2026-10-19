# Puntos de corte

Los anchos de pantalla en los que cambia la maquetación. Se piensa primero en el móvil y se añade desde cada punto de corte hacia arriba, como en Bootstrap.

| Nombre | Desde | Pantallas | Ejemplo de clase |
| --- | --- | --- | --- |
| (sin prefijo) | 0 | móviles | `gm-col-12` |
| `sm` | 600 px | móviles grandes y en horizontal | `gm-sm-col-6` |
| `md` | 860 px | tablets; desde aquí, la barra de navegación de escritorio | `gm-md-col-4` |
| `lg` | 1100 px | ordenadores | `gm-lg-col-3` |
| `xl` | 1300 px | pantallas grandes | `gm-xl-col-2` |

## Cómo se usan

Una clase con prefijo se aplica **desde** ese ancho en adelante. Sin prefijo, en todos. Aquí, una columna en el móvil, dos desde `sm` y cuatro desde `lg` (cambia el ancho de la ventana para verlo):

```html
<div class="gm-grid gm-gap-sm">
  <div class="gm-sm-col-6 gm-lg-col-3 gm-theme-sky gm-theme-solid gm-p-4 gm-rounded-sm">1</div>
  <div class="gm-sm-col-6 gm-lg-col-3 gm-theme-pink-blue gm-theme-solid gm-p-4 gm-rounded-sm">2</div>
  <div class="gm-sm-col-6 gm-lg-col-3 gm-theme-mint gm-theme-solid gm-p-4 gm-rounded-sm">3</div>
  <div class="gm-sm-col-6 gm-lg-col-3 gm-theme-peach gm-theme-solid gm-p-4 gm-rounded-sm">4</div>
</div>
```

## En tu propio CSS

En `@media` hay que escribir el número (las variables de CSS no funcionan ahí). Usa los mismos valores, de móvil hacia arriba:

```css
.mi-bloque { padding: 16px; }

@media (min-width: 860px) {
  .mi-bloque { padding: 32px; }
}
```

Desde JavaScript, los valores están en variables: `--gm-breakpoint-sm`, `--gm-breakpoint-md`, `--gm-breakpoint-lg` y `--gm-breakpoint-xl`.

```js
const md = getComputedStyle(document.documentElement).getPropertyValue('--gm-breakpoint-md'); // '860px'
const tablet = matchMedia(`(min-width: ${md})`).matches;
```
