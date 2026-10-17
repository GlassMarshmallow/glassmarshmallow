/**
 * Datos de publicación de GlassMarshmallow. Al publicar la v0.1 solo hay que cambiar esto:
 * - url: el dominio de la web (para que ChatGPT y Claude puedan leer /llms.txt)
 * - repoPublic: true cuando el repositorio de GitHub deje de ser privado (para ver e instalar las skills)
 * Mientras estén vacíos o en false, las opciones que los necesitan no se enseñan.
 */
export const SITE = {
  url: '',
  repo: 'https://github.com/spyamuza/glassmarshmallow',
  repoPublic: false,
  /** Plantilla de portfolio (página Ejemplos): true cuando su repositorio sea público */
  templateRepo: 'https://github.com/spyamuza/portfolio-ia-template',
  templateRepoPublic: false,
} as const;
