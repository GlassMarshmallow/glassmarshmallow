/** «arrow-up-right» → «Arrow up right» (aparte del catálogo, para no cargarlo en el título de la página) */
export const iconTitle = (name: string) => {
  const words = name.replace(/-/g, ' ');
  return words.charAt(0).toUpperCase() + words.slice(1);
};
