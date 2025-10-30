# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-10-30T11:49:51.810Z
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
- **Count:** 3

#### Affected Elements:

- `.container > .teaser-image-wrapper > .teaser-image[loading="eager"][decoding="auto"]`
- `#yEkMar > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLQqE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 221

#### Affected Elements:

- `#gwVnj1 > .teaser-link > .teaser-image-wrapper`
- `#gwVnj1 > .teaser-link > .container > .information`
- `#gwVnj1 > .teaser-link > .container > .illustration-container > .text`
- `#gwVnj1 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `.double.teaser-wrapper:nth-child(2)`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#mPG8Bp > .teaser-link > .teaser-image-wrapper`
- `.kicker`
- `#mPG8Bp > .teaser-link > .container > h2`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(3) > .teaser-bundle.new-bundles.desktop > .bundle-teasers-wrapper > .secondary-teasers-wrapper`
- `#dr-edition-teaser-tdqopsojo > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-136383"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136383"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136383"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136377"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136377"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136377"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136370"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136370"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136370"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136345"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136345"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136345"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136342"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136342"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136342"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136301"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136301"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136301"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136309"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136309"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136309"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136294"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136294"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136294"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136276"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136276"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136276"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136268"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136268"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136268"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `.double.teaser-wrapper:nth-child(7)`
- `#\30 V5LJA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 V5LJA > .teaser-link > .container`
- `#dr-edition-teaser-k9k87er25 > div`
- `#\33 Ml8pv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 Ml8pv > .teaser-link > .container`
- `#kw4VdB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw4VdB > .teaser-link > .container`
- `#\32 5ROEa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5ROEa > .teaser-link > .container`
- `#wgMd84 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMd84 > .teaser-link > .container`
- `.games-widget`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(16) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#yEkMar > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEkMar > .teaser-link > .container > h2`
- `#OoLQqE > .teaser-link > .container > .text-wrapper-small`
- `#OoLQqE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3jrqB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3jrqB > .teaser-link > .container`
- `#VzywGr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzywGr > .teaser-link > .container`
- `#\35 EAgKm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EAgKm > .teaser-link > .container`
- `#\37 3XV03 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XV03 > .teaser-link > .container`
- `#Gyz9Km > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.series-header`
- `#Gyz9Km > .teaser-link > .container`
- `#\31 MgMjl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgMjl > .teaser-link > .container`
- `#jQ8eG9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8eG9 > .teaser-link > .container`
- `#B0Abm0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Abm0 > .teaser-link > .container`
- `#\35 EAKoe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EAKoe > .teaser-link > .container`
- `#\38 q3dvd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q3dvd > .teaser-link > .container`
- `#JbKeKb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbKeKb > .teaser-link > .container`
- `#kw9vzk > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw9vzk > .teaser-link > .container`
- `#gwVl2J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwVl2J > .teaser-link > .container`
- `#\32 5E8er > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5E8er > .teaser-link > .container`
- `.benefits-widget-container`
- `#\35 EAd1O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EAd1O > .teaser-link > .container`
- `#\35 E1k5O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E1k5O > .teaser-link > .container`
- `#kw49W6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw49W6 > .teaser-link > .container`
- `#jQozy0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQozy0 > .teaser-link > .container`
- `#PpWlwp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpWlwp > .teaser-link > .container`
- `#\36 3EAkW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3EAkW > .teaser-link > .container`
- `#GyzAol > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyzAol > .teaser-link > .container > .information`
- `#GyzAol > .teaser-link > .container > h2`
- `#GyzAol > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Karl Schlögel"]`
- `#JbKe9J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbKe9J > .teaser-link > .container`
- `#kw4G4X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw4G4X > .teaser-link > .container > .information`
- `#kw4G4X > .teaser-link > .container > h2`
- `#kw4G4X > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Mustafa Can"]`
- `#zAWjmw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAWjmw > .teaser-link > .container`
- `#\34 B6wg6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6wg6 > .teaser-link > .container`
- `#zAWjWr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAWjWr > .teaser-link > .container`
- `#ny5j8m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5j8m > .teaser-link > .container`
- `#Gyz9xl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gyz9xl > .teaser-link > .container`
- `#\38 q3VEw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q3VEw > .teaser-link > .container > .information`
- `#\38 q3VEw > .teaser-link > .container > .illustration-container > .text`
- `#\38 q3VEw > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"][width="88"][height="88"]`
- `#\34 B6Jq6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6Jq6 > .teaser-link > .container > .information`
- `#\34 B6Jq6 > .teaser-link > .container > h2`
- `#\34 B6Jq6 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Atle G. Guttormsen"]`
- `#QMn4QR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMn4QR > .teaser-link > .container`
- `#zAWPVw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAWPVw > .teaser-link > .container`
- `#B05XoQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B05XoQ > .teaser-link > .container`
- `#Xjx1Kg > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Xjx1Kg > .teaser-link > .container`
- `#wgMGVL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMGVL > .teaser-link > .container`
- `#gwVLMa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwVLMa > .teaser-link > .container`
- `#OoL5Rq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoL5Rq > .teaser-link > .container`
- `#\38 q3MRE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q3MRE > .teaser-link > .container`
- `#\39 3jAJd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 3jAJd > .teaser-link > .container`
- `#GyzRv4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyzRv4 > .teaser-link > .container`
- `#\36 3pg03 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3pg03 > .teaser-link > .container`
- `#PpWPVR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpWPVR > .teaser-link > .container`
- `#\38 q3AnA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q3AnA > .teaser-link > .container`
- `#dRo9kA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRo9kA > .teaser-link > .container`
- `img[alt="Var dette KrFs perleport?"]`
- `#Gyz3v9 > .teaser-link > .container > .information`
- `#Gyz3v9 > .teaser-link > .container > .illustration-container > .text`
- `#Gyz3v9 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `#Gyz3v9 > .teaser-link > .container > .illustration-container > .author-image-wrapper--no-grayscale > img[alt="bilde av Frank Rossavik"][width="128"][height="128"]`
- `#QMnzRQ > .teaser-link > .container > .text-wrapper-small`
- `#QMnzRQ > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EAeme > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EAeme > .teaser-link > .container`
- `#Xjx13b > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Xjx13b > .teaser-link > .container`
- `#wgMG3o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMG3o > .teaser-link > .container`
- `#GyzAxx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyzAxx > .teaser-link > .container`
- `#jQ8nMz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8nMz > .teaser-link > .container`
- `#\38 q3kXd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q3kXd > .teaser-link > .container`
- `#pPJxo6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPJxo6 > .teaser-link > .container > .information`
- `#pPJxo6 > .teaser-link > .container > h2`
- `#pPJxo6 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ole Christian Emaus"]`
- `#\35 EAvPO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EAvPO > .teaser-link > .container`
- `#\37 3X1qV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3X1qV > .teaser-link > .container > .information`
- `#\37 3X1qV > .teaser-link > .container > h2`
- `#\37 3X1qV > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Nora Steenberg"]`
- `#jQ8nOe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8nOe > .teaser-link > .container`
- `#GyzXyB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyzXyB > .teaser-link > .container > .information`
- `#GyzXyB > .teaser-link > .container > .illustration-container > .text`
- `#GyzXyB > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Joacim Lund"]`
- `#B05E1Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B05E1Q > .teaser-link > .container`
- `#JbKXQ7 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbKXQ7 > .teaser-link > .container`
- `#\38 qrkP2 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qrkP2 > .teaser-link > .container > .information`
- `#\38 qrkP2 > .teaser-link > .container > .illustration-container > .text`
- `#\38 qrkP2 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"][width="128"][height="128"]`
- `#xm1W5j > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xm1W5j > .teaser-link > .container`
- `#rP0Kbl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#rP0Kbl > .teaser-link > .container`
- `#\34 B6gl6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6gl6 > .teaser-link > .container`
- `#\37 3XM24 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XM24 > .teaser-link > .container`
- `#jQ87P9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ87P9 > .teaser-link > .container`
