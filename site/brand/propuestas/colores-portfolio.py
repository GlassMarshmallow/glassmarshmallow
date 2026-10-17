"""Logo de paneles de cristal (elegido el 17/10/2026) con los colores del portfolio: tres versiones."""
from pathlib import Path

HERE = Path(__file__).resolve().parent

GLASS = ('<linearGradient id="gl" x1="0" y1="0" x2="0" y2="1">'
         '<stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/>'
         '</linearGradient>')


def logo(bg_defs, bg_fill, back, front, front_opacity, front_stroke, stroke_opacity):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs>{bg_defs}{GLASS}</defs>'
            f'<rect width="512" height="512" rx="114" fill="{bg_fill}"/>'
            f'<rect x="1.5" y="1.5" width="509" height="509" rx="112.5" fill="url(#gl)" stroke="#fff" stroke-opacity=".18" stroke-width="3"/>'
            f'<rect x="120" y="120" width="190" height="190" rx="44" fill="{back}"/>'
            f'<rect x="202" y="202" width="190" height="190" rx="44" fill="{front}" fill-opacity="{front_opacity}" '
            f'stroke="{front_stroke}" stroke-opacity="{stroke_opacity}" stroke-width="8"/>'
            '</svg>\n')


VERSIONS = {
    # Las tres luces del dibujo del portfolio (scene-animation.ts): pantalla, penumbra y lámpara
    'luces': logo('<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">'
                  '<stop offset="0" stop-color="#3cd2ff"/><stop offset=".5" stop-color="#8c64ff"/>'
                  '<stop offset="1" stop-color="#ff9646"/></linearGradient>',
                  'url(#bg)', '#fff', '#fff', .38, '#fff', .9),
    # Degradado vivo de los títulos del portfolio (--accent-gradient-vivid)
    'vivo': logo('<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">'
                 '<stop offset="0" stop-color="#0891b2"/><stop offset=".5" stop-color="#8b5cf6"/>'
                 '<stop offset="1" stop-color="#ea580c"/></linearGradient>',
                 'url(#bg)', '#fff', '#fff', .38, '#fff', .9),
    # Cian de la pantalla al turquesa del modo oscuro
    'cian': logo('<linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">'
                 '<stop offset="0" stop-color="#3cd2ff"/><stop offset="1" stop-color="#1cabb0"/></linearGradient>',
                 'url(#bg)', '#fff', '#fff', .38, '#fff', .9),
}

for name, svg in VERSIONS.items():
    (HERE / f'paneles-{name}.svg').write_text(svg)
print(', '.join(VERSIONS))

# Direcciones del degradado (x1 y1 x2 y2) para las dos versiones de tres colores
DIRECTIONS = {
    'diagonal': ('0', '0', '1', '1'),          # arriba-izquierda → abajo-derecha
    'diagonal-inversa': ('0', '1', '1', '0'),  # abajo-izquierda → arriba-derecha
    'vertical': ('0', '0', '0', '1'),          # arriba → abajo
    'vertical-inversa': ('0', '1', '0', '0'),  # abajo → arriba
    'horizontal': ('0', '0', '1', '0'),        # izquierda → derecha
}
STOPS = {
    'luces': ('#3cd2ff', '#8c64ff', '#ff9646'),
    'vivo': ('#0891b2', '#8b5cf6', '#ea580c'),
}
for palette, (c1, c2, c3) in STOPS.items():
    for direction, (x1, y1, x2, y2) in DIRECTIONS.items():
        svg = logo(f'<linearGradient id="bg" x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}">'
                   f'<stop offset="0" stop-color="{c1}"/><stop offset=".5" stop-color="{c2}"/>'
                   f'<stop offset="1" stop-color="{c3}"/></linearGradient>',
                   'url(#bg)', '#fff', '#fff', .38, '#fff', .9)
        (HERE / f'paneles-{palette}-{direction}.svg').write_text(svg)
print('direcciones: ' + ', '.join(DIRECTIONS))
