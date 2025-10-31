# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-10-31T00:22:34.920Z
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
- **Count:** 6

#### Affected Elements:

- `#yEkMar > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLQqE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAvAK9 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Ærlig talt, de er barn"]`
- `#zAWPVw > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjxLrm > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 233

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#vg4dE4`
- `#JbK42m > .teaser-link > .teaser-image-wrapper`
- `#JbK42m > .teaser-link > .container > .information`
- `#JbK42m > .teaser-link > .container > .illustration-container > .text`
- `#JbK42m > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `#dr-edition-teaser-tdqopsojo > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-136405"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136405"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136405"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
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
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#lw7Lye > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw7Lye > .teaser-link > .container`
- `#\30 V5LJA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\30 V5LJA > .teaser-link > .container`
- `#ny5EVL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5EVL > .teaser-link > .container`
- `#\38 q34Wx > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q34Wx > .teaser-link > .container`
- `#\38 q3dk1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q3dk1 > .teaser-link > .container > .information`
- `#\38 q3dk1 > .teaser-link > .container > h2`
- `#\38 q3dk1 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `.games-widget`
- `#KMo53G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMo53G > .teaser-link > .container`
- `#B0Abm0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Abm0 > .teaser-link > .container`
- `#KMQJ3E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMQJ3E > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(18) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#yEkMar > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#yEkMar > .teaser-link > .container > h2`
- `#OoLQqE > .teaser-link > .container > .text-wrapper-small`
- `#OoLQqE > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAvAK9 > .teaser-link > .container > .text-wrapper-small`
- `#zAvAK9 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPG9B0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPG9B0 > .teaser-link > .container`
- `#o3jrqB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3jrqB > .teaser-link > .container`
- `#mPGbJ1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPGbJ1 > .teaser-link > .container`
- `#\37 3XV03 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XV03 > .teaser-link > .container`
- `#pPJag1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPJag1 > .teaser-link > .container > .information`
- `#pPJag1 > .teaser-link > .container > h2`
- `#pPJag1 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jørgen Flor"]`
- `#\37 3WmvV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3WmvV > .teaser-link > .container`
- `img[alt="Overveldende fra Knausgård"]`
- `#LMvgVJ > .teaser-link > .container`
- `#gwVnj1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwVnj1 > .teaser-link > .container > .information`
- `#gwVnj1 > .teaser-link > .container > .illustration-container > .text`
- `#gwVnj1 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `#\37 3XOj4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XOj4 > .teaser-link > .container`
- `#wgMd84 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMd84 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(29) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `img[alt="Ærlig talt, de er barn"]`
- `#gwVOoB > .teaser-link > .container > h2`
- `#zAWPVw > .teaser-link > .container > .text-wrapper-small`
- `#zAWPVw > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5E8er > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5E8er > .teaser-link > .container`
- `.benefits-widget-container`
- `#JbKmgJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbKmgJ > .teaser-link > .container`
- `#\35 E1zOK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E1zOK > .teaser-link > .container`
- `#vgvjL4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgvjL4 > .teaser-link > .container > .information`
- `#vgvjL4 > .teaser-link > .container > h2`
- `#vgvjL4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `#B0O9Vl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0O9Vl > .teaser-link > .container`
- `img[alt="Her knuses Oslo-trikken"]`
- `#OoLKxV > .teaser-link > .container`
- `#qP58jw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP58jw > .teaser-link > .container`
- `#GyzEzB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyzEzB > .teaser-link > .container`
- `#xm1E3X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xm1E3X > .teaser-link > .container > .information`
- `#xm1E3X > .teaser-link > .container > h2`
- `#xm1E3X > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Silvija Seres"]`
- `#Xjxm0g > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Xjxm0g > .teaser-link > .container`
- `#Av4w43 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av4w43 > .teaser-link > .container > .information`
- `#Av4w43 > .teaser-link > .container > h2`
- `#Av4w43 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#Av4w43 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\32 5ROEa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5ROEa > .teaser-link > .container`
- `#\33 Ml8pv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 Ml8pv > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(42) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#mPG8Bp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPG8Bp > .teaser-link > .container > .kicker`
- `#mPG8Bp > .teaser-link > .container > h2`
- `#XjxLrm > .teaser-link > .container > .text-wrapper-small`
- `#XjxLrm > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5ROJq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5ROJq > .teaser-link > .container > .information`
- `#\32 5ROJq > .teaser-link > .container > h2`
- `#\32 5ROJq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Marianne Knudsen"]`
- `#Eyd8w5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Eyd8w5 > .teaser-link > .container > .information`
- `#Eyd8w5 > .teaser-link > .container > h2`
- `#Eyd8w5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Askill Harkjerr Halse"]`
- `#ny5EEB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5EEB > .teaser-link > .container`
- `#ny5eXQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5eXQ > .teaser-link > .container`
- `#kw4VdB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw4VdB > .teaser-link > .container`
- `#jQ8eG9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8eG9 > .teaser-link > .container`
- `#\31 MgMjl > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgMjl > .teaser-link > .container`
- `#xm16RX > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xm16RX > .teaser-link > .container`
- `#dRoKnq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRoKnq > .teaser-link > .container`
- `#JbKeKb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbKeKb > .teaser-link > .container`
- `#\38 q3dvd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q3dvd > .teaser-link > .container`
- `#\37 3XaqW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XaqW > .teaser-link > .container`
- `#VzywGr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#VzywGr > .teaser-link > .container`
- `#Gyz9Km > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gyz9Km > .teaser-link > .teaser-image-wrapper > .series-header`
- `#Gyz9Km > .teaser-link > .container`
- `#zAWjmw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAWjmw > .teaser-link > .container`
- `#kw49W6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw49W6 > .teaser-link > .container`
- `#KMQ406 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMQ406 > .teaser-link > .container`
- `#\35 EAd1O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EAd1O > .teaser-link > .container`
- `#gwVl2J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwVl2J > .teaser-link > .container`
- `#\35 EAKoe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EAKoe > .teaser-link > .container`
- `#GyzAol > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyzAol > .teaser-link > .container > .information`
- `#GyzAol > .teaser-link > .container > h2`
- `#GyzAol > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Karl Schlögel"]`
- `#JbKe9J > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbKe9J > .teaser-link > .container`
- `#\35 EAgKm > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EAgKm > .teaser-link > .container`
- `#\38 q3VEw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q3VEw > .teaser-link > .container > .information`
- `#\38 q3VEw > .teaser-link > .container > .illustration-container > .text`
- `#\38 q3VEw > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Rakel Haugen Strand"]`
- `#ny5j8m > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5j8m > .teaser-link > .container`
- `#kw4G4X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw4G4X > .teaser-link > .container > .information`
- `#kw4G4X > .teaser-link > .container > h2`
- `#kw4G4X > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Mustafa Can"]`
- `#gwVLMa > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwVLMa > .teaser-link > .container`
- `#\34 B6wg6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6wg6 > .teaser-link > .container`
- `#B05XoQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B05XoQ > .teaser-link > .container`
- `#PpWPVR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpWPVR > .teaser-link > .container`
- `#zAWjWr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAWjWr > .teaser-link > .container`
- `#wgMGVL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMGVL > .teaser-link > .container`
- `#\34 B6Jq6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6Jq6 > .teaser-link > .container > .information`
- `#\34 B6Jq6 > .teaser-link > .container > h2`
- `#\34 B6Jq6 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Atle G. Guttormsen"]`
- `#\36 3pg03 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3pg03 > .teaser-link > .container`
- `#jQ8nMz > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8nMz > .teaser-link > .container`
- `#\39 3jAJd > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\39 3jAJd > .teaser-link > .container`
