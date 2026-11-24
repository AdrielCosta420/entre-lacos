# CLAUDE.md — Entre Laços

> Complementa o `~/.claude/CLAUDE.md` global. Onde houver conflito, este arquivo vence.

Blog estático de resenhas de livros escritas por estudantes de Psicologia da Unifor ([@entrlacos_](https://www.instagram.com/entrlacos_/)). Astro 7 + Pages CMS + GitHub Pages, tudo gratuito. As autoras não são técnicas. O Adriel mantém o código.

## Onde está cada coisa

- **`docs/SPEC.md`**: escopo, decisões, edge cases, critérios de aceite e **próximos passos**. Leia antes de planejar qualquer mudança ou responder "o que falta".
- **`docs/levantamento.md`**: as respostas do grupo ao questionário. É a fonte dos requisitos e da identidade visual.
- **`README.md`**: como rodar, como funciona o deploy, checklist da transferência do repositório.
- **`docs/referencias/mockup-inicial.png`**: proposta visual inicial, aprovada "com ajustes". Os textos dela estão desatualizados.

## Copy: guardrail profissional

As integrantes são estudantes, sem CRP, e o site oferece só conteúdo.
- Equipe: "Estudantes de Psicologia". Perfis: "áreas de interesse".
- Contato: "Conversar com <nome> no WhatsApp", com mensagem pré-preenchida neutra.
- O aviso do rodapé ("Este site não oferece atendimento psicológico") fica em todas as páginas.
- Termos reservados a quem tem CRP ficam fora de qualquer texto: psicóloga, especialista, agendar atendimento.

## Arquitetura

- `src/lib/*.ts` (exceto `content.ts` e `site.ts`) são funções puras, sem import do Astro, cada uma com teste em `*.test.ts` (`node:test`). Imports relativos levam a extensão `.ts`.
- `src/lib/content.ts` é a única porta para `astro:content`. Toda leitura de resenhas passa por `getPublishedReviews()`, para que o filtro de rascunho exista num lugar só.
- Todo link interno e asset passa por `href()` (`src/lib/site.ts`): no Pages o site roda sob `/<repo>/`.
- Datas de conteúdo são exibidas com `formatDate` (formata em UTC).
- `src/content.config.ts` (schema) e `.pages.yml` (formulário do CMS) mudam juntos, no mesmo commit.

## Quality gate

`npm test && npm run check && npm run build`

Em mudança de rota, link ou asset, rode também o build como no Pages e confira que nenhum `href`/`src` interno ficou sem o prefixo:

```sh
SITE_URL=https://exemplo.github.io BASE_PATH=/entre-lacos npm run build
grep -rhoE '(href|src)="/[^"]*"' --include='*.html' dist | grep -v '"/entre-lacos/' | sort -u   # esperado: vazio
```

## Combinar com o Adriel antes de mexer

- Qualquer dependência nova. A preferência do projeto é simples, fácil e gratuito.
- `.github/workflows/deploy.yml`, que publica o site inteiro.
- `.pages.yml`, o formulário que as autoras usam.
- Exclusão ou renomeação de integrantes, que quebra as resenhas delas.

## Design

O grupo pediu um visual acolhedor e profissional, que **não tenha cara de IA**, com foco em UX e mobile-first. Use a skill `impeccable` para trabalho de interface.

@AGENTS.md
