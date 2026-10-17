# Modo claro y oscuro

GlassMarshmallow tiene modo claro y modo oscuro. Se elige con el atributo `data-theme`, en toda la página o en cualquier parte de ella, como `data-bs-theme` en Bootstrap.

## Toda la página

Pon `data-theme` en `<html>`. Sin él, la página es clara.

```html
<html lang="es" data-theme="dark">
```

Todos los colores son variables CSS que cambian con el modo: fondo de la página, superficies, texto, líneas, acento, los tonos de texto de la paleta y el vidriado. También cambian las piezas del propio navegador (controles de formulario y barras de scroll).

## Una parte de la página

Pon `data-theme` en cualquier elemento para cambiar solo ese elemento y todo lo que tiene dentro. Añade `.gm-bg-body` o `.gm-bg-surface` para que la zona se pinte con el fondo de su modo.

```html
<div style="display: grid; gap: 12px">
  <div data-theme="light" class="gm-bg-body" style="padding: 16px; border-radius: 12px">
    <b>Siempre claro</b>
    <div class="gm-text-sky">.gm-text-sky</div>
    <div class="gm-theme-sky gm-theme-glass" style="margin-top: 8px; padding: 10px 14px">.gm-theme-glass</div>
  </div>
  <div data-theme="dark" class="gm-bg-body" style="padding: 16px; border-radius: 12px">
    <b>Siempre oscuro</b>
    <div class="gm-text-sky">.gm-text-sky</div>
    <div class="gm-theme-sky gm-theme-glass" style="margin-top: 8px; padding: 10px 14px">.gm-theme-glass</div>
  </div>
</div>
```

## Seguir al sistema y recordar la elección

El framework no elige el modo por ti. Este script, en el `<head>` antes de los estilos, usa lo que se eligió y se guardó en el navegador o, si no hay nada guardado, la preferencia del sistema. Se ejecuta antes de pintar la página, así que no hay destello.

```html
<script>
  // Antes de pintar la página: lo que se eligió o, si no hay nada guardado, la preferencia del sistema
  (function () {
    var saved; try { saved = localStorage.getItem('theme'); } catch (e) {}
    var dark = saved === 'dark' || (saved !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  })();
</script>
```

Para cambiar de modo con un botón, pon `document.documentElement.dataset.theme` a `'light'` o `'dark'` y guárdalo con `localStorage.setItem('theme', …)`.

## Accesibilidad

Todos los colores del framework están comprobados en los dos modos: texto de 4,5:1 o más (AA) y controles de 3:1 o más.
