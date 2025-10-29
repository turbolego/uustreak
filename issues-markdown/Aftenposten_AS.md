# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-10-29T00:30:01.279Z
**URL:** [https://www.aftenposten.no/#](https://www.aftenposten.no/#)
**Total Violations:** 6

## Violation Details

### ARIA attributes must conform to valid values

- **Impact:** critical
- **Description:** Ensure all ARIA attributes have valid values
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr-value?application=playwright
- **Tags:** cat.aria, wcag2a, wcag412, EN-301-549, EN-9.4.1.2
- **Count:** 1

#### Affected Elements:

- `.ch-menu-state-label`

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT
- **Count:** 1

#### Affected Elements:

- `img[srcset=""]`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 4

#### Affected Elements:

- `#\36 3pgBo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MlRld > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ87P9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyzX4Q > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

### Document should not have more than one banner landmark

- **Impact:** moderate
- **Description:** Ensure the document has at most one banner landmark
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-banner?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ch-core-header`

### Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

- **Impact:** moderate
- **Description:** Ensure landmarks are unique
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=playwright
- **Tags:** cat.semantics, best-practice
- **Count:** 1

#### Affected Elements:

- `.ch-core-header`

### All page content should be contained by landmarks

- **Impact:** moderate
- **Description:** Ensure all page content is contained by landmarks
- **Help URL:** https://dequeuniversity.com/rules/axe/4.10/region?application=playwright
- **Tags:** cat.keyboard, best-practice
- **Count:** 236

#### Affected Elements:

- `#Gyz3v9 > .teaser-link > .teaser-image-wrapper`
- `#Gyz3v9 > .teaser-link > .container > .information`
- `#Gyz3v9 > .teaser-link > .container > .illustration-container > .text`
- `#Gyz3v9 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `.double.teaser-wrapper:nth-child(2)`
- `#\37 3X1qV > .teaser-link > .teaser-image-wrapper`
- `#\37 3X1qV > .teaser-link > .container > .information`
- `#\37 3X1qV > .teaser-link > .container > h2`
- `#\37 3X1qV > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Nora Steenberg"]`
- `#dr-edition-teaser-y9n19j6fk > div`
- `.double.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `a[data-pulse-entity-id="reel-136342"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136342"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136342"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136301"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136301"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136301"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136309"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136309"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136309"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136294"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136294"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136294"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136276"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136276"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136276"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136268"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136268"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136268"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136246"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136246"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136246"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136237"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136237"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136237"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136245"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136245"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136245"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `a[data-pulse-entity-id="reel-136248"] > ._preview-image_1bm9r_709[loading="lazy"]`
- `a[data-pulse-entity-id="reel-136248"] > ._preview-duration_1hg9u_384`
- `a[data-pulse-entity-id="reel-136248"] > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#yEkMar > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEkMar > .teaser-link > .container`
- `#\30 Vex4o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 Vex4o > .teaser-link > .container`
- `#B05E1Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B05E1Q > .teaser-link > .container`
- `#pPJxo6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPJxo6 > .teaser-link > .container > .information`
- `#pPJxo6 > .teaser-link > .container > h2`
- `#pPJxo6 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ole Christian Emaus"]`
- `.games-widget`
- `#PpWLwJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpWLwJ > .teaser-link > .container`
- `#B0Abm0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Abm0 > .teaser-link > .container`
- `#\37 3XMr3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XMr3 > .teaser-link > .container`
- `#\37 3XM24 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XM24 > .teaser-link > .container`
- `#GyzXyB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyzXyB > .teaser-link > .container > .information`
- `#GyzXyB > .teaser-link > .container > .illustration-container > .text`
- `#GyzXyB > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#\37 3XV03 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XV03 > .teaser-link > .container`
- `#VzyB21 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzyB21 > .teaser-link > .container`
- `#eM2WvO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2WvO > .teaser-link > .container`
- `#jQ8nOe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8nOe > .teaser-link > .container`
- `#nyqanJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#nyqanJ > .teaser-link > .container`
- `#zAWymO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAWymO > .teaser-link > .container`
- `#\34 B6gl6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6gl6 > .teaser-link > .container`
- `#wgajaP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgajaP > .teaser-link > .container`
- `#\38 qrkP2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qrkP2 > .teaser-link > .container > .information`
- `#\38 qrkP2 > .teaser-link > .container > .illustration-container > .text`
- `#\38 qrkP2 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#\38 qgnVG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qgnVG > .teaser-link > .container`
- `#wgMQ4d > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMQ4d > .teaser-link > .container`
- `#vgagVl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgagVl > .teaser-link > .container`
- `.benefits-widget-container`
- `#JbKXQ7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbKXQ7 > .teaser-link > .container`
- `#pP792W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pP792W > .teaser-link > .container`
- `#rP0Kbl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rP0Kbl > .teaser-link > .container`
- `#\37 3WmvV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3WmvV > .teaser-link > .container`
- `#xm1W5j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xm1W5j > .teaser-link > .container`
- `#KMJL75 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMJL75 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(38) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\36 3pgBo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3pgBo > .teaser-link > .container > h2`
- `#\33 MlRld > .teaser-link > .container > .text-wrapper-small`
- `#\33 MlRld > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XwbB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XwbB > .teaser-link > .container`
- `#alXond > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#alXond > .teaser-link > .container`
- `img[alt="Israel angriper Gaza by"]`
- `#eM2499 > .teaser-link > .container`
- `#rP04Ew > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rP04Ew > .teaser-link > .container`
- `#W09Bnd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W09Bnd > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(44) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#jQ87P9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ87P9 > .teaser-link > .container > h2`
- `#GyzX4Q > .teaser-link > .container > .text-wrapper-small`
- `#GyzX4Q > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgMBJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgMBJ > .teaser-link > .container`
- `#ny5465 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5465 > .teaser-link > .container`
- `#GyzX19 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyzX19 > .teaser-link > .container > .information`
- `#GyzX19 > .teaser-link > .container > h2`
- `#GyzX19 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Henrik Vogt"]`
- `#\36 3m2k3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3m2k3 > .teaser-link > .container`
- `#lw7kGL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw7kGL > .teaser-link > .container`
- `#PpWXE6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpWXE6 > .teaser-link > .container`
- `#dRoawq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRoawq > .teaser-link > .container`
- `#yEkaqK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEkaqK > .teaser-link > .teaser-image-wrapper > .series-header`
- `#yEkaqK > .teaser-link > .container`
- `#ny5Pzo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5Pzo > .teaser-link > .container`
- `#W09y4j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W09y4j > .teaser-link > .container`
- `#JbKXWX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbKXWX > .teaser-link > .container`
- `#PpWjWR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpWjWR > .teaser-link > .container`
- `#\30 Veq3B > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 Veq3B > .teaser-link > .container`
- `#Oov5OA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Oov5OA > .teaser-link > .container`
- `#dRoQ7A > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRoQ7A > .teaser-link > .container`
- `img[alt="Bemerkelsesverdig debut"]`
- `#\37 3X0a8 > .teaser-link > .container`
- `#KMQX84 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMQX84 > .teaser-link > .container > .information`
- `#KMQX84 > .teaser-link > .container > h2`
- `#KMQX84 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Johanne Akerø"]`
- `#ny5l6J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5l6J > .teaser-link > .container > .information`
- `#ny5l6J > .teaser-link > .container > h2`
- `#ny5l6J > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Stein Lillevolden"]`
- `#wgMkqM > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMkqM > .teaser-link > .container`
- `#Vzyrlp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Vzyrlp > .teaser-link > .container > .information`
- `#Vzyrlp > .teaser-link > .container > h2`
- `#Vzyrlp > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Siran Øzalp Yildirim"]`
- `#kw4pzj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw4pzj > .teaser-link > .container > .information`
- `#kw4pzj > .teaser-link > .container > h2`
- `#kw4pzj > .teaser-link > .container > .byline > div:nth-child(1)`
- `#kw4pzj > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#lwplA7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lwplA7 > .teaser-link > .container > .information`
- `#lwplA7 > .teaser-link > .container > .illustration-container > .text`
- `#lwplA7 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#EydXE2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#EydXE2 > .teaser-link > .container`
- `#ny5Vwx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5Vwx > .teaser-link > .container`
- `#JbKMyR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbKMyR > .teaser-link > .container > .information`
- `#JbKMyR > .teaser-link > .container > .illustration-container > .text`
- `#JbKMyR > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#zAW9d9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAW9d9 > .teaser-link > .container`
- `#\36 3mmnL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3mmnL > .teaser-link > .container`
- `#PpKE27 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpKE27 > .teaser-link > .container`
- `#\37 3Xjjo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3Xjjo > .teaser-link > .container`
- `#\33 MlRMe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MlRMe > .teaser-link > .container > .information`
- `#\33 MlRMe > .teaser-link > .container > h2`
- `#\33 MlRMe > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kjersti Stenseng"]`
- `#PpWa3p > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpWa3p > .teaser-link > .container`
- `#lw7AEk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw7AEk > .teaser-link > .teaser-image-wrapper > .series-header`
- `#lw7AEk > .teaser-link > .container`
- `#QMnOO4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMnOO4 > .teaser-link > .container`
- `#XjxdGE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjxdGE > .teaser-link > .container > .information`
- `#XjxdGE > .teaser-link > .container > h2`
- `#XjxdGE > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Agnes Ravatn"]`
- `#OoG7lV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoG7lV > .teaser-link > .container > .information`
- `#OoG7lV > .teaser-link > .container > h2`
- `#OoG7lV > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Malin Eberhard-Gran"]`
- `#\35 EAMGb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EAMGb > .teaser-link > .container`
- `#qP2yo1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP2yo1 > .teaser-link > .container`
