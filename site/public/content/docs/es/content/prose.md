# Texto largo

`.gm-prose` da formato a páginas de texto largo, como la de privacidad o el aviso legal: títulos, párrafos con buen interlineado, listas y enlaces. Con `.gm-prose--card`, el texto va en una tarjeta de cristal.

## Ejemplo

```html
<article class="gm-prose gm-prose--card">
  <h1>Privacidad</h1>
  <p class="gm-prose__updated">Última actualización: 17 de octubre de 2026</p>
  <h2>Responsable de los datos</h2>
  <p>Sara Paez Yamuza. Puedes escribirme a <a href="#">hola@ejemplo.com</a>.</p>
  <h2>Qué datos se guardan</h2>
  <ul>
    <li>Lo que escribes en el formulario, solo si lo envías.</li>
    <li>Tu elección de modo claro u oscuro, en tu navegador.</li>
  </ul>
</article>
```

## Sin tarjeta

Solo con `.gm-prose`, el texto va sobre el fondo de la página.

## Qué cambia

| Elemento | Formato |
| --- | --- |
| `h1` | 1,9 rem (1,5 rem en el móvil) |
| `.gm-prose__updated` | La fecha, en gris pequeño |
| `h2` | 1,1 rem, de un solo color: el del texto de día, celeste de noche |
| `p`, `li` | 0,95 rem con interlineado de 1,65 |
| `a` | Color de enlace, en seminegrita y subrayado |

## Accesibilidad

- Texto e interlineado cómodos para leer textos largos (WCAG 1.4.8 y 1.4.12); líneas de 80 caracteres como mucho.
- Los títulos de color llegan a 7:1; los enlaces, también, y van subrayados.
- Usa los niveles de título en orden (`h1`, luego `h2`…), sin saltarte ninguno.
