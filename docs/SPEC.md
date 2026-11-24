# Spec — Entre Laços v1

**Estado em 23/11/2026:** o esqueleto está pronto e verificado: todas as páginas, o modelo de conteúdo, o filtro de rascunho, a config do painel e o workflow de deploy. A identidade visual editorial ("a revista costurada") foi aprovada na home e aplicada a todas as páginas; o sistema está registrado em `DESIGN.md` e o contexto de produto em `PRODUCT.md`. Ainda faltam:
- repositório no GitHub (ainda não criado; nada commitado);
- painel testado de verdade;
- busca;
- calibrar a paleta pelo arquivo do logo e trocar os avatares de iniciais pelas fotos;
- conteúdo real.

Os próximos passos estão na [seção 6](#6-plano-de-implementação).

Fontes: respostas do grupo em [levantamento.md](levantamento.md); operação (rodar, deploy, transferência) no [README](../README.md).

## 1. Contexto e objetivo

**Problema.** Um grupo de estudantes de Psicologia da Unifor quer publicar resenhas de livros lidas sob o olhar da Psicologia num lugar próprio (hoje só existe o Instagram). Também querem ficar conhecidas por futuros pacientes. Tudo isso sem custo e sem saber programar.

**Quem usa.**
- **Leitores:** público geral interessado em leitura e autoconhecimento, e também quem busca atendimento. Acesso público, sem login. A maior parte deve vir do Instagram, ou seja, pelo celular. Essa última parte é presumida, não medida.
- **Autoras:** as estudantes. O número de integrantes ainda não foi informado. Não são técnicas e publicam sem frequência definida (resposta 20 pendente). Entram no painel com a conta do GitHub.
- **Mantenedor:** Adriel, desenvolvedor voluntário. Cuida do código, do schema e da integração com o GitHub.

**Como é hoje.** Só o Instagram [@entrlacos_](https://www.instagram.com/entrlacos_/). Não existe site.

## 2. Escopo

| Dentro (v1) | Fora (v1) |
| --- | --- |
| Páginas: início, lista de resenhas, resenha, equipe, perfil individual, sobre, contato, 404 | Agendamento ou oferta de atendimento (resposta 5) |
| Painel (Pages CMS): criar, editar, excluir, salvar como rascunho e publicar resenhas; editar perfis | Fluxo de aprovação editorial: todas publicam direto |
| Contato por WhatsApp individual (link wa.me) e Instagram do projeto | Permissão por autora: qualquer colaboradora edita qualquer resenha (limite aceito do CMS Git) |
| Busca de resenhas com Pagefind (resposta 22; a implementar) | Contas de leitor, comentários, curtidas, newsletter, integração com Instagram, eventos (resposta 23: só se o projeto vingar) |
| Deploy automático no GitHub Pages; repositório privado após a transferência | Domínio próprio (resposta 29) |
| Visual com a identidade do Instagram, títulos com serifa, mobile-first, sem cara de IA | Imagens no meio do texto da resenha (só capa; `media: false` no rich-text) |
| Campos da resenha definidos pelas respostas 16–20 (pendentes) | Publicação agendada para data futura |

## 3. Edge cases e estados

| Caso | Como é tratado | Onde |
| --- | --- | --- |
| Nenhuma resenha publicada | Mensagem "As primeiras resenhas chegam em breve." | `pages/index.astro`, `pages/resenhas/index.astro` |
| Integrante sem foto | Avatar com as iniciais | `components/Avatar.astro` |
| Integrante sem WhatsApp | Botão não aparece | `components/WhatsAppLink.astro` |
| Integrante sem resenhas | A seção de resenhas some do perfil | `pages/equipe/[id].astro` |
| Resenha sem capa | Bloco com o título do livro no lugar da imagem | `components/ReviewCard.astro` |
| Rascunho (`draft: true`) | Não gera página nem aparece em listas. Continua no histórico do git, que fica privado depois da transferência | `lib/content.ts` → `getPublishedReviews()` |
| WhatsApp em formato errado | O formulário do CMS recusa (pattern). Se passar, o schema quebra o build | `.pages.yml`, `content.config.ts`, `lib/whatsapp.ts` |
| Resenha aponta para integrante que não existe | O build falha com mensagem. Excluir ou renomear integrante está bloqueado no CMS | `lib/content.ts`, `.pages.yml` (`operations`) |
| Build falha por dado inválido | O deploy não acontece e a versão anterior segue no ar. Corrige-se pelo painel | `.github/workflows/deploy.yml` |
| Data `2026-11-20` em outro fuso | Formatada em UTC: mesmo dia em qualquer máquina (há teste) | `lib/dates.ts` |
| Duas autoras salvam arquivos diferentes ao mesmo tempo | Dois commits, deploys em fila (`concurrency: pages`). O site final reflete o último commit | workflow |
| Duas autoras salvam o mesmo arquivo | A API do GitHub recusa a gravação com SHA desatualizado, em vez de sobrescrever. **Não verificado:** como o Pages CMS mostra essa recusa | GitHub API |
| Salvar sem mudanças ou rodar o deploy de novo | Idempotente: o build depende só do conteúdo do commit | — |
| Acesso ao painel | Só colaboradoras do repositório. Tirar o acesso = remover a colaboradora | GitHub |
| Foto pesada (celular) | O Astro gera WebP em vários tamanhos. O original fica no repositório e o deixa mais pesado | `media` em `.pages.yml` |
| Site servido em `/<repo>/` | Todo link interno e asset passa por `href()`. O build foi verificado sem links sem prefixo | `lib/site.ts`, `lib/paths.ts` |
| Pedido de terapia pelo WhatsApp | Fora do sistema. Resposta padrão das integrantes (recomendação, ver levantamento) | — |

## 4. Decisões arquiteturais

### 4.1 Stack

| Decisão | Escolha | Descartadas | Por quê |
| --- | --- | --- | --- |
| Hospedagem | GitHub Pages | Netlify, Vercel, Cloudflare Pages | Grátis e já integrado ao repositório. Aceitamos não ter headers nem rewrites customizados |
| Gerador | Astro 7, só estático | Nuxt + Nuxt Content; SPA Vue | Site de conteúdo: HTML pronto é bom para SEO e tem menos peças. Componentes Vue entram como ilhas, se precisar |
| Painel | Pages CMS (app hospedado, baseado em Git) | Decap CMS (exige proxy OAuth; fluxo editorial desnecessário); CMS SaaS; Supabase com painel próprio; WordPress/Ghost | Zero infra, login com GitHub, conteúdo versionado no próprio repositório |
| Privacidade dos rascunhos | Repositório privado com o GitHub Pro do Student Developer Pack (conta da Maria Eduarda) | Repositório público | Rascunhos e histórico não ficam públicos. Plano B se o Pack não sair: repositório público |
| Testes | `node:test` nativo (o Node 24 roda `.ts` direto) | Vitest | Nenhuma dependência a mais. Só funções puras são testadas |
| Node | 24, fixado via Volta no `package.json` | — | O Astro 7 exige Node ≥ 22.23.4, e o Node global do Adriel é o 20 (EOL). O CI lê o mesmo campo |

### 4.2 Camadas

- `src/lib/{paths,whatsapp,reviews,dates,entry-id}.ts`: regras puras, sem import do Astro, cada uma com seu `*.test.ts`. Imports relativos levam a extensão `.ts`, que o Node exige.
- `src/lib/content.ts`: a única porta para `astro:content`. As páginas nunca chamam `getCollection` direto.
- `src/lib/site.ts`: constantes do site e `href()`, que lê `import.meta.env.BASE_URL`.
- `src/components`, `src/layouts`, `src/pages`: apresentação.
- `astro.config.mjs`: `site` e `base` vêm de `SITE_URL` e `BASE_PATH`, que o workflow preenche com `actions/configure-pages`. Por isso a transferência do repositório não exige mudar o código.

### 4.3 Contrato de dados

O schema em `src/content.config.ts` e o formulário em `.pages.yml` descrevem os mesmos campos. Qualquer mudança é feita nos dois, no mesmo commit. Convenções que nenhum dos dois arquivos explica sozinho:

- **`author`:** o CMS salva o caminho do arquivo (`value: '{path}'`). `toEntryId` converte esse caminho para o id antes do `reference('integrantes')`. Também aceita o id puro, para arquivos escritos à mão.
- **Imagens:** ficam em `src/assets/uploads`, e o CMS grava `/src/assets/uploads/<arquivo>` (caminho a partir da raiz do projeto). Isso faz o Astro otimizar a imagem, o que foi verificado no build com a capa de exemplo.
- **`draft`:** no CMS o padrão é `true` (resenha nova nasce oculta). No schema o padrão é `false` (arquivo escrito à mão sem o campo é publicado).
- **WhatsApp:** `55` + DDD + número, só dígitos. A regra vive em `WHATSAPP_PATTERN` (`lib/whatsapp.ts`) e é repetida no `.pages.yml`.

### 4.4 Dependências

- Produção: `astro`.
- Desenvolvimento: `@astrojs/check`, `typescript`, `@types/node`.
- Planejada: `pagefind`, para a busca.
- Qualquer dependência nova é combinada com o Adriel antes de entrar.

## 5. Critérios de aceite

- [x] Resenha com `draft: true` não gera página nem aparece em listas (build verificado)
- [x] Build com `BASE_PATH=/entre-lacos` não gera nenhum `href`/`src` interno sem o prefixo
- [x] A data publicada aparece igual em qualquer fuso (teste com `TZ=America/Fortaleza`)
- [x] O link do WhatsApp leva a mensagem pré-preenchida, acentos incluídos (teste)
- [x] Capa em `src/assets/uploads` sai em WebP, em vários tamanhos
- [x] `npm test`, `npm run check` e `npm run build` passam
- [ ] Uma integrante cria, edita, salva como rascunho, publica e exclui uma resenha pelo Pages CMS, e o site reflete a mudança em cerca de 2 minutos
- [ ] Os formatos que o CMS salva (autora, capa, data, lista de temas, objeto livro) passam pelo schema sem ajuste manual
- [ ] A busca encontra resenhas por título, livro, autora e categoria
- [ ] Nenhuma copy usa termos reservados a quem tem CRP (psicóloga, especialista, agendar atendimento)
- [ ] Lighthouse mobile na página de resenha: acessibilidade ≥ 95 e performance ≥ 90 (meta proposta, a confirmar)
- [ ] O grupo aprova o visual (paleta do logo, serifa nos títulos)
- [ ] Repositório transferido e privado, com o site no ar na URL definitiva

## 6. Plano de implementação

Ordem proposta. Cada passo começa com o OK do Adriel.

1. **Publicar o esqueleto.**
    - Commit inicial.
    - Criar o repositório no GitHub. O nome entra na URL: `entre-lacos` é a sugestão, decidir.
    - Ativar o Pages (Source: GitHub Actions) e fazer o primeiro deploy.
2. **Conectar o Pages CMS** na conta do Adriel e percorrer o fluxo completo com o conteúdo de exemplo.
    - Conferir como o CMS grava cada campo: autora, capa, data, temas, objeto livro, rascunho.
    - Ajustar `toEntryId` ou o schema se algum formato divergir.
3. **Busca com Pagefind** (dependência nova, confirmar antes).
4. **Fase visual.** Feita: direção editorial aprovada, fontes Piazzolla e Archivo (hospedadas pelo próprio site, sem dependência), resenhas organizadas por categoria. Falta, quando o logo chegar:
    - Calibrar os tons de vinho, rosa e do fio vermelho contra o arquivo.
    - Decidir se o monograma entra no site (favicon, expediente); hoje o masthead é tipográfico.
    - `resenha-de-exemplo` está como rascunho nesta fase; é a única com capa enviada, então reative-a para validar o caminho de capa em imagem.
5. **Campos da resenha** conforme as respostas 16–20: aviso de conteúdo sensível, citação, contato do CVV e o que mais vier. Schema e `.pages.yml` mudam juntos.
6. **Conteúdo real.**
    - Transformar as fichas individuais em arquivos de `integrantes`.
    - Escrever o texto do Sobre, com o grupo.
    - Apagar os exemplos: `ana-exemplo`, `bia-exemplo`, `resenha-de-exemplo`, `rascunho-de-exemplo`, as quatro `exemplo-*.md` (resenhas de domínio público criadas para validar o visual) e `capa-exemplo.png`. Antes de apagar o rascunho de exemplo, considerar transformar a checagem "rascunho não vaza no build" num teste automatizado.
7. **Transferir** para a Maria Eduarda depois que o Student Pack dela for aprovado (checklist no README). Só então divulgar o link.

## 7. Pendências

| Item | Quem resolve |
| --- | --- |
| Respostas 16–20 do questionário | Grupo |
| Fichas individuais (Parte 2) | Adriel coleta |
| Arquivo do logo | Grupo |
| Texto da página Sobre | Grupo |
| Número de integrantes | Grupo |
| Nome do repositório no GitHub | Adriel |
| Conta GitHub e Student Developer Pack da Maria Eduarda. Ela mesma cria e solicita, com o Adriel junto: o login é pessoal e a solicitação é uma declaração dela | Maria Eduarda |
| Resposta padrão para pedidos de terapia pelo WhatsApp | Grupo |

## 8. Riscos e dívidas

- **Formatos do Pages CMS não verificados.** A documentação não diz o valor padrão do `reference`, nem o formato exato do `list` e do `date`. Mitigação: `toEntryId` e o passo 2 do plano.
- **Paleta provisória.** Os tons foram estimados a olho a partir do Instagram; calibrar contra o arquivo do logo.
- **Repositório público até a transferência.** Por enquanto só há conteúdo de exemplo nele.
- **Fotos originais pesadas** se acumulam no repositório. Se pesar, considerar compressão automática no upload.
- **O Student Pack pode atrasar ou ser recusado.** O plano B é manter o repositório público: os rascunhos ficam visíveis no GitHub, mas não no site.
