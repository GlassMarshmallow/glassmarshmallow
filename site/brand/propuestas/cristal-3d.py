"""Logo de paneles en cristal con volumen (como los iconos de cristal 3D de la referencia de Sara).

- Baldosa: cristal claro y grueso, con borde irisado y sombra interior abajo.
- Paneles: cristal de color (luces del dibujo, ↗) con brillo especular, borde de luz y sombra debajo.
"""
from pathlib import Path

HERE = Path(__file__).resolve().parent
SIZE, R = 190, 46
BACK, FRONT = (116, 116), (206, 206)


def rect(x, y, **a):
    extra = ' '.join(f'{k.replace("_", "-")}="{v}"' for k, v in a.items())
    return f'<rect x="{x}" y="{y}" width="{SIZE}" height="{SIZE}" rx="{R}" {extra}/>'


def defs(tile):
    tiles = {
        # Cristal claro, como la referencia
        'claro': ('<linearGradient id="tile" x1="0" y1="0" x2="0" y2="1">'
                  '<stop offset="0" stop-color="#f7f7fb"/><stop offset="1" stop-color="#dcdde8"/></linearGradient>'),
        # Cristal teñido con las luces del dibujo, muy suave
        'luces': ('<linearGradient id="tile" x1="0" y1="1" x2="1" y2="0">'
                  '<stop offset="0" stop-color="#d8f4ff"/><stop offset=".5" stop-color="#e6ddff"/>'
                  '<stop offset="1" stop-color="#ffe6d4"/></linearGradient>'),
    }
    return (tiles[tile] +
            # Borde irisado de la baldosa
            '<linearGradient id="iris" x1="0" y1="0" x2="1" y2="1">'
            '<stop offset="0" stop-color="#3cd2ff"/><stop offset=".35" stop-color="#8c64ff"/>'
            '<stop offset=".65" stop-color="#ff7ad9"/><stop offset="1" stop-color="#ff9646"/></linearGradient>'
            # Sombra interior de la baldosa (abajo) y brillo (arriba)
            '<linearGradient id="tileShade" x1="0" y1="0" x2="0" y2="1">'
            '<stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset=".25" stop-color="#fff" stop-opacity="0"/>'
            '<stop offset=".8" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".08"/></linearGradient>'
            # Colores de los paneles
            '<linearGradient id="cBack" x1="0" y1="1" x2="1" y2="0">'
            '<stop offset="0" stop-color="#3cd2ff"/><stop offset="1" stop-color="#8c64ff"/></linearGradient>'
            '<linearGradient id="cFront" x1="0" y1="1" x2="1" y2="0">'
            '<stop offset="0" stop-color="#8c64ff"/><stop offset="1" stop-color="#ff9646"/></linearGradient>'
            # Volumen: luz arriba y algo de sombra abajo dentro de cada panel
            '<linearGradient id="body" x1="0" y1="0" x2="0" y2="1">'
            '<stop offset="0" stop-color="#fff" stop-opacity=".45"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/>'
            '<stop offset="1" stop-color="#000" stop-opacity=".12"/></linearGradient>'
            # Borde de luz del panel
            '<linearGradient id="rim" x1="0" y1="0" x2="1" y2="1">'
            '<stop offset="0" stop-color="#fff" stop-opacity="1"/><stop offset=".55" stop-color="#fff" stop-opacity=".2"/>'
            '<stop offset="1" stop-color="#fff" stop-opacity=".55"/></linearGradient>'
            # Sombra bajo los paneles y desenfoque del brillo
            '<filter id="drop" x="-30%" y="-30%" width="160%" height="160%">'
            '<feGaussianBlur in="SourceAlpha" stdDeviation="14"/><feOffset dy="16"/>'
            '<feComponentTransfer><feFuncA type="linear" slope=".28"/></feComponentTransfer>'
            '<feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>'
            '<filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="7"/></filter>')


def glass_panel(x, y, color, opacity):
    return (f'<g filter="url(#drop)">{rect(x, y, fill=color, fill_opacity=opacity)}</g>'
            + rect(x, y, fill='url(#body)')
            # Brillo especular: una mancha de luz arriba a la izquierda
            + f'<ellipse cx="{x + 62}" cy="{y + 44}" rx="42" ry="20" fill="#fff" fill-opacity=".85" filter="url(#soft)" '
              f'transform="rotate(-20 {x + 62} {y + 44})"/>'
            + rect(x + 3, y + 3, width=SIZE - 6, height=SIZE - 6, fill='none', stroke='url(#rim)', stroke_width='6')
            .replace(f'width="{SIZE}" height="{SIZE}" ', ''))


def logo(tile):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs>{defs(tile)}</defs>'
            '<rect width="512" height="512" rx="114" fill="url(#tile)"/>'
            '<rect width="512" height="512" rx="114" fill="url(#tileShade)"/>'
            '<rect x="5" y="5" width="502" height="502" rx="109" fill="none" stroke="url(#iris)" stroke-opacity=".75" stroke-width="10"/>'
            '<rect x="13" y="13" width="486" height="486" rx="101" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="3"/>'
            + glass_panel(*BACK, 'url(#cBack)', '.95')
            + glass_panel(*FRONT, 'url(#cFront)', '.82')
            + '</svg>\n')


for tile in ('claro', 'luces'):
    (HERE / f'cristal3d-{tile}.svg').write_text(logo(tile))
print('claro, luces')
