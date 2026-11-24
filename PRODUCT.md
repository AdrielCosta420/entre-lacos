# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Readers (primary):** general public interested in reading and self-knowledge, plus people who may one day look for psychological care. Public access, no login. Most arrive from the Instagram profile [@entrlacos_](https://www.instagram.com/entrlacos_/), so on a phone (assumed, not measured). They come to read a review, or to find out who writes them.
- **Authors:** Psychology students at Unifor. Not technical; they publish through Pages CMS (a form backed by GitHub) with no fixed frequency. Group size not yet informed.
- **Maintainer:** Adriel, volunteer developer. Owns code, schema, and deploy.

## Product Purpose

Entre Laços publishes book reviews written by Psychology students, read through the lens of Psychology, "to inspire, welcome, and provoke reflection" on life, emotions, and relationships. It also lets readers get to know the students behind the reviews. Success, in the group's words: "a cool, beautiful, welcoming, and functional project whose core features work well."

## Positioning

A student-run reading publication: each review is a book read by a named Psychology student, signed and linked to her profile. It is content only; it does not offer psychological care.

## Operating Context

- Static site (Astro) on GitHub Pages under `/<repo>/`; zero cost is a hard requirement.
- Content arrives through Pages CMS commits; every save deploys in about two minutes. Drafts never reach the site.
- Contact happens off-site: each member's WhatsApp (pre-filled neutral message) and the project's Instagram.

## Capabilities and Constraints

- Pages: home, review list, review, team, member profile, about, contact, 404.
- Review fields: title, author (member), book title and author, optional cover image, category, themes, summary (≤200 chars), date, body (markdown, no inline images).
- Member fields: name, optional photo, short bio (≤200), institution, semester, up to 3 interests, theoretical approach, Instagram, WhatsApp.
- Search (Pagefind) is planned, not built, and needs dependency approval. No filters exist yet.
- Out of scope for v1: booking or care offers, reader accounts, comments, newsletter, editorial approval flow, custom domain.
- Undecided: extra review fields (content warning, quote, CVV support contact), category list, publishing frequency, number of members.

## Brand Commitments

- Name: **Entre Laços**. Team is called "Estudantes de Psicologia"; profiles list "áreas de interesse".
- Logo (`src/assets/uploads/logo-el.jpg`, 150x150 px, a higher-resolution original is still wanted): white serif "EL" monogram on a wine circle over a pink ground, with a thin pink thread looping through the letters (the "laço"). It is the site's favicon.
- Palette follows the Instagram and the logo: the site's wine, pink and thread were sampled from the logo file and approved on 2026-11-23, along with a light ground.
- Titles in a serif "with the feel of a book", elegant.
- Requested feel: welcoming, light, and humane, while modern and professional. It must **not look AI-generated**; UX and mobile first.
- Design rules in [docs/regras-design.md](docs/regras-design.md) are binding: editorial publication, not a landing page.
- Copy guardrail: never use terms reserved for licensed psychologists (psicóloga, especialista, agendar atendimento). The footer notice "Este site não oferece atendimento psicológico" stays on every page. WhatsApp CTA reads "Conversar com <nome> no WhatsApp".

## Evidence on Hand

- No real reviews, member profiles, photos, or logo file yet. Example content (`ana-exemplo`, `bia-exemplo`, `resenha-de-exemplo`, and other `exemplo` files) is synthetic and must be deleted before launch.
- Initial mockup `docs/referencias/mockup-inicial.png` was approved "with adjustments"; its copy is outdated and must not be reused.
- Do not invent photos or facts about members; use replaceable placeholders.

## Product Principles

- Reading comes first: the review and its author lead, everything else supports.
- Every review is signed: a reader always knows which student wrote it and can reach her profile.
- Content, not care: nothing may suggest the site offers psychological treatment.
- Built for people who can't code: the CMS form and the schema must stay simple for the authors.
- Free and simple beats clever: no paid services, minimal dependencies.

## Accessibility & Inclusion

Mobile-first. Proposed target: Lighthouse mobile accessibility ≥ 95 on the review page. Keyboard focus visible everywhere; reduced-motion respected.
