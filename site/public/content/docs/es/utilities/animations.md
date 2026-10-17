# Animaciones

Movimientos cortos para que algo aparezca o llame un poco la atención. **Todas se quitan solas** si la persona ha pedido menos movimiento en su sistema.

| Clase | Qué hace | Para |
| --- | --- | --- |
| `gm-animate-fade-in` | Aparece poco a poco | Contenido que se carga |
| `gm-animate-slide-up` | Sube un poco mientras aparece | Tarjetas, avisos |
| `gm-animate-pop` | Aparece creciendo con un pequeño rebote | Iconos, insignias |
| `gm-animate-spin` | Gira sin parar | Iconos de «cargando» |
| `gm-animate-pulse` | Se apaga y se enciende despacio | Huecos mientras carga el contenido |
| `gm-transition` | Los cambios de color, sombra, opacidad y posición van suaves | Botones, enlaces, tarjetas |

```html
<div class="gm-flex gm-gap-4 gm-flex-wrap gm-items-center">
  <button type="button" class="gm-btn gm-btn--sm gm-btn--secondary" data-replay><i class="gmi gmi-arrow-repeat" aria-hidden="true"></i>Repetir</button>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-fade-in">fade-in</div>
  <div class="gm-theme-mint gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-slide-up">slide-up</div>
  <div class="gm-theme-peach gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-pop">pop</div>
  <i class="gmi gmi-arrow-repeat gm-animate-spin" style="font-size: 1.6rem" aria-hidden="true"></i>
  <div class="gm-bg-gray-200 gm-rounded-sm gm-animate-pulse" style="width: 140px; height: 20px"></div>
</div>
```

Las que aparecen solo se mueven una vez, al cargar: pulsa **Repetir** para verlas otra vez.

## Accesibilidad

- Con «reducir movimiento» activado en el sistema, ninguna se mueve (WCAG 2.3.3).
- Nada que parpadee más de tres veces por segundo (WCAG 2.3.1): `gm-animate-pulse` va a un ciclo cada 2 s.
- Lo que gira o late sin parar, solo mientras algo carga, y con un texto que diga qué pasa («Cargando…»).
