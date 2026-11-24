---
name: Entre Laços
description: A literary magazine of book reviews by Psychology students, held together by the pink thread of its logo.
colors:
  wine: "#6c0922"
  wine-deep: "#4b0618"
  thread: "#fcb4c5"
  rose: "#f4aebd"
  endpaper: "#fadae1"
  paper: "#fdfafa"
  ink: "#24161a"
  muted: "#6b585d"
  on-wine: "#fdfcfb"
  on-wine-muted: "#f4aebd"
  cover-linen: "#d9cebf"
  cover-paper: "#f3ebe8"
  cover-ink: "#2b1b20"
typography:
  display:
    fontFamily: "Piazzolla, Georgia, serif"
    fontSize: "min(calc((100vw - 2 * var(--gutter)) / 5.9), 9.75rem)"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Piazzolla, Georgia, serif"
    fontSize: "clamp(2.75rem, 7vw, 5rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline-feature:
    fontFamily: "Piazzolla, Georgia, serif"
    fontSize: "clamp(2.25rem, 4.6vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Piazzolla, Georgia, serif"
    fontSize: "clamp(1.875rem, 3vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title-entry:
    fontFamily: "Piazzolla, Georgia, serif"
    fontSize: "clamp(1.375rem, 2.4vw, 1.875rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  quote:
    fontFamily: "Piazzolla, Georgia, serif"
    fontSize: "clamp(1.75rem, 4.2vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.22
    letterSpacing: "-0.015em"
  standfirst:
    fontFamily: "Piazzolla, Georgia, serif"
    fontSize: "clamp(1.125rem, 2vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  body-reading:
    fontFamily: "Piazzolla, Georgia, serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.7
    fontFeature: "font-optical-sizing: auto"
  body:
    fontFamily: "Piazzolla, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.2
  meta:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tabular-nums"
rounded:
  book: "2px 4px 4px 2px"
  round: "50%"
spacing:
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
  side-gap: "clamp(2.5rem, 5vw, 5rem)"
  content-width: "74rem"
  reading-width: "38rem"
components:
  link-more:
    textColor: "{colors.wine}"
    typography: "{typography.label}"
    height: "44px"
  link-whatsapp:
    textColor: "{colors.wine}"
    typography: "{typography.label}"
    height: "44px"
  nav-item:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "44px"
  nav-item-hover:
    textColor: "{colors.wine}"
  nav-item-current:
    textColor: "{colors.ink}"
    backgroundColor: "{colors.rose}"
  field-wine:
    backgroundColor: "{colors.wine}"
    textColor: "{colors.on-wine}"
  field-endpaper:
    backgroundColor: "{colors.endpaper}"
    textColor: "{colors.ink}"
  book-cover-linen:
    backgroundColor: "{colors.cover-linen}"
    textColor: "{colors.ink}"
    rounded: "{rounded.book}"
  book-cover-paper:
    backgroundColor: "{colors.cover-paper}"
    textColor: "{colors.wine}"
    rounded: "{rounded.book}"
  book-cover-ink:
    backgroundColor: "{colors.cover-ink}"
    textColor: "{colors.on-wine}"
    rounded: "{rounded.book}"
  avatar-monogram:
    backgroundColor: "{colors.wine}"
    textColor: "{colors.on-wine}"
    rounded: "{rounded.round}"
---

# Design System: Entre Laços

## Overview

**Creative North Star: "The Thread-Bound Magazine"**

Entre Laços is set like an independent literary magazine, and the one ornament it allows itself is the structure that binds it: the pink thread of the logo's "laço". The thread is woven over and under the masthead wordmark and tied off in a knot after the name, it joins sections as a running stitch instead of a printer's rule, it crosses every typeset book cover as the publisher's band, and it ends tied in the same knot at the top of the wine "Expediente" footer, where pink thread on wine reproduces the logo itself. If a new surface needs a divider, a band or an ending, it uses the thread; it does not invent a second ornament.

Color behaves like the materials of a bound book. Wine is the bookcloth and owns whole fields edge to edge; the logo's pink has two related jobs, the thread that binds and the reader's highlighter that marks, and never fills; light pink is the endpaper, where the contributors live; everything else is warm paper and ink. Type is one press serif (Piazzolla, with its optical-size axis) carrying the masthead and the long reading text alike, with a grotesque (Archivo) speaking only for bylines, dates, navigation and links. Books are physical objects: the only things on the page that cast shadows, lift when picked up, and fly into the review page when opened.

Density is editorial, not dashboard: generous vertical air between sections, a side-head column beside a wider main column, one reading measure, asymmetric feature compositions where the book hangs over the bottom edge of its cloth. The site refuses the landing-page hero with a button, the card grid, pill buttons, and colored call-to-action boxes; actions read as underlined editorial links with a small drawn arrow.

**Key Characteristics:**
- One ornament, the logo's pink thread: woven wordmark ending in its knot, running stitch, cover band, footer knot.
- Wine fields as bookcloth; pink only binds (thread) or marks (highlighter), never fills; light-pink endpaper for people.
- Piazzolla for everything read, Archivo for everything scanned (bylines, meta, nav, links).
- Books are the only objects with depth; nothing else has a shadow or a card frame.
- Editorial links with SVG arrows instead of buttons.
- Motion is mechanical and meaningful (thread wipe and knot tying, cover flight, highlighter slide), always gated by `prefers-reduced-motion`.

**Brand assets:** the logo (`src/assets/uploads/logo-el.jpg`: a white serif "EL" on a wine circle over a pink ground, with a pink thread looping through the letters) is the calibration source of the palette and is the favicon: `public/favicon.png` (96x96, round with transparent corners, for tabs) and `public/apple-touch-icon.png` (180x180, opaque square, since iOS rounds the corners itself), both linked in BaseLayout. Astro's default favicons are gone. The wordmark stays typeset in Piazzolla rather than placing the logo image.

**Open items (not rules):** the logo file is low resolution (150x150), so a higher-resolution original is still wanted. Member photos are placeholders (wine monogram avatars). Search (Pagefind) is planned and not built; no search UI exists to document. Example content (`exemplo-*`, `ana-exemplo`, `bia-exemplo`) is synthetic and will be deleted.

## Colors

A reduced bookbinder's palette sampled from the logo: one wine cloth, one pink that is both the thread and the highlighter, a light-pink endpaper, warm paper and ink. Wine is the logo's circle, thread its looping thread, rose its ground and on-wine its letters (approved 2026-11-23).

### Primary
- **Bookcloth Wine** (wine): whole-section fields (the home lead feature, the review head, the footer), link color on paper, the drop cap, the avatar monogram circle, the focus ring and `accent-color`. On paper it reads at 11.9:1, so it is safe for text.
- **Deep Wine** (wine-deep): the pressed state of wine (running-head brand hover) and the text color inside `::selection`.

### Secondary
- **Logo Thread** (thread): the logo's pink thread, and only the thread: masthead thread and knot strokes, the running stitch, the band on typeset covers, the footer's thread and knot. On paper it reads softly (about 1.6:1) and is decorative, never text; on the wine footer it is at full strength (7.3:1), and the thread and knot there reproduce the logo. Never a fill.
- **Highlighter Rose** (rose): the logo's pink ground, used as the reader's mark, never a fill for a section. The stroke under the current nav item, the low highlighter behind quoted passages (`<mark>` in the home excerpt, `blockquote` in review prose), `::selection`, and the focus ring on the wine footer.

### Tertiary
- **Endpaper** (endpaper): full-width fields where contributors live (home "Quem escreve", the team list, the member profile head, the "who wrote this" block under a review), and the backdrop behind an uploaded cover image while it loads.
- **Cover Linen, Cover Paper, Cover Ink** (cover-linen, cover-paper, cover-ink): the three bookcloth tones of typeset covers, picked deterministically from the review id so a book keeps its color everywhere. Linen carries ink text, paper carries wine text, ink carries on-wine text.

### Neutral
- **Warm Paper** (paper): the page ground.
- **Ink** (ink): body text, headings, nav items, entry and contributor names at rest (16.8:1 on paper).
- **Muted Ink** (muted): standfirsts, credit lines ("sobre *Livro*, de Autor"), metadata, side text, counts, figcaptions (6.4:1 on paper, 5.1:1 on endpaper).
- **On-Wine** and **On-Wine Muted** (on-wine, on-wine-muted): text and secondary text inside wine fields (12.1:1 and 6.8:1 on wine). On-wine is the logo's letters; on-wine-muted shares rose's value.

### Named Rules
**The Bookcloth Rule.** Wine is a field, not a box. It runs edge to edge across the viewport and carries its own text, link, meta, avatar and focus colors through the field's custom properties (`--muted`, `--avatar-bg`, `--avatar-fg`), so components never need wine variants. A page whose last section is a colored field meets the footer's wine with no strip of paper between.

**The Binds and Marks Rule.** Pink has two related jobs and no others: the thread binds (masthead thread, running stitch, cover band, knot) and the highlighter marks what the reader marks (the current nav item, quoted passages, `::selection`). It never fills a section, a panel or a cover; the light-pink endpaper is the only pink field. The highlighter's shape is a reader's stroke: low on the line (from 38% to 90% of the line box), or the nav mark cut to the book radius, never a full rectangle behind a block. The thread reads softly on paper (about 1.6:1, decorative, never text) and at full strength on wine.

**The Two Missing Tones Rule.** Typeset covers are never wine (a wine book vanishes on the wine lead field) and never pink (pink is reserved for the thread and the highlighter). New cover tones come from bookcloth, not from the brand accents.

## Typography

**Display Font:** Piazzolla (with Georgia, serif), variable 300 to 800, italic, optical size 8 to 30
**Body Font:** Piazzolla (same family; `font-optical-sizing: auto` lets one family set both masthead and reading text)
**Label Font:** Archivo (with system-ui, sans-serif), variable 400 to 700

Both families are self-hosted through Astro Fonts at build time; the reader's browser makes no request to Google.

**Character:** A press serif with real optical sizes doing all the reading and all the headlines, set tight and balanced at display sizes and open at reading sizes; a neutral grotesque reserved for the voice of the apparatus (who, when, where to go).

### Hierarchy
- **Display** (500, min(calc((100vw - 2 * var(--gutter)) / 5.9), 9.75rem), 0.9, -0.035em): the masthead wordmark on the home page only, with the thread woven through it and tied off in the knot. The size is derived from the column, not the viewport alone: word plus knot measure about 5.9em, so they always fit and a phone never scrolls sideways, even at the largest text setting (hence no rem lower bound); the wordmark reserves 1.15em on its right for the knot. Inner pages get a running head instead (the name at the title-entry clamp, 600, wine).
- **Headline** (500, clamp(2.75rem, 7vw, 5rem), 1, -0.03em): page titles in the page head of inner pages.
- **Headline Feature** (500, clamp(2.25rem, 4.6vw, 4rem), 1.02, -0.025em): the title beside a large book on a wine field (home lead and the review page h1).
- **Title** (500, clamp(1.875rem, 3vw, 2.5rem), 1.1, -0.02em): side-head section names ("Leituras recentes", "Quem escreve"). Compact contributor names sit just under it at 1.75rem; the team-page name uses the title clamp itself.
- **Title Entry** (500, clamp(1.375rem, 2.4vw, 1.875rem), 1.12, -0.015em): review titles in table-of-contents entries, prose subheads (line-height 1.2), the running-head brand and the archive category index.
- **Quote** (400, clamp(1.75rem, 4.2vw, 3.25rem), 1.22, max 24ch): the highlighted passage on the home page, opening quote hung in the margin (text-indent -0.42em). In review prose the passage drops to the standfirst clamp at 1.45.
- **Standfirst** (400, clamp(1.125rem, 2vw, 1.3125rem), 1.5, max 36rem, muted): the paragraph under a page title. The same clamp sets credit lines, the team-page bio, the footer statement and in-prose blockquotes.
- **Body Reading** (400, 1.1875rem, 1.7, max 38rem): review and about prose. Prose subheads use title entry. A three-line drop cap in wine opens each review where `initial-letter` is supported.
- **Body** (400, 1.125rem, 1.6): default text, and the size of summaries, bios and the masthead description (at line-height 1.5 / 1.45).
- **Label** (Archivo 500, 1rem): every editorial link (More, WhatsApp, Instagram) and nav item. No secondary link size.
- **Meta** (Archivo 400, 0.875rem, tabular numerals, muted): bylines, categories, dates, reading time, facts and their legends, counts, figcaptions, the footer note.

### Named Rules
**The Two Voices Rule.** Piazzolla is what you read; Archivo is what you scan. Titles, summaries, bios, quotes and prose are serif; bylines, dates, categories, nav, links and figcaptions are sans. No third family, and no all-caps tracked labels.

**The Credit Line Rule.** A review is always introduced with the book it reads, set as "sobre *Título*, de Autor" in the serif, muted, with the book title in italic `cite` (on wine, the cite switches to on-wine).

**The Ramp Rule.** Every text size is a ramp step above; a new element borrows the step whose role it shares (a credit line is a standfirst, a link is a label, a legend is meta) instead of minting an in-between literal.

## Layout

A single centered container (74rem max, side gutter clamp(1.25rem, 4vw, 2.5rem)) with full-bleed colored fields that break out of it. The recurring grid is the **side-head**: from 52rem up, a 3fr side column holding the section name and its link (sticky at 2rem) beside an 8fr main column, separated by clamp(2.5rem, 5vw, 5rem). Elements that have no side-head, like the home excerpt, align to the main column's left edge with the offset-main rule so every section shares one reading line. Below 52rem everything stacks into one column.

Feature compositions (home lead, review head) use a 1fr / 1.15fr split with the book on the left, its top level with the title, and the book taller than its cloth so it hangs 4.5rem over the field's bottom edge. On the review page the body reuses those same columns: prose in the right column under the title, and a sticky right-aligned margin of metadata in the left column, clearing the hanging book.

Rhythm is fluid and generous: sections open with clamp-based padding in the 3 to 7rem range, entry lists step at clamp(2rem, 4vw, 3rem), contributor grids auto-fill at a 20rem minimum. Reading text never exceeds 38rem; standfirsts 36rem; summaries and bios 34 to 38rem. Every interactive line (nav items, editorial links, index entries) is at least 44px tall.

### Named Rules
**The One Reading Line Rule.** Main-column content on wide screens starts at the same x as the main column of the side-head grid. A new section either uses the side-head or aligns to its main column; it does not center itself.

## Elevation & Depth

The page is flat paper. Depth belongs to books alone: a book resting on the page casts a wine-tinted contact shadow plus a soft cast, and when its entry is hovered or keyboard-focused it is picked up (raised shadow, 4px lift). Fields are flat color; there are no card frames, panels or floating surfaces. Typeset covers add their own material depth with a hinge crease (a short dark-to-light gradient near the spine) so they read as bound boards.

### Shadow Vocabulary
- **Book at rest** (`box-shadow: 0 1px 2px rgb(36 8 14 / 0.16), 0 10px 22px -10px rgb(36 8 14 / 0.45)`): every cover, uploaded or typeset.
- **Book raised** (`box-shadow: 0 2px 4px rgb(36 8 14 / 0.12), 0 22px 34px -14px rgb(36 8 14 / 0.5)`): a cover whose entry is hovered or has keyboard focus. Under reduced motion the shadow deepens without the lift.

### Named Rules
**The Only Objects Rule.** Shadows are for books. If something that is not a book needs emphasis, it gets a field, a highlighter or the thread, never a shadow.

## Shapes

Square by default: fields, sections, the footer and the page have no rounding. Two curves exist and both are physical. Books have a square-ish spine and a softer fore-edge (2px 4px 4px 2px). Avatars, photos and monograms are circles, echoing the logo's monogram-on-a-circle. The nav highlighter borrows the book radius (2px 4px 4px 2px), so the only curves besides circles are the book's. The thread itself is drawn with round caps and joins, and so are the running stitch's stitches (about 11px of thread, 6px of paper).

## Components

### Editorial Links (instead of buttons)
The site has no buttons. Actions are links in the wine link color with the global underline (thickness max(1px, 0.06em), offset 0.2em, 40% opacity at rest, full on hover).
- **More link** (MoreLink): Archivo 500, 1rem, 44px tall, a 16px drawn right arrow (1.5px stroke, round caps) that nudges 3px forward on hover. Used for "Ler a resenha", "Todas as resenhas", "Conheça a equipe".
- **WhatsApp link** (WhatsAppLink): Archivo 500, 1rem, a 14px diagonal arrow that moves up-right 2px on hover, meaning "leaves the site". The copy is always "Conversar com {nome} no WhatsApp".
- **Focus:** 3px solid wine outline, 2px offset; on wine fields the ring switches to on-wine, and on the footer to rose.

### Navigation
- **Masthead (home):** the display wordmark with the thread drawn twice through it, once behind the letters and once in front in irregular dashes, so it passes over and under the strokes. The thread runs level out of the name into the footer's knot, so the publication opens and closes on the same knot. The knot is one shared drawing (`KNOT` in BaseLayout: a 115x87 box, thread entering at y=46.2) and a single continuous stroke: a figure eight whose two lobes only meet where they cross, like a ribbon bow, ending in a loose tail. Its box reaches the CSS as custom properties (`--knot-units`, `--knot-aspect`, `--knot-entry`), so a new drawing needs no recalculated numbers. In the masthead it is 0.95em wide, starting 4% past the word, and the wordmark reserves 1.15em on its right for it. The thread stroke is 0.02em in screen space (non-scaling, because its box stretches); the knot scales uniformly with a stroke of `--knot-units * 0.02 / 0.95` user units, which equals 0.02em at any size. The description sits beside it in muted serif at body size (on phones, with the reading button beside it); the nav runs under both, with the reading button at its end on wider screens; a running stitch closes the header.
- **Running head (inner pages):** the name at the title-entry clamp, serif 600, in wine on the left, nav on the right, the reading button last; on phones the name and the button share the first row and the nav takes the second. Running stitch below.
- **Items:** Archivo 1rem, ink, 44px tall, gaps clamp(1rem, 3vw, 1.5rem). Hover turns wine and draws a 1px hairline from the left. The current item carries the rose highlighter stroke behind its label (multiply blend), which slides to the next section across page navigations.

### Reading Panel
The reader's own settings, reached from a button in the header (never floating, so it can't cover the text being read). The button is a 44px target around a 2.25rem wine circle with "Aa" in light serif, the logo's grammar, darker on hover or while open. The panel is a native popover (Esc, tapping outside and focus return come from the browser), placed right after the button in the DOM so Tab moves straight into it, and pinned to the top right of the screen: a square wine field with a thin light edge, no shadow (the Only Objects rule). Controls: text size in five steps (90 to 140% of the reader's own browser size, so it adds to their zoom), "Alto contraste", "Mais espaço entre as linhas", "Reduzir animações", "Restaurar o padrão". Native checkboxes with labels, `accent-color` rose; the size buttons use `aria-disabled` at the ends so focus is never dropped, and the value is announced by an `aria-live` output. When the system already asks for less motion or more contrast, the box shows on, locked, with "ligado pelo seu sistema".

Settings live in `localStorage` (`entre-lacos:leitura`, parsed field by field in `src/lib/reading-settings.ts`) and are applied before the first paint by an inline script in `<head>`, as `--text-scale` and `data-contrast`, `data-spacing`, `data-motion` on `<html>`. High contrast turns secondary text to ink and the thread to wine (on the wine footer, to light), and keeps link underlines at full strength. Wider spacing raises line height (1.85 body, 2 prose), paragraph and word spacing. Fewer animations removes every animation and transition, the book turn and the shared-element flights, with `!important` on purpose: it is the reader's explicit choice.

### Fields
- **Wine field:** full-bleed wine with on-wine text and on-wine-muted metadata; hosts the lead feature, the review head and the footer.
- **Endpaper field:** full-bleed endpaper hosting contributors and author blocks.

### Running Stitch
The ponto corrido: the logo's pink thread going in and out of the paper, joining sections under the header, above the home excerpt, between archive categories and above a member's reviews. It is the system's only divider. Drawn by `Stitch.astro` as an SVG line (`x2="100%"`, so it stretches to any width without distorting), stroke 2.25 with round caps and `stroke-dasharray: 9 8`: the caps add half the stroke at each end, giving about 11px of thread and 6px of paper per stitch, with rounded ends like real thread. It is never a CSS gradient or a dashed border.

### Book Cover (signature)
A book as an object. An uploaded cover is shown whole, never cropped, scaled to the parent's `--book-height`. Without an image, a typeset cover at 2:3: the title in the serif owns the upper half (19cqi, 500, tight), the thread crosses as the publisher's band (border at max(1.5px, 1.3cqi)), the author sits under it in Archivo, and a hinge crease marks the spine. At list size (under 8rem wide) the author drops and only the band remains. Sizes in use: 8.25 to 10.5rem in entries, 19rem on mobile features, clamp(24rem, 60vh, 33rem) on desktop features.

### Review Entry
One line of a table of contents: the book on the left (5.5rem column, 7.25rem from 40rem), then the title in ink (wine on hover), the credit line, the summary, and a meta line "por Autora · Categoria · data". The whole entry picks its book up on hover.

### Contributor and Byline
- **Contributor:** circular avatar (76px compact, 112px full) beside the name (serif, ink, wine on hover), a meta line of facts, the bio, interests in Archivo wine, and the editorial links.
- **Byline:** 48px avatar beside "por Nome" in Archivo and a meta line of category, date and reading time; colors come from the field it sits on.
- **Monogram avatar:** until a photo arrives, light serif initials on a wine circle (inverted on wine fields), the logo's own grammar.

### Expediente Footer
A wine field that opens with the thread entering from the left edge of the screen and ending in the shared knot at the content's right edge (2.5px non-scaling, round caps). Here the pink thread is at full strength, and thread and knot on wine reproduce the logo. Below: "Expediente" title, the publication statement at the standfirst clamp, the standing notice that the site offers no psychological care in Archivo meta on-wine-muted, and the footer nav.

### Motion
Feedback is fast (150ms color, 250ms hairlines and arrows); only things that travel take longer (450ms cover flight, 350ms highlighter slide), all on cubic-bezier(0.16, 1, 0.3, 1). The masthead ties itself once on load: the thread wipes across the name (clip-path, 1.1s, 150ms delay), then the knot draws itself in one continuous stroke (stroke-dashoffset over pathLength 1, 1.1s from 1s on cubic-bezier(0.45, 0, 0.25, 1): it starts as slowly as the thread arrives, speeds through the lobes and settles at the tail; hidden until it starts so no round-cap specks show). Page changes use cross-document view transitions with no JavaScript. In lists, on screens with hover, only the book about to be opened (hovered or keyboard-focused) is named; on touch screens there is no hover and iOS doesn't focus a tapped link, so every listed book is named there (lists are short, thumbnails small).

Three reading interactions, each tied to a gesture of reading and none needed to reach content:
- **The book tilts** (pick it up): on hover or keyboard focus, a listed book lifts 4px and turns 12° on its spine (`rotateY`, origin at the left edge, perspective twice the book's height so every size turns alike) with the raised shadow. States set only `--lift` and `--turn`. There is no hover-only information, and touch skips it: the tap opens the review.
- **The reading thread** (how much is left): on a review page, the logo's thread runs across the top of the screen, as long as the part of the text already read; the author block and footer don't count. Decorative (`aria-hidden`). It is the site's one script, and deliberately not a CSS scroll timeline: iOS Safari's toolbar changes the visible height when the reader scrolls back, which made a timeline range jump. The script measures the screen as the large viewport (`100lvh`), reads layout only when sizes change (ResizeObserver), and on scroll only does arithmetic inside one requestAnimationFrame. Without JavaScript there is no thread.
- **The highlighter** (marking a passage): quoted passages are marked line by line while they rise into view, from a quarter in to the middle of the screen, so they are fully marked before they are read (`background-size` on a view timeline; `box-decoration-break: slice` makes the sweep run line after line). The text is never hidden.

The highlighter's scroll-driven animation is progressive: without support, passages are simply marked. Write them as longhands (`animation-name`, `animation-duration: auto`, `animation-timeline`, `animation-range`), never with the `animation` shorthand: the build's minifier folds the shorthand and the timeline together and Chrome rejects the result whole.

Under `prefers-reduced-motion: reduce` nothing moves: no lift or turn, no wipe, the knot shown static and complete, passages marked without the sweep, no shared-element flight; pages simply crossfade. The reading thread stays, since it follows the reader's own scrolling.

## Do's and Don'ts

### Do:
- **Do** use the thread (stitch, band, woven line, knot) as the only ornament and the only divider.
- **Do** give wine whole full-bleed fields and let the field supply on-wine text, meta, avatar and focus colors.
- **Do** mark with rose as a low highlighter stroke (38% to 90% of the line box) or the book-radius nav mark.
- **Do** introduce every review with its book: the cover object and the "sobre *Título*, de Autor" credit line.
- **Do** set reading in Piazzolla at 1.1875rem / 1.7 within 38rem, and scanned apparatus in Archivo.
- **Do** keep every link and nav target at least 44px tall, with the 3px wine focus ring (on-wine or rose on wine).
- **Do** gate every movement behind `prefers-reduced-motion: no-preference`, keeping state changes (deeper shadow, color) without the motion.

### Don't:
- **Don't** build cards: no bordered or rounded boxes around entries, contributors or sections.
- **Don't** use buttons or pill shapes for actions; use an editorial link with a drawn SVG arrow.
- **Don't** fill a section, panel or cover with pink (thread or rose); the light-pink endpaper is the only pink field.
- **Don't** set text in the thread color on paper; it is decorative there (about 1.6:1).
- **Don't** make a typeset cover wine or pink.
- **Don't** put a shadow on anything that is not a book.
- **Don't** add uppercase tracked kickers or eyebrows above titles; a section is named by its serif side-head.
- **Don't** add a third typeface or a printer's hairline rule between sections.
- **Don't** crop an uploaded book cover.
