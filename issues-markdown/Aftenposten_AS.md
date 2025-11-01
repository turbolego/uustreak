# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-11-01T00:32:46.740Z
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
- **Count:** 9

#### Affected Elements:

- `#wgM1XA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbKakj > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6AG3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmRAL3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAv6v4 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B61bE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W0wW9K > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q3djW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Ærlig talt, de er barn"]`

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
- **Count:** 237

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `#kw49jj`
- `#lw7v6k > .teaser-link > .teaser-image-wrapper`
- `#lw7v6k > .teaser-link > .container > .information`
- `#lw7v6k > .teaser-link > .container > .illustration-container > .text`
- `#lw7v6k > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `.b-loaded`
- `.fullwidth.teaser-wrapper:nth-child(3)`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-136411"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136411"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136411"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136373"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136373"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136373"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136409"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136409"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136409"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
- `article[data-pulse-entity-id="reel-136352"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136352"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136352"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
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
- `.fullwidth.teaser-wrapper:nth-child(7)`
- `#vg4dE4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4dE4 > .teaser-link > .container`
- `#dr-edition-teaser-cyvamb3y7 > div`
- `#zAd3xb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAd3xb > .teaser-link > .container`
- `#ny5dJQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5dJQ > .teaser-link > .container`
- `#gwVoL9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwVoL9 > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(13) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#wgM1XA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgM1XA > .teaser-link > .container > h2`
- `#Av4Axn > .teaser-link > .container > .text-wrapper-small`
- `img[alt="Putin-krav avlyste Trump-møte"]`
- `#JbKakj > .teaser-link > .container > .text-wrapper-small`
- `#JbKakj > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.games-widget`
- `#B0Abm0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Abm0 > .teaser-link > .container`
- `#OoLQqE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLQqE > .teaser-link > .container`
- `#EydPej > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#EydPej > .teaser-link > .container > .information`
- `#EydPej > .teaser-link > .container > .illustration-container > .text`
- `#EydPej > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#KMo53G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMo53G > .teaser-link > .container`
- `#jQ8GLb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8GLb > .teaser-link > .container`
- `#zAdwXr > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAdwXr > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(22) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#Av6AG3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6AG3 > .teaser-link > .container > h2`
- `#mPG8Bp > .teaser-link > .container > .text-wrapper-small`
- `#mPG8Bp > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `.magazine.teaser-bundle.new-bundles > .bundle-title`
- `#bmRAL3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmRAL3 > .teaser-link > .container > h2`
- `#zAv6v4 > .teaser-link > .container > .text-wrapper-small`
- `#zAv6v4 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5R2ky > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5R2ky > .teaser-link > .container`
- `#\37 3WmvV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3WmvV > .teaser-link > .container`
- `#\31 Mg2dB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 Mg2dB > .teaser-link > .container`
- `#W09rok > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W09rok > .teaser-link > .container`
- `#\31 MKd4K > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MKd4K > .teaser-link > .container`
- `.benefits-widget-container`
- `img[alt="De skapte tidenes karaokelåt"]`
- `#\30 Ve1k6 > .teaser-link > .container`
- `#o3jrqB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3jrqB > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(33) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\34 B61bE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B61bE > .teaser-link > .container > h2`
- `#W0wW9K > .teaser-link > .container > .text-wrapper-small`
- `#W0wW9K > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av4K5x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av4K5x > .teaser-link > .container`
- `#wgMd84 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMd84 > .teaser-link > .container`
- `#dRoWjq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRoWjq > .teaser-link > .container > .information`
- `#dRoWjq > .teaser-link > .container > h2`
- `#dRoWjq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ingrid Vik"]`
- `#wg1Ex1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wg1Ex1 > .teaser-link > .container`
- `#\37 3Xrk9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3Xrk9 > .teaser-link > .container > .information`
- `#\37 3Xrk9 > .teaser-link > .container > h2`
- `#\37 3Xrk9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ingeborg Moe"]`
- `#\31 MgLyG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgLyG > .teaser-link > .container`
- `#bm3wx3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm3wx3 > .teaser-link > .container`
- `#qPz5rO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qPz5rO > .teaser-link > .container`
- `#\31 MgAxe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgAxe > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(42) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#\38 q3djW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q3djW > .teaser-link > .container > h2`
- `#gwVOoB > .teaser-link > .container > .text-wrapper-small`
- `img[alt="Ærlig talt, de er barn"]`
- `#OoLM1E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLM1E > .teaser-link > .container`
- `#jQ8Gr9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8Gr9 > .teaser-link > .container`
- `#zAWByb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAWByb > .teaser-link > .container > .information`
- `#zAWByb > .teaser-link > .container > h2`
- `#zAWByb > .teaser-link > .container > .byline > div:nth-child(1)`
- `#zAWByb > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#pPJx8o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPJx8o > .teaser-link > .container`
- `#XjxkqB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#XjxkqB > .teaser-link > .container`
- `#EydpwG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#EydpwG > .teaser-link > .container`
- `#\38 q3oKW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q3oKW > .teaser-link > .container`
- `#pPJq3X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPJq3X > .teaser-link > .container`
- `#\35 EAXw6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 EAXw6 > .teaser-link > .container`
- `#LMvKaV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#LMvKaV > .teaser-link > .container`
- `#RzPV85 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#RzPV85 > .teaser-link > .container`
- `#\37 3XePW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XePW > .teaser-link > .container`
- `#JbKbB4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbKbB4 > .teaser-link > .container`
- `#GyzwV6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyzwV6 > .teaser-link > .container`
- `#ny5EVL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5EVL > .teaser-link > .container`
- `#jQ8GKe > .teaser-link > .container > .text-wrapper-small`
- `#jQ8GKe > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPJag1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPJag1 > .teaser-link > .container > .information`
- `#pPJag1 > .teaser-link > .container > h2`
- `#pPJag1 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Jørgen Flor"]`
- `.series-location.teaser-bundle.new-bundles > .bundle-title`
- `#Vzyvyp > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Vzyvyp > .teaser-link > .teaser-image-wrapper > .series-header`
- `#Vzyvyp > .teaser-link > .container > h2`
- `#\38 q3dk1 > .teaser-link > .container > .text-wrapper-small`
- `#\38 q3dk1 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `#zAWqy4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAWqy4 > .teaser-link > .container`
- `#PpWVJR > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#PpWVJR > .teaser-link > .container`
- `#KMQJ3E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMQJ3E > .teaser-link > .container`
- `img[alt="Logikken henger ikke på greip"]`
- `#JbK42m > .teaser-link > .container > .information`
- `#JbK42m > .teaser-link > .container > .illustration-container > .text`
- `#JbK42m > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#qP58jw > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP58jw > .teaser-link > .container`
- `#gwVnj1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwVnj1 > .teaser-link > .container > .information`
- `#gwVnj1 > .teaser-link > .container > .illustration-container > .text`
- `#gwVnj1 > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"][width="128"][height="128"]`
- `#mPGbJ1 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#mPGbJ1 > .teaser-link > .container`
- `#\37 3XOj4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3XOj4 > .teaser-link > .container`
- `#Av4w43 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av4w43 > .teaser-link > .container > .information`
- `#Av4w43 > .teaser-link > .container > h2`
- `#Av4w43 > .teaser-link > .container > .byline > div:nth-child(1)`
- `#Av4w43 > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#vgvjL4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgvjL4 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#vgvjL4 > .teaser-link > .container > .information`
- `#vgvjL4 > .teaser-link > .container > h2`
- `#vgvjL4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
- `#xm1E3X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xm1E3X > .teaser-link > .container > .information`
- `#xm1E3X > .teaser-link > .container > h2`
- `#xm1E3X > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Silvija Seres"]`
- `#Eyd8w5 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Eyd8w5 > .teaser-link > .container > .information`
- `#Eyd8w5 > .teaser-link > .container > h2`
- `#Eyd8w5 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Askill Harkjerr Halse"]`
- `img[alt="Overveldende fra Knausgård"]`
- `#LMvgVJ > .teaser-link > .container`
- `#\33 Ml8pv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 Ml8pv > .teaser-link > .container`
- `#\32 5ROJq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5ROJq > .teaser-link > .container > .information`
- `#\32 5ROJq > .teaser-link > .container > h2`
- `#\32 5ROJq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Marianne Knudsen"]`
- `#KMQ406 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMQ406 > .teaser-link > .container`
- `#JbKeKb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#JbKeKb > .teaser-link > .container`
- `img[alt="Her knuses Oslo-trikken"]`
- `#OoLKxV > .teaser-link > .container`
