# Aviso de IA

Una nota pequeña junto a un chat o cualquier cosa hecha con IA, para que quien la usa sepa que las respuestas son de una IA y pueden equivocarse. Con un enlace a más información.

## Ejemplo

```html
<p class="gm-ai-notice">
  Respuestas generadas con IA a partir de mi perfil; pueden contener errores.
  <button type="button" class="gm-ai-notice__link" data-gm-dialog-open="ejemplo-info-ia">Más información sobre la IA</button>
</p>
<dialog class="gm-dialog" id="ejemplo-info-ia" aria-labelledby="ejemplo-info-ia-titulo">
  <div class="gm-dialog__body">
    <header class="gm-dialog__header">
      <h2 class="gm-dialog__title" id="ejemplo-info-ia-titulo">Información sobre la IA</h2>
      <button type="button" class="gm-icon-btn" data-gm-dialog-close aria-label="Cerrar"><i class="gmi gmi-x-lg" aria-hidden="true"></i></button>
    </header>
    <section class="gm-dialog__section"><h3>Qué es</h3><p>Un modelo de IA que responde a partir de mi perfil. Puede equivocarse: para algo importante, escríbeme.</p></section>
  </div>
</dialog>
```

«Más información sobre la IA» abre una [ventana](/docs/components/dialog) que explica qué IA es, qué pasa con lo que se escribe y cómo pedir que se borre.

## Por qué

- El **Reglamento europeo de IA** (artículo 50) obliga a avisar a las personas de que están hablando con una IA.
- La información sobre qué se guarda y qué no también la pide la protección de datos.

## Accesibilidad

- Texto gris de 7:1 o más sobre el fondo (AAA), pequeño pero legible.
- El enlace está dentro de la frase, subrayado, y es un botón porque abre una ventana (no lleva a otra página).
- Su texto dice de qué trata (*sobre la IA*), no solo «Más información»: así lo entienden los lectores de pantalla fuera de la frase (WCAG 2.4.4) y los buscadores, que marcan los enlaces genéricos.
