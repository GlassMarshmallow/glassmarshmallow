# Animaciones

Movimientos cortos para que algo aparezca, se vaya o llame un poco la atención. **Todas se quitan solas** si la persona ha pedido menos movimiento en su sistema. Las que entran o salen se mueven una sola vez: pulsa **Repetir** para verlas otra vez.

## Entrar

```html
<div class="gm-flex gm-gap-3 gm-flex-wrap gm-items-center">
  <button type="button" class="gm-btn gm-btn--sm gm-btn--secondary" data-replay><i class="gmi gmi-arrow-repeat" aria-hidden="true"></i>Repetir</button>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-fade-in">fade-in</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-slide-up">slide-up</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-slide-down">slide-down</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-slide-left">slide-left</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-slide-right">slide-right</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-zoom-in">zoom-in</div>
  <div class="gm-theme-sky gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-pop">pop</div>
  <div class="gm-theme-lavender gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-blur-in">blur-in</div>
  <div class="gm-theme-lavender gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-spin-in">spin-in</div>
</div>
```

| Clase | Qué hace |
| --- | --- |
| `gm-animate-fade-in` | Aparece poco a poco |
| `gm-animate-slide-up` / `-down` | Aparece subiendo / bajando un poco |
| `gm-animate-slide-left` / `-right` | Entra desde la izquierda / la derecha |
| `gm-animate-zoom-in` | Aparece creciendo un poco |
| `gm-animate-pop` | Aparece creciendo con un pequeño rebote |
| `gm-animate-blur-in` | Sube y se enfoca desde borroso (las tecnologías del portfolio) |
| `gm-animate-spin-in` | Aparece girando con rebote (los logos del portfolio) |

## Cascada

Con `gm-stagger` en el contenedor, los hijos entran uno detrás de otro, 40 ms entre cada uno, como las tecnologías del portfolio. Por defecto con `blur-in`; para otra, pon su clase en los hijos.

```html
<div class="gm-flex gm-gap-3 gm-flex-wrap gm-items-center">
  <button type="button" class="gm-btn gm-btn--sm gm-btn--secondary" data-replay><i class="gmi gmi-arrow-repeat" aria-hidden="true"></i>Repetir</button>
  <div class="gm-stagger gm-flex gm-gap-2 gm-flex-wrap">
    <span class="gm-tag gm-theme-mint gm-theme-solid">Angular</span>
    <span class="gm-tag gm-theme-mint gm-theme-solid">TypeScript</span>
    <span class="gm-tag gm-theme-mint gm-theme-solid">.NET</span>
    <span class="gm-tag gm-theme-mint gm-theme-solid">Figma</span>
    <span class="gm-tag gm-theme-mint gm-theme-solid">Docker</span>
    <span class="gm-tag gm-theme-mint gm-theme-solid">Ollama</span>
  </div>
</div>
```

## Salir

Para quitar algo con suavidad: pon la clase y, al terminar la animación (evento `animationend`), quita el elemento.

```html
<div class="gm-flex gm-gap-3 gm-flex-wrap gm-items-center">
  <button type="button" class="gm-btn gm-btn--sm gm-btn--secondary" data-replay><i class="gmi gmi-arrow-repeat" aria-hidden="true"></i>Repetir</button>
  <div class="gm-theme-coral gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-fade-out">fade-out</div>
  <div class="gm-theme-coral gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-slide-out">slide-out</div>
  <div class="gm-theme-coral gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-zoom-out">zoom-out</div>
</div>
```

## Llamar la atención

```html
<div class="gm-flex gm-gap-6 gm-flex-wrap gm-items-center">
  <button type="button" class="gm-btn gm-btn--sm gm-btn--secondary" data-replay><i class="gmi gmi-arrow-repeat" aria-hidden="true"></i>Repetir</button>
  <i class="gmi gmi-arrow-down gm-animate-bounce" style="font-size: 1.6rem" aria-hidden="true"></i>
  <div class="gm-field" style="max-width: 200px"><input class="gm-animate-shake" value="sara@" aria-label="Correo (ejemplo de error)" aria-invalid="true"></div>
  <i class="gmi gmi-heart-fill gm-animate-heartbeat gm-text-coral" style="font-size: 1.6rem" aria-hidden="true"></i>
  <span style="position: relative; display: inline-flex; width: 14px; height: 14px">
    <span class="gm-animate-ping" style="position: absolute; inset: 0; border-radius: 50%; background: var(--gm-mint)"></span>
    <span style="position: relative; width: 14px; height: 14px; border-radius: 50%; background: var(--gm-mint)"></span>
  </span>
</div>
```

| Clase | Qué hace | Para |
| --- | --- | --- |
| `gm-animate-bounce` | Bota sin parar | Una flecha que invita a bajar |
| `gm-animate-shake` | Se sacude una vez | Un campo con un error |
| `gm-animate-heartbeat` | Late | Un «me gusta» |
| `gm-animate-ping` | Una onda que se expande | Algo nuevo o en directo |

## Mientras carga

```html
<div class="gm-flex gm-gap-6 gm-flex-wrap gm-items-center">
  <i class="gmi gmi-arrow-repeat gm-animate-spin" style="font-size: 1.6rem" aria-hidden="true"></i>
  <div class="gm-bg-gray-200 gm-rounded-sm gm-animate-pulse" style="width: 140px; height: 20px"></div>
  <div class="gm-rounded-sm gm-animate-shimmer" style="width: 200px; height: 20px"></div>
</div>
```

| Clase | Qué hace |
| --- | --- |
| `gm-animate-spin` | Gira sin parar |
| `gm-animate-pulse` | Se apaga y se enciende despacio |
| `gm-animate-shimmer` | Un brillo que cruza el hueco mientras carga el contenido |

## Cuenta atrás

El botón de «siguiente episodio» de My MTV Box: se va llenando de izquierda a derecha. La duración va en `--gm-countdown` (10 s por defecto).

```html
<div class="gm-flex gm-gap-3 gm-flex-wrap gm-items-center">
  <button type="button" class="gm-btn gm-btn--sm gm-btn--secondary" data-replay><i class="gmi gmi-arrow-repeat" aria-hidden="true"></i>Repetir</button>
  <button type="button" class="gm-btn gm-countdown" style="--gm-countdown: 5s">Ver el siguiente episodio</button>
</div>
```

## Al hacer scroll

`gm-animate-on-scroll`: la pieza sube y aparece al entrar en la pantalla. Solo con CSS, en los navegadores que lo permiten (Chrome y Edge); en el resto se ve quieta.

## Duración y retardo

| Clases | Valores |
| --- | --- |
| `gm-duration-…` | 150, 200, 300, 500, 700 y 1000 ms |
| `gm-delay-…` | 100, 200, 300, 500, 700 y 1000 ms |
| `gm-transition` | Cambios suaves de color, sombra, opacidad y posición |

```html
<div class="gm-flex gm-gap-3 gm-flex-wrap gm-items-center">
  <button type="button" class="gm-btn gm-btn--sm gm-btn--secondary" data-replay><i class="gmi gmi-arrow-repeat" aria-hidden="true"></i>Repetir</button>
  <div class="gm-theme-peach gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-slide-up">Sin retardo</div>
  <div class="gm-theme-peach gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-slide-up gm-delay-300">300 ms</div>
  <div class="gm-theme-peach gm-theme-solid gm-rounded-sm gm-p-4 gm-animate-slide-up gm-delay-700 gm-duration-1000">700 ms, lenta</div>
</div>
```

## Accesibilidad

- Con «reducir movimiento» activado en el sistema, ninguna se mueve (WCAG 2.3.3).
- Nada parpadea más de tres veces por segundo (WCAG 2.3.1).
- Lo que se mueve sin parar, solo mientras algo carga o con un fin claro, y con un texto que diga qué pasa («Cargando…»). Si dura más de 5 s, tiene que poder pararse (WCAG 2.2.2).
- La sacudida de un error acompaña al mensaje de error, no lo sustituye.
