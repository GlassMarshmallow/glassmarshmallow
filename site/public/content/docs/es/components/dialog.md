# Ventana

Una ventana que se abre encima de la página para enseñar información o pedir algo, con el fondo oscurecido detrás. Es la de «Información sobre la IA» de la plantilla de portfolio: el cristal de los paneles, apartados separados por una línea fina y títulos de color.

## Ejemplo

```html
<button type="button" class="gm-btn" data-gm-dialog-open="ejemplo-ventana">Abrir la ventana</button>
<dialog class="gm-dialog" id="ejemplo-ventana" aria-labelledby="ejemplo-ventana-titulo">
  <div class="gm-dialog__body">
    <header class="gm-dialog__header">
      <h2 class="gm-dialog__title" id="ejemplo-ventana-titulo">Información sobre la IA</h2>
      <button type="button" class="gm-icon-btn" data-gm-dialog-close aria-label="Cerrar"><i class="gmi gmi-x-lg" aria-hidden="true"></i></button>
    </header>
    <section class="gm-dialog__section">
      <h3>Qué es</h3>
      <p>El chat usa un modelo de IA que responde a partir de mi perfil y <strong>puede equivocarse</strong>.</p>
    </section>
    <section class="gm-dialog__section">
      <h3>Qué pasa con lo que escribes</h3>
      <h4>Preguntas rápidas</h4>
      <p>Tu pregunta solo se usa para darte la respuesta. No se guarda.</p>
      <h4>«Quiero un proyecto»</h4>
      <ol>
        <li>El asistente te hace unas preguntas sobre tu proyecto.</li>
        <li>Al terminar, te enseña un resumen y te propone enviármelo.</li>
        <li>Si no lo envías, no me llega nada.</li>
      </ol>
    </section>
  </div>
</dialog>
```

## Piezas

| Clase | Qué es |
| --- | --- |
| `.gm-dialog` | La ventana (un `<dialog>` de HTML) |
| `.gm-dialog__body` | El contenido; se desplaza si no cabe |
| `.gm-dialog__header` | Título y botón de cerrar |
| `.gm-dialog__title` | El título; recibe el foco al abrir |
| `.gm-dialog__section` | Cada apartado, con una línea encima; sus `<h3>` van de color |

## Script

El script opcional abre la ventana con `data-gm-dialog-open="id"` y la cierra con `data-gm-dialog-close`, con Escape o pulsando fuera:

```html
<script type="module">
  import { initDialogs, openDialog } from 'glassmarshmallow/js/dialog.js';
  initDialogs();
  // o desde tu código: openDialog(document.getElementById('mi-ventana'));
</script>
```

## Accesibilidad

- Es un `<dialog>` de HTML abierto con `showModal()`: el resto de la página queda inerte, así que ni el ratón, ni el teclado, ni los lectores de pantalla salen de la ventana mientras está abierta.
- Lleva nombre con `aria-labelledby` (su título) y los lectores de pantalla la anuncian como ventana.
- Al abrir, el foco va al título, no a la ✕, para que se lea desde el principio. Al cerrar, vuelve al botón que la abrió.
- Escape la cierra siempre, y el botón de cerrar dice lo que hace («Cerrar»).
- Úsala poco: interrumpe. Para avisos cortos, mejor un [aviso](/docs/components/alert) en la página.
