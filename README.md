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
- **Rascunhos e excluídos continuam no histórico do git.** Com o repositório privado, só colaboradores veem esse histórico.

## Deploy

`.github/workflows/deploy.yml` roda a cada push na `main`: testes → type-check → build → GitHub Pages. A URL e o caminho base vêm de `actions/configure-pages`, então nada no código depende do dono do repositório.

Primeira vez: em **Settings → Pages → Source**, escolha **GitHub Actions**.

## Transferência para a conta da Maria Eduarda

O repositório começa na conta do desenvolvedor e vai para a conta da Maria Eduarda, que terá o GitHub Pro do Student Developer Pack. Isso permite manter o repositório privado e o site público.

1. Confirme que o Student Developer Pack dela foi **aprovado** e que o Pro está ativo na conta.
2. **Settings → General → Danger Zone → Transfer ownership** → usuário dela. Ela precisa aceitar pelo e-mail, e o convite expira rápido.
3. Na conta dela: **Settings → Pages**, confira se a Source continua **GitHub Actions**.
4. Só então torne o repositório **privado** (**Danger Zone → Change visibility**). Sem o Pro, o Pages de um repositório privado para de funcionar.
5. **Settings → Collaborators:** adicione o desenvolvedor e as demais integrantes.
6. Em [app.pagescms.org](https://app.pagescms.org), instale o GitHub App do Pages CMS **na conta dela** e dê acesso a este repositório.
7. Rode o deploy (**Actions → Deploy to GitHub Pages → Run workflow**). A URL nova será `https://<usuario-dela>.github.io/<repositorio>/`. A URL antiga não redireciona, então não divulgue o link antes da transferência.
