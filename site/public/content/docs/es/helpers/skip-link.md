# Saltar al contenido

Un enlace al principio de la página que lleva directamente al contenido, saltándose el menú. Está oculto hasta que se llega a él con la tecla Tab.

## Ejemplo

Pulsa Tab al entrar en cualquier página de esta web: es lo primero que aparece, arriba a la izquierda.

```html-code
<body>
  <a class="gm-skip-link" href="#contenido">Saltar al contenido</a>
  <header class="gm-navbar">…</header>
  <main id="contenido" tabindex="-1">…</main>
</body>
```

## Cómo se pone

- Que sea **lo primero** dentro del `<body>`.
- El `href` apunta al `id` del `<main>`.
- El `<main>` lleva `tabindex="-1"`, para que el foco llegue de verdad al contenido.

## Por qué

Quien usa el teclado tendría que pasar por todos los enlaces del menú en cada página. Con este enlace se los salta de una vez (WCAG 2.4.1). Al recibir el foco aparece como un botón negro (blanco de noche), bien visible.
