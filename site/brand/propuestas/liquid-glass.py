"""Logo de paneles al estilo «Liquid Glass» de Apple: Default, Clear y Clear Colored.

Colores: luces del dibujo del portfolio (cian #3cd2ff, violeta #8c64ff, ámbar #ff9646), en diagonal inversa (↗).
"""
from pathlib import Path

HERE = Path(__file__).resolve().parent
BACK = (120, 120)
FRONT = (202, 202)
SIZE, R = 190, 44


def panel_rect(pos, **attrs):
    extra = ' '.join(f'{k.replace("_", "-")}="{v}"' for k, v in attrs.items())
    return f'<rect x="{pos[0]}" y="{pos[1]}" width="{SIZE}" height="{SIZE}" rx="{R}" {extra}/>'


DEFS = (
    # Colores de los paneles (↗: cian abajo a la izquierda)
    '<linearGradient id="cBack" x1="0" y1="1" x2="1" y2="0">'
    '<stop offset="0" stop-color="#3cd2ff"/><stop offset="1" stop-color="#8c64ff"/></linearGradient>'
    '<linearGradient id="cFront" x1="0" y1="1" x2="1" y2="0">'
    '<stop offset="0" stop-color="#8c64ff"/><stop offset="1" stop-color="#ff9646"/></linearGradient>'
    # Brillo de cristal sobre cada panel: luz arriba que se apaga a media altura
    '<linearGradient id="gloss" x1="0" y1="0" x2="0" y2="1">'
    '<stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></linearGradient>'
    # Borde de luz: brillante arriba a la izquierda, tenue abajo a la derecha
    '<linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">'
    '<stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset="1" stop-color="#fff" stop-opacity=".25"/></linearGradient>'
    # Baldosa blanca (Default)
    '<linearGradient id="tileWhite" x1="0" y1="0" x2="0" y2="1">'
    '<stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#ececf2"/></linearGradient>'
    # Baldosa de cristal (Clear): translúcida, más clara arriba
    '<linearGradient id="tileGlass" x1="0" y1="0" x2="0" y2="1">'
    '<stop offset="0" stop-color="#fff" stop-opacity=".42"/><stop offset="1" stop-color="#fff" stop-opacity=".16"/></linearGradient>'
    '<linearGradient id="tileEdge" x1="0" y1="0" x2="1" y2="1">'
    '<stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset=".5" stop-color="#fff" stop-opacity=".25"/>'
    '<stop offset="1" stop-color="#fff" stop-opacity=".6"/></linearGradient>'
)


def panels(colored):
    if colored:
        back = panel_rect(BACK, fill='url(#cBack)')
        front = panel_rect(FRONT, fill='url(#cFront)', fill_opacity='.85')
    else:
        back = panel_rect(BACK, fill='#fff', fill_opacity='.6')
        front = panel_rect(FRONT, fill='#fff', fill_opacity='.38')
    shine = lambda pos: (panel_rect(pos, fill='url(#gloss)')
                         + panel_rect(pos, fill='none', stroke='url(#edge)', stroke_width='5'))
    return back + shine(BACK) + front + shine(FRONT)


def tile(kind):
    if kind == 'default':
        return ('<rect width="512" height="512" rx="114" fill="url(#tileWhite)"/>'
                '<rect x="1.5" y="1.5" width="509" height="509" rx="112.5" fill="none" stroke="#000" stroke-opacity=".06" stroke-width="3"/>')
    return ('<rect width="512" height="512" rx="114" fill="url(#tileGlass)"/>'
            '<rect x="2.5" y="2.5" width="507" height="507" rx="111.5" fill="none" stroke="url(#tileEdge)" stroke-width="5"/>')


VARIANTS = {
    'default': ('default', True),
    'clear': ('clear', False),
    'clear-colored': ('clear', True),
}
for name, (kind, colored) in VARIANTS.items():
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs>{DEFS}</defs>'
           f'{tile(kind)}{panels(colored)}</svg>\n')
    (HERE / f'liquid-{name}.svg').write_text(svg)
print(', '.join(VARIANTS))
