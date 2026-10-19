# Desbordamiento

Qué pasa con lo que no cabe en su caja: se ve, se recorta o se puede desplazar. Como el [overflow](https://tailwindcss.com/docs/overflow) de Tailwind.

| Clase | Lo que no cabe… |
| --- | --- |
| `gm-overflow-visible` | Se sale de la caja (lo normal) |
| `gm-overflow-hidden` | Se recorta y no se puede ver |
| `gm-overflow-clip` | Se recorta, como `hidden`, pero la caja no se puede desplazar ni con código |
| `gm-overflow-auto` | Se puede desplazar, con barra solo si hace falta |
| `gm-overflow-scroll` | Se puede desplazar, con barra siempre |

Cada una tiene su versión para un solo eje: `gm-overflow-x-auto` (solo de lado) y `gm-overflow-y-auto` (solo de arriba abajo).

Una tabla ancha que se desplaza de lado en el móvil, en vez de ensanchar la página:

```html
<div class="gm-overflow-x-auto gm-max-w-xs gm-border gm-rounded-sm" role="region" aria-label="Tabla de precios" tabindex="0">
  <table class="gm-m-0">
    <tr><th>Plan</th><th>Precio</th><th>Usuarios</th><th>Almacenamiento</th><th>Soporte</th></tr>
    <tr><td>Básico</td><td>0 €</td><td>1</td><td>1 GB</td><td>Correo</td></tr>
  </table>
</div>
```

## Accesibilidad

- Si una caja se desplaza (`auto` o `scroll`), ponle `tabindex="0"`, un `role="region"` y un `aria-label`: así se puede mover con el teclado y los lectores de pantalla dicen qué es (WCAG 2.1.1).
- No recortes texto con `gm-overflow-hidden` si con la letra grande deja de verse: el contenido tiene que poder leerse entero al 200 % (WCAG 1.4.4).
