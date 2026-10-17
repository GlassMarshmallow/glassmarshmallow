# Variables CSS

Todo el aspecto de GlassMarshmallow sale de variables CSS con el prefijo `--gm-`. Cambian solas con el modo claro y oscuro (`data-theme`) y puedes cambiarlas para toda la web o solo para una parte.

## Cambiar una variable

En `:root` para toda la web, en `[data-theme="dark"]` para el modo oscuro, o en cualquier elemento para cambiarla solo dentro de él:

```html-code
<style>
  :root { --gm-radius-md: 16px; }
  [data-theme="dark"] { --gm-bg: #0b0b0c; }
  .mi-seccion { --gm-accent: #8c57e9; }
</style>
```

Si cambias un color, comprueba después el contraste (7:1 para el texto, 3:1 para bordes e iconos).

Estas son las principales. La paleta pastel y sus escalas están en [Paleta](/docs/color/colors).

## Página y texto

| Variable | Claro | Oscuro |
| --- | --- | --- |
| `--gm-bg` | `#f5f5f7` | `#000` |
| `--gm-text` | `#1d1d1f` | `#f5f5f7` |
| `--gm-text-secondary` | `#3a3a3c` | `#d1d1d6` |
| `--gm-muted` | `#48484a` | `#b8b8bc` |
| `--gm-link` | `#004b96` | `#79beff` |
| `--gm-link-hover` | `#004b96` | `#79beff` |
| `--gm-selection` | `rgba(14, 116, 144, .18)` | `rgba(28, 171, 176, .35)` |
| `--gm-font` | `"Montserrat", -apple-system, BlinkMacSystemFo…` | igual |
| `--gm-font-mono` | `ui-monospace, SFMono-Regular, Menlo, monospace` | igual |

## Superficies y líneas

| Variable | Claro | Oscuro |
| --- | --- | --- |
| `--gm-surface` | `rgba(255, 255, 255, .82)` | `rgba(28, 28, 30, .82)` |
| `--gm-surface-solid` | `#fff` | `#1c1c1e` |
| `--gm-surface-glass` | `rgba(255, 255, 255, .86)` | `rgba(44, 44, 46, .86)` |
| `--gm-surface-glass-border` | `rgba(255, 255, 255, .8)` | `rgba(255, 255, 255, .06)` |
| `--gm-surface-soft` | `rgba(255, 255, 255, .6)` | `rgba(44, 44, 46, .6)` |
| `--gm-line` | `rgba(0, 0, 0, .08)` | `rgba(255, 255, 255, .1)` |
| `--gm-line-strong` | `#bbb` | `#545458` |
| `--gm-hover` | `rgba(0, 0, 0, .05)` | `rgba(255, 255, 255, .08)` |
| `--gm-tag` | `#e8e8ed` | `#2c2c2e` |
| `--gm-tag-hover` | `#dcdce1` | `#3a3a3c` |
| `--gm-fill-subtle` | `rgba(0, 0, 0, .025)` | `rgba(255, 255, 255, .04)` |

## Acento y botones

| Variable | Claro | Oscuro |
| --- | --- | --- |
| `--gm-accent` | `#0e7490` | `#1cabb0` |
| `--gm-accent-strong` | `#0a5366` | `#0a5366` |
| `--gm-accent-hover` | `#08414f` | `#08414f` |
| `--gm-focus` | `#0e7490` | `#1cabb0` |
| `--gm-primary` | `#1d1d1f` | `#f5f5f7` |
| `--gm-on-primary` | `#fff` | `#1d1d1f` |

## Estados

| Variable | Claro | Oscuro |
| --- | --- | --- |
| `--gm-success` | `var(--gm-mint-900)` | `var(--gm-mint)` |
| `--gm-success-bg` | `var(--gm-mint-050)` | `rgb(var(--gm-mint-rgb) / .15)` |
| `--gm-warning` | `var(--gm-lemon-800)` | `var(--gm-lemon)` |
| `--gm-warning-bg` | `var(--gm-lemon-050)` | `rgb(var(--gm-lemon-rgb) / .15)` |
| `--gm-danger` | `var(--gm-coral-800)` | `var(--gm-coral)` |
| `--gm-danger-bg` | `var(--gm-coral-050)` | `rgb(var(--gm-coral-rgb) / .15)` |

## Campos

| Variable | Claro | Oscuro |
| --- | --- | --- |
| `--gm-field-bg` | `#f5f5f7` | `#1d1d1f` |
| `--gm-field-bg-focus` | `#fff` | `#1d1d1f` |
| `--gm-field-border` | `#86868b` | `#6e6e73` |
| `--gm-field-focus` | `#0e7490` | `#1cabb0` |
| `--gm-field-ring` | `rgba(14, 116, 144, .15)` | `rgba(28, 171, 176, .45)` |
| `--gm-form-bg` | `rgba(255, 255, 255, .78)` | `rgba(255, 255, 255, .04)` |

## Formas, sombras y cristal

| Variable | Claro | Oscuro |
| --- | --- | --- |
| `--gm-radius-sm` | `12px` | igual |
| `--gm-radius-md` | `20px` | igual |
| `--gm-radius-lg` | `30px` | igual |
| `--gm-radius-pill` | `999px` | igual |
| `--gm-shadow-sm` | `0 2px 12px rgba(0, 0, 0, .05)` | `0 2px 12px rgba(0, 0, 0, .4)` |
| `--gm-shadow-md` | `0 18px 50px rgba(0, 0, 0, .11)` | `0 18px 50px rgba(0, 0, 0, .6)` |
| `--gm-shadow-hover` | `0 8px 22px rgba(0, 0, 0, .18)` | `0 8px 22px rgba(0, 0, 0, .5)` |
| `--gm-blur` | `20px` | igual |
| `--gm-blur-header` | `24px` | igual |

## Maquetación

| Variable | Claro | Oscuro |
| --- | --- | --- |
| `--gm-container` | `1240px` | igual |
| `--gm-header-height` | `72px` | igual |
| `--gm-breakpoint-sm` | `600px` | igual |
| `--gm-breakpoint-md` | `860px` | igual |
| `--gm-breakpoint-lg` | `1100px` | igual |
| `--gm-breakpoint-xl` | `1300px` | igual |
