# Campo

Campos y formularios como el formulario de contacto del portfolio: recuadro de cristal, etiquetas en negrita, campos redondeados con relleno gris, un anillo al escribir y las opciones en lista.

## Formulario completo

```html
<form class="gm-form" aria-labelledby="contact-title">
  <div>
    <h3 id="contact-title" style="margin: 0 0 4px">Contacta conmigo</h3>
    <p class="gm-form__intro">Los campos con * son obligatorios.</p>
  </div>

  <div class="gm-field">
    <label for="contact-name">Nombre completo o de la empresa *</label>
    <input id="contact-name" name="name" type="text" autocomplete="name" required>
  </div>

  <div class="gm-field">
    <label for="contact-email">Correo electrónico *</label>
    <input id="contact-email" name="email" type="email" autocomplete="email" required>
  </div>

  <div class="gm-field">
    <label for="contact-phone">Teléfono *</label>
    <div class="gm-input-group">
      <select id="contact-prefix" name="prefix" autocomplete="tel-country-code" aria-label="Prefijo" required>
          <option value="+34">+34</option>
          <option value="+33">+33</option>
          <option value="+44">+44</option>
          <option value="+1">+1</option>
          <option value="+39">+39</option>
          <option value="+49">+49</option>
          <option value="+52">+52</option>
          <option value="+81">+81</option>
      </select>
      <input id="contact-phone" name="phone" type="tel" autocomplete="tel-national" required>
    </div>
  </div>

  <div class="gm-field">
    <label for="contact-type">Tipo de proyecto *</label>
    <select id="contact-type" name="type" required>
      <option value="">Elige el tipo de proyecto</option>
      <option>Web de empresa</option>
      <option>Tienda online</option>
      <option>Portfolio</option>
      <option>Aplicación web</option>
      <option>Mantenimiento web</option>
      <option>Otro</option>
    </select>
  </div>

  <fieldset class="gm-field">
    <legend>¿Qué plazo te gustaría? (opcional)</legend>
    <div class="gm-check">
      <label><input type="checkbox" name="timeline"> Urgente (en menos de 1 mes)</label>
      <label><input type="checkbox" name="timeline"> De 1 a 2 meses</label>
      <label><input type="checkbox" name="timeline"> De 2 a 3 meses</label>
      <label><input type="checkbox" name="timeline"> Flexible, sin fecha fija</label>
    </div>
  </fieldset>

  <fieldset class="gm-field" aria-describedby="contact-site-help">
    <legend>¿Tienes ya un dominio o una web? *</legend>
    <p class="gm-field__help" id="contact-site-help">Marca «Sí» si ya tienes un dominio o una web publicada.</p>
    <div class="gm-check">
      <label><input type="radio" name="has-site" value="yes" required> Sí</label>
      <label><input type="radio" name="has-site" value="no"> No</label>
    </div>
  </fieldset>

  <div class="gm-field">
    <label for="contact-details">¿Algo más que deba saber? *</label>
    <p class="gm-field__help" id="contact-details-help">Cuéntame el proyecto que tienes en mente.</p>
    <textarea id="contact-details" name="details" rows="5" aria-describedby="contact-details-help" required></textarea>
  </div>

  <div class="gm-form__actions">
    <button type="submit" class="gm-btn gm-btn--accent">Enviar</button>
    <button type="reset" class="gm-btn gm-btn--secondary">Restablecer</button>
  </div>
</form>
```

## Piezas

| Clase | Qué es |
| --- | --- |
| `.gm-form` | El recuadro de cristal del formulario |
| `.gm-field` | Una etiqueta con su campo (o un `fieldset` con sus opciones) |
| `.gm-field__help` | Texto de ayuda, enlazado con `aria-describedby` |
| `.gm-field__error` | Mensaje de error |
| `.gm-input-group` | Dos campos en fila: un tercio y dos tercios (prefijo y número) |
| `.gm-check` | Una lista de casillas u opciones |
| `.gm-form__actions` | Los botones del final |
| `.gm-btn--accent` | El botón turquesa para enviar |

## Errores

Marca el campo con `aria-invalid="true"` y enlaza el mensaje con `aria-describedby`. El mensaje dice qué hacer, no solo que algo está mal.

```html
<div class="gm-field">
  <label for="err-email">Correo electrónico *</label>
  <input id="err-email" type="email" value="sara@" aria-invalid="true" aria-describedby="err-email-msg">
  <p class="gm-field__error" id="err-email-msg">Escribe un correo completo, por ejemplo sara@ejemplo.com.</p>
</div>
```

## Accesibilidad

- Todos los campos tienen una etiqueta visible. Los grupos de casillas u opciones van en un `fieldset` con su `legend`.
- Los bordes de los campos llegan a 3,5:1 en modo claro y 3,9:1 en oscuro (se pide 3:1).
- Al escribir, el campo muestra un anillo y un borde turquesa (5,4:1 en claro, 6:1 en oscuro; para bordes se pide 3:1).
- Usa `autocomplete` (name, email, tel…) para que el navegador pueda rellenar el formulario.
- Marca los campos obligatorios con * y `required`, y los opcionales con «(opcional)», y explica el * al principio del formulario. Más en [Reglas de los formularios](/docs/forms/rules).
- El botón de enviar: texto blanco sobre turquesa profundo, 8,6:1 (AAA).
