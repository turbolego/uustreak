# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-11-16T00:32:11.863Z
**URL:** [https://www.aftenposten.no/](https://www.aftenposten.no/)
**Total Violations:** 6

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

- `#VzOMbW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmRAL3 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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

### Links must have discernible text

- **Impact:** serious
- **Description:** Ensure links have discernible text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright
- **Tags:** cat.name-role-value, wcag2a, wcag244, wcag412, section508, section508.22.a, TTv5, TT6.a, EN-301-549, EN-9.2.4.4, EN-9.4.1.2, ACT, RGAAv4, RGAA-6.2.1
- **Count:** 1

#### Affected Elements:

- `mm-frontpage-video,:root`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/region?application=playwright
- **Tags:** cat.keyboard, best-practice, RGAAv4, RGAA-9.2.1
- **Count:** 235

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `#dRgPdz > .teaser-link > .teaser-image-wrapper`
- `#dRgPdz > .teaser-link > .container > .information`
- `#dRgPdz > .teaser-link > .container > h2`
- `#dRgPdz > .teaser-link > .container > .byline > div:nth-child(1)`
- `#dRgPdz > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#dr-edition-teaser-79fspi7f9 > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-136699"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136699"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136699"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136671"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136671"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136671"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136639"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136639"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136639"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136633"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136633"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136633"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136524"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136524"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136524"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136625"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136625"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136625"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136595"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136595"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136595"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136579"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136579"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136579"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136581"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136581"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136581"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136525"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136525"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136525"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `.bundle-title`
- `#VzOMbW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzOMbW > .teaser-link > .container > h2`
- `#bmRAL3 > .teaser-link > .container > .text-wrapper-small`
- `#bmRAL3 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dr-edition-teaser-egg6d3ot4 > div`
- `#GyvenJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyvenJ > .teaser-link > .container`
- `#KMEVQ7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMEVQ7 > .teaser-link > .container`
- `#\35 Em7OX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 Em7OX > .teaser-link > .container`
- `#xmxq68 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xmxq68 > .teaser-link > .container`
- `.games-widget`
- `#dRgekz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRgekz > .teaser-link > .container`
- `#Pp6lbp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Pp6lbp > .teaser-link > .container`
- `#\33 MWO3A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MWO3A > .teaser-link > .container`
- `#zARwQ4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zARwQ4 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#zARwQ4 > .teaser-link > .container`
- `#zARqjv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zARqjv > .teaser-link > .container`
- `#bmR0z5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmR0z5 > .teaser-link > .container`
- `#QMp01A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMp01A > .teaser-link > .container > .information`
- `#QMp01A > .teaser-link > .container > .illustration-container > .text`
- `#QMp01A > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `img[alt="Ny baby? Eller ikke ny baby?"]`
- `#lw8yMk > .teaser-link > .container`
- `#\35 Em5jX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 Em5jX > .teaser-link > .container`
- `#vg4dE4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4dE4 > .teaser-link > .container`
- `#JbP0Q4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbP0Q4 > .teaser-link > .container`
- `#\38 qbvAG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qbvAG > .teaser-link > .container`
- `#bm9JGd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm9JGd > .teaser-link > .container`
- `#kwqxj6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwqxj6 > .teaser-link > .container`
- `#Oov5OA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oov5OA > .teaser-link > .container`
- `#XjGyRm > .teaser-link > .container > .text-wrapper-small`
- `#XjGyRm > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8z9q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8z9q > .teaser-link > .container`
- `img[alt="«Falske nyheter» finnes ikke"]`
- `#dRg96w > .teaser-link > .container > .information`
- `#dRg96w > .teaser-link > .container > h2`
- `#dRg96w > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Stine Bergersen"]`
- `.benefits-widget-container`
- `#pP792W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pP792W > .teaser-link > .container`
- `#nyke6d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#nyke6d > .teaser-link > .container`
- `#jQ6jPe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ6jPe > .teaser-link > .container`
- `#gwX80q > .teaser-link > .container > .text-wrapper-small`
- `#gwX80q > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3p2JO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3p2JO > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\36 3p2JO > .teaser-link > .container`
- `#\32 5M64l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5M64l > .teaser-link > .container`
- `#yEeJma > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEeJma > .teaser-link > .container`
- `#Rz3nEA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rz3nEA > .teaser-link > .container`
- `#\33 MLALL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MLALL > .teaser-link > .container`
- `#\31 MQLOW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MQLOW > .teaser-link > .container`
- `#JbPaQb > .teaser-link > .container > .text-wrapper-small`
- `#JbPaQb > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEe09x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEe09x > .teaser-link > .container`
- `#Rz3gmx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rz3gmx > .teaser-link > .container`
- `#gwX2JJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwX2JJ > .teaser-link > .container`
- `#\39 3g7m9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 3g7m9 > .teaser-link > .container`
- `#\37 39ggW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 39ggW > .teaser-link > .container`
- `#VzOM23 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzOM23 > .teaser-link > .container`
- `#alrxlL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#alrxlL > .teaser-link > .container > .information`
- `#alrxlL > .teaser-link > .container > .illustration-container > .text`
- `#alrxlL > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#o3Jb7R > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3Jb7R > .teaser-link > .container > .information`
- `#o3Jb7R > .teaser-link > .container > h2`
- `#o3Jb7R > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Rodas Tadese Sibahtu"]`
- `#o3day0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3day0 > .teaser-link > .container`
- `#eMlL5Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eMlL5Q > .teaser-link > .container`
- `#nykbwd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#nykbwd > .teaser-link > .container`
- `#OoRKrl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoRKrl > .teaser-link > .container`
- `#Rz3eKr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rz3eKr > .teaser-link > .container > .information`
- `#Rz3eKr > .teaser-link > .container > h2`
- `#Rz3eKr > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Anne Lise Fredlund"]`
- `#kwqO4v > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kwqO4v > .teaser-link > .container`
- `#zARb2v > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zARb2v > .teaser-link > .container`
- `#wgyBnd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgyBnd > .teaser-link > .container`
- `#Rz3wBd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Rz3wBd > .teaser-link > .container > .information`
- `#Rz3wBd > .teaser-link > .container > h2`
- `#Rz3wBd > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Anita Vatland"]`
- `#\30 VwyxE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VwyxE > .teaser-link > .container > .information`
- `#\30 VwyxE > .teaser-link > .container > h2`
- `#\30 VwyxE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Magnus Ravlo Stokke"]`
- `#\37 39OBo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 39OBo > .teaser-link > .container > .information`
- `#\37 39OBo > .teaser-link > .container > .illustration-container > .text`
- `#\37 39OBo > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `mm-frontpage-video,:root`
- `#Rz39bW > .teaser-link`
- `#o3J9wg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3J9wg > .teaser-link > .teaser-image-wrapper > .series-header`
- `#o3J9wg > .teaser-link > .container > .information`
- `#o3J9wg > .teaser-link > .container > .illustration-container > .text`
- `#o3J9wg > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Daniel Røed-Johansen"]`
- `#Ey08W2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Ey08W2 > .teaser-link > .container`
- `#\35 EP19E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EP19E > .teaser-link > .container`
- `#KMER0M > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMER0M > .teaser-link > .container > .information`
- `#KMER0M > .teaser-link > .container > h2`
- `#KMER0M > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ester Nafstad"]`
- `#QMp47P > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMp47P > .teaser-link > .container`
- `#Gyzdpl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gyzdpl > .teaser-link > .container`
- `#o3JOjj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3JOjj > .teaser-link > .container`
- `#XjGLG7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjGLG7 > .teaser-link > .container`
- `#LMygOq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMygOq > .teaser-link > .container > .information`
- `#LMygOq > .teaser-link > .container > h2`
- `#LMygOq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ole Gjems-Onstad"]`
- `#Gyvg9q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gyvg9q > .teaser-link > .container`
- `#\31 MQ0Bl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MQ0Bl > .teaser-link > .container > .information`
- `#\31 MQ0Bl > .teaser-link > .container > h2`
- `#\31 MQ0Bl > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Bård Vegar Solhjell"]`
- `#bm9xlv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm9xlv > .teaser-link > .container`
- `#gwXx89 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwXx89 > .teaser-link > .container`
- `#jQVJyA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQVJyA > .teaser-link > .container > .information`
- `#jQVJyA > .teaser-link > .container > h2`
- `#jQVJyA > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `#zARjww > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zARjww > .teaser-link > .container`
- `img[alt="Svarer om Epstein-kontakt"]`
- `#\34 Bn8Pg > .teaser-link > .container`
- `#\30 VwAM0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 VwAM0 > .teaser-link > .container`
- `#XjG7BB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjG7BB > .teaser-link > .container`
- `#nykxzJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#nykxzJ > .teaser-link > .container`
