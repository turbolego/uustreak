# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-11-10T11:25:19.746Z
**URL:** [https://www.aftenposten.no/#](https://www.aftenposten.no/#)
**Total Violations:** 5

## Violation Details

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2, RGAAv4, RGAA-7.1.1
- **Count:** 1

#### Affected Elements:

- `.ch-menu-state-label`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 2

#### Affected Elements:

- `#OoLQqE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ch-core-header`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ch-core-header`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 209

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#Av8Xkq > .teaser-link > .teaser-image-wrapper`
- `#Av8Xkq > .teaser-link > .container > .information`
- `#Av8Xkq > .teaser-link > .container > h2`
- `#Av8Xkq > .teaser-link > .container > .byline > div:nth-child(1)`
- `.b-loaded`
- `.double.teaser-wrapper:nth-child(3)`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-136525"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136525"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136525"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136557"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136557"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136557"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136551"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136551"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136551"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136507"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136507"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136507"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136515"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136515"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136515"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136498"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136498"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136498"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136500"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136500"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136500"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136461"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136461"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136461"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136419"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136419"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136419"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136425"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136425"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136425"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.double.teaser-wrapper:nth-child(7)`
- `#B0Abm0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Abm0 > .teaser-link > .container`
- `#dr-edition-teaser-n288w4tgt > div`
- `#\32 5Rxxr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5Rxxr > .teaser-link > .container`
- `#bm9aBq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm9aBq > .teaser-link > .teaser-image-wrapper > .series-header`
- `#bm9aBq > .teaser-link > .container`
- `#dRgbAo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgbAo > .teaser-link > .container`
- `#OowPLk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OowPLk > .teaser-link > .container`
- `.games-widget`
- `#eM2bBM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2bBM > .teaser-link > .container`
- `#eMlyjg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMlyjg > .teaser-link > .container`
- `.bundle-title`
- `#OoLQqE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLQqE > .teaser-link > .container > h2`
- `#kw4xnL > .teaser-link > .container > .text-wrapper-small`
- `.container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQVbQn > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQVbQn > .teaser-link > .container`
- `#KMEenX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMEenX > .teaser-link > .container`
- `#Mnx3PK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mnx3PK > .teaser-link > .container`
- `#bm9X43 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm9X43 > .teaser-link > .container > .information`
- `#bm9X43 > .teaser-link > .container > h2`
- `#bm9X43 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#bm9X43 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#eMlqda > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMlqda > .teaser-link > .container`
- `#B07qwv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B07qwv > .teaser-link > .container`
- `#\38 qb7rx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qb7rx > .teaser-link > .container`
- `#\31 MmE0B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MmE0B > .teaser-link > .container`
- `#dRgrQo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgrQo > .teaser-link > .container`
- `#lw7Lye > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw7Lye > .teaser-link > .container`
- `#W04OWL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W04OWL > .teaser-link > .container`
- `#\33 Mlmz0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 Mlmz0 > .teaser-link > .container`
- `.benefits-widget-container`
- `.fullwidth.teaser-wrapper:nth-child(34)`
- `#vg0nWX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg0nWX > .teaser-link > .container`
- `#zARQRq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zARQRq > .teaser-link > .container`
- `#\38 qezpE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qezpE > .teaser-link > .container`
- `#VzOx0r > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzOx0r > .teaser-link > .container > .information`
- `#VzOx0r > .teaser-link > .container > h2`
- `#VzOx0r > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Einar Lie"]`
- `#Av6AQM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6AQM > .teaser-link > .container`
- `#W04xXa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W04xXa > .teaser-link > .container`
- `#bm97Je > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm97Je > .teaser-link > .container`
- `img[alt="– Hennes verste \a mareritt"]`
- `#MnxqWr > .teaser-link > .container`
- `#PpV2JR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpV2JR > .teaser-link > .container`
- `#Eydey3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Eydey3 > .teaser-link > .container`
- `#qPKbVo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qPKbVo > .teaser-link > .container`
- `#W04knj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W04knj > .teaser-link > .container > .information`
- `#W04knj > .teaser-link > .container > h2`
- `#W04knj > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ina Blom"]`
- `#rPvGaA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rPvGaA > .teaser-link > .container`
- `#rPvbye > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rPvbye > .teaser-link > .container`
- `#Ey0ql5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey0ql5 > .teaser-link > .container`
- `#XjG49W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjG49W > .teaser-link > .teaser-image-wrapper > .series-header`
- `#XjG49W > .teaser-link > .container`
- `#eMl6OO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMl6OO > .teaser-link > .container`
- `#\37 39Vj3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 39Vj3 > .teaser-link > .container`
- `#kwqyQv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwqyQv > .teaser-link > .container`
- `#\30 Vw90G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 Vw90G > .teaser-link > .container > .information`
- `#\30 Vw90G > .teaser-link > .container > h2`
- `#\30 Vw90G > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ervin Kohn"]`
- `#zARkW1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zARkW1 > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(53)`
- `#JbP3AP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbP3AP > .teaser-link > .container`
- `#Eydk5P > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Eydk5P > .teaser-link > .teaser-image-wrapper > .series-header`
- `#Eydk5P > .teaser-link > .container`
- `#lw8eMA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw8eMA > .teaser-link > .container`
- `#B07vRE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B07vRE > .teaser-link > .container`
- `#kw278X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw278X > .teaser-link > .container`
- `#xmx9oQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmx9oQ > .teaser-link > .container`
- `#MnxmzJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#MnxmzJ > .teaser-link > .container`
- `#Ey0mVa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey0mVa > .teaser-link > .container`
- `#W095wd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W095wd > .teaser-link > .container`
- `#dRgjlo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgjlo > .teaser-link > .container`
- `#lw7ER9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw7ER9 > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(62)`
- `#LMvg79 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMvg79 > .teaser-link > .container`
- `#Pp6jWe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pp6jWe > .teaser-link > .container`
- `#JbKPdb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbKPdb > .teaser-link > .container`
- `#\33 MLB4P > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MLB4P > .teaser-link > .container`
- `#xmxPKl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmxPKl > .teaser-link > .container`
- `#Pp60q0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pp60q0 > .teaser-link > .container`
- `#nykLen > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#nykLen > .teaser-link > .container`
- `#RzPeAJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzPeAJ > .teaser-link > .teaser-image-wrapper > .series-header`
- `#RzPeAJ > .teaser-link > .container`
- `#pP0MJo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pP0MJo > .teaser-link > .container > .information`
- `#pP0MJo > .teaser-link > .container > h2`
- `#pP0MJo > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Christian Jensen"]`
- `#wgMyL4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMyL4 > .teaser-link > .container > .information`
- `.text`
- `.illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#\36 3r5J3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3r5J3 > .teaser-link > .container`
- `#Ey0zdA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey0zdA > .teaser-link > .container`
- `#jQ87qw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ87qw > .teaser-link > .container`
- `#pP0P4W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pP0P4W > .teaser-link > .container`
- `#JbPnr6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbPnr6 > .teaser-link > .container`
- `#bm950v > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm950v > .teaser-link > .container`
- `#QMpr34 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMpr34 > .teaser-link > .container`
