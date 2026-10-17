"""Logo elegido: paneles de cristal, luces del dibujo en diagonal inversa (↗). Tres niveles de brillo de cristal."""
from pathlib import Path

HERE = Path(__file__).resolve().parent

BG = ('<linearGradient id="bg" x1="0" y1="1" x2="1" y2="0">'
      '<stop offset="0" stop-color="#3cd2ff"/><stop offset=".5" stop-color="#8c64ff"/>'
      '<stop offset="1" stop-color="#ff9646"/></linearGradient>')


def logo(level):
    # level: 1 suave, 2 marcado, 3 marcado + reflejo diagonal
    top = {1: .3, 2: .45, 3: .45}[level]
    defs = (BG +
            # Brillo de la baldosa: luz que entra por arriba
            f'<linearGradient id="tileGlow" x1="0" y1="0" x2="0" y2="1">'
            f'<stop offset="0" stop-color="#fff" stop-opacity="{top}"/>'
            f'<stop offset=".45" stop-color="#fff" stop-opacity="0"/></linearGradient>'
            # Panel de atrás: blanco con un ligero degradado y brillo arriba
            '<linearGradient id="back" x1="0" y1="0" x2="0" y2="1">'
            '<stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#eef0ff"/></linearGradient>'
            # Panel de delante: cristal translúcido, más claro arriba
            f'<linearGradient id="front" x1="0" y1="0" x2="1" y2="1">'
            f'<stop offset="0" stop-color="#fff" stop-opacity="{.6 if level > 1 else .5}"/>'
            f'<stop offset="1" stop-color="#fff" stop-opacity=".18"/></linearGradient>'
            # Borde del panel de delante: más brillante arriba a la izquierda
            '<linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">'
            '<stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity=".45"/></linearGradient>'
            '<clipPath id="tileClip"><rect width="512" height="512" rx="114"/></clipPath>')
    body = ('<rect width="512" height="512" rx="114" fill="url(#bg)"/>'
            '<rect width="512" height="512" rx="114" fill="url(#tileGlow)"/>')
    if level == 3:
        # Reflejo diagonal que cruza la baldosa, como la luz sobre un cristal
        body += ('<g clip-path="url(#tileClip)"><path d="M-40 300L300 -40h120L-40 420Z" fill="#fff" fill-opacity=".12"/>'
                 '<path d="M-40 470L470 -40h40L-40 510Z" fill="#fff" fill-opacity=".08"/></g>')
    body += ('<rect x="1.5" y="1.5" width="509" height="509" rx="112.5" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="3"/>'
             '<rect x="120" y="120" width="190" height="190" rx="44" fill="url(#back)"/>'
             '<rect x="202" y="202" width="190" height="190" rx="44" fill="url(#front)" stroke="url(#edge)" stroke-width="8"/>')
    if level >= 2:
        # Reflejo de luz en el borde superior de cada panel
        body += ('<path d="M150 136h130" stroke="#fff" stroke-opacity=".9" stroke-width="6" stroke-linecap="round"/>'
                 '<path d="M236 220h110" stroke="#fff" stroke-opacity=".75" stroke-width="6" stroke-linecap="round"/>')
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs>{defs}</defs>{body}</svg>\n'


NAMES = {1: 'suave', 2: 'marcado', 3: 'reflejo'}
for level, name in NAMES.items():
    (HERE / f'paneles-brillo-{name}.svg').write_text(logo(level))
# Sin brillo, como referencia (la diagonal inversa de antes)
print(', '.join(NAMES.values()))
