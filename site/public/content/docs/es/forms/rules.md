# Reglas de los formularios

Cómo debe ser un formulario para que sea fácil de rellenar y accesible. Todo formulario hecho con GlassMarshmallow debe cumplir estas reglas. Salen de las guías de GOV.UK, el tutorial de formularios del W3C y estudios de usabilidad, y cada una dice qué criterio de WCAG 2.2 ayuda a cumplir.

## 1. Pide lo menos posible

Cada campo de más es un motivo para abandonar. Antes de añadir uno, pregúntate si de verdad lo necesitas ahora. Si un dato solo sirve para algunas personas, pídelo solo a ellas.

## 2. Una columna, con la etiqueta encima

Los campos van uno debajo de otro, en el orden en que se piensan las respuestas. La etiqueta va **encima** del campo, es corta, empieza en mayúscula y no termina en dos puntos. Así se lee de arriba abajo sin saltos, también al ampliar la pantalla.

**Mal:** dos campos por fila y etiquetas al lado.

```html
<div class="gm-field" style="grid-template-columns: auto 1fr auto 1fr; align-items: center; gap: 8px; max-width: 560px">
  <label for="mal-nombre">Nombre:</label>
  <input id="mal-nombre" type="text">
  <label for="mal-apellidos">Apellidos:</label>
  <input id="mal-apellidos" type="text">
</div>
```

**Bien:** una columna y la etiqueta encima.

```html
<div style="display: grid; gap: 1.15rem; max-width: 420px">
  <div class="gm-field">
    <label for="bien-nombre">Nombre</label>
    <input id="bien-nombre" type="text" autocomplete="given-name">
  </div>
  <div class="gm-field">
    <label for="bien-apellidos">Apellidos</label>
    <input id="bien-apellidos" type="text" autocomplete="family-name">
  </div>
</div>
```

WCAG: 1.3.2 Secuencia con significado, 1.4.10 Reajuste del contenido, 3.3.2 Etiquetas o instrucciones.

## 3. Preguntas sencillas

Mejor varias preguntas simples que una complicada. Usa preguntas cerradas (opciones a elegir) cuando las respuestas posibles se conocen, y deja contestar «No lo sé» si es una respuesta válida. Con 2 o 3 opciones cortas, en fila; con más, una debajo de otra.

## 4. Marca los obligatorios y los opcionales

Los obligatorios llevan «(obligatorio)» escrito en la etiqueta y `required` en el campo; los opcionales, «(opcional)». Escrito con palabras se entiende sin explicaciones y lo leen igual los lectores de pantalla; un asterisco no todo el mundo sabe qué significa.

```html
<div style="display: grid; gap: 1.15rem; max-width: 420px">
  <div class="gm-field">
    <label for="reglas-correo">Correo electrónico (obligatorio)</label>
    <input id="reglas-correo" type="email" autocomplete="email" required>
  </div>
  <div class="gm-field">
    <label for="reglas-telefono">Teléfono (opcional)</label>
    <input id="reglas-telefono" type="tel" autocomplete="tel">
  </div>
</div>
```

WCAG: 3.3.2 Etiquetas o instrucciones, 1.4.1 Uso del color (se dice con texto, no con color).

## 5. La ayuda, visible y fuera del campo

La ayuda va en texto debajo de la etiqueta y se enlaza al campo con `aria-describedby`. El texto de ejemplo dentro del campo (`placeholder`) no sirve de etiqueta ni de ayuda: desaparece al escribir, suele tener poco contraste y muchos lectores de pantalla no lo leen.

**Mal:** la ayuda solo en el placeholder.

```html
<div class="gm-field" style="max-width: 420px">
  <label for="mal-dni">DNI</label>
  <input id="mal-dni" type="text" placeholder="8 números y una letra, sin espacios">
</div>
```

**Bien:** la ayuda en texto, enlazada al campo.

```html
<div class="gm-field" style="max-width: 420px">
  <label for="bien-dni">DNI</label>
  <p class="gm-field__help" id="bien-dni-ayuda">8 números y una letra, sin espacios. Por ejemplo, 12345678Z.</p>
  <input id="bien-dni" type="text" aria-describedby="bien-dni-ayuda">
</div>
```

WCAG: 3.3.2 Etiquetas o instrucciones, 1.4.3 Contraste.

## 6. Mensajes de error claros

El mensaje dice qué ha pasado y cómo arreglarlo, usando las palabras de la etiqueta. Sin culpar («has olvidado…»), sin palabras técnicas («error de validación»), sin «por favor» y sin depender solo del color: el campo lleva `aria-invalid="true"` y el mensaje se enlaza con `aria-describedby`.

**Mal:** no dice qué hacer.

```html
<div class="gm-field" style="max-width: 420px">
  <label for="mal-correo">Correo electrónico (obligatorio)</label>
  <input id="mal-correo" type="email" value="sara@" aria-invalid="true" aria-describedby="mal-correo-error">
  <p class="gm-field__error" id="mal-correo-error">Campo no válido.</p>
</div>
```

**Bien:** dice qué falta y da un ejemplo.

```html
<div class="gm-field" style="max-width: 420px">
  <label for="bien-correo">Correo electrónico (obligatorio)</label>
  <input id="bien-correo" type="email" value="sara@" aria-invalid="true" aria-describedby="bien-correo-error">
  <p class="gm-field__error" id="bien-correo-error">Escribe el correo electrónico completo, por ejemplo sara@ejemplo.com.</p>
</div>
```

WCAG: 3.3.1 Identificación de errores, 3.3.3 Sugerencias ante errores, 1.4.1 Uso del color.

## 7. Resumen de errores al enviar

Si al enviar hay errores, arriba del formulario aparece un resumen con cuántos hay y un enlace a cada campo, además del mensaje junto a cada uno. El foco va al resumen para que los lectores de pantalla lo lean entero.

```html
<div class="gm-error-summary" role="alert" tabindex="-1" aria-labelledby="resumen-titulo" style="max-width: 520px">
  <h2 class="gm-error-summary__title" id="resumen-titulo"><i class="gmi gmi-exclamation-circle" aria-hidden="true"></i>Hay 2 errores en el formulario</h2>
  <ul class="gm-error-summary__list">
    <li><a href="#bien-correo">Escribe el correo electrónico completo, por ejemplo sara@ejemplo.com.</a></li>
    <li><a href="#reglas-correo">Escribe tu correo electrónico.</a></li>
  </ul>
</div>
```

Cada enlace lleva al campo que hay que corregir (`href="#id-del-campo"`) y repite su mensaje de error. El título del resumen también va en el título de la página: «Error: Contacto | Mi web».

WCAG: 3.3.1 Identificación de errores, 2.4.3 Orden del foco, 4.1.3 Mensajes de estado.

## 8. Valida sin agobiar

Comprueba los datos al enviar el formulario o al salir del campo, no mientras se escribe: un error que aparece a la mitad de escribir un correo solo molesta. Quita el error en cuanto el campo esté bien. No borres lo que la persona ha escrito.

WCAG: 3.3.1 Identificación de errores, 3.3.7 Entrada redundante (no pidas dos veces lo mismo).

## 9. Confirma y deja deshacer

Al enviar, di claramente que ha ido bien, en la página y a los lectores de pantalla (con `role="status"` o llevando el foco al mensaje). Si el envío tiene consecuencias (pagar, borrar, firmar), deja revisar los datos antes y deshacer o corregir después.

```html
<div class="gm-alert gm-alert--success" role="status" style="max-width: 520px">
  <i class="gmi gmi-check-circle" aria-hidden="true"></i>
  <span>Mensaje enviado. Te responderé en 2 días laborables.</span>
</div>
```

WCAG: 4.1.3 Mensajes de estado, 3.3.4 y 3.3.6 Prevención de errores.

## 10. El botón dice lo que hace

El botón de enviar dice qué pasa al pulsarlo: «Enviar solicitud», «Crear cuenta», «Pagar 25 €». Evita «Aceptar» o «Enviar» a secas cuando no queda claro qué se envía. Si hay un botón para vaciar el formulario, que no esté al lado del de enviar con el mismo aspecto.

```html
<div class="gm-form__actions" style="max-width: 420px">
  <button type="button" class="gm-btn gm-btn--accent">Enviar solicitud</button>
</div>
```

WCAG: 2.4.6 Encabezados y etiquetas, 2.5.3 Etiqueta en el nombre.

## Además, siempre

- Cada campo tiene su `<label>` visible, y los grupos de opciones van en `<fieldset>` con `<legend>`.
- Usa el `type` y el `autocomplete` adecuados (`email`, `tel`, `name`, `postal-code`…): el móvil enseña el teclado correcto y el navegador puede rellenar (WCAG 1.3.5).
- Todo se puede rellenar y enviar solo con el teclado, en orden, y el foco se ve siempre (WCAG 2.1.1, 2.4.7).
- Campos, casillas y botones miden al menos 44 px de alto (WCAG 2.5.5).
- No pongas límite de tiempo, y si lo hay, avisa y deja ampliarlo (WCAG 2.2.1).
- Nada de pruebas que dependan de la memoria o de resolver un acertijo para entrar, salvo que haya otra forma (WCAG 3.3.8).
