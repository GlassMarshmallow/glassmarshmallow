# Chat

Las piezas del chat de la plantilla de portfolio con IA: el campo para preguntar, el bocadillo con la respuesta y los puntos de «escribiendo». El chat en sí (preguntar a la IA, escribir la respuesta letra a letra) lo pone tu aplicación; el framework da el aspecto.

## Campo para preguntar

Una píldora de cristal con el campo y el botón de enviar. Al escribir, el borde toma el color cielo y aparece un anillo suave.

```html
<form class="gm-chat-input" role="search" aria-label="Pregúntame sobre mi trabajo">
  <label class="gm-visually-hidden" for="ejemplo-pregunta">Escribe una pregunta</label>
  <input id="ejemplo-pregunta" class="gm-chat-input__field" autocomplete="off" placeholder="Pregúntame lo que quieras…">
  <button type="submit" class="gm-chat-input__send" aria-label="Enviar pregunta"><i class="gmi gmi-arrow-up-circle-fill" aria-hidden="true"></i></button>
</form>
```

## Bocadillo de respuesta

Cristal con el borde cielo y, en oscuro, un brillo turquesa. La cola apunta a quien habla: `.gm-bubble--tail-end` (a la derecha) o `.gm-bubble--tail-start` (a la izquierda), a la altura de `--gm-bubble-tail-y` (medida desde abajo en la de la derecha; en la de la izquierda, desde arriba, o desde abajo con `.gm-bubble--tail-bottom`).

```html
<div class="gm-flex gm-flex-col gm-gap-6 gm-p-4">
  <div class="gm-bubble gm-bubble--tail-end gm-max-w-sm">
    <div class="gm-bubble__scroll" tabindex="0" role="region" aria-label="Respuesta">
      Trabajo sobre todo con Angular y .NET, y diseño en Figma. Puedes ver mis proyectos en <a href="#">GitHub</a>.
    </div>
    <button type="button" class="gm-bubble__close" aria-label="Cerrar la respuesta"><i class="gmi gmi-x" aria-hidden="true"></i></button>
  </div>
  <div class="gm-bubble gm-bubble--tail-start gm-max-w-sm gm-ms-4">
    <div class="gm-bubble__scroll"><span class="gm-bubble__note">Seguimos donde lo dejamos</span>¿Para cuándo necesitas la web?</div>
  </div>
</div>
```

## Pensando

Mientras llega la respuesta, `.gm-typing` con tres `<span>`: tres puntos que botan, en cielo (turquesa en oscuro).

```html
<div class="gm-bubble" style="max-width: 7.5rem">
  <span class="gm-typing" aria-hidden="true"><span></span><span></span><span></span></span>
  <span class="gm-visually-hidden">Pensando la respuesta…</span>
</div>
```

## Error

`.gm-bubble--error`: el borde en coral, el color de error.

## Cambiar el color

Con variables, en el bocadillo o en cualquier elemento que lo contenga:

| Variable | Qué cambia | Por defecto |
| --- | --- | --- |
| `--gm-bubble-color` | El borde y la cola del bocadillo (un color o un degradado) | Cielo (turquesa en oscuro) |
| `--gm-bubble-tail-color` | Solo la cola, si el borde es un degradado (la cola admite un color, no un degradado) | El de `--gm-bubble-color` |
| `--gm-typing-color` | Los puntos de «pensando» | Cielo (turquesa en oscuro) |

```html
<div class="gm-flex gm-flex-col gm-gap-6 gm-p-4">
  <div class="gm-bubble gm-bubble--tail-end gm-max-w-sm" style="--gm-bubble-color: var(--gm-accent)">
    <div class="gm-bubble__scroll">Con el color de acento: rosa de día y azul de noche.</div>
  </div>
  <div class="gm-bubble gm-bubble--tail-start gm-max-w-sm gm-ms-4" style="--gm-bubble-color: linear-gradient(90deg, var(--gm-mint-700), var(--gm-sky-700)); --gm-bubble-tail-color: var(--gm-mint-700)">
    <div class="gm-bubble__scroll">Con un degradado de menta a celeste; la cola, en menta.</div>
  </div>
  <div class="gm-bubble" style="--gm-bubble-color: var(--gm-accent); --gm-typing-color: var(--gm-accent); max-width: 7.5rem">
    <span class="gm-typing" aria-hidden="true"><span></span><span></span><span></span></span>
    <span class="gm-visually-hidden">Pensando la respuesta…</span>
  </div>
</div>
```

## Accesibilidad

- El campo tiene su `<label>` (oculta a la vista) y el botón de enviar, su nombre.
- Si el texto se escribe letra a letra, es decorativo: anuncia la respuesta completa de una vez en un `aria-live="polite"` aparte.
- Si la respuesta no cabe, el texto se desplaza dentro; con `tabindex="0"` y `role="region"` se puede mover con el teclado (WCAG 2.1.1).
- Junto al chat, pon el [aviso de IA](/docs/components/ai-notice): quien lo usa tiene que saber que habla con una IA.
