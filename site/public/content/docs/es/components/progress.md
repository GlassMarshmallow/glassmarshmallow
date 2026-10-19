# Barra de progreso

Cuánto se lleva hecho de algo: lectura de un libro, subida de un archivo, pasos de un formulario. Una línea fina sobre gris con la parte hecha en el color de acento y un texto debajo. Es la de lectura de My Book Box.

## Ejemplo

```html
<div class="gm-progress gm-max-w-sm">
  <progress class="gm-progress__bar" id="ejemplo-leido" max="100" value="45">45 %</progress>
  <label class="gm-progress__label" for="ejemplo-leido">45 % leído · página 162 de 360</label>
</div>
```

## Grande

`.gm-progress--lg`, para cuando la barra es lo principal (una subida, una instalación).

```html
<div class="gm-progress gm-progress--lg gm-max-w-md">
  <progress class="gm-progress__bar" id="ejemplo-subida" max="100" value="72">72 %</progress>
  <label class="gm-progress__label" for="ejemplo-subida">Subiendo «novela.epub»: 72 %</label>
</div>
```

## Sin saber cuánto falta

Sin `value`, la barra enseña un tramo que va y viene: se está trabajando, pero no se sabe cuánto queda.

```html
<div class="gm-progress gm-max-w-sm">
  <progress class="gm-progress__bar" id="ejemplo-cargando" max="100">Cargando</progress>
  <label class="gm-progress__label" for="ejemplo-cargando">Cargando la biblioteca…</label>
</div>
```

## Cambiar el valor

Es un `<progress>` de HTML: se cambia con su `value`.

```js
document.querySelector('#leido').value = 60;
```

## Accesibilidad

- Usa `<progress>` con su `max` y su `value`: los lectores de pantalla dicen el porcentaje. La `<label>` le da nombre.
- Escribe también el dato en el texto («45 % leído»): la barra sola no dice el número exacto.
- La parte hecha llega a más de 3:1 sobre el gris en los dos modos (WCAG 1.4.11), y el texto gris, a 7:1 (AAA).
- Si el progreso cambia solo (una subida), anuncia el final con un mensaje de estado (`role="status"`), no cada cambio.
- Sin movimiento si la persona lo pide (`prefers-reduced-motion`).
