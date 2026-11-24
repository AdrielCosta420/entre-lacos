import { joinBase } from './paths.ts';

export const SITE = {
  name: 'Entre Laços',
  tagline: 'Resenhas de livros sob o olhar da Psicologia',
  description:
    'Resenhas de livros escritas por estudantes de Psicologia da Unifor, para inspirar, acolher e provocar reflexões.',
  institution: 'Unifor',
  instagram: 'entrlacos_',
} as const;

export const NAV = [
  { label: 'Início', path: '' },
  { label: 'Resenhas', path: 'resenhas/' },
  { label: 'Equipe', path: 'equipe/' },
  { label: 'Sobre', path: 'sobre/' },
  { label: 'Contato', path: 'contato/' },
] as const;

/** Internal link with the deploy base path applied (see paths.ts). */
export function href(path: string): string {
  return joinBase(import.meta.env.BASE_URL, path);
}

export function instagramUrl(handle: string): string {
  return `https://www.instagram.com/${handle.replace(/^@/, '')}/`;
}
