import catalog from '../../../../../../../glassmarshmallow-icons/catalog.json';

/** Un icono del set: los de relleno (-fill) son entradas propias, como en Bootstrap Icons */
export interface Icon {
  /** Nombre del archivo y de la clase: «star» o «star-fill» */
  name: string;
  category: string;
}

export const ICONS: Icon[] = catalog
  .flatMap((icon) => [
    { name: icon.name, category: icon.category },
    ...(icon.fill ? [{ name: `${icon.name}-fill`, category: icon.category }] : []),
  ])
  .sort((a, b) => a.name.localeCompare(b.name));

export const ICON_CATEGORIES = [...new Set(ICONS.map((icon) => icon.category))].sort((a, b) => a.localeCompare(b));

export { iconTitle } from './icon-title';
