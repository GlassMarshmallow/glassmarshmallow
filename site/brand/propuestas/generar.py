"""Propuestas de logo de glassmarshmallow: tres ideas × dos colores. Escribe los SVG en esta carpeta."""
from pathlib import Path

HERE = Path(__file__).resolve().parent
COLORS = {
    'negro': {'tile': '#1d1d1f', 'tile2': '#3a3a3c', 'mark': '#ffffff'},
    'indigo': {'tile': '#5563d6', 'tile2': '#7d8bff', 'mark': '#ffffff'},
}


def tile(c, uid):
    # Baldosa de app (512 × 512, esquinas como los iconos de Apple) con un brillo arriba, como el cristal
    return (f'<defs><linearGradient id="bg{uid}" x1="0" y1="0" x2="0" y2="1">'
            f'<stop offset="0" stop-color="{c["tile2"]}"/><stop offset="1" stop-color="{c["tile"]}"/></linearGradient>'
            f'<linearGradient id="gl{uid}" x1="0" y1="0" x2="0" y2="1">'
            f'<stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/>'
            f'</linearGradient></defs>'
            f'<rect width="512" height="512" rx="114" fill="url(#bg{uid})"/>'
            f'<rect x="1.5" y="1.5" width="509" height="509" rx="112.5" fill="url(#gl{uid})" stroke="#fff" stroke-opacity=".18" stroke-width="3"/>')


def nube(c):
    # Marshmallow visto de lado: cuerpo translúcido y tapa más clara
    m = c['mark']
    return (f'<path d="M146 200v118c0 31 49 56 110 56s110-25 110-56V200" fill="{m}" fill-opacity=".72"/>'
            f'<ellipse cx="256" cy="200" rx="110" ry="46" fill="{m}"/>'
            f'<path d="M146 200v118c0 31 49 56 110 56s110-25 110-56V200" fill="none" stroke="{m}" stroke-width="10"/>'
            f'<path d="M176 250v60" stroke="{m}" stroke-opacity=".9" stroke-width="12" stroke-linecap="round"/>')


def monograma(c):
    # La «m» con el mismo trazo redondeado que los iconos (cuadrícula de 24 escalada)
    return (f'<g transform="translate(64 64) scale(16)" fill="none" stroke="{c["mark"]}" stroke-width="1.6" '
            f'stroke-linecap="round" stroke-linejoin="round">'
            f'<path d="M4.5 18V9M4.5 12a3.75 3.75 0 0 1 7.5 0v6M12 12a3.75 3.75 0 0 1 7.5 0v6"/></g>')


def paneles(c):
    # Dos paneles: el de atrás opaco y el de delante esmerilado (translúcido con borde claro)
    m = c['mark']
    return (f'<rect x="120" y="120" width="190" height="190" rx="44" fill="{m}" fill-opacity=".95"/>'
            f'<rect x="202" y="202" width="190" height="190" rx="44" fill="{m}" fill-opacity=".38" '
            f'stroke="{m}" stroke-opacity=".9" stroke-width="8"/>')


IDEAS = {'nube': nube, 'monograma': monograma, 'paneles': paneles}
uid = 0
for idea, draw in IDEAS.items():
    for color, c in COLORS.items():
        uid += 1
        svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{tile(c, uid)}{draw(c)}</svg>\n'
        (HERE / f'{idea}-{color}.svg').write_text(svg)
print('6 propuestas')
