# WCAG Violations Report for Aftenposten AS

**Timestamp:** 2025-11-02T00:24:50.539Z
**URL:** [https://www.aftenposten.no/#](https://www.aftenposten.no/#)
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

### Images must have alternative text

- **Impact:** critical
- **Description:** Ensure <img> elements have alternative text or a role of none or presentation
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright
- **Tags:** cat.text-alternatives, wcag2a, wcag111, section508, section508.22.a, TTv5, TT7.a, TT7.b, EN-301-549, EN-9.1.1.1, ACT, RGAAv4, RGAA-1.1.1
- **Count:** 1

#### Affected Elements:

- `img[srcset=""]`

### Alternative text of images should not be repeated as text

- **Impact:** minor
- **Description:** Ensure image alternative is not repeated as text
- **Help URL:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright
- **Tags:** cat.text-alternatives, best-practice
- **Count:** 6

#### Affected Elements:

- `#OoLQqE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw7o59 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMdQwQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q3djW > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="Ærlig talt, de er barn"]`
- `#alXmdA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`

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
- **Count:** 234

#### Affected Elements:

- `.fullwidth.teaser-wrapper:nth-child(1)`
- `.double.teaser-wrapper:nth-child(2)`
- `#EydPGa > .teaser-link > .teaser-image-wrapper`
- `#EydPGa > .teaser-link > .container > .information`
- `#EydPGa > .teaser-link > .container > h2`
- `#EydPGa > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Amund Trellevik "]`
- `#dr-edition-teaser-egg6d3ot4 > div`
- `.fullwidth.teaser-wrapper:nth-child(5)`
- `._heading_1bm9r_641`
- `article[data-pulse-entity-id="reel-136359"] > a > ._preview-image_1bm9r_709[loading="lazy"]`
- `article[data-pulse-entity-id="reel-136359"] > a > ._preview-duration_1hg9u_384`
- `article[data-pulse-entity-id="reel-136359"] > a > ._preview-title_1bm9r_721._preview-title_1hg9u_412`
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
- `.double.teaser-wrapper:nth-child(7)`
- `#qP2W8o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#qP2W8o > .teaser-link > .container > .information`
- `#qP2W8o > .teaser-link > .container > .illustration-container > .text`
- `#qP2W8o > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Halvor Hegtun"]`
- `#dr-edition-teaser-8bmdcyl2 > div`
- `#\38 qezpE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 qezpE > .teaser-link > .container`
- `#dRoAww > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRoAww > .teaser-link > .container`
- `#\31 MgRlW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgRlW > .teaser-link > .container`
- `.games-widget`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(16) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#OoLQqE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLQqE > .teaser-link > .container > h2`
- `#kw7o59 > .teaser-link > .container > .text-wrapper-small`
- `#kw7o59 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4dE4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vg4dE4 > .teaser-link > .container`
- `#Mny3qE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Mny3qE > .teaser-link > .container`
- `#B0Abm0 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B0Abm0 > .teaser-link > .container`
- `#dRo6Aq > .teaser-link > .container > .text-wrapper-small`
- `#dRo6Aq > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAd3xb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAd3xb > .teaser-link > .container`
- `#yELaaR > .teaser-link > .container > .text-wrapper-small`
- `#yELaaR > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmRAL3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bmRAL3 > .teaser-link > .container`
- `#OoL5qO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoL5qO > .teaser-link > .container > .information`
- `#OoL5qO > .teaser-link > .container > h2`
- `#OoL5qO > .teaser-link > .container > .byline > div:nth-child(1)`
- `#OoL5qO > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#\35 E1zOK > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E1zOK > .teaser-link > .container`
- `#\34 B6yEG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B6yEG > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(28) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#QMdQwQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMdQwQ > .teaser-link > .container > h2`
- `#\38 q3djW > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q3djW > .teaser-link > .container > .text-wrapper-small`
- `img[alt="Ærlig talt, de er barn"]`
- `#gwVOoB > .teaser-link > .container > .text-wrapper-small`
- `#KMo53G > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMo53G > .teaser-link > .container`
- `#o3dxER > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3dxER > .teaser-link > .container`
- `#\35 E1k5O > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\35 E1k5O > .teaser-link > .container`
- `.benefits-widget-container`
- `#B05emv > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#B05emv > .teaser-link > .container > .information`
- `#B05emv > .teaser-link > .container > h2`
- `#B05emv > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Nazneen Khan-Østrem"]`
- `#pP792W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pP792W > .teaser-link > .container`
- `#xm1Kb8 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xm1Kb8 > .teaser-link > .container`
- `#\37 3WmvV > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3WmvV > .teaser-link > .container`
- `#eM2mka > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#eM2mka > .teaser-link > .container`
- `#nyqanJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#nyqanJ > .teaser-link > .container`
- `.bundle-wrapper.fullwidth.teaser-wrapper:nth-child(38) > .teaser-bundle.new-bundles.desktop > .bundle-title`
- `#alXmdA > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#alXmdA > .teaser-link > .container > h2`
- `#Av4Axn > .teaser-link > .container > .text-wrapper-small`
- `img[alt="Putin-krav avlyste Trump-møte"]`
- `.teaser-bundle.new-bundles.series-location > .bundle-title`
- `#\36 3mK3Q > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3mK3Q > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\36 3mK3Q > .teaser-link > .container > h2`
- `#\38 q3dk1 > .teaser-link > .container > .text-wrapper-small`
- `#\38 q3dk1 > .teaser-link > .container > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `img[alt="bilde av Kristoffer Rønneberg"]`
- `#pPJa9W > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPJa9W > .teaser-link > .container > .information`
- `#pPJa9W > .teaser-link > .container > h2`
- `#pPJa9W > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Trond Norén Isaksen"]`
- `#wgMa51 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#wgMa51 > .teaser-link > .container`
- `#Gyz4VJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Gyz4VJ > .teaser-link > .container`
- `#\31 MgmnJ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgmnJ > .teaser-link > .container`
- `#xm1q2l > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#xm1q2l > .teaser-link > .container > .information`
- `#xm1q2l > .teaser-link > .container > .illustration-container > .text`
- `#xm1q2l > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Maryam Iqbal Tahir"]`
- `#lw7og3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw7og3 > .teaser-link > .container`
- `#\36 3p2JO > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\36 3p2JO > .teaser-link > .teaser-image-wrapper > .series-header`
- `#\36 3p2JO > .teaser-link > .container`
- `.fullwidth.teaser-wrapper:nth-child(48)`
- `#kw49jj > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#kw49jj > .teaser-link > .container`
- `#lw7v6k > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#lw7v6k > .teaser-link > .container > .information`
- `#lw7v6k > .teaser-link > .container > .illustration-container > .text`
- `#lw7v6k > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Frank Rossavik"]`
- `img[alt="Historiske tech-profiler"]`
- `#rP01Ow > .teaser-link > .container`
- `#\33 MlMRq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\33 MlMRq > .teaser-link > .container`
- `#QMnvyP > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#QMnvyP > .teaser-link > .container`
- `#EydPej > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#EydPej > .teaser-link > .container > .information`
- `#EydPej > .teaser-link > .container > .illustration-container > .text`
- `#EydPej > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Christina Pletten"]`
- `#gwVoL9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#gwVoL9 > .teaser-link > .container`
- `#jQ8GLb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#jQ8GLb > .teaser-link > .container`
- `#zAveOb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAveOb > .teaser-link > .container`
- `#ny5dJQ > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5dJQ > .teaser-link > .container`
- `#dRo8bo > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRo8bo > .teaser-link > .container`
- `#\32 5R2ky > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\32 5R2ky > .teaser-link > .container`
- `#W09rok > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#W09rok > .teaser-link > .container`
- `#\37 3Xrk9 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\37 3Xrk9 > .teaser-link > .container > .information`
- `#\37 3Xrk9 > .teaser-link > .container > h2`
- `#\37 3Xrk9 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ingeborg Moe"]`
- `#zAWByb > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#zAWByb > .teaser-link > .container > .information`
- `#zAWByb > .teaser-link > .container > h2`
- `#zAWByb > .teaser-link > .container > .byline > div:nth-child(1)`
- `#zAWByb > .teaser-link > .container > .byline > .author-image-wrapper > .author-image[width="100"][height="100"]`
- `#Av6AG3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av6AG3 > .teaser-link > .container`
- `#dRoWjq > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#dRoWjq > .teaser-link > .container > .information`
- `#dRoWjq > .teaser-link > .container > h2`
- `#dRoWjq > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Ingrid Vik"]`
- `#\38 q3oKW > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\38 q3oKW > .teaser-link > .container`
- `#\34 B61bE > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\34 B61bE > .teaser-link > .container`
- `#\31 MgLyG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgLyG > .teaser-link > .container`
- `#bm3wx3 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#bm3wx3 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#bm3wx3 > .teaser-link > .container`
- `#EydpwG > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#EydpwG > .teaser-link > .container`
- `#OoLM1E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#OoLM1E > .teaser-link > .container`
- `#pPJx8o > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPJx8o > .teaser-link > .container`
- `#Av4K5x > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#Av4K5x > .teaser-link > .container`
- `#\31 MgAxe > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#\31 MgAxe > .teaser-link > .container`
- `#pPJq3X > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#pPJq3X > .teaser-link > .container`
- `#GyzwV6 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#GyzwV6 > .teaser-link > .container`
- `#ny5EVL > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#ny5EVL > .teaser-link > .container`
- `#KMQJ3E > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#KMQJ3E > .teaser-link > .container`
- `#o3jrqB > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#o3jrqB > .teaser-link > .container`
- `img[alt="Logikken henger ikke på greip"]`
- `#JbK42m > .teaser-link > .container > .information`
- `#JbK42m > .teaser-link > .container > .illustration-container > .text`
- `#JbK42m > .teaser-link > .container > .illustration-container > .illustration-byline-info`
- `img[alt="bilde av Kjetil B. Alstadheim"]`
- `#vgvjL4 > .teaser-link > .teaser-image-wrapper > .teaser-image.b-lazy[decoding="async"]`
- `#vgvjL4 > .teaser-link > .teaser-image-wrapper > .series-header`
- `#vgvjL4 > .teaser-link > .container > .information`
- `#vgvjL4 > .teaser-link > .container > h2`
- `#vgvjL4 > .teaser-link > .container > .byline > div:nth-child(1)`
- `img[alt="bilde av Pål Vegard Hagesæther"]`
