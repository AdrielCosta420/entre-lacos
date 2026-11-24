---
name: Entre Laços
description: A literary magazine of book reviews by Psychology students, held together by its own red thread.
colors:
  wine: "#6b1424"
  wine-deep: "#4a0d19"
  thread: "#c4283f"
  rose: "#f2b8c2"
  endpaper: "#f6dfe3"
  paper: "#fdfafa"
  ink: "#24161a"
  muted: "#6b585d"
  on-wine: "#fbeef0"
  on-wine-muted: "#e2b3bb"
  cover-linen: "#d9cebf"
  cover-paper: "#f3ebe8"
  cover-ink: "#2b1b20"
typography:
  display:
    fontFamily: "Piazzolla, Georgia, serif"
    fontSize: "clamp(3.4rem, 16.5vw, 9.75rem)"
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

Entre Laços is set like an independent literary magazine, and the one ornament it allows itself is the structure that binds it: the red thread of the logo's "laço". The thread is woven over and under the masthead wordmark, it joins sections as a running stitch instead of a printer's rule, it crosses every typeset book cover as the publisher's band, and it ends tied in a knot at the top of the wine "Expediente" footer. If a new surface needs a divider, a band or an ending, it uses the thread; it does not invent a second ornament.

Color behaves like the materials of a bound book. Wine is the bookcloth and owns whole fields edge to edge; rose is a reader's highlighter and only marks; light rose is the endpaper, where the contributors live; everything else is warm paper and ink. Type is one press serif (Piazzolla, with its optical-size axis) carrying the masthead and the long reading text alike, with a grotesque (Archivo) speaking only for bylines, dates, navigation and links. Books are physical objects: the only things on the page that cast shadows, lift when picked up, and fly into the review page when opened.

Density is editorial, not dashboard: generous vertical air between sections, a side-head column beside a wider main column, one reading measure, asymmetric feature compositions where the book hangs over the bottom edge of its cloth. The site refuses the landing-page hero with a button, the card grid, pill buttons, and colored call-to-action boxes; actions read as underlined editorial links with a small drawn arrow.

**Key Characteristics:**
- One ornament, the red thread: woven wordmark, running stitch, cover band, footer knot.
- Wine fields as bookcloth; rose strictly as highlighter; light-rose endpaper for people.
- Piazzolla for everything read, Archivo for everything scanned (bylines, meta, nav, links).
- Books are the only objects with depth; nothing else has a shadow or a card frame.
- Editorial links with SVG arrows instead of buttons.
- Motion is mechanical and meaningful (thread wipe, cover flight, highlighter slide), always gated by `prefers-reduced-motion`.

**Open items (not rules):** the logo file has not arrived, so the wordmark is typeset in Piazzolla rather than the logo, and wine and thread must be recalibrated against the file. Member photos are placeholders (wine monogram avatars). Search (Pagefind) is planned and not built; no search UI exists to document. Example content (`exemplo-*`, `ana-exemplo`, `bia-exemplo`) is synthetic and will be deleted. The Impeccable hook flags the running stitch as a grid background; it is a single 2px running stitch, and whether to suppress the flag is undecided.

## Colors

A reduced bookbinder's palette: one wine cloth, one red thread, one highlighter rose, warm paper and ink. Values follow the Instagram profile and are provisional until the logo file arrives; the logo is the calibration source for wine and thread.

### Primary
- **Bookcloth Wine** (wine): whole-section fields (the home lead feature, the review head, the footer), link color on paper, the drop cap, the avatar monogram circle, the focus ring and `accent-color`. On paper it reads at 11.6:1, so it is safe for text.
- **Deep Wine** (wine-deep): the pressed state of wine (running-head brand hover) and the text color inside `::selection`.

### Secondary
- **Red Thread** (thread): the thread only. Masthead thread strokes, the running stitch, the band on typeset covers, the footer's thread and knot. Never text, never a fill.
- **Highlighter Rose** (rose): marks, never fills a section. The stroke under the current nav item, the low highlighter behind quoted passages (`<mark>` in the home excerpt, `blockquote` in review prose), `::selection`, and the focus ring on the wine footer.

### Tertiary
- **Endpaper** (endpaper): full-width fields where contributors live (home "Quem escreve", the team list, the member profile head, the "who wrote this" block under a review), and the backdrop behind an uploaded cover image while it loads.
- **Cover Linen, Cover Paper, Cover Ink** (cover-linen, cover-paper, cover-ink): the three bookcloth tones of typeset covers, picked deterministically from the review id so a book keeps its color everywhere. Linen carries ink text, paper carries wine text, ink carries on-wine text.

### Neutral
- **Warm Paper** (paper): the page ground.
- **Ink** (ink): body text, headings, nav items, entry and contributor names at rest (16.8:1 on paper).
- **Muted Ink** (muted): standfirsts, credit lines ("sobre *Livro*, de Autor"), metadata, side text, counts, figcaptions (6.4:1 on paper, 5.2:1 on endpaper).
- **On-Wine** and **On-Wine Muted** (on-wine, on-wine-muted): text and secondary text inside wine fields (10.6:1 and 6.5:1 on wine).

### Named Rules
**The Bookcloth Rule.** Wine is a field, not a box. It runs edge to edge across the viewport and carries its own text, link, meta, avatar and focus colors through the field's custom properties (`--muted`, `--avatar-bg`, `--avatar-fg`), so components never need wine variants. A page whose last section is a colored field meets the footer's wine with no strip of paper between.

**The Highlighter Rule.** Rose marks; it never fills a section, a panel or a cover. Its shape is a reader's stroke: low on the line (from 38% to 90% of the line box), or the irregular nav mark, never a full rectangle behind a block.

**The Two Missing Tones Rule.** Typeset covers are never wine (a wine book vanishes on the wine lead field) and never rose (rose is reserved for the highlighter). New cover tones come from bookcloth, not from the brand accents.

## Typography

**Display Font:** Piazzolla (with Georgia, serif), variable 300 to 800, italic, optical size 8 to 30
**Body Font:** Piazzolla (same family; `font-optical-sizing: auto` lets one family set both masthead and reading text)
**Label Font:** Archivo (with system-ui, sans-serif), variable 400 to 700

Both families are self-hosted through Astro Fonts at build time; the reader's browser makes no request to Google.

**Character:** A press serif with real optical sizes doing all the reading and all the headlines, set tight and balanced at display sizes and open at reading sizes; a neutral grotesque reserved for the voice of the apparatus (who, when, where to go).

### Hierarchy
- **Display** (500, clamp(3.4rem, 16.5vw, 9.75rem), 0.9, -0.035em): the masthead wordmark on the home page only, with the thread woven through it. Inner pages get a running head instead (the name at 1.625rem, 600, wine).
- **Headline** (500, clamp(2.75rem, 7vw, 5rem), 1, -0.03em): page titles in the page head of inner pages.
- **Headline Feature** (500, clamp(2.25rem, 4.6vw, 4rem), 1.02, -0.025em): the title beside a large book on a wine field (home lead; the review page uses the same shape capped at 3.75rem).
- **Title** (500, clamp(1.875rem, 3vw, 2.5rem), 1.1, -0.02em): side-head section names ("Leituras recentes", "Quem escreve"). Contributor names sit at the same register (1.75rem).
- **Title Entry** (500, clamp(1.375rem, 2.4vw, 1.875rem), 1.12, -0.015em): review titles in table-of-contents entries.
- **Quote** (400, clamp(1.75rem, 4.2vw, 3.25rem), 1.22, max 24ch): the highlighted passage on the home page, opening quote hung in the margin (text-indent -0.42em). In review prose the passage is 1.4375rem / 1.45.
- **Standfirst** (400, clamp(1.125rem, 2vw, 1.3125rem), 1.5, max 36rem, muted): the paragraph under a page title.
- **Body Reading** (400, 1.1875rem, 1.7, max 38rem): review and about prose. Prose subheads 1.625rem / 1.2. A three-line drop cap in wine opens each review where `initial-letter` is supported.
- **Body** (400, 1.125rem, 1.6): default text. Summaries and bios step down to 1.0625rem / 1.5.
- **Label** (Archivo 500, 1rem): editorial links and nav items; 0.9375rem for secondary links (WhatsApp, Instagram).
- **Meta** (Archivo 400, 0.875rem, tabular numerals, muted): bylines, categories, dates, reading time, counts.

### Named Rules
**The Two Voices Rule.** Piazzolla is what you read; Archivo is what you scan. Titles, summaries, bios, quotes and prose are serif; bylines, dates, categories, nav, links and figcaptions are sans. No third family, and no all-caps tracked labels.

**The Credit Line Rule.** A review is always introduced with the book it reads, set as "sobre *Título*, de Autor" in the serif, muted, with the book title in italic `cite` (on wine, the cite switches to on-wine).

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

Square by default: fields, sections, the footer and the page have no rounding. Two curves exist and both are physical. Books have a square-ish spine and a softer fore-edge (2px 4px 4px 2px). Avatars, photos and monograms are circles, echoing the logo's monogram-on-a-circle. The nav highlighter has a deliberately uneven radius (2px 6px 3px 5px) so it reads as a hand stroke. The thread itself is drawn with round caps and joins, and the running stitch is long stitch, short gap (11px on, 6px off, 2px tall).

## Components

### Editorial Links (instead of buttons)
The site has no buttons. Actions are links in the wine link color with the global underline (thickness max(1px, 0.06em), offset 0.2em, 40% opacity at rest, full on hover).
- **More link** (MoreLink): Archivo 500, 1rem, 44px tall, a 16px drawn right arrow (1.5px stroke, round caps) that nudges 3px forward on hover. Used for "Ler a resenha", "Todas as resenhas", "Conheça a equipe".
- **WhatsApp link** (WhatsAppLink): Archivo 500, 0.9375rem, a 14px diagonal arrow that moves up-right 2px on hover, meaning "leaves the site". The copy is always "Conversar com {nome} no WhatsApp".
- **Focus:** 3px solid wine outline, 2px offset; on wine fields the ring switches to on-wine, and on the footer to rose.

### Navigation
- **Masthead (home):** the display wordmark with the thread drawn twice through it, once behind the letters and once in front in irregular dashes, so it passes over and under the strokes; the description sits beside it in muted serif; the nav runs under both; a running stitch closes the header.
- **Running head (inner pages):** the name at 1.625rem serif 600 in wine on the left, nav on the right, running stitch below.
- **Items:** Archivo 1rem, ink, 44px tall, gaps clamp(1rem, 3vw, 1.5rem). Hover turns wine and draws a 1px hairline from the left. The current item carries the rose highlighter stroke behind its label (multiply blend), which slides to the next section across page navigations.

### Fields
- **Wine field:** full-bleed wine with on-wine text and on-wine-muted metadata; hosts the lead feature, the review head and the footer.
- **Endpaper field:** full-bleed endpaper hosting contributors and author blocks.

### Running Stitch
A 2px red-thread dashed line (11px stitch, 6px gap) that joins sections: under the header, above the home excerpt, between archive categories, above a member's reviews. It is the system's only divider.

### Book Cover (signature)
A book as an object. An uploaded cover is shown whole, never cropped, scaled to the parent's `--book-height`. Without an image, a typeset cover at 2:3: the title in the serif owns the upper half (19cqi, 500, tight), the red thread crosses as the publisher's band (border at max(1.5px, 1.3cqi)), the author sits under it in Archivo, and a hinge crease marks the spine. At list size (under 8rem wide) the author drops and only the band remains. Sizes in use: 8.25 to 10.5rem in entries, 19rem on mobile features, clamp(24rem, 60vh, 33rem) on desktop features.

### Review Entry
One line of a table of contents: the book on the left (5.5rem column, 7.25rem from 40rem), then the title in ink (wine on hover), the credit line, the summary, and a meta line "por Autora · Categoria · data". The whole entry picks its book up on hover.

### Contributor and Byline
- **Contributor:** circular avatar (76px compact, 112px full) beside the name (serif, ink, wine on hover), a meta line of facts, the bio, interests in Archivo wine, and the editorial links.
- **Byline:** 48px avatar beside "por Nome" in Archivo and a meta line of category, date and reading time; colors come from the field it sits on.
- **Monogram avatar:** until a photo arrives, light serif initials on a wine circle (inverted on wine fields), the logo's own grammar.

### Expediente Footer
A wine field that opens with the thread entering from the left edge of the screen and ending in a drawn knot at the content's right edge (2.5px, round caps). Below: "Expediente" title, the publication statement, the standing notice that the site offers no psychological care in Archivo on-wine-muted, and the footer nav.

### Motion
Feedback is fast (150ms color, 250ms hairlines and arrows); only things that travel take longer (450ms cover flight, 350ms highlighter slide), all on cubic-bezier(0.16, 1, 0.3, 1). The masthead thread wipes in once on load (1.1s, 150ms delay). Page changes use cross-document view transitions with no JavaScript; in lists only the book about to be opened is named. Under `prefers-reduced-motion: reduce` nothing moves: no lift, no wipe, no shared-element flight; pages simply crossfade.

## Do's and Don'ts

### Do:
- **Do** use the red thread (stitch, band, woven line, knot) as the only ornament and the only divider.
- **Do** give wine whole full-bleed fields and let the field supply on-wine text, meta, avatar and focus colors.
- **Do** mark with rose as a low highlighter stroke (38% to 90% of the line box) or the uneven nav mark.
- **Do** introduce every review with its book: the cover object and the "sobre *Título*, de Autor" credit line.
- **Do** set reading in Piazzolla at 1.1875rem / 1.7 within 38rem, and scanned apparatus in Archivo.
- **Do** keep every link and nav target at least 44px tall, with the 3px wine focus ring (on-wine or rose on wine).
- **Do** gate every movement behind `prefers-reduced-motion: no-preference`, keeping state changes (deeper shadow, color) without the motion.

### Don't:
- **Don't** build cards: no bordered or rounded boxes around entries, contributors or sections.
- **Don't** use buttons or pill shapes for actions; use an editorial link with a drawn SVG arrow.
- **Don't** fill a section, panel or cover with rose.
- **Don't** make a typeset cover wine or rose.
- **Don't** put a shadow on anything that is not a book.
- **Don't** add uppercase tracked kickers or eyebrows above titles; a section is named by its serif side-head.
- **Don't** add a third typeface or a printer's hairline rule between sections.
- **Don't** crop an uploaded book cover.
