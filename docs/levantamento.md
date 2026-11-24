# Levantamento — respostas do grupo

Respostas ao questionário de levantamento ([documento original](https://claude.ai/artifact/Matdcum5WbWiq5V7n2wSHs)), repassadas pelo Adriel em 23/11/2026. A numeração é a do questionário. Este arquivo registra **o que o grupo pediu**. O que foi decidido a partir disso está em [SPEC.md](SPEC.md).

Diretriz geral do Adriel: **"tudo que puder ser simples, fácil e gratuito, vamos usar"**.

## Identidade

- **Nome:** Entre Laços
- **Instagram:** [@entrlacos_](https://www.instagram.com/entrlacos_/). Bio: "Estudantes de Psicologia · Unifor", pronome ela/dela, destaque "Livros".
- **Logo atual (do Instagram):** monograma "EL" branco e serifado, sobre um círculo vinho, com um fio vermelho fino passando pelas letras (o "laço"). O grupo vai enviar o arquivo.
- **Paleta:** a mesma do Instagram. Vinho do logo, rosa claro do destaque, fundo claro. Os valores em `src/styles/global.css` foram estimados a olho a partir de um print e precisam ser calibrados com o arquivo do logo.
- **Proposta visual inicial:** [referencias/mockup-inicial.png](referencias/mockup-inicial.png). Foi feita antes do levantamento e aprovada "com ajustes" (ver resposta 9). Os textos dela estão desatualizados ("Nossas Psicólogas", "Agendar Atendimento", especialidades) e não devem ser usados como copy.

## Parte 1 — decisões do grupo

| # | Pergunta | Resposta |
| --- | --- | --- |
| 1 | Nome | Entre Laços |
| 2 | Objetivo | Compartilhar resenhas de livros sob o olhar da Psicologia e servir como atrativo para futuros pacientes |
| 3 | Disciplina, estágio ou extensão | Não faz parte de nenhum |
| 4 | Público | Pessoas interessadas em leitura e autoconhecimento; pessoas que buscam atendimento psicológico |
| 5 | Atendimento | **O site terá apenas conteúdo, sem oferta de atendimento** |
| 6 | Supervisor(a) | Não respondida (não se aplica, dada a resposta 5) |
| 7 | Destino do botão de contato | WhatsApp de cada integrante |
| 8 | Como chamar a equipe | "Estudantes de Psicologia" |
| 9 | Proposta visual | Gostaram, com ajustes: **não ter cara de IA; foco em experiência do usuário** |
| 10 | Logotipo | Já têm; vão enviar o arquivo |
| 11 | Paleta | Igual à do Instagram |
| 12 | Cores a evitar | Nenhuma por enquanto |
| 13 | Estilo | Acolhedor, leve e humanizado + moderno e profissional |
| 14 | Letra dos títulos | Com serifa, elegante, com cara de livro |
| 15 | Referências | Nenhuma |
| 16–20 | Campos da resenha, categorias, contato de apoio (CVV), resenhas para o lançamento, frequência | **Aguardando resposta** |
| 21 | Páginas | Todas: início, lista de resenhas, página da resenha, sobre, equipe, página individual, contato |
| 22 | Busca | Sim |
| 23 | Funcionalidades futuras | Decidir se o projeto vingar; gostam de todas (comentários, newsletter, Instagram, eventos) |
| 24–25 | Rascunhos privados / Student Pack | Repositório privado com o GitHub Pro do Student Developer Pack da Maria Eduarda |
| 26 | Responsável principal | Maria Eduarda (contato direto com o Adriel) |
| 27 | Outros acessos ao painel | Ninguém por enquanto |
| 28 | Data de lançamento | Sem data |
| 29 | Endereço | github.io (sem domínio próprio) |
| 30 | Sucesso | "Ter um projeto legal, bonito, acolhedor e funcional, que as funcionalidades principais funcionem bem" |
| 31 | Algo mais | Não respondida |

## Parte 2 — fichas individuais

Pendentes; o Adriel está coletando. A ficha pede: nome de exibição, foto (mínimo 800×800, enviada como arquivo), minibiografia (até 200 caracteres), apresentação (até 1.000), instituição e período, até 3 áreas de interesse, abordagem teórica, Instagram, WhatsApp (55 + DDD), usuário do GitHub (uso interno), e-mail (uso interno) e autorização de uso de imagem e dados. Cada campo publicado corresponde a um campo da coleção `integrantes` em `src/content.config.ts`. O usuário do GitHub e o e-mail não entram no repositório.

## Tensão entre respostas (já resolvida)

As respostas 2, 4 e 7 (atrair pacientes, WhatsApp individual) convivem com a 5 (sem oferta de atendimento). A solução adotada:
- botão "Conversar com <nome> no WhatsApp", e não "Agendar";
- mensagem pré-preenchida neutra;
- aviso no rodapé: "Este site não oferece atendimento psicológico".

Recomendação às integrantes: combinar uma resposta padrão para pedidos de terapia que cheguem pelo WhatsApp, encaminhando para a clínica-escola da Unifor.
