# Entre Laços

Blog de resenhas de livros escritas por estudantes de Psicologia da Unifor ([@entrlacos_](https://www.instagram.com/entrlacos_/)).

- **Site:** estático, gerado com [Astro](https://docs.astro.build) e publicado no GitHub Pages.
- **Painel de publicação:** [Pages CMS](https://pagescms.org). As estudantes entram com a conta do GitHub e escrevem num formulário. Cada "salvar" vira um commit neste repositório, e o deploy roda sozinho.
- **Custo:** zero.

Escopo, decisões e próximos passos: [docs/SPEC.md](docs/SPEC.md). Respostas do grupo ao questionário: [docs/levantamento.md](docs/levantamento.md).

## Rodando localmente

Requer [Volta](https://volta.sh): o Node 24 está fixado no `package.json` e é selecionado automaticamente.

```sh
npm install
npm run dev      # http://localhost:4321
npm test         # testes unitários (node:test, sem dependências extras)
npm run check    # type-check
npm run build    # gera dist/
```

## Como o conteúdo funciona

| O quê | Onde | Regras |
| --- | --- | --- |
| Resenhas | `src/content/resenhas/*.md` | Schema em `src/content.config.ts` |
| Integrantes | `src/content/integrantes/*.md` | Idem; o texto do arquivo é a apresentação |
| Imagens enviadas | `src/assets/uploads/` | Otimizadas pelo Astro (WebP, vários tamanhos) |
| Formulário do painel | `.pages.yml` | Espelha o schema; mudou um, mude o outro |

- **Rascunho:** `draft: true` esconde a resenha. Ela não ganha página nem aparece em listas. Toda página lê as resenhas por `getPublishedReviews()` (`src/lib/content.ts`), que é o único lugar com esse filtro.
- **Autora:** o painel salva o caminho do arquivo da integrante, e `toEntryId` (`src/lib/entry-id.ts`) converte para o id. Uma autora inexistente quebra o build de propósito.
- **Excluir integrante** está bloqueado no painel, porque quebraria as resenhas dela. Faça pelo repositório, reatribuindo as resenhas antes.
- **Renomear resenha** está bloqueado no painel. O nome do arquivo é a URL (vem do título do livro), e renomear quebraria os links já compartilhados. Se precisar, renomeie pelo repositório sabendo que o link antigo deixa de funcionar.
- **Rascunhos e excluídos continuam no histórico do git.** Com o repositório privado, só colaboradores veem esse histórico.

## Deploy

`.github/workflows/deploy.yml` roda a cada push na `main`: testes → type-check → build → GitHub Pages. A URL e o caminho base vêm de `actions/configure-pages`, então nada no código depende do dono nem do nome do repositório. O Pages já está configurado (**Settings → Pages → Source: GitHub Actions**).

## Repositório e acesso

O repositório fica na organização [`entre-lacos`](https://github.com/entre-lacos), com o nome `entre-lacos.github.io`. Esse nome publica o site na raiz, **https://entre-lacos.github.io/**, num endereço que não depende da conta de ninguém.

O repositório é **público**: no plano gratuito, organizações só publicam o Pages a partir de repositórios públicos. Rascunhos nunca aparecem no site, mas ficam visíveis no GitHub, no arquivo e no histórico.

Para dar acesso a uma integrante:

1. Ela cria a própria conta no GitHub.
2. Na organização, **People → Invite member**: a Maria Eduarda como **Owner**; as demais como **Member**, com permissão de escrita no repositório.
3. Em [app.pagescms.org](https://app.pagescms.org), instale o GitHub App do Pages CMS **na organização `entre-lacos`** e dê acesso a este repositório.

### Se o grupo quiser rascunhos privados

Nenhum caminho é urgente. Os três funcionam sem mudar o código:

- **GitHub Pro da Maria Eduarda** (Student Developer Pack): transferir o repositório para a conta dela e torná-lo privado. A URL passa a ser `https://<usuario-dela>.github.io/<repositorio>/`, e a atual não redireciona.
- **GitHub Team na organização** (pago): repositório privado, mesma URL.
- **Cloudflare Pages ou Netlify** (grátis): repositório privado e endereço `*.pages.dev` ou `*.netlify.app`. Exige trocar o deploy.
